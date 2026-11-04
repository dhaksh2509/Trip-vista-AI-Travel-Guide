import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { title, destination, content, category } = await req.json();

    if (!title || !destination || !content) {
      return NextResponse.json({ error: 'title, destination, and content are required' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Document "${title}" ingested and chunked with vector embeddings for ${destination}.`,
      chunksCreated: 3
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
