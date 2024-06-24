/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as multer from 'multer';
import * as path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.FILE_ROOT);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

export default storage;
