import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Item = new Schema(
    {
        title: { type: String, required: true },
        listId: { type: ObjectId, required: true },
        creatorEmail: { type: String, required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Item;