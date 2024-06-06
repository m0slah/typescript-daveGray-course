type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c=a as Three; //more specific

let d=<One>('world')
let e=<string | number>('world');

const addOrConcat=(a:number,b:number,c:'add'|'concat'):number|string=>{
        if ( c==='add') return a+b;

        return ''+a+b;
}

const myVal:string=addOrConcat(1,2,'add') as string;

const nextVal:number=addOrConcat(1,2,'concat')as number;

console.log("my value: "+myVal);

console.log("next value: "+ nextVal);

//10 as string; //
(10 as unknown)as string //first must to unknown

const img=document.querySelector('img')!;
const myImg=document.getElementById('#img')as HTMLImageElement;
const myNextImg=<HTMLImageElement>document.getElementById('#img');

img.src
myImg.src
myImg.src
