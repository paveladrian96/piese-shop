const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const Distribuitori = require ("../models/distribuitori")

exports.distribuitoriById = (req, res, next, id) => {
    Distribuitori.findById(id).exec((err, distribuitori) => {
        if(err || !distribuitori) {
            return res.status(400).json({
                error: "Distribuitorul auto nu a fost gasita"
            })
        } 
        req.distribuitori = distribuitori
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

        let distribuitori = new Distribuitori(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            distribuitori.photo.data = fs.readFileSync(files.photo.path)
            distribuitori.photo.contentType = files.photo.type
        }

        distribuitori.save((err, result) => {
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

        let distribuitori = req.distribuitori
        distribuitori = _.extend(distribuitori, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            distribuitori.photo.data = fs.readFileSync(files.photo.path)
            distribuitori.photo.contentType = files.photo.type
        }

        distribuitori.save((err, result) => {
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
    let distribuitori = req.distribuitori
    distribuitori.remove((err, deletedDistribuitori) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Distribuitorul auto a fost stearsa cu succes"
        })
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.distribuitori.photo = undefined
    return res.json(req.distribuitori)
}

exports.list = (req, res) => {
    Distribuitori.find()
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
    if(req.distribuitori.photo.data) {
        res.set('Content-Type', req.distribuitori.photo.contentType)
        return res.send(req.distribuitori.photo.data)
    }
    next()
}