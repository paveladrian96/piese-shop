const express = require("express")
const router = express.Router()

const {create, filtreById, update , remove, read, list, photo} = require('../../controllers/subtipuriPieseAuto/filtre')

const {requireSignin , isAuth, isAdmin} = require("../../controllers/auth")
const { userById } = require('../../controllers/user')

router.post("/filtre/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/filtre/:filtreId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/filtre/:filtreId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/filtre/:filtreId", read)
router.get("/filtreAll", list)
router.get("/filtre/photo/:filtreId", photo)

router.param('userId', userById)
router.param('filtreId', filtreById)

module.exports = router