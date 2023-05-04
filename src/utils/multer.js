import multer from "multer";

const storage = multer.diskStorage({
    destination: "src/public/uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

export const uploads = multer({
    storage,
}).single("image")

