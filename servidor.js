const http = require('http');
const fs = require('fs');

// importando 
const _ = require('lodash')

const server = http.createServer((req, res)=>{
console.log(req.url, req.method);

// //definindo o tipo de conteúdo do cabeçalho
// res.setHeader('Tipo-Conteudo', 'texto/simples');


// //escrevendo a resposta
// res.write('<head><link rel="stylesheet" href="#"></head>');
// res.write('<p>Ola pessoal</p>');
// res.write('<p>Ola novamente, pessoal</p>');
// res.end();

//definindo o conteúdo do cabeçalho por html
res.setHeader('Tipo-Conteudo', 'texto/html');


//caminho dos arquivos html
let caminho = './views/';

switch(req.url){
    case '/':
        caminho += 'index.html';
        res.statusCode = 200;
        break;
    
    case '/sobre':
        caminho += 'sobre.html';
        res.statusCode = 200;
        break;

    case '/nossaempresa':
        res.statusCode = 301;
        res.setHeader('Location', '/sobre');
        break;

    default:
        caminho += '404.html';
        res.statusCode = 404;
        break;
}

//enviando um arquivo html
fs.readFile(caminho, (err, data)=> {
    if(err){
        console.log(err);
        res.end();
    } else {
        //res.write(data);
        res.end(data);
    }
});

});


server.listen(3000, 'localhost', () => {
console.log("ouvindo requisição na porta 3000");


// testando lodash aabreviar comandos de linha de codigos 

const saudacao = _.once(() => {
    console.log('Boas Vindas ao nosso site')
})

saudacao();

});