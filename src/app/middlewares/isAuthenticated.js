"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(400).end;
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_JWT);
        req.user_id = sub;
    }
    catch (err) {
        return res.status(401).end();
    }
    return next();
}
exports.isAuthenticated = isAuthenticated;
