-- ====================================================================
-- TripVista — Your AI Travel Guide
-- PostgreSQL + pgvector Database Schema
-- Production Architecture & Regional Embeddings
-- ====================================================================

-- 1. Enable pgvector extension for high-performance semantic search
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    preferred_currency VARCHAR(10) DEFAULT 'INR',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Destinations Table
CREATE TABLE IF NOT EXISTS destinations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'India',
    description TEXT NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    best_time_to_visit VARCHAR(255),
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS destinations_name_idx ON destinations(name);
CREATE INDEX IF NOT EXISTS destinations_state_idx ON destinations(state);

-- 4. Documents Knowledge Base (for RAG system)
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'History', 'Food', 'Culture', 'Tips', 'Attractions'
    source_url VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Document Chunks with Vector Embeddings (768-dimensional embeddings for Gemini/Text-Embedding-004)
CREATE TABLE IF NOT EXISTS document_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    destination_name VARCHAR(255) NOT NULL,
    section_title VARCHAR(255) NOT NULL,
    chunk_content TEXT NOT NULL,
    chunk_index INT NOT NULL,
    embedding vector(768), -- pgvector cosine similarity
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS places_dest_name_idx ON places(destination_name);

-- Index for blazing-fast vector cosine similarity search
CREATE INDEX IF NOT EXISTS document_chunks_embedding_idx 
ON document_chunks 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- 6. Trips Table
CREATE TABLE IF NOT EXISTS trips (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    destination_name VARCHAR(255) NOT NULL,
    duration_days INT NOT NULL,
    travelers_count INT NOT NULL,
    budget_inr DECIMAL(12, 2) NOT NULL,
    travel_type VARCHAR(50) NOT NULL, -- 'Solo', 'Couple', 'Family', 'Friends'
    interests TEXT[] NOT NULL,
    travel_pace VARCHAR(50) NOT NULL, -- 'Relaxed', 'Moderate', 'Fast-Paced'
    starting_location VARCHAR(255),
    transport_preference VARCHAR(100),
    total_estimated_cost DECIMAL(12, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS trips_dest_name_idx ON trips(destination_name);
CREATE INDEX IF NOT EXISTS trips_starting_loc_idx ON trips(starting_location);

-- 7. Itinerary Days Table
CREATE TABLE IF NOT EXISTS itinerary_days (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
    day_number INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    morning_activity JSONB NOT NULL,
    afternoon_activity JSONB NOT NULL,
    evening_activity JSONB NOT NULL,
    meals JSONB NOT NULL DEFAULT '[]'::jsonb,
    estimated_cost_inr DECIMAL(10, 2) NOT NULL,
    travel_distance_km DECIMAL(6, 2) NOT NULL,
    travel_time_minutes INT NOT NULL,
    weather_advice TEXT,
    UNIQUE(trip_id, day_number)
);

-- 8. Places & Attractions Table
CREATE TABLE IF NOT EXISTS places (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    destination_name VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    visit_duration_minutes INT NOT NULL,
    estimated_cost_inr DECIMAL(10, 2) NOT NULL DEFAULT 0,
    is_outdoor BOOLEAN DEFAULT TRUE,
    weather_backup TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS places_dest_name_idx ON places(destination_name);

-- 9. Chat Messages Table
CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
    sender VARCHAR(20) NOT NULL, -- 'user', 'assistant', 'system'
    message TEXT NOT NULL,
    agent_used VARCHAR(100),
    rag_sources JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. User Notes Table
CREATE TABLE IF NOT EXISTS user_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sample Semantic Similarity Search Function using pgvector:
-- SELECT chunk_content, section_title, 1 - (embedding <=> query_embedding) AS similarity
-- FROM document_chunks
-- WHERE destination_name = 'Araku Valley'
-- ORDER BY embedding <=> query_embedding
-- LIMIT 5;
