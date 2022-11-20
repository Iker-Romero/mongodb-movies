import express from "express";
import {
  getCinema,
  getCinemas,
  postCinema,
  updateCinema,
  deleteCinema,
} from "../controllers/cinema.controller.js";

const CinemaRoutes = express.Router();

CinemaRoutes.get("/", getCinemas);
CinemaRoutes.get("/:id", getCinema);
CinemaRoutes.post("/", postCinema);
CinemaRoutes.patch("/:id", updateCinema);
CinemaRoutes.delete("/:id", deleteCinema);

export default CinemaRoutes;
