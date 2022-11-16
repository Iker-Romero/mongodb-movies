import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

import movies from "../movie/movie.seed";

import Movie from "../movie/movie";

const mongoURI = process.env.MONGO_URL;

const connect = async () => {
  try {
    const dbConnect =
      typeof mongoURI === "string" && (await mongoose.connect(mongoURI));

    const moviesSeed = await movies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesSeed);

    // console.log(dbConnect);
    const { name, host } = dbConnect.connection; // Mongoose Bug with Typescript
    console.log(`Conectado a la DB: ${name} em el host: ${host}`);
  } catch (error) {
    console.log("No se ha podido conectar a la DB ❌", error);
  }
};

export default connect;
