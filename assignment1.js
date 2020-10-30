function newFormat(students){
    for(let i in students){
      print(students[i]);
    }
  
  }
  function objToFormat(obj){
     for(const key in obj){
       console.log(key+": "+obj[key]);
     }
  }
  
  function print(obj){
     
         for(const key in obj){
             if(typeof obj[key] === "string" || typeof obj[key] === "number"){
           console.log(`${key}: ${obj[key]}`)
             }
  
           else if(Array.isArray(obj[key])){
              for(let i = 0; i<obj[key].length; i++){
                console.log("assignments => " +obj[key][i].subject +": "+obj[key][i].name);
              }
           }
  
            else{
               console.log(`${key} => `);
               objToFormat(obj[key]);
            }
         }
  }
  
