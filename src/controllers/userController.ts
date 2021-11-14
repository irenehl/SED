/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/UserModel');
const Pokemon = require('../../models/PokemonModel');
const { registerValidator } = require('./UserValidator');

const UserController = {
    login: async (req, res) => {
        try {
            if (req.user) {
                return res.status(200).json({
                    token: jwt.sign({ _id: req.user._id, admin: req.user.admin }, process.env.TOKEN_KEY),
                });
            }
            return res.status(404).json({ message: 'User not found' });
        } catch (err) {
            return res.status(400).json(err.message);
        }
    },

    register: async (req, res) => {
        try {
            await registerValidator(req.body);

            const pass = await bcrypt.hash(req.body.password, 10);
            req.body.password = pass;

            const user = await User.create(req.body);

            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },

    createAdmin: async (req, res) => {
        try {
            if (req.user.admin === false) return res.status(403).json({ message: 'Action Denied' });

            await registerValidator(req.body);

            const pass = await bcrypt.hash(req.body.password, 10);
            req.body.password = pass;

            const user = await User.create(req.body);

            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },

    createAppointment: async(req, res) => {
        try {
            
        } catch(err) {
            return;
        }
    },

    deleteUser: async (req, res) => {
        try {
            if (req.user.admin === false) return res.status(403).json({ message: 'Action Denied' });

            await User.findOneAndDelete({ _id: req.user._id });

            return res.status(200).json({ error: false, message: 'Delete successfully' });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            if (req.user.admin === false) return res.status(403).json({ message: 'Action Denied' });

            const { page = 1, limit = 12 } = req.query;

            const users = await User.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            const count = await User.countDocuments();

            return res.status(200).json({
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                users,
            });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },
};

module.exports = UserController;