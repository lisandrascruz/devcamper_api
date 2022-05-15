const Bootcamp = require('../models/Bootcamp')

// description:   Get all bootcamps
// route:         GET api/v1/bootcamps
// access:        Public
exports.getBootcamps = (req, res) => {
	res.status(200).json({success: true, message: 'Show all bootcamps', data: {type: 'bootcamps'}});
};

// description:   Get single bootcamp
// route:         GET api/v1/bootcamps/:id
// access:        Public
exports.getBootcamp = (req, res) => {
	res.status(200).json({success: true, message: `Show bootcamp ${req.params.id}`, data: {type: 'bootcamps'}});
};

// description:   Create bootcamp
// route:         POST api/v1/bootcamps/
// access:        Public
exports.createBootcamp = async (req, res) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);

		res.status(201).json({success: true, data: bootcamp});
	} catch (err) {
		res.status(400).json({ success: false })
	}
};

// description:   Update bootcamp
// route:         PUT api/v1/bootcamps/:id
// access:        Public
exports.updateBootcamp = (req, res) => {
	res.status(200).json({success: true, message: `Update bootcamp ${req.params.id}`});
};

// description:   Delete bootcamp
// route:         DELETE api/v1/bootcamps/
// access:        Public
exports.deleteBootcamp = (req, res) => {
	res.status(200).json({success: true, message: `Delete bootcamp ${req.params.id}`});
};