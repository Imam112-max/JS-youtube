const  cityinput = document.querySelector("#city")
const  result = document.querySelector("#result")
const form = document.querySelector("form")
form.addEventListener("submit" ,  async (e)=> {
    e.preventDefault()
    const cityname = cityinput.value 
    if(cityname = ""){
        result.innerHTML = "Please Enter the value"
        

    }else{
    const response = await fetch(
`https://geocoding-api.open-meteo.com/v1/search?name=${cityname}&count=1&language=en&format=json`
    )

    const data = response.json()

    console.log(data);
    if(!data){
        result.innerHTML= "Not found city"

    }else{
        result.innerHTML =  `
            City: ${data.results[0].name} <br>
            Country: ${data.results[0].country}
    `
    }
}

           
})