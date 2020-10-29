async function getA(ele){
    const ms =1000
    const random = Math.floor(Math.random() * 3)
    if(random ===1) throw new Error(`error: ${ele}${"A"}`)
    const y = new Promise(resolve => setTimeout(resolve, ms));
  await y
  return ele+"A"
  }
  async function getB(ele){
    const ms =500
    const random = Math.floor(Math.random() * 3)
    if(random ===1) throw new Error(`error: ${ele}${"B"}`)
    const y = new Promise(resolve => setTimeout(resolve, ms));
  await y
  return ele+"B"
  }
  async function getC(ele){
    const ms =1250
    const random = Math.floor(Math.random() * 3)
    if(random ===1) throw new Error(`error: ${ele}${"C"}`)
    const y = new Promise(resolve => setTimeout(resolve, ms));
  await y
  return ele+"C"
  }
 const elements = [1,2,3,4,5,6,7,8,9,10]

 async function tryCatch(func){
     try{
        const x = await func;
        return x;
     }
     catch(err){
         return err.message;
     }
 }

 async function generate(elements){
     for(const ele of elements){
         const a = await tryCatch(getA(ele));
         console.log(a);
         const b = await tryCatch(getB(ele));
         console.log(b);
         const c = await tryCatch(getC(ele));
         console.log(c);
     }
 }

 generate(elements);