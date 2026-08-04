import { Resend } from "resend";
import { NextResponse } from "next/server";
import LeadNotification from "@/emails/LeadNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      requestType,
      preferredDate,
      message,
    } = body;

    const formattedDate = preferredDate
      ? new Date(preferredDate).toLocaleDateString("en-US")
      : "Not specified";

    const { data, error } = await resend.emails.send({
      from: "Website Leads <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Service Request - ${name}`,
      react: LeadNotification({
        name,
        email,
        phone,
        service,
        requestType,
        preferredDate: formattedDate,
        message,
      }),
    });

    if (error) {
      console.error("[Resend API Error]:", error);

      return NextResponse.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        }
      );
    }

    console.log("[Resend Success]:", data);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("[Server Error]:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}