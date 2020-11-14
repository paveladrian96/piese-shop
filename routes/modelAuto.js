const express = require("express")
const router = express.Router()

const {create, modelAutoById, read, update, remove, list, photo,
        listMarciAuto, getModelAutoByMarca } = require('../controllers/modelAuto')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')
const { marcaAutoById } = require('../controllers/marcaAuto')

router.post("/modelAuto/create/:userId", requireSignin , isAuth, isAdmin, create)
router.get("/modelAuto/:modelAutoId", read)
router.put("/modelAuto/:modelAutoId/:userId",requireSignin, isAdmin, isAuth, update )
router.delete("/modelAuto/:modelAutoId/:userId",requireSignin, isAdmin, isAuth, remove )

router.get("/modelAuto", list)
router.get("/modelAuto/photo/:modelAutoId", photo)
router.get("/modeleAuto/marciAuto", listMarciAuto)

router.get("/modelAuto/by/marca/:marcaAutoId", getModelAutoByMarca)


router.param('userId', userById)
router.param('modelAutoId', modelAutoById)
router.param('marcaAutoId', marcaAutoById)


module.exports = router