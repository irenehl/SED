import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');
const verifyToken = require('@middlewares/auth');

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(verifyToken)
    .put(async (req, res) => {
        const { _id } = req.user;

        const user = await User.findOne({ _id });

        const newPassword = await bcrypt.hash(req.body.newPassword, 10);

        const updated = await User.findOneAndUpdate({ _id }, { password: newPassword });

        return res.status(200).send('Ok');
    });

export default ConnectDb(handler);