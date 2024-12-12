import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async (req) => {
    console.log(req.auth)
    return NextResponse.json({ message: "Hello world" })
})
