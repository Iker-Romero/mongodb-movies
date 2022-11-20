import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const Mongo_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(Mongo_URI);
    const { host, name } = db.connection;
    console.log(
      `Conectando a la base de datos (${name}) en el host: ${host} 🚀`
    );
  } catch (error) {
    console.error(`No se ha podido conectar a la base de datos ❌`, error);
  }
};

export default connect;
