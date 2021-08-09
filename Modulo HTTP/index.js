const http=require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content Type':'text/plain'})//Outros:'text/html' 'application/json'
    response.end('Hello World')
}).listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Servidor Rodando na porta 3000');
    }
})