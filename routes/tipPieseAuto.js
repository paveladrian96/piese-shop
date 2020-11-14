const express = require("express")
const router = express.Router()

const {create, tipPieseAutoById, update , remove, read, list, photo} = require('../controllers/tipPieseAuto')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.post("/tipPieseAuto/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/tipPieseAuto/:tipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/tipPieseAuto/:tipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/tipPieseAuto/:tipPieseAutoId", read)
router.get("/tipuriPieseAuto", list)
router.get("/tipPieseAuto/photo/:tipPieseAutoId", photo)

router.param('userId', userById)
router.param('tipPieseAutoId', tipPieseAutoById)

module.exports = router