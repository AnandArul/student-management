import jwt, { decode } from 'jsonwebtoken'
const authenticate = (req, res, next) => {
    if (!req.headers['authorization']) {
        res.status(401).send("Token required")
    }
    const token = req.headers['authorization'].split(' ')
    const decoded = jwt.verify(token[1], process.env.JWT_SECRET)
    if (!decode) {
        res.status(401).send("Invalid token")
    }
    req.user = decoded
    next()
}

export default { authenticate }