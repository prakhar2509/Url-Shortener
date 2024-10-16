import { Router } from "express";
import { handleGenerateShortUrl } from "../controllers/generateShortUrl.controller.js";
import { generateShortUrl } from "../controllers/generateUrl.controller.js";


const urlRouter = Router();

urlRouter.route("/").post(handleGenerateShortUrl);

urlRouter.route("/:shortId").get(generateShortUrl);

export default urlRouter;