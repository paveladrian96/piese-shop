const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../../helpers/dbErrorHandler")
const Amortizoare = require ("../../models/subtipuriPieseAuto/amortizoare")

exports.amortizoareById = (req, res, next, id) => {
    Amortizoare.findById(id).exec((err, amortizoare) => {
        if(err || !amortizoare) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.amortizoare = amortizoare
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

        const {nume, subtip, distribuitor, cod_produs, pret, cantitate} = fields

        if(!nume || !subtip || !distribuitor || !cod_produs || !pret || !cantitate){
            return res.status(400).json({
                error: "Introduceti numele subtipului piesei auto"
            })
        }

        let amortizoare = new Amortizoare(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            amortizoare.photo.data = fs.readFileSync(files.photo.path)
            amortizoare.photo.contentType = files.photo.type
        }

        amortizoare.save((err, result) => {
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

        const {nume, subtip, distribuitor, cod_produs, pret, cantitate} = fields

        if(!nume || !subtip || !distribuitor || !cod_produs || !pret || !cantitate){
            return res.status(400).json({
                error: "Introduceti numele"
            })
        }

        let amortizoare = req.amortizoare
        amortizoare = _.extend(amortizoare, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            amortizoare.photo.data = fs.readFileSync(files.photo.path)
            amortizoare.photo.contentType = files.photo.type
        }

        amortizoare.save((err, result) => {
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
    let amortizoare = req.amortizoare
    amortizoare.remove((err, deletedamortizoare) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Subtipul de piesa a fost sters cu succes"
        })
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.amortizoare.photo = undefined
    return res.json(req.amortizoare)
}

exports.list = (req, res) => {
    Amortizoare.find()
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
    if(req.amortizoare.photo.data) {
        res.set('Content-Type', req.amortizoare.photo.contentType)
        return res.send(req.amortizoare.photo.data)
    }
    next()
}