const express = require("express")
const router = express.Router()

const {create, motorById, update , remove, read, list, photo} = require('../../controllers/subtipuriPieseAuto/motor')

const {requireSignin , isAuth, isAdmin} = require("../../controllers/auth")
const { userById } = require('../../controllers/user')

router.post("/motor/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/motor/:motorId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/motor/:motorId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/motor/:motorId", read)
router.get("/motorAll", list)
router.get("/motor/photo/:motorId", photo)

router.param('userId', userById)
router.param('motorId', motorById)

module.exports = router