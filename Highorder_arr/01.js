const arr = [1 , 2 , 4 , 5 ]
for(const num of arr){
    console.log(num);
}

//Maps => objects with only unique values 
const map = new Map()
map.set("In" , "india")
console.log(map)
// returns an array of key and values pairs
for(const key of map){
    console.log(key);
}
// for single iteration giving only the key value not the array 
for (const [key , value] of map){
    console.log(key  , value )
}

// object can have duplicated values not only the single values 

