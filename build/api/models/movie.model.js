import mongoose from "mongoose";
var movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String },
    year: { type: Number },
    genre: { type: String },
});
var Movie = mongoose.model("movie", movieSchema);
export default Movie;
