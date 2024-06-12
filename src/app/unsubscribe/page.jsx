'use client'
import { useEffect } from 'react'
import { db } from '../../../firebase' // Adjust the path as needed
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore'

// Function to unsubscribe user from the database
const unsubscribeUser = async () => {
	try {
		// Check if window object exists (client-side)
		if (typeof window !== 'undefined') {
			// Extract email from the URL using client-side JavaScript
			const url = window.location.href
			const email = url.split('=')[1] // Extract email after the '=' sign

			// Query the Firestore collection to find the document with the matching email
			const q = query(collection(db, 'blogEmails'), where('email', '==', email))
			const querySnapshot = await getDocs(q)

			// Loop through the matching documents (should be just one)
			querySnapshot.forEach(async (doc) => {
				// Update the document to mark the email as unsubscribed
				await updateDoc(doc.ref, {
					subscribed: false
				})
			})

			// Inform the user that they have been unsubscribed
			alert('You have been unsubscribed. You will no longer receive emails.')

			console.log('User unsubscribed successfully')
		}
	} catch (error) {
		console.error('Error unsubscribing:', error)
	}
}

// Next.js page component
const UnsubscribePage = () => {
	useEffect(() => {
		// Execute the unsubscribeUser function when the component mounts
		unsubscribeUser()
	}, []) // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className="h-full my-auto flex flex-col justify-center text-white px-24 text-justify min-h-screen h-full items-center font-bold">
      <p>
       You have successfully unsubscribed from my mailing list. I am sad to see you go, but fully respect your decision. Feel free to sign up again at any point in time. If this was a mistake, scroll down to the bottom of this page and re-subscribe!
      </p>
    <p className="font-extrabold text-right justify-end flex w-full">
      - Jared Hooker
    </p>
    </div>
    
   </>
  )
}

export default UnsubscribePage
