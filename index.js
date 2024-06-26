let cityname=document.querySelector('.weather_city');
let dateTime=document.querySelector('.weather-date-time');

let w_forecast=document.querySelector('.weather_forecast');
let weather_type=document.querySelector('.weather_data');

let w_temperature=document.querySelector('.weather_temperature');

let w_icon=document.querySelector('.weather_icon');

let w_minTem=document.querySelector('.weather_min');

let W_maxTem=document.querySelector('.weather_max');
let buton=document.querySelector('.btn')

let feels_like=document.querySelector('.Feels_Like');


let humidity=document.querySelector('.Humidity');
let Wind=document.querySelector('.Wind');
let Pressure=document.querySelector('.Pressure');

const weatherForm=document.querySelector('.weather_search')



//to get the actual country name
const getcountryName=(code)=>{
    return new Intl.DisplayNames([code],{type:"region"}).of(code);

}


//milisecond to actual date and time
function getDateTime(dt){
    const cuurDate=new Date(dt*1000)

    const options={
        weekdays:'long',
        year:"numeric",
        month:"long",
        day:'numeric',
        hour:'numeric',
        minute:'numeric'

    }
    // new Intl.DateTimeFormat('en-US').format(date)
    const formatter=new Intl.DateTimeFormat("en-us",options);
    const formatDate=formatter.format(cuurDate)
    return formatDate
}


let city='delhi';
let inputvalueCity;
//search funcility
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
     inputvalueCity=document.querySelector('.city_name')
    
    city=inputvalueCity.value;
 


})

const getWeatherData= async()=>{
    try{
        const weatherUrl=`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0b06669a793506ae54060f7df8a5fb6
        `;
        let weatherFind=await fetch(weatherUrl)
        let data=await weatherFind.json()
        console.log(data)

        const{main,name,weather,wind,sys,dt}=data;
        cityname.innerText=`${name},${getcountryName(sys.country)}`

        dateTime.innerText=getDateTime(dt)
        weather_type.innerText=weather[0].main;
        w_temperature.innerHTML=`${main.temp}&#176`;
        w_minTem.innerText=`min:${main.temp_min}`;
        W_maxTem.innerText=`min:${main.temp_max}`;
        w_forecast.innerHTML=`<img  src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`
w_forecast.classList.add('imgAdd')
        
        // humidity.innerText='helljd';
        // Wind.innerText="m/s";
        // Pressure.innerText="fdsf";
    

    }catch(error){
        console.log(error)

    }

}


document.querySelector('.btn').addEventListener("click",getWeatherData)