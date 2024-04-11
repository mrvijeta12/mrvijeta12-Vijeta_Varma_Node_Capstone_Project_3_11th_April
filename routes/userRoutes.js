const express = require('express');
const upload = require('../middleware/fileupload');
const {addUser,getAllUsers,getUserById } = require('../controller/UserController')

const router = express.Router();



router.post("/",upload.single('picture'),addUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
module.exports=router;