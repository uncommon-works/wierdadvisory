"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormData = z.infer<typeof formSchema>

export async function sendEmail(data: FormData) {
  try {
    const result = formSchema.safeParse(data)

    if (!result.success) {
      return { error: result.error.errors[0].message }
    }

    await resend.emails.send({
      from: "Contact Form <no-reply@wierdadvisory.com>",
      to: "me@troyhancock.com",
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
Name: ${data.name} ${data.surname}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
      `,
    })

    return { success: true }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message)
    } else {
      console.error("Unknown error sending email:", error)
    }
    return { error: "Failed to send message. Please try again." }
  }
}
