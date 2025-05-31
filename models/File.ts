import mongoose, { model } from "mongoose";
import FileType from "../types/FileType";

const FileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    require: true,
  },
  fileData: {
    type: String,
    require: true,
  },
  fileType: {
    type: String,
    require: true,
  },
});

export default model<FileType>("File", FileSchema);
