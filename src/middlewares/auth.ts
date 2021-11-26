const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorize"];

    if (!token)
        return res.status(403).send('Unauthorized');

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    }
    catch (error) {
        console.log(error);
        return res.status(401).send("Invalid token");
    }

    return next();
}

module.exports = verifyToken;