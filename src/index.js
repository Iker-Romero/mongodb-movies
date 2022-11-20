import express from "express";
import cors from "cors";
import connect from "./utils/database/db.js";
import MovieRoutes from "./api/routes/movie.routes.js";
import CinemaRoutes from "./api/routes/cinema.routes.js";

connect();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(cors());

server.use("/movies", MovieRoutes);
server.use("/cinemas", CinemaRoutes);

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

server.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

server.listen(process.env.PORT, () => console.log("Listen"));
