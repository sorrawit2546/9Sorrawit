import express from 'express';
const router = express.Router();

//import notedot controller
const {createNotedot , getAllNotedot,getNotedot,updateNotebyID,deleteNotedot} = require('../controllers/notedot_controller');

router.post("/notes" , createNotedot);
router.get("/notes" , getAllNotedot);
router.get("/notes/:id" , getNotedot);
router.put("/notes/:id" , updateNotebyID);
router.delete("/notes/:id" , deleteNotedot);

module.exports = router;