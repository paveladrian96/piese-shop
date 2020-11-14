const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../../helpers/dbErrorHandler")
const Filtre = require ("../../models/subtipuriPieseAuto/filtre")

exports.filtreById = (req, res, next, id) => {
    Filtre.findById(id).exec((err, filtre) => {
        if(err || !filtre) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.filtre = filtre
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

        let filtre = new Filtre(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            filtre.photo.data = fs.readFileSync(files.photo.path)
            filtre.photo.contentType = files.photo.type
        }

        filtre.save((err, result) => {
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

        let filtre = req.filtre
        filtre = _.extend(filtre, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            filtre.photo.data = fs.readFileSync(files.photo.path)
            filtre.photo.contentType = files.photo.type
        }

        filtre.save((err, result) => {
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
    let filtre = req.filtre
    filtre.remove((err, deletedfiltre) => {
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
    req.filtre.photo = undefined
    return res.json(req.filtre)
}

exports.list = (req, res) => {
    Filtre.find()
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
    if(req.filtre.photo.data) {
        res.set('Content-Type', req.filtre.photo.contentType)
        return res.send(req.filtre.photo.data)
    }
    next()
}