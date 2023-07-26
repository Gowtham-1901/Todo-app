const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getuserdata);
router.post("/add",controller.adduserdata);
router.delete("/:user_id",controller.removeuserdata);
router.put("/:user_id",controller.updateuserdata);

module.exports = router;