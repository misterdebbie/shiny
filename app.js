const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
  res.render('splash');
});

app.get('*',(req,res)=>{
  res.status(404).json({
    message:'Whoops! Bad request.'
  })
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
