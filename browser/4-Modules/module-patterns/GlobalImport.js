//IIFEs can take arguments while they are invoked.

(function twoParam(msg, times){
    for(let i=1; i<=times; i++)
    {
        console.log(msg);
    }

})("Hello!",5);

(function sum(x,y){
   console.log(x+y);
})(10,5);