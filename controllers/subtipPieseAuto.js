const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const SubtipPieseAuto = require ("../models/subtipPieseAuto")

exports.subtipPieseAutoById = (req, res, next, id) => {
    SubtipPieseAuto.findById(id).exec((err, subtipPieseAuto) => {
        if(err || !subtipPieseAuto) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.subtipPieseAuto = subtipPieseAuto
        next()
    })
}

exports.piesaByTip = (req, res, next, id) => {
    SubtipPieseAuto.find({tip: req.subtipPieseAuto.tip}).exec((err, subtipPieseAuto) => {
        if(err || !subtipPieseAuto) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.subtipPieseAuto = subtipPieseAuto
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

        const {nume, tip, distribuitor, pret, cantitate, cod_produs, specificatii } = fields

        if(!nume ){
            return res.status(400).json({
                error: "Introduceti numele subtipului piesei auto"
            })
        }

        let subtipPieseAuto = new SubtipPieseAuto(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            subtipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            subtipPieseAuto.photo.contentType = files.photo.type
        }

        subtipPieseAuto.save((err, result) => {
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

        const {nume, tip, distribuitor, pret, cantitate, cod_produs, specificatii } = fields

        if(!nume || !tip || !distribuitor || !pret || !cantitate || !cod_produs || !specificatii){
            return res.status(400).json({
                error: "Introduceti numele"
            })
        }

        let subtipPieseAuto = req.subtipPieseAuto
        subtipPieseAuto = _.extend(subtipPieseAuto, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            subtipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            subtipPieseAuto.photo.contentType = files.photo.type
        }

        subtipPieseAuto.save((err, result) => {
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
    let subtipPieseAuto = req.subtipPieseAuto
    subtipPieseAuto.remove((err, deletedsubTipPieseAuto) => {
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
    req.subtipPieseAuto.photo = undefined
    return res.json(req.subtipPieseAuto)
}

exports.list = (req, res) => {
    SubtipPieseAuto.find()
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

exports.listRelatedByName = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6

    // find all the products from that category.
    SubtipPieseAuto.find({nume: req.subtipPieseAuto.nume})
        .limit(limit)
        .select("-photo")
        //.populate('tip', '_id nume')
        .exec((err, subtipuri) => {
            if(err) {
                return res.status(400).json({
                    error: "Products not found"
                })
            }
            res.json(subtipuri)
        })
}

exports.photo = (req, res, next) => {
    if(req.subtipPieseAuto.photo.data) {
        res.set('Content-Type', req.subtipPieseAuto.photo.contentType)
        return res.send(req.subtipPieseAuto.photo.data)
    }
    next()
}

exports.getPieseByTipPiesa = (req, res) => {
    SubtipPieseAuto.find({tip: req.params.tipId})
    .select("-photo")
    .populate('tip', '_id nume')
    .exec((err, subtipPieseAuto) => {
        if(err) {
            return res.status(400).json({
                error: "Piesele cautate nu au fost gasite"
            })
        }
        res.json(subtipPieseAuto)
    })
}

// by sell = /subtipuriPieseAutoSorted/sortBy=vandute&order=desc&limit=4
// by arrival = /subtipuriPieseAutoSorted/sortBy=createdAt&order=desc&limit=4

exports.listSorted = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 6

    SubtipPieseAuto.find()
        .select("-photo")
        .populate('tip', "_id nume")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, data) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
        res.send(data)
    })
}

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
 
    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);
 
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
 
    SubtipPieseAuto.find(findArgs)
        .select("-photo")
        .populate("tip")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Piesele nu au fost gasite"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

exports.listSearch = (req, res) => {
    //create query object to hold search valuea and tip value
    const query = {}
    //assing search value to query.name
    if(req.query.search) {
        query.nume = {$regex: req.query.search, $options: 'i'}
        // assign tip value to query.tip
        // if(req.query.tip && req.query.tip != "All") {
        //     query.tip = req.query.tip
        // }
        // find piese base on query
        SubtipPieseAuto.find(query, (error, piese) => {
            if(error) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(piese)
        }).select("-photo")

    }
}

exports.decreaseQuantity = (req, res, next) => {
    let bulkOps = req.body.order.products.map((item)=> {
        return {
            updateOne: {
                filter: {_id: item._id},
                update: {$inc: {cantitate: -item.count, vandute: +item.count}}
            }
        }
    })

    SubtipPieseAuto.bulkWrite(bulkOps, {}, (error, products) => {
        if(error) {
            return  res.status(400).json({
                error: "Could not update product"
            })
        }
        next()
    })
}