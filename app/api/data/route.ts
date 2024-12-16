import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async (req) => {
    return NextResponse.json({ message: "Hello world" })
})
