import mongoose from "mongoose";
var cinemaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: [
        { type: mongoose.Schema.Types.ObjectId, ref: "movie", required: true },
    ],
}, {
    timestamps: true,
});
var Cinema = mongoose.model("cinema", cinemaSchema);
export default Cinema;
