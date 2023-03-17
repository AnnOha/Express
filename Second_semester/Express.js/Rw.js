const express = require('express');
const app = express();
const fs = require('fs');
app.get('/', function(req, res) {
  res.send(`'Youre an absolute  stunning murderous little creature ${String.fromCodePoint(0x1F60F)}'`);
 
  });


  app.get('/about', function(req,res){
    fs.readFile('./Rh.html', (err, data)=>{
      if(err){
        res.writeHead(500, {'Content-Type':'text/html'})
        res.write('error');
        res.end();
      } else {            
        res.writeHead(200,{ 'Content-Type':'text/html'  });            
        res.write(data);            
        res.end();       
      }    
    });
  })

app.listen(8000, function() {
  console.log('Server started on port 8000');
});

app.use((err, req, res)=>{
  console.log(err);
  res.status(500).send('error')
})

