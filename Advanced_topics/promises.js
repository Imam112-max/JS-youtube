// different promises(eventually compilation)
const newpromise = new Promise(function(resolve , reject){
    // do an async task
    // DB call , cryptography , network
    setTimeout(()=>{
        console.log("Task is being executed");
        resolve()
    } , 1000)

})
newpromise.then(
    console.log("promise resolved")
)
// Instead of multiple steps just we do the simple ones
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Task being executed")
        resolve()
    },2000)
}).then(()=>{
    console.log("Promise resolved");
    
})
// passing data to the resolve #3
new Promise((resolve, reject) => {
    setTimeout( ()=>{
        resolve({username:"azfar"  , pass : "imam"})
    }, 1000)
}).then(function(user){
    console.log(user)
}
)
// Promise 4 error handling 
const promise4 = new Promise((resolve, reject) => {
    let error = true
    setTimeout(()=>{
    if(!error){
        resolve({username:"azfar" , password:"imam"})

    }else {
        reject(
            "Error something went wrong"
        )
    }},1000)
})
promise4.then((user)=>{
   console.log(user);
   
}).catch((name)=>{
    console.log(name)
}
)

// chaining in the promise resolved then for same above code

const promise5= new Promise((resolve, reject) => {
    let error = false
    setTimeout(()=>{
    if(!error){
        resolve({username:"azfar" , password:"imam"})

    }else {
        reject(
            "Error something went wrong"
        )
    }},1000)
})
promise5.then((user)=>{
   console.log(user);
   return user.username;
       // The return statement go to the chain for other then() used to be next 
}) .then((username)=>{
    console.log(username)
    
})
// If used after we can add .finally(()=> console.log("promise either resolved or rejected sucessfully"))

// Promise 5 using async 

const promise6= new Promise((resolve, reject) => {
    let error = false
    setTimeout(()=>{
    if(!error){
        resolve({username:"azfar" , password:"imam"})

    }else {
        reject(
            "Error something went wrong"
        )
    }},1000)
})

async function consumerprocmise6(){
    try {
        const response = await promise6
        console.log(response);
    }catch(error){
        console.log(error);
    }    

}
consumerprocmise6()

//Doing real example or use of the async and await using fetch 
async function getAlluser(){
    const response =  await fetch("https://api.github.com/users/azfar")
    const data = await response.json()
    console.log(data);
    
    
    
}
getAlluser()
 
//directly accessing

fetch("https://api.github.com/users/azfar")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))