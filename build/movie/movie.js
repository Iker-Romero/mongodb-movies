"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var movieSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    director: { type: String },
    year: { type: Number },
    genre: { type: String },
}, { timestamps: true });
var Movie = (0, mongoose_1.model)("Movie", movieSchema);
exports.default = Movie;
