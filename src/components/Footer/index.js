"use client"

import React, { useState } from "react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons"
import siteMetadata from "@/src/utils/siteMetaData"
import { db } from "@/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"

async function sendEmail(data) {
  try {
    const response = await fetch("/api/mailing-list-welcome", {
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

const Footer = () => {

  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }


  const handleSubmit = async (e) => {

    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email) {
      setError("Email is required.");
      return;
    }

    const data = {
      email: email,
    };

    try {
      const docRef = await addDoc(collection(db, "blogEmails"), {
        email: email,
        timestamp: Timestamp.fromDate(new Date()),
        subscribed: true,
      });

      const emailSent = await sendEmail(data);

      if (emailSent) {
        setSuccess(true);
        setEmail("");
      } else {
        setError("Error occurred while sending email.");
      }
    } catch (error) {
      setError("Error adding email. Please try again.");
    }
  };

  return (
    <div className="mb-[96px]">
      <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
        <h2 className="mt-6 text-lg text-white font-bold">Join my mailing list...</h2>
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
          <input
            type="submit"
            className="bg-dark hover:scale-95 duration-200 text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
          />
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-white font-bold">Email submitted successfully!</p>}

        <div className="w-full mt-8 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-center">&copy;2023 Hooker Hill Studios. All rights reserved.</span>
          <div className="text-center">
            Powered by{" "}
            <a href="https://www.hookerhillstudios.com" className="underline" target="_blank">
              Hooker Hill Studios
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
