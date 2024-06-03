// AdComponent.js
'use client'
import React, { useEffect } from 'react'

const BannerAdOne = () => {
	useEffect(() => {
		// Load the adsbygoogle script
		const script = document.createElement('script')
		script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
		script.async = true
		script.setAttribute('data-ad-client', 'ca-pub-9106810782791939')
		document.head.appendChild(script)

		// Clean up script on component unmount
		return () => {
			document.head.removeChild(script)
		}
	}, [])

	useEffect(() => {
		// Push ad to display
		if (window.adsbygoogle) {
			window.adsbygoogle.push({})
		}
	}, [])

	return (
		<ins
			className="adsbygoogle"
			style={{ display: 'block' }}
			data-ad-client="ca-pub-9106810782791939"
			data-ad-slot="2762003822"
			data-ad-format="auto"
			data-full-width-responsive="true">
		</ins>
	)
}

export default BannerAdOne
