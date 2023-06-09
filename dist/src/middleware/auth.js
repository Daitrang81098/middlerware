"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = '123456';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, (err, payload) => {
                if (err) {
                    res.status(403).json({
                        err: err.message,
                        message: 'bạn không có quyền truy cập'
                    });
                }
                else {
                    req.decode = payload;
                    next();
                }
            });
        }
        else {
            res.status(403).json({
                message: 'Bạn không có quyền truy cập'
            });
        }
    }
    else {
        res.status(403).json({
            message: 'Bạn không có quyền truy cập'
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map