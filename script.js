// clear the results
function clearpara(){
    document.getElementById("cityname").innerText=" ";
    document.getElementById("type1").innerText=" ";
    document.getElementById("temp").innerText=" ";
    document.getElementById("city").value=" ";
    document.getElementById("result").style.backgroundImage='url("result.png")';
	document.getElementById("result").style.backgroundSize='cover';
	document.getElementById("result").style.backgroundPosition='center';
}


// API operations

let api_key="5be054f622b43b3a98a22ec6f33a7a78";

function getweather(city){
    var url=" https://api.openweathermap.org/data/2.5/weather";
    var fullurl=`${url}?q=${city}&appid=${api_key}&units=metric`;
    const weather_promise=fetch(fullurl);
    return weather_promise.then((response)=>{
        return response.json();
    });
}
function search(){
    var cityname=document.getElementById("city").value;
    getweather(cityname).then((response)=>{
        console.log(response);
        showdata(response);
    });
}
function showdata(data){
    switch(data.weather[0].main){
        case "Clear":
            document.getElementById("result").style.backgroundImage='url("clear.gif")';
			document.getElementById("result").style.backgroundSize='cover';
			document.getElementById("result").style.backgroundPosition='center';
			break;
        case "Clouds":
            document.getElementById("result").style.backgroundImage='url("cloud.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break;
        case "Drizzle":
            document.getElementById("result").style.backgroundImage='url("Drizzle.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break;
        case "Haze" || "Mist" || "Smoke" ||"Fog":
            document.getElementById("result").style.backgroundImage='url("Haze.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break;
        case "Rain":
            document.getElementById("result").style.backgroundImage='url("Rain.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break; 
        case "sand" || "Dust"|| "Ash"||"Squall":
            document.getElementById("result").style.backgroundImage='url("sand.webp")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break;  
        case "snow":
            document.getElementById("result").style.backgroundImage='url("snow.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
        case "Thunderstrom":
            document.getElementById("result").style.backgroundImage='url("Thunderstrome.gif")';
            document.getElementById("result").style.backgroundSize='cover';
            document.getElementById("result").style.backgroundPosition='center';
            break;   
        }
    document.getElementById("cityname").innerText="City  : "+data.name;
    document.getElementById("type1").innerText="Climate  : "+data.weather[0].main;
    document.getElementById("temp").innerText="Temp : "+data.main.temp+"°C";
}

