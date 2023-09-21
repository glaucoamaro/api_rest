import multer from 'multer';
import multerConfig from '../config/multer';
import Image from '../models/Image';

const upload = multer(multerConfig).single('image');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      const image = await Image.create({ originalname, filename, aluno_id });

      return res.json(image);
    });
  }
}

export default new ImageController();
