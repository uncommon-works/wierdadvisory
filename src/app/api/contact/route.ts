import { NextResponse } from "next/server";
import { sendEmail } from "@/actions/email";
import { formSchema } from "@/lib/validation";

export async function POST(req: Request) {
  console.log("Received request:", req.method, req.headers.get("content-type"));

  try {
    const data = await req.json();
    console.log("Parsed data:", data);

    const result = formSchema.safeParse(data);
    if (!result.success) {
      console.log("Validation failed:", result.error.errors);
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const response = await sendEmail(data);
    console.log("Email response:", response);

    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
