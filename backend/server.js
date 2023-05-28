
const express = require('express');
const multer = require('multer');
const connectDB = require('./dbconnect');
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();


const app = express();
app.use(morgan('dev'))
const port = process.env.PORT;
app.use(cors())

connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(express.json());

const FormData = require('./models/formData');

app.get('/submit', (req, res)=>{
    res.json({message: "backend"})
})

app.post('/submit', upload.single('file'), async (req, res) => {
  const { name, technology } = req.body;
  const file = req.file.filename;

  try {
    const newFormData = new FormData({ name, file, technology });
    await newFormData.save();
    res.json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save form data' });
  }
});


app.get('/formData', async (req, res) => {
  try {
    const formData = await FormData.find();
    res.json(formData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve form data' });
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
