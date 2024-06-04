"use client"
import React, { useState } from "react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons"
import Link from "next/link"
import siteMetadata from "@/src/utils/siteMetaData"
import { db } from "@/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha" // Import ReCAPTCHA

const Footer = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null)

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null) // Reset error state
    setSuccess(false) // Reset success state

    if (!email) {
      setError("Email is required.")
      return
    }

    if (!captchaValue) {
      setError("Please complete the reCAPTCHA.")
      return
    }

    try {
      // Add the email to the "blogEmails" collection in Firestore
      const docRef = await addDoc(collection(db, "blogEmails"), {
        email,
        timestamp: Timestamp.fromDate(new Date()), // Use Timestamp to store the current date and time
      })

      setSuccess(true)
      setEmail("")
      setCaptchaValue(null) // Reset captcha
    } catch (error) {
      setError("Error adding email. Please try again.")
    }
  }

  return (
    <div className="mb-[96px]">
      <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
        <h2 className="mt-6 text-lg">Join my mailing list...</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-2 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
          />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Use your reCAPTCHA site key
            onChange={handleCaptchaChange}
            className="mt-2 mb-2"
          />
          <input
            type="submit"
            className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
          />
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-white font-bold">Email submitted successfully!</p>}
        <div className="flex items-center mt-8">
          <a
            href={siteMetadata.linkedin}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.twitter}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.github}
            className="inline-block w-6 h-6 mr-4 fill-light"
            aria-label="Check my profile on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
          </a>
        </div>
        <div className="w-full mt-8 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-center">&copy;2023 Jared Hooker. All rights reserved.</span>
          <div className="text-center">
            Made by{" "}
            <a href="https://www.hookerhillstudios.com" className="underline" target="_blank">
              Jared Hooker
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
