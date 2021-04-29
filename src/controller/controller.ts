import { RequestHandler } from "express";
import Movies from "../models/movies";

//Obtener Peliculas
export const getMovies: RequestHandler = async (req, res) => {
    res.send("Obteniendo Pelicula");
};

//Crear una nueva Pelicula
export const createMovie: RequestHandler = async (req, res) => {
    res.send("Creando Pelicula");
};

//Borrar una pelicula
export const deleteMovie: RequestHandler = async (req, res) => {
    res.send("Borrando Pelicula");
};

//Actualizar una pelicula
export const updateMovie: RequestHandler = (req, res) => {
  res.send("Actualizando Pelicula");
};

