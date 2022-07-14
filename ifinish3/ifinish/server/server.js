const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors')
// const path = require('path');


const PORT = 3000;
const api = require('./routes/api');
const app = express();
//app.use(cors())
//app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.listen(port, function(){
//     console.log("Server running on localhost:" + port);
// });

app.get('/',function(req,res){
    res.send('hello')
});

app.listen(PORT,function(){
    console.log('port running'+PORT)
})