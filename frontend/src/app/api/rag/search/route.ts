import { NextRequest, NextResponse } from 'next/server';
import { vectorStore } from '@/lib/rag/vectorStore';

export async function POST(req: NextRequest) {
  try {
    const { query, destination, topK } = await req.json();

    if (!query) {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }

    const results = vectorStore.search(query, destination, topK || 4);

    return NextResponse.json({
      success: true,
      query,
      destination,
      count: results.length,
      results
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
