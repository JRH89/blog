import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		min: 4
	},
	desc: {
		type: String,
		required: true,
		min: 6
	},
	imageUrl: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		enum: [
			'Software',
			'Games',
			'Jewelry & Gems',
			'Nature',
			'Fishing',
		]
	},
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",	
	},
	likes: {
		type: mongoose.Scehma.Types.ObjectId,
		ref: "user"
	}
}, { timestamps: true })

export default mongoos?.models?.Blog || mongoose.model("Blog", BlogSchema)