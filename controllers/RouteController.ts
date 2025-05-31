import { RequestHandler } from "express";
import File from "../models/File";
import FileType from "../types/FileType";

export const getAllFile: RequestHandler = async (req, res, next) => {
  try {
    const file = await File.find();
    res.status(200).json(file);
  } catch (err) {
    res.status(409).json(err);
  }
};
export const getFileByID: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const currentFile = await File.findById(id);
    if (currentFile) {
      res.status(200).json(currentFile);
    } else {
      res.status(409).json({ message: "No file matches this ID" });
    }
  } catch (err) {
    res.status(409).json(err);
  }
};
export const uploadFile: RequestHandler<
  unknown,
  unknown,
  FileType,
  unknown
> = async (req, res, next) => {
  const { fileData, fileName, fileType } = req.body;

  try {
    if (!fileData || !fileName || !fileType) {
      throw new Error("Missing Data in the File");
    }

    const newFile: FileType = {
      fileName,
      fileData,
      fileType,
    };

    const postedFile = await File.create(newFile);

    if (postedFile) {
      res.status(201).json(postedFile);
    } else {
      res.status(409).json({ message: "Unable to post the File" });
    }
  } catch (err) {
    res.status(409).json(err);
  }
};
