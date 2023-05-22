'use client'

import React, { useState } from 'react'
import classes from './createPage.module.css'
import { AiOutlineFileImage } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'


const CreateBlog = () => {
	const CLOUD_NAME = 'dwfqkrwnp'
	const UPLOAD_PRESET = 'my_blog'


	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [category, setCategory] = useState('Software')
	const [photo, setPhoto] = useState('')

	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === 'loading') {
		return <p>Loading...</p>
	}

	if (status === 'unauthenticated') {
		return <p className={classes.accessDenied}>Beat it, nerd!</p>
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!photo || !title || !category || !desc) {
			Tapestry.error("All fields are required!")
			return
		}

		try {
			const imageUrl = await uploadImage()

			const res = await fetch(`http://localhost:3000/api/blog`, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${session?.user?.accessToken}`
				},
				method: 'POST',
				body: JSON.stringify({title,desc,category,imageUrl,authorId: session?.user?._id})
			})

			if (!res.ok) {
				throw new Error("Error occured")
			}
			const blog = await res.json()

			router.push(`/blog/${blog?._id}`)
		} catch (error) {
			console.log(error)
		}
	}

	const uploadImage = async () => {
		if (!photo) return
		
		const formData = new FormData()

		formData.append("file", photo)
		formData.append("upload_preset", UPLOAD_PRESET)

		try {
			const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
				method: "POST",
				body: formData
			})

			const data = await res.json()

			const imageUrl = data['secure_url']
			
			return imageUrl
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<h2>Create Post</h2>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
					<textarea placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
					<select value={category} onChange={(e) => setCategory(e.target.value)}>
						<option value="Software">Software</option>
						<option value="Games">Games</option>
						<option value="Jewelry & Gems">Jewelry & Gems</option>
						<option value="Nature">Nature</option>
						<option value="Fishing">Fishing</option>
					</select>
					<label htmlFor='image'>
						Upload Image <AiOutlineFileImage />
					</label>
					<input id='image' type='file' style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.value.files[0])}/>
					<button className={classes.createBlog} >Create Post</button>
				</form>
			</div>
			<ToastContainer />
		</div>
  	)
}

export default CreateBlog