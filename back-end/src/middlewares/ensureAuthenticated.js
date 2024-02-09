const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next){
    const authHeader = request.headers.authorization; //! Catch JWT

    if(!authHeader){ //! JWT verification
        throw new AppError("JWT not informed", 401)
    }

    const [, token] = authHeader.split(" ")  //! Bare xxxxxxxxxx

    //! JWT Validation
    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id) //! Create new parameter on the request, transferring the user id
        };

        return next();
    }catch {
        throw new AppError("Invalid JWT", 401)
    }
}

module.exports = ensureAuthenticated;