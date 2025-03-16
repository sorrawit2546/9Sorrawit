import express from 'express';
import multer from 'multer';
import * as path from 'path';
const router = express.Router();

// Import controller
const { getPositiveposts, createPositivepost } = require('../controllers/positivepost_controller');

// Configure multer for this route
const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, './uploads/');
    },
    filename: function (req: any, file: any, cb: any) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: function (req: any, file: any, cb: any) {
        // Accept images only
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }
});

// Define the route with multer middleware
router.post('/positivepost', upload.array('images', 5), createPositivepost);
router.get('/getpositiveposts', getPositiveposts);

module.exports = router;