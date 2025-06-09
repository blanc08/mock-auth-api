import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse.json({
        responseCode: "2002500",
        responseMessage: "Success",
        virtualAccountData: {
            partnerServiceId: "   19008",
            customerNo: "00000000000000000001",
            virtualAccountNo: "  19008000000000000000000001",
            virtualAccountName: "Customer Name",
            virtualAccountEmail: "customer.email@mail.com",
            paymentRequestId: "12839218738127830",
            paidAmount: {
                value: "11500.00",
                currency: "IDR"
            },
            virtualAccountTrxType: "C",
            additionalInfo: {
                channel: "VIRTUAL_ACCOUNT_BCA",
                virtualAccountConfig: {
                    minAmount: "10000.00",
                    maxAmount: "5000000.00"
                }
            }
        }
    });
}