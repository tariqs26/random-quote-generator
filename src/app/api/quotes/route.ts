import { NextRequest, NextResponse } from "next/server";
import getQuotes from "@/lib/getQuotes";

export async function GET(_: NextRequest) {
  return NextResponse.json(await getQuotes());
}
