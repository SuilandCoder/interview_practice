function add(...args){
    let arg = []
    const fn = function(){
        return function(){
            arg = arg.concat(args);
            return this;
        } 
    }
    fn.sum = function(){
        return arg.reduce((p,v)=>{
            return p+v;
        })
    }
    return fn;

}

console.log(add(1)(2).sum());

