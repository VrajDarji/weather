
const city=document.getElementById('city-input');
const data=document.getElementById('weather-data')
const form=document.querySelector('form')

form.addEventListener('submit',(event)=>{
event.preventDefault();
const cv=city.value;
console.log(cv);
getWeatherData(cv);
})
async function getWeatherData(cv){
try {
    const rsp=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cv}&units=metric&appid=f065bcc1028ce482a09bea5e948fe653`)
    if(!rsp.ok){
        throw new Error("Network response was not ok");
    }
    const d=await rsp.json();
    const temp=Math.round(d.main.temp);
    const des=d.weather[0].description;
    const icon=d.weather[0].icon;
    const det=[
        `Feels like:${Math.round(d.main.feels_like)}℃`,
        `Humidity:${d.main.humidity}%`,
        `Wind speed:${d.wind.speed}m/s`,
    ]
    data.querySelector('.icon').innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon">`
    data.querySelector('.temperature').innerHTML=`${temp}`
    data.querySelector('.description').innerHTML=`${des}`
    data.querySelector('.details').innerHTML=det.map((det)=>`<div>${det}</div>`).join("");
} catch (error) {
    data.querySelector('.description').innerHTML="Error Occured,please try again later"
}
}