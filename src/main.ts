const echo=<T>(arg:T):T=>arg

const isObj=<T>(arg:T):boolean=>{
    return (typeof arg ==="object" && !Array.isArray(arg) && arg !== null);
}

// console.log(isObj(1));
// console.log(isObj("2"));
// console.log(isObj([2]));
// console.log(isObj({name:"name"}));
// console.log(isObj(null));

interface IBoolCheck<T>{
    value:T,
    is:boolean
}

const BoolCheckValue=<T>(arg:T):IBoolCheck<T>=>{
    if (Array.isArray(arg) && !arg.length){
        return {value:arg,is:false}
    }
    if(isObj(arg)&& !Object.keys(arg as keyof T).length){
        return {value:arg,is:false}
    }
    return {value:arg,is :!!arg}
}

console.log(BoolCheckValue(true))
console.log(BoolCheckValue(false))
console.log(BoolCheckValue(undefined))
console.log(BoolCheckValue(0))
console.log(BoolCheckValue(-1))
console.log(BoolCheckValue([1,2,3]))
console.log(BoolCheckValue({name:'name'}))
console.log(BoolCheckValue({}))
console.log(BoolCheckValue(''))
console.log(BoolCheckValue(null ))



