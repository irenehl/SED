import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');
const verifyToken = require('@middlewares/auth');

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(verifyToken)
    .delete(async (req, res) => {
        if (!req.user.admin)
            return res.status(403).send('Unauthorized');

        const { username } = req.body;

        const user = await User.findOneAndDelete({ username });

        return res.status(200).send('Ok');
    });

export default ConnectDb(handler);