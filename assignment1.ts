interface Input {
  name?: string | {first?:string , last?:string}|null;
  age?:number | string[] |null;
  address?: string| {line1?: string ,line2?: string , city?: string ,state?: string} |null;
  marks?: Marks | {subject: string, marks:number }[] | null ;
  assignments?: {subject: string; name: string }[] |null;
}
interface Marks {
  physics?: number
  maths?: number
  chemistry?: number
}
const input:Input[] = [
        {   name: "mahendra C",
            age :29 ,
            address:"Bengaluru , Karnataka" ,
            marks:[{subject:"physics", marks: 85}],
            assignments:[
                {subject:"physics", name:"optics"},
                    ]
        },{
            name:{first:"aniket"},
            age:["twenty", "three"],
            address:{line1:"111", line2:"chandni chowk",city:"delhi", state:"New Delhi"},
            marks:{
              physics: 74,
              maths: 92,
              chemistry: 94
            },
            assignments:[
              {subject: "physics", name: "kinematics"},
              {subject: "chemistry", name: "thermodynamics"},
              {subject: "maths", name:"definite integrals"}
            ]
        }
]
input.forEach(ele=>{

  //Getting the name
let name = ""
    if(typeof ele.name === "string") name = ele.name
    else if(ele.name ){
        if(ele.name.first) name = ele.name.first
        if(ele.name.last) name = name +" "+ele.name.last 
    }
    if(name) console.log(`name : ${name}`)

    //getting the age
let age = null ;
if(Array.isArray(ele.age)) console.log(`age : ${ele.age.reduce((prev,curr)=>prev+" "+curr)}`)
if(typeof ele.age === "number") console.log(`age: ${ele.age}`)


//getting the address
let address = ""
if(typeof ele.address === "string") address = ele.address
else if(ele.address){
  if(ele.address.line1) address = ele.address.line1
  if(ele.address.line2) address = address+", "+ele.address.line2
  if(ele.address.city) address = address+", "+ele.address.city
  if(ele.address.state) address = address+", "+ele.address.state
}
if(address) console.log(`address: ${address}`)

//getting the marks
let marks=null
if(Array.isArray(ele.marks)){
    marks = ele.marks
    for(const i in marks)
    console.log(`marks=> ${marks[i].subject}: ${marks[i].marks}`)
    }

else if(ele.marks){
  if(ele.marks.physics) console.log(`marks => physics: ${ele.marks.physics}`);
  if(ele.marks.maths) console.log(`marks => maths: ${ele.marks.maths}`);
  if(ele.marks.chemistry) console.log(`marks => chemistry: ${ele.marks.chemistry}`);
}

//getting the assignments
let assignment = null
if(ele.assignments){
  assignment = ele.assignments
  for(const i in assignment)
  console.log(`assignment=> ${assignment[i].subject}: ${assignment[i].name}`)
}

console.log()
console.log()
})
