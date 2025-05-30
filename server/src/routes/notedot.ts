import express from 'express';
const router = express.Router();

//import notedot controller
const {createNotedot , getAllNotedot,getNotedot,updateNotebyID,deleteNotedot} = require('../controllers/notedot_controller');

router.post("/createnotedot" , createNotedot);
router.get("/getallnotedot" , getAllNotedot);
router.get("/getnotedot/:id" , getNotedot);
router.put("/updatenotebyID/:id" , updateNotebyID);
router.delete("/deletenotedot/:id" , deleteNotedot);

module.exports = router;