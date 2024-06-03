'use client'

import React, { useEffect, useState } from "react"
import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from "../components/Home/HomeCoverSection"
import FeaturedPosts from "../components/Home/FeaturedPosts"
import RecentPosts from "../components/Home/RecentPosts"
import BannerAdTwo from "../components/Ads/BannerAdTwo"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <div className={`w-full h-[90px] fixed bottom-0 bg-black/80 rounded-lg px-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <BannerAdTwo />
      </div>
    </main>
  )
}
