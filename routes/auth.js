import express from "express";
import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public-server/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const upload = multer({ storage });

/* ROUTES WITH FILES */
router.post("/register", register);
router.post("/login", login);

export default router;
