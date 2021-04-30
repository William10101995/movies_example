import { RequestHandler } from "express";
import moviesClass from "../service/service";
import Movie from "../models/movies";

const instaceMovie = new moviesClass();
//Obtener Peliculas
export const getMovies: RequestHandler = async (req, res) => {

};

//Crear una nueva Pelicula
export const createMovie: RequestHandler = async (req, res) => {
  const newMovie = new Movie(req.body);
  const movie = await instaceMovie.createMovie(newMovie);
  res.status(200).json(movie);
};

//Borrar una pelicula
export const deleteMovie: RequestHandler = async (req, res) => {
  const idMovie = req.params;
  const deleteMovie = await instaceMovie.deleteMovie(idMovie);
  res.status(200).json(deleteMovie);
};

//Actualizar una pelicula
export const updateMovie: RequestHandler = async (req, res) => {
  const idMovie = req.params;
  const paramsUpadate = req.body;
  const MovieUpdate = await instaceMovie.updateMovie(idMovie, paramsUpadate);
  res.status(200).json(MovieUpdate);
};
