const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../../helpers/dbErrorHandler")
const Motor = require ("../../models/subtipuriPieseAuto/motor")

exports.motorById = (req, res, next, id) => {
    Motor.findById(id).exec((err, motor) => {
        if(err || !motor) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.motor = motor
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

        let motor = new Motor(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            motor.photo.data = fs.readFileSync(files.photo.path)
            motor.photo.contentType = files.photo.type
        }

        motor.save((err, result) => {
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

        let motor = req.motor
        motor = _.extend(motor, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            motor.photo.data = fs.readFileSync(files.photo.path)
            motor.photo.contentType = files.photo.type
        }

        motor.save((err, result) => {
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
    let motor = req.motor
    motor.remove((err, deletedmotor) => {
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
    req.motor.photo = undefined
    return res.json(req.motor)
}

exports.list = (req, res) => {
    Motor.find()
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
    if(req.motor.photo.data) {
        res.set('Content-Type', req.motor.photo.contentType)
        return res.send(req.motor.photo.data)
    }
    next()
}