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
    .delete(async (req, res) => {
        const { id } = req.query;

        const ap = await Appointment.findOneAndDelete({ _id: id });

        return res.status(200).json(ap);
    });

export default ConnectDb(handler);