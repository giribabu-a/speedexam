const express = require("express");
const cors = require("cors");
const pool =  require("./db");

const port = 5034 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json())

app.post('/api/addFolder', (req, res) => {
    const { folder } = req.body;
    const query = 'INSERT INTO exams (domain) VALUES (?)';
    pool.query(query, [folder], (err, result) => {
      if (err) {
        console.error('Error adding folder:', err);
        res.status(500).send('Failed to add folder');
        return;
      }
      res.status(200).send('Folder added successfully');
    });
});

app.get('/api/getData', (req, res) => {
    const query = 'SELECT * FROM exams';
    pool.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Failed to fetch data');
        return;
      }
      res.status(200).json(results);
    });
  });


app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})