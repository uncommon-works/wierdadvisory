"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error("Error", { description: result.error || "Failed to send message." })
        return
      }

      toast.success("Success", { description: "Your message has been sent successfully." })
      form.reset()
    } catch (error) {
      console.error("Error while sending form:", error)
      toast.error("Error", { description: "Something went wrong. Please try again." })
    }
     finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="border-0 border-b border-input rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                  Surname
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your surname"
                    {...field}
                    className="border-0 border-b border-input rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  {...field}
                  className="border-0 border-b border-input rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here"
                  className="min-h-[200px] border rounded-none resize-none focus-visible:ring-0 focus-visible:border-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-black hover:bg-[#2a2f46] text-white rounded-full px-10 py-6"
        >
          {isLoading ? "SENDING..." : "SEND MESSAGE"}
        </Button>
      </form>
    </Form>
  )
}
