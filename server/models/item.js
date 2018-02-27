const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
    },
    company: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
		description: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		// image: {
		// 	data: Buffer,
		// 	type: String,
		// 	required: 'n/a'
		// },
		ownerId: {
			type: String,
			required: true
		},
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
