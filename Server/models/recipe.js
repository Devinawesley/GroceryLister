import mongoose from 'mongoose'
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Object,
        required: true
    },
    userid: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Recipe = mongoose.model('Recipe', recipeSchema)
export default Recipe
