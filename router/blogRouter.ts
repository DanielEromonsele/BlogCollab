import { Router } from "express";
import {
  createBlog,
  viewOneUserBlog,
  findAllBlog,
  updateBlogInfo,
  deleteBlog,
} from "../controller/blogController";

const router: Router = Router();
import multer from "multer";

const upload = multer().single("upload");

router.route("/create-blog/:userID").post(upload, createBlog);
router.route("/view-my-blog/:userID").get(viewOneUserBlog);
router.route("/view-all-blog").get(findAllBlog);
router.route("/update-blog/:blogID").patch(updateBlogInfo);
router.route("/delete-blog/:blogID").delete(deleteBlog);

export default router;
