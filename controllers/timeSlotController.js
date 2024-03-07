const TimeSlot = require('../models/TimeSlot');

// Create a new time slot 

exports.createTimeSlot = async (req, res) => {
    try {
        const { startTime, endTime, isBooked } = req.body;
        const newTimeSlot = new TimeSlot({ startTime, endTime, isBooked });
        await newTimeSlot.save();
        res.status(201).json(newTimeSlot);
    } catch (error) {
        res.status(400).json ({ message: "Error booking appointment", error: error.message});
    }
}

//Get all time slots

exports.listTimeSlots = async (req, res) => {
    try{
        const bookedSlot = await TimeSlot.find({ });
        res.status(200).json(bookedSlot);
    } catch (error) {
        res.status(500).json({message: "Erroring fetching time slots", error: error.message});
    }
};

// Get all booked time slots 

exports.listBookedSlots = async (req, res) => {
    try{
        const bookedSlot = await TimeSlot.find({ isBooked: true});
        res.status(200).json(bookedSlot);
    } catch (error) {
        res.status(500).json({message: "Erroring fetching time slots", error: error.message});
    }
};

// list availableSlots

exports.listAvailableSlots = async(req, res) =>{
    try {
        const listAvailableSlots = await TimeSlot.find({ isBooked: false})
        res.status(200).send(listAvailableSlots);
    } catch (error) {
        res.status(500).json({ message: "Error fetching available time slots", error: error.message});
    }
}; 




// get time slot by ID

exports.getBookedSlot = async(req, res) =>{
    try { 
        const slotId = req.params.id;
        const timeSlot = await TimeSlot.findById(slotId);
        if (!timeSlot) {
            return res.status(404).json({ message: 'Time slot not found'})
        }
        res.status(200).json(timeSlot);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving time slot"})
    } 
};

// Update a time slot

exports.updateTimeSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTimeSlot = await TimeSlot.findByIdAndUpdate(id, req.body, { new: true});
        if (!updatedTimeSlot) {
            return res.status(404).send({message: "Time slot not found"});
        }
        res.status(200).json(updatedTimeSlot);
    } catch (error) {
        res.status(400).send({ message: "Error updating time slot", error: error.message});
    }
}

//  Deleted time slots

exports.deleteTimeSlot = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedTimeSlot = await TimeSlot.findByIdAndDelete(id);
        if (!deletedTimeSlot) {
            return res.status(404).send({message: "Time slot not found"})
        }
        res.status(200).send({message: "Time slot successfully deleted" });

    } catch (error) {
        res.status(500).send({ message: "Error deleting time slot", error: error.mesage});
    }

};




// fasdf
// asdfa
// asdf