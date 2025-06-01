import express from "express";
import * as FilesControllers from "./controllers/RouteController";

const router = express.Router();

router.route("/allFile").get(FilesControllers.getAllFile);
router.route("/download/:id").get(FilesControllers.getFileByID);
router.route("/upload").post(FilesControllers.uploadFile);

export default router;
