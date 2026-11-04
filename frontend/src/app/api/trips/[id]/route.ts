import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  return NextResponse.json({
    message: `Trip details endpoint for ${id}. In client, trips are retrieved from persistence layer.`,
    tripId: id
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    return NextResponse.json({ success: true, updatedTrip: body });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
