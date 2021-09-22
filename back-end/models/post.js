const mongoose  = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const post = mongoose.Schema ({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        numOfLikes: {
            type: Number,
            deafault: 0,
        },
        isFeatured: {
            type: Boolean,
            deafault: false,
        },
        category: {
            type: ObjectId,
            ref: "Category",
        },
    }, { timestamps: true }
    );

    post.index({"$**" : "text"});

mongoose.model("Post", post);