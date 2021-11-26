import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');

const handler = nc<NextApiRequest, NextApiResponse>()
    .post(async (req, res) => {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser)
            return res.status(401).json({ error: 'Usuario existente' });

        const cryptedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: cryptedPassword
        });

        await newUser.save();

        return res.status(201).json({ message: 'Done' });
    });

export default ConnectDb(handler);