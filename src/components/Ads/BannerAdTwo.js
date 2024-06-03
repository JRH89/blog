import React, { useEffect } from 'react'

const BannerAdTwo = () => {
	useEffect(() => {
		// Load the adsbygoogle script
		const script = document.createElement('script')
		script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
		script.async = true
		script.setAttribute('data-ad-client', 'ca-pub-9106810782791939')
		document.head.appendChild(script);

		// Push the ad when the component mounts
		(window.adsbygoogle = window.adsbygoogle || []).push({})

		// Clean up script on component unmount
		return () => {
			document.head.removeChild(script)
		}
	}, [])

	return (
		<ins className="adsbygoogle"
			style={{ display: 'inline-block', width: '728px', height: '90px' }}
			data-ad-client="ca-pub-9106810782791939"
			data-ad-slot="8899916620"></ins>
	)
}

export default BannerAdTwo
