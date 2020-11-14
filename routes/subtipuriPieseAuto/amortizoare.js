const express = require("express")
const router = express.Router()

const {create, amortizoareById, update , remove, read, list, photo} = require('../../controllers/subtipuriPieseAuto/amortizoare')

const {requireSignin , isAuth, isAdmin} = require("../../controllers/auth")
const { userById } = require('../../controllers/user')

router.post("/amortizoare/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/amortizoare/:amortizoareId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/amortizoare/:amortizoareId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/amortizoare/:amortizoareId", read)
router.get("/amortizoareList", list)
router.get("/amortizoare/photo/:amortizoareId", photo)

router.param('userId', userById)
router.param('amortizoareId', amortizoareById)

module.exports = router