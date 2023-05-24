"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import classes from './blog.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import {BsFillPencilFill} from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

const BlogDetails = () => {
	const [blogDetails, setBlogDetails] = useState("")
	const { data: session } = useSession()
	const [blogLikes, setBlogLikes] = useState(0)
	const [isLiked, setIsliked] = useState(false)
	
	useEffect(() => {
		async function fetchBlog() {
			const res = await fetch(`hhtp://localhost:3000/api/blog/${ctx.params.id}`, {cache: 'no-store'})
			const blog = await res.json()

			setBlogDetails(blog)
			setIsliked(blog.likes.includes(session?.user?._id))
			setBlogLikes(blog.likes.length)
			
		}
		session && fetchBlog()
	}, [session])

	const handleDelete = async () => {
		
	}

	return (
	<div className={classes.container}>
		<div className={classes.wrapper}>
			<Image src={blogDetails?.imageUrl} width={750} height={650} /> 
			<div className={classes.row}>
				<h3 className={classes.title}>{blogDetails?.title}</h3>
					{blogDetails?.authorId?._id.toString() === session?.user?._id.toString()
						? (
							<div className={classes.controls}>
								<Link className={classes.editButton} to={`/blog/edit/${ctx.params.id}`}>
									Edit <BsFillPencilFill />
								</Link>
								<button onClick={handleDelete} className={classes.deleteButton}>
									Delete
									<AiFillDelete />
								</button>
							</div>
						)
						: (
							
						)
					}
			</div>
		</div>
	</div>
  	)
}

export default BlogDetails