const {Router} = require("express");


const  {createMessage} = require("../handler/createMessage")

const router = Router();

router.post("/form",createMessage)


module.exports = router;