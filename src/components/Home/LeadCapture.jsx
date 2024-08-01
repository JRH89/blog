'use client'

import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import DOMPurify from 'dompurify';
import LottieAnimation from '../Contact/LottieAnimation';

function Popup() {

    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState(false);

    useEffect(() => {

        if (!localStorage.getItem('doNotShowPopupAgain')) {
            const popupTimer = setTimeout(() => {
                setShowPopup(true);
            }, 10000);

            return () => clearTimeout(popupTimer);
        } else {
            setShowPopup(false);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const sanitizedEmail = DOMPurify.sanitize(email);
            const docRef = await addDoc(collection(db, 'blogEmails'), {
                email: sanitizedEmail,
                timestamp: new Date(),
                subscribed: true,
            });

            localStorage.setItem('popupClosed', 'true');

            localStorage.setItem('doNotShowPopupAgain', 'true');

            setSubmitted(true);

            const response = await fetch("/api/otherEmail", {
                method: "POST",
                body: JSON.stringify({ recipients: [email] }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log('Additional email sent successfully.');
            } else {
                console.error('Failed to send additional email.');
            }

            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding lead or sending email: ', error);
        }
    };

    const handleClose = () => {
        setShowPopup(false);
        if (doNotShowAgain) {
            localStorage.setItem('doNotShowPopupAgain', 'true');
        }
    };

    const handleDoNotShowAgainChange = () => {
        setDoNotShowAgain(!doNotShowAgain);
    };

    if (!showPopup) {
        return null;
    }

    return (
        <div className="px-5 popup-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="popup max-w-sm w-full bg-white rounded overflow-hidden">
                <div className="popup-image mt-2 max-w-xs w-1/4 sm:w-1/3 mx-auto">
                    <LottieAnimation />
                </div>
                <div className="popup-content p-6 pt-2">
                    <h2 className="text-center text-lg font-semibold mb-4">Join the mailing list...</h2>
                    {submitted ? (
                        <div className="text-center text-green-600 font-semibold mb-4">Thank you for joining the list!</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                            <input className="rounded border bg-gray-100 p-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="flex justify-end pt-2">
                                <input
                                    id="doNotShowAgain"
                                    type="checkbox"
                                    checked={doNotShowAgain}
                                    onChange={handleDoNotShowAgainChange}
                                    className="text-gray-700 text-right mr-2 justify-end flex"
                                />
                                <label htmlFor="doNotShowAgain">Do not show again</label>
                            </div>
                            <div className="flex justify-between gap-2">
                                <button className="bg-emerald-600 text-white font-semibold w-full shadow-md shadow-black hover:shadow-lg hover:shadow-black rounded px-4 py-2  transition duration-200" type="submit">Submit</button>
                                <button className="bg-gray-300 text-gray-800 shadow-md shadow-black hover:shadow-lg hover:shadow-black font-semibold rounded px-4 py-2 hover:opacity-80 transition duration-200 w-full" onClick={handleClose}>Close</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Popup;
