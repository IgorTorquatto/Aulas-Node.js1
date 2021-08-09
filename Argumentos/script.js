 let args=process.argv.slice(2)
 let a =Number(args[1])
 let b= Number(args[2])
 let c=''

 function soma(x,y){
    return x+y
}
function multi(x,y){
    return x*y
}
 
 if (args[0]=='s'){
     c=soma(a,b)
 }else if(args[0]=='m'){
     c=multi(a,b)
 }else{
     c='Opção Inválida'
 }

 console.log(c);