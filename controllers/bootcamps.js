const Bootcamp = require('../models/Bootcamp');
//here we will create different methods that are going to be associated with the server routes

//adding headers to each function

//@desc   Get all bootcamps
//@route  GET /api/v1/bootcamps
//@access   Public 
exports.getBootcamps = (req,res,next) => {
    res.status(200).json({ success: true, msg: 'Show all the bootcamps'});
};

//@desc   Get bootcamp
//@route  GET /api/v1/bootcamps/:id
//@access   Public 
exports.getBootcamp = (req,res,next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}`});
};

//@desc   Create new bootcamp
//@route  POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = async (req,res,next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).send(bootcamp);
};
//@desc   Update bootcamp
//@route  PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req,res,next) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}`});
};

//@desc   Delete bootcamp
//@route  DELETE /api/v1/bootcamps/:id
//@access   Private 
exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}`});
};