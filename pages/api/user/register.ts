import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');

const handler = nc<NextApiRequest, NextApiResponse>()
    .post(async (req, res) => {
        // Registrar usuario
        const { username } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser)
            return res.status(401).json({ error: 'username already in use' });

        const cryptedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: cryptedPassword
        });

        await newUser.save();

        return res.status(201).json({ message: 'Done' });
    });

export default ConnectDb(handler);