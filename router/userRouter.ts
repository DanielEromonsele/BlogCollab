import { Router } from "express";
import { createUser, getAllUser } from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/get-All-user").get(getAllUser);
router.route("/get-one-user/:userID").get(getAllUser);

export default router;
