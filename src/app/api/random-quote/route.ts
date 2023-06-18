import { NextRequest, NextResponse } from "next/server";
import getRandomQuote from "@/lib/getRandomQuote";

export async function GET(_: NextRequest) {
  return NextResponse.json(await getRandomQuote());
}
