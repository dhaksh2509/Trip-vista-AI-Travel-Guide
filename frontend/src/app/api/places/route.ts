import { NextRequest, NextResponse } from 'next/server';
import { findDestination } from '@/lib/data/destinations';
import { ALL_INDIA_DESTINATIONS, searchAllIndiaDestinations } from '@/lib/data/allIndiaCatalogue';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || searchParams.get('search');
  const destination = searchParams.get('destination');
  const getAll = searchParams.get('all') === 'true';
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? parseInt(limitParam, 10) : 25;

  try {
    // 1. Live search / autocomplete query
    if (query !== null && query !== undefined) {
      const results = searchAllIndiaDestinations(query, limit);
      return NextResponse.json({
        success: true,
        query,
        count: results.length,
        destinations: results.map(d => ({
          id: d.id,
          name: d.name,
          normalizedName: d.normalizedName,
          state: d.state,
          isUnionTerritory: d.isUnionTerritory,
          district: d.district,
          category: d.category,
          tagline: d.tagline,
          coordinates: d.coordinates,
          label: `${d.name} — ${d.state}`
        }))
      });
    }

    // 2. Return entire catalogue if requested
    if (getAll) {
      return NextResponse.json({
        success: true,
        count: ALL_INDIA_DESTINATIONS.length,
        destinations: ALL_INDIA_DESTINATIONS.map(d => ({
          id: d.id,
          name: d.name,
          normalizedName: d.normalizedName,
          state: d.state,
          isUnionTerritory: d.isUnionTerritory,
          district: d.district,
          category: d.category,
          tagline: d.tagline,
          coordinates: d.coordinates,
          label: `${d.name} — ${d.state}`
        }))
      });
    }

    // 3. Destination metadata lookup
    const targetDest = destination || 'Araku Valley';
    const destMeta = findDestination(targetDest);

    return NextResponse.json({
      success: true,
      destination: destMeta.name,
      state: destMeta.state,
      tagline: destMeta.tagline,
      coordinates: destMeta.coordinates,
      description: destMeta.description,
      bestMonths: destMeta.bestMonths,
      idealDays: destMeta.idealDays,
      attractions: destMeta.attractions,
      meals: destMeta.meals
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
