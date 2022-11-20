import express from "express";
import {
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

const MovieRoutes = express.Router();

MovieRoutes.get("/", getMovies);
MovieRoutes.get("/:id", getMovie);
MovieRoutes.post("/", postMovie);
MovieRoutes.patch("/:id", updateMovie);
MovieRoutes.delete("/:id", deleteMovie);

export default MovieRoutes;
