const { model, Schema, models } = require('mongoose');

const Appointment = new Schema({
    user: String,
    doctor: String,
    date: String,
    speciality: String
}, { timestamps: true })

module.exports = models.Appointment || model('Appointment', Appointment);