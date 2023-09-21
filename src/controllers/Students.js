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

  async store(req, res) {
    try {
      const students = await Aluno.create(req.body);
      const { id, name, email } = students;
      return res.json({
        id,
        name,
        email,
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['id not sending.'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['student not exist.'],
        });
      }

      const studentUpdate = await student.update(req.body);

      return res.json(studentUpdate);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['id not sending.'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['student not exist.'],
        });
      }

      return res.json(student);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['id not sending.'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['student not exist.'],
        });
      }

      await student.destroy();

      return res.json(null);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new StudentsController();
