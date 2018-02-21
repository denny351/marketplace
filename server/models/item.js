const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		price: {
			type: String,
			default: true
		},
		// image: {
		// 	data: Buffer,
		// 	type: String,
		// 	required: 'n/a'
		// },
		owner: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			},
			username: String
		}
		// comments: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: 'Comment'
		// 	}
		// ]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
