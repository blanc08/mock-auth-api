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
            {
                status: 400,
                headers: {
                    'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            }
        );
}