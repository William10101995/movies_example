import Movies from "../models/movies";

export default class UserService {
  async readMovie(){
    try {
      const movies = Movies.find();
      return movies;
    } catch (error) {
      return error;
    }
  }
  async createMovie(pelicula: any) {
    try {
      const movie = await pelicula.save();
      return movie;
    } catch (error) {
      return error;
    }
  }
  async deleteMovie(id: any) {
    try {
      const deleteMov = await Movies.findByIdAndDelete(id);
      return deleteMov;
    } catch (error) {
      return error;
    }
  }
  async updateMovie(id: any, paramsUpdate: any) {
    try {
      const movieUpdate = await Movies.findByIdAndUpdate(id, paramsUpdate, {
        new: true,
      });
      return movieUpdate;
    } catch (error) {
      return error;
    }
  }
}
