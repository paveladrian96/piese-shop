const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const MarcaAuto = require ("../models/marcaAuto")

exports.marcaAutoById = (req, res, next, id) => {
    MarcaAuto.findById(id).exec((err, marcaAuto) => {
        if(err || !marcaAuto) {
            return res.status(400).json({
                error: "Marca auto nu a fost gasita"
            })
        } 
        req.marcaAuto = marcaAuto
        next()
    })
}

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        }
        //check for all fields

        const {nume} = fields

        if(!nume){
            return res.status(400).json({
                error: "Introduceti numele marcii auto"
            })
        }

        let marcaAuto = new MarcaAuto(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            marcaAuto.photo.data = fs.readFileSync(files.photo.path)
            marcaAuto.photo.contentType = files.photo.type
        }

        marcaAuto.save((err, result) => {
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
                error: "Imaginea nu a putut fi incarcata"
            })
        }
        //check for all fields

        const {nume} = fields

        if(!nume){
            return res.status(400).json({
                error: "Introduceti numele"
            })
        }

        let marcaAuto = req.marcaAuto
        marcaAuto = _.extend(marcaAuto, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            marcaAuto.photo.data = fs.readFileSync(files.photo.path)
            marcaAuto.photo.contentType = files.photo.type
        }

        marcaAuto.save((err, result) => {
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
    let marcaAuto = req.marcaAuto
    marcaAuto.remove((err, deletedMarcaAuto) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Marca auto a fost stearsa cu succes"
        })
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.marcaAuto.photo = undefined
    return res.json(req.marcaAuto)
}

exports.list = (req, res) => {
    MarcaAuto.find()
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
    if(req.marcaAuto.photo.data) {
        res.set('Content-Type', req.marcaAuto.photo.contentType)
        return res.send(req.marcaAuto.photo.data)
    }
    next()
}