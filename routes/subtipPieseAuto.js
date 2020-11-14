const express = require("express")
const router = express.Router()

const {create, subtipPieseAutoById, update , remove, read, list, photo, listRelatedByName, piesaByTip
    ,getPieseByTipPiesa, listSorted, listBySearch, listSearch} = require('../controllers/subtipPieseAuto')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')
const { tipPieseAutoById } = require('../controllers/tipPieseAuto')

router.post("/subtipPieseAuto/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/subtipPieseAuto/:subtipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/subtipPieseAuto/:subtipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/subtipPieseAuto/:subtipPieseAutoId", read)
router.get("/subtipuriPieseAuto", list)
router.get("/subtipPieseAuto/related/:subtipPieseAutoId", listRelatedByName)
router.get("/subtipPieseAuto/photo/:subtipPieseAutoId", photo)

router.get("/subtipPieseAuto/by/tip/:tipId", getPieseByTipPiesa)

router.get("/subtipuriPieseAutoSorted", listSorted)
router.get("/subtipuriPieseAuto/search", listSearch)

// route - make sure its post
router.post("/subtipuriPieseAuto/by/search", listBySearch);
 

router.param('tipId', tipPieseAutoById)

router.param('userId', userById)
router.param('subtipPieseAutoId', subtipPieseAutoById)

// router.param('piesaTip', piesaByTip)



module.exports = router