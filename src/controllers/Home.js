class HomeController {
  async index(req, res) {
    try {
      return res.json('index');
    } catch (err) {
      return console.log(err);
    }
  }
}

export default new HomeController();
