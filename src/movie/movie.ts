import { Schema, model } from "mongoose";

interface MovieI {
  title: string;
  director?: string;
  year?: number;
  genre?: string;
}

const movieSchema = new Schema<MovieI>(
  {
    title: { type: String, required: true },
    director: { type: String },
    year: { type: Number },
    genre: { type: String },
  },
  { timestamps: true }
);

const Movie = model<MovieI>("Movie", movieSchema);

export default Movie;
