"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import classes from './blog.module.css'

const BlogDetails = () => {
	const [blogDetails, setBlogDetails] = useState("")
	
	useEffect(() => {
		async function fetchBlog() {
			const res = await fetch(`hhtp://localhost:3000/api/blog/${ctx.params.id}`, {cache: 'no-store'})
		}
	}, [])

	return (
	<div className={classes.container}>
		<div className={classes.wrapper}>
			<Image src={blogDetails?.imageUrl} /> 
		</div>
	</div>
  	)
}

export default BlogDetails