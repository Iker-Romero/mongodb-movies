import Movie from "../models/movie.model.ts";

export const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

export const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

export const postMovie = async (req, res, next) => {
  try {
    const movie = new Movie(req.body);
    const movieInDB = await movie.save();
    return res.status(201).json(movieInDB);
  } catch (errror) {
    return next(error);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = new Movie(req.body);
    movie._id = id;
    const updateMovieInDB = await Movie.findByIdAndUpdate(id, movie);
    return res.status(200).json(updateMovieInDB);
  } catch (error) {
    return next(error);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};
