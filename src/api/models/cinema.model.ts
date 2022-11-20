import mongoose from "mongoose";
import { MovieI } from "./movie.model";

interface CinemaI {
  name: string;
  location: string;
  movies?: MovieI[] | string[];
}

const cinemaSchema = new mongoose.Schema<CinemaI>(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model("cinema", cinemaSchema);

export default Cinema;
