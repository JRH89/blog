'use client'
import React, { useState } from 'react'
import classes from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import person from './../../../public/person.png'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleShowDropdown = () => setShowDropdown(prev => true)

  const handleHideDropdown = () => setShowDropdown(prev => false)

  const loggedIn = true
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <h2 className={classes.left}>
              <Link href="/">Blog</Link>
            </h2>
            <ul className={classes.right}>
                {
                loggedIn
                ? (
                <div>
                  <Image onClick={handleShowDropdown} src={person} width={45} height={45}/>
                  {showDropdown && (
                    <div className={classes.dropdown}>
                      <AiOutlineClose className={classes.closeIcon} onClick={handleHideDropdown} />
                      <button onClick={handleHideDropdown} className={classes.logout}>Logout</button>
                      <Link onClick={handleHideDropdown} href='/create-post' className={classes.create}>Create</Link>
                    </div>
                  )}
                </div>
                )
                : (<h2>fhjuarn</h2>)
                }
              </ul>
        </div>
    </div>
  )
}

export default Navbar