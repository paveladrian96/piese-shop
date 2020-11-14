const express = require("express")
const router = express.Router()

const {create, distribuitoriById, update , remove, read, list, photo} = require('../controllers/distribuitori')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.post("/distribuitori/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/distribuitori/:distribuitoriId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/distribuitori/:distribuitoriId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/distribuitori/:distribuitoriId", read)
router.get("/distribuitoriAll", list)
router.get("/distribuitori/photo/:distribuitoriId", photo)

router.param('userId', userById)
router.param('distribuitoriId', distribuitoriById)

module.exports = router