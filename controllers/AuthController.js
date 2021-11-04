const { hashPassword, passwordValid, createToken } = require('../middleware/Auth')
const { User } = require('../models')

const Register = async (req, res) => {
  try {

    const { userName, email, password } = req.body
    const password_digest = await hashPassword(password) // Creating a hashed password
    const user = await User.create({ userName, email, password_digest }) // Store the hashed password in the database
    res.send(user)
  } catch (error) { 
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    }) // Find a user by email
    // return the user with raw values, we dont need the model definitions for what we're doing here.
    if (user && (await passwordValid(req.body.password, user.password_digest))) {
      // We check if there is a user and if the provided password in the request is a match with the stored password digest
      let payload = {
        // Create the jwt payload, keep sensitive information out of the payload
        id: user.id,
        name: user.name
      }
      let token = createToken(payload) // Create token builds the token with the payload
      return res.send({ user, token })
    }
  } catch (error) {
    throw error
  }
}

const SessionStatus = async (req, res) => {
  try {
    const { token } = res.locals
    const user = await User.findByPk(token.id, {
      attributes: ['id', 'name', 'email'] // Find a user by the id encoded in the json web token, only include the id, name and email fields
    })
    res.send({ user, status: 'OK' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login,
  SessionStatus
}