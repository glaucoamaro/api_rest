import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        name: 'Maria',
        lastname: 'Amaro',
        email: 'maria@gmail.com',
        age: 122,
        weight: 322,
        height: 223,
      });
      return res.json(novoAluno);
    } catch (err) {
      return console.log(err);
    }
  }
}

export default new HomeController();
