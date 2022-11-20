import mongoose from "mongoose";

export interface MovieI {
  title: string;
  director?: string;
  year?: number;
  genre?: string;
}

const movieSchema = new mongoose.Schema<MovieI>({
  title: { type: String, required: true },
  director: { type: String },
  year: { type: Number },
  genre: { type: String },
});

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
