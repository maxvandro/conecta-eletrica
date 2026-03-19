import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { senha } = await req.json();

    if (senha === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false }, { status: 401 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}