import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  Title: String;
  Director: String;
  Category: String;
  Description: String;
  Rating: String;
}
//Schema MOVIES
//trim clean white
const moviesSchema = new Schema({
  Title: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  Director: {
    type: String,
    require: true,
    trim: true,
  },
  Category: {
    type: String,
    require: true,
    trim: true,
  },
  Description: {
    type: String,
    trim: true,
  },
  Rating: {
    type: String,
    trim: true,
  },
});

export default model<IUser>("Movies", moviesSchema);
