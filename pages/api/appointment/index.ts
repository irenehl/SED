import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');
const Appointment = require('@models/appointment');
const verifyToken = require('@middlewares/auth');

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(verifyToken)
    .get(async (req, res) => {
        const { _id } = req.user;

        const ap = await Appointment.find({ user: _id });

        return res.status(200).json(ap);
    })
    .post(async (req, res) => {
        const newAp = new Appointment({
            ...req.body,
            user: req.user._id
        })

        await newAp.save();

        return res.status(201).json(newAp);
    })
    .put(async (req, res) => {
        const { previousDate } = req.body;

        const ap = await Appointment.findOne({ user: req.user._id, date: previousDate });

        const updatedAp = {
            doctor: req.body.doctor ?? ap.doctor,
            date: req.body.date ?? ap.date,
            speciality: req.body.speciality ?? ap.speciality
        }

        await Appointment.findOneAndUpdate({ user: req.user._id, date: previousDate }, updatedAp);

        return res.status(200).send('Ok');
    });

export default ConnectDb(handler);