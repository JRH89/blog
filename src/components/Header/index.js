"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon, YouTubeIcon } from "../Icons"
import siteMetadata from "@/src/utils/siteMetaData"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { useState } from "react"
import { cx } from "@/src/utils"

const Header = () => {

  const [mode, setMode] = useThemeSwitch()
  const [click, setClick] = useState(false)

  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setClick(!click)
  }

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full fixed z-50  bg-neutral-50 p-3 px-5 flex items-center justify-between">
      <Link href={"https://www.hookerhillstudios.com"}>
        <img
          src="/images/Logo-Grass-2.png"
          alt="Logo"
          className="h-10 hover:scale-95 duration-300 sm:h-12 lg:h-14 rounded-full shadow-black shadow-md"
        />
      </Link>
      <button className="inline-block sm:hidden z-50 mr-3" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray-800 rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}

            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray-800 rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-gray-800 rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>
        </div>
      </button>
      <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? ".50rem" : "-5rem"
        }}

      >
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark")}
          aria-label="theme-switcher"
        >
          {
            mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
          }
        </button>
      </nav>
      <nav className="justify-evenly text-xl sm:text-2xl w-full flex-1 py-2 px-8  font-medium capitalize  items-center hidden sm:flex
         bg-neutral-50 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <Link href="https://www.paypal.com/ncp/payment/KUWG9HFVBYWHL" className="mx-2">Donate</Link>
      </nav>
      <nav className="hidden sm:flex">
        <div className="flex justify-end">
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx("w-6 h-6 sm:w-10 sm:h-10 ease ml-2 flex items-center justify-end w-full border rounded-full p-1 ", mode === "light" ? "bg-dark text-light" :
              "bg-light text-dark")}
            aria-label="theme-switcher"
          >
            {
              mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
            }
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header