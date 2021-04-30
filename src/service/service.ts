import Movies from "../models/movies";

export default class UserService {
  async createMovie(pelicula: any) {
    const movie = await pelicula.save();
    try {
      return movie;
    } catch (error) {
      return error;
    }
  }
  async deleteMovie(id: any) {
    const deleteMov = await Movies.findByIdAndDelete(id);
    try {
      return deleteMov;
    } catch (error) {
      return error;
    }
  }
  async updateMovie(id: any, paramsUpdate: any) {
    const movieUpdate = await Movies.findByIdAndUpdate(id, paramsUpdate, {
      new: true,
    });
    try {
      return movieUpdate;
    } catch (error) {
      return error;
    }
  }
}
