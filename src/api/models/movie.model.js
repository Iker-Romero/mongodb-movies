"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Movie = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1["default"].Schema({
    title: { type: String, required: true },
    director: { type: String },
    year: { type: Number },
    genre: { type: String }
});
exports.Movie = mongoose_1["default"].model("movie", movieSchema);
// export default Movie;
