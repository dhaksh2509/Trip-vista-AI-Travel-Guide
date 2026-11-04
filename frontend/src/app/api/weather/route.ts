import { NextRequest, NextResponse } from 'next/server';
import { weatherAgent } from '@/lib/ai/weatherAgent';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get('destination') || 'Araku Valley';
  const isOnline = searchParams.get('offline') !== 'true';

  try {
    const weather = await weatherAgent.execute(destination, isOnline);
    return NextResponse.json({ success: true, weather });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
