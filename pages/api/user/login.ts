import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import ConnectDb from '@middlewares/mongodb';

const User = require('@models/user');
const verifyToken = require('@middlewares/auth');

const handler = nc<NextApiRequest, NextApiResponse>()
    .post(async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user)
            return res.status(404).json({ error: 'Este usuario no existe ' });

        const validPassword = await bcrypt.compare(password, user.password);

        if (validPassword) {
            const token = jwt.sign({ _id: user._id, admin: user.admin }, process.env.TOKEN_KEY);

            return res.status(200).json({ token });
        }
        else
            return res.status(401).json({ error: 'Credenciales invalidas' });
    })
    .use("/update", verifyToken)
    .put("/update", async (req, res) => {
        const { _id } = req.user;

        const user = await User.findOne({ _id });

        const newPassword = await bcrypt.hash(req.body.newPassword);

        const updated = await User.findOneAndUpdate({ _id }, { password: newPassword });

        return res.status(200).send('Ok');
    });

export default ConnectDb(handler);