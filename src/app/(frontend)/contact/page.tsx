import React from 'react'

import Head1 from "@/components/layouts/contact/h1"
import { ContactForm } from "@/components/forms/contact-form"

export default function page() {
  return (
    <div className="relative">
      <Head1 />
      <ContactForm />
    </div>
  )
}
