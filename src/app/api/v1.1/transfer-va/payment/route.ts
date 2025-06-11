import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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