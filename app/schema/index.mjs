import mongoose from "../config/mongodb.mjs";
const Schema = mongoose.Schema;

export const DataDiriSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        requred: true
    },
    alamat: {
        type: String,
        required: true
    }
},{timestamps: {createdAt: 'created_at', updatedAt:'updated_at'}})


