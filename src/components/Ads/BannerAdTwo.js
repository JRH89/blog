'use client'

import React, { useEffect, useState } from 'react'

const BannerAdTwo = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Load the adsbygoogle script
		const script = document.createElement('script')
		script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
		script.async = true
		script.setAttribute('data-ad-client', 'ca-pub-9106810782791939')
		document.head.appendChild(script)

		// Push the ad when the script is loaded
		script.onload = () => {
			(window.adsbygoogle = window.adsbygoogle || []).push({})
		}

		// Handle scroll behavior
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		// Clean up script and scroll event listener on component unmount
		return () => {
			document.head.removeChild(script)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`fixed bottom-0 w-full flex justify-center bg-black/80 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
			<div className="w-full max-w-[728px] h-[90px] flex items-center justify-center">
				<div className="relative w-full h-0 pb-[12.36%]"> {/* Aspect ratio container */}
					<ins className="adsbygoogle absolute inset-0 w-full h-full"
						style={{ display: 'inline-block' }}
						data-ad-client="ca-pub-9106810782791939"
						data-ad-slot="8899916620"></ins>
				</div>
			</div>
		</div>
	)
}

export default BannerAdTwo
