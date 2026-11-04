import { NextRequest, NextResponse } from 'next/server';
import { assistantAgent } from '@/lib/ai/assistantAgent';

export async function POST(req: NextRequest) {
  try {
    const { message, currentTrip, isOnline } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message text is required' }, { status: 400 });
    }

    const response = await assistantAgent.processMessage(
      message,
      currentTrip || null,
      isOnline !== false
    );

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat query', details: error.message },
      { status: 500 }
    );
  }
}
