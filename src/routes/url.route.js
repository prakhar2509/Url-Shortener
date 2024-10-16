import { Router } from "express";
import { handleGenerateShortUrl, analytics } from "../controllers/generateShortUrl.controller.js";
import { generateShortUrl } from "../controllers/generateUrl.controller.js";


const urlRouter = Router();

urlRouter.route("/").post(handleGenerateShortUrl);

urlRouter.route("/:shortId").get(generateShortUrl);

urlRouter.route("/analytics/:shortId").get(analytics);

export default urlRouter;