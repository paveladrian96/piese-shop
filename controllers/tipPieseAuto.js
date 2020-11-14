const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const TipPieseAuto = require ("../models/tipPieseAuto")

exports.tipPieseAutoById = (req, res, next, id) => {
    TipPieseAuto.findById(id).exec((err, tipPieseAuto) => {
        if(err || !tipPieseAuto) {
            return res.status(400).json({
                error: "Tipul de piesa nu a fost gasita"
            })
        } 
        req.tipPieseAuto = tipPieseAuto
        next()
    })
}

exports.create = (req, res) => {
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
                error: "Introduceti numele tipului piesei auto"
            })
        }

        let tipPieseAuto = new TipPieseAuto(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            tipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            tipPieseAuto.photo.contentType = files.photo.type
        }

        tipPieseAuto.save((err, result) => {
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

        let tipPieseAuto = req.tipPieseAuto
        tipPieseAuto = _.extend(tipPieseAuto, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            tipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            tipPieseAuto.photo.contentType = files.photo.type
        }

        tipPieseAuto.save((err, result) => {
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
    let tipPieseAuto = req.tipPieseAuto
    tipPieseAuto.remove((err, deletedTipPieseAuto) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Tipul de piesa a fost sters cu succes"
        })
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.tipPieseAuto.photo = undefined
    return res.json(req.tipPieseAuto)
}

exports.list = (req, res) => {
    TipPieseAuto.find()
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
    if(req.tipPieseAuto.photo.data) {
        res.set('Content-Type', req.tipPieseAuto.photo.contentType)
        return res.send(req.tipPieseAuto.photo.data)
    }
    next()
}