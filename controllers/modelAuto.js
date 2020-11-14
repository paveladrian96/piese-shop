const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const ModelAuto = require ("../models/modelAuto")

exports.modelAutoById = (req, res, next, id) => {
    ModelAuto.findById(id)
    .populate('marcaAuto')
    .exec((err, modelAuto) => {
        if(err || !modelAuto) {
            return res.status(400).json({
                error: "Modelul nu a fost gasit"
            })
        } 
        req.modelAuto = modelAuto
        next()
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.modelAuto.photo = undefined
    return res.json(req.modelAuto)
}


exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Imaginea nu a putut fi gasita"
            })
        }
        //check for all fields

        const {nume, anAparitie, anDisparitie, marcaAuto, caroserie, motor} = fields

        if(!nume || !anAparitie || !anDisparitie || !marcaAuto || !caroserie || !motor ){
            return res.status(400).json({
                error: "Toate campurile sunt obligatorii"
            })
        }

        let modelAuto = new ModelAuto(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea trebuie sa fie de maxim 1mb"
                })
            }
            modelAuto.photo.data = fs.readFileSync(files.photo.path)
            modelAuto.photo.contentType = files.photo.type
        }

        modelAuto.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}

exports.update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Imaginea nu a putut fi gasita"
            })
        }
        //check for all fields

        const {nume, anAparitie, anDisparitie, marcaAuto, caroserie, motor} = fields

        if(!nume || !anAparitie || !anDisparitie || !marcaAuto || !caroserie || !motor ){
            return res.status(400).json({
                error: "Toate campurile sunt obligatorii"
            })
        }

        let modelAuto = req.modelAuto
        modelAuto = _.extend(modelAuto, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea trebuie sa fie mai mica de 1mb"
                })
            }
            modelAuto.photo.data = fs.readFileSync(files.photo.path)
            modelAuto.photo.contentType = files.photo.type
        }

        modelAuto.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}

exports.remove = (req, res) => {
    let modelAuto = req.modelAuto
    modelAuto.remove((err, deletedModelAuto) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Modelul a fost sters cu success"
        })
    })
}

exports.list = (req, res) => {
    ModelAuto.find()
        .select("-photo")
        .exec((err, data) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
        res.json(data)
    })
}

exports.photo = (req, res, next) => {
    if(req.modelAuto.photo.data) {
        res.set('Content-Type', req.modelAuto.photo.contentType)
        return res.send(req.modelAuto.photo.data)
    }
    next()
}

exports.listMarciAuto = (req, res) => {
    ModelAuto.distinct("marcaAuto", {}, (err, marciAuto) => {
        if(err) {
            return res.status(400).json({
                error: "da"
            })
        }
        res.json(marciAuto)
    })
}


exports.getModelAutoByMarca = (req, res) => {
    ModelAuto.find({marcaAuto: req.params.marcaAutoId})
    .select("-photo")
    .populate('marcaAuto', '_id nume')
    .exec((err, modeleAuto) => {
        if(err) {
            return res.status(400).json({
                error: "Modelele cautate nu au fost gasite"
            })
        }
        res.json(modeleAuto)
    })
}
