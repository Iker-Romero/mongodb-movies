import Cinema from "../models/cinema.model.ts";

export const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
};

export const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = await Cinema.findById(id).populate("movies");
    return res.status(200).json(cinema);
  } catch (error) {
    return next(error);
  }
};

export const postCinema = async (req, res, next) => {
  try {
    const cinema = await new Cinema(req.body);
    const cinemaInDB = await cinema.save();
    return res.status(201).json(cinemaInDB);
  } catch (error) {
    return next(error);
  }
};

export const updateCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = await new Cinema(req.body);
    const cinemaUpdate = await Cinema.findByIdAndUpdate(id, cinema);
    return res.status(200).json(cinemaUpdate);
  } catch (error) {
    return next(error);
  }
};

export const deleteCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = Cinema.findByIdAndDelete(id);
    return res.status(200).json(cinema);
  } catch (error) {
    return next(error);
  }
};
