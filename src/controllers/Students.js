import Aluno from '../models/Aluno';

class StudentsController {
  async index(req, res) {
    try {
      const students = await Aluno.findAll();
      return res.json(students);
    } catch (err) {
      return console.log(err);
    }
  }
}

export default new StudentsController();
