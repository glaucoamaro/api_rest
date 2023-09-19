import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(401).json({
        errors: ['invalid credentials.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist.'],
      });
    }

    if (!(await user.passwordValidation(password))) {
      return res.status(401).json({
        errors: ['invalid password.'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
