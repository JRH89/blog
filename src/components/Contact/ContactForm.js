"use client"

import React, { useState } from 'react'

async function sendEmail(data) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("Email sent successfully.")
      return true
    } else {
      console.log("Error occurred while sending email.")
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default function ContactForm() {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setIsLoading(true)

    const emailData = {
      subject: `New project inquiry from ${formData.name}`,
      message: `Details: ${formData.details}\nPhone: ${formData.phone}`,
      email: formData.email,
    }

    const emailSent = await sendEmail(emailData)
    setIsLoading(false)
    setShowMessage(emailSent)

    if (emailSent) {
      setFormData({ name: '', email: '', phone: '', details: '' })
      setSuccess(true)
    } else {
      setError("Failed to send email. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-2 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        className="border rounded-md  w-full focus:ring-0 p-2 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        required
        maxLength={80}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="border rounded-md  w-full focus:ring-0 p-2 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border rounded-md  w-full focus:ring-0 p-2 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        required
      />
      <textarea
        name="details"
        placeholder="message"
        rows={3}
        value={formData.details}
        onChange={handleChange}
        className="w-full border rounded-md  mx-0 focus:ring-0 placeholder:text-lg border-b border-gray p-2 focus:border-gray bg-transparent"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex mx-auto items-center flex-col'>
        <input
          type="submit"
          value="send"
          className="mt-1 font-medium inline-block capitalize text-lg sm:text-xl py-2 hover:scale-105 transition-all ease duration-200 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
        />
      </div>
      {isLoading && <p>Sending email...</p>}
      {showMessage && <p>Email sent successfully!</p>}
    </form>
  )
}
