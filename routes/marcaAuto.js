const express = require("express")
const router = express.Router()

const {create, marcaAutoById, update , remove, read, list, photo} = require('../controllers/marcaAuto')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.post("/marcaAuto/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/marcaAuto/:marcaAutoId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/marcaAuto/:marcaAutoId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/marcaAuto/:marcaAutoId", read)
router.get("/marciAuto", list)
router.get("/marcaAuto/photo/:marcaAutoId", photo)

router.param('userId', userById)
router.param('marcaAutoId', marcaAutoById)

module.exports = router