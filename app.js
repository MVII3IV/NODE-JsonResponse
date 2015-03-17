var express = require('express');
var app = express();

app.listen(3000);
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');



app.get('/', function(req, res){
    res.render('index');
});


app.get('/users', function(req, res){

    var users = [
    
        
        {
            'user' : 'Erick Dom',
            'position' : 'Associate Programmer',
            'department' : 'Alldata Germany'
        }
         ,
        {
            'user' : 'Raul Roman',
            'position' : 'Programmer Analist',
            'department' : 'Alldata Germany'
        }
        ,
        
    ];
    
    res.send(users);
    
});