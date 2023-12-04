let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/catalogo-angular'));

app.get('/*',(req, resp)=> {
        resp.sendFile(__dirname+'/dist/catalogo-angular/index.html')
});

app.listen(process.env.PORT || 8080);