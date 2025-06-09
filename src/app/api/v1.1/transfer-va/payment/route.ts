import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse
        .json(
            {
                responseCode: "4042512",
                responseMessage: "Bill not found",
            },
            { status: 400 }
        );
}