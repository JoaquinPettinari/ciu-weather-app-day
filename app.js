// app key db42b45b4e50fe527c5cf512801d1631
var respuesta

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-34.6524000&lon=-58.6374700&lang=sp&units=metric&exclude=hourly&appid=db42b45b4e50fe527c5cf512801d1631')
.then(response => response.json())
.then(res => respuesta = res)
.then(res => agregarDatos())


var hoy = new Date()

function agregarDatos(){


    document.getElementById("fechaActual").innerHTML += hoy.toString().substr(0,16)
    document.getElementById("horaActual").innerHTML += hoy.toString().substr(16,5)
    document.getElementById("lugarActual").innerHTML += "Castelar" + `<img src="imagenes/localizacion_icono.png">`

    const icono = respuesta.current.weather[0].icon;
    const url = ` https://openweathermap.org/img/wn/${icono}@2x.png`;
    
    document.getElementById("iconoClima").innerHTML += `<img src=${url} width="50" height="50">`;
    document.getElementById("tituloClima").innerHTML += respuesta.current.weather[0].main;

    document.getElementById("temperatura").innerHTML += `${parseInt(respuesta.current.temp)}`
    
    document.getElementById("maximo").innerHTML += `${parseInt(respuesta.daily[0].temp.max)}°C↑`;
    document.getElementById("minimo").innerHTML += `${parseInt(respuesta.daily[0].temp.min)}°C↓`;

    document.getElementById("humedad").innerHTML += `${respuesta.current.humidity}%`
    document.getElementById("presion").innerHTML += `${respuesta.current.pressure}mBar`
    document.getElementById("viento").innerHTML += `${parseInt(respuesta.current.wind_speed)}km/h`

    const hoyRespueta = respuesta.daily[0]
    
    var sunrise = new Date(hoyRespueta.sunrise * 1000)
    document.getElementById("amanecer").innerHTML += sunrise.getHours() + ":" + sunrise.getMinutes()
    
    var sunset = new Date(hoyRespueta.sunset * 1000)
    document.getElementById("puestaSol").innerHTML += sunset.getHours()+ ":" + sunset.getMinutes()
    
    var horasDeSol = new Date(hoyRespueta.dt * 1000)
    document.getElementById("horasDeSol").innerHTML += horasDeSol.getHours()

    const mañana = new Date(hoy);

        for ( i = 1; i <= 3; i ++) {
            const icon = respuesta.daily[i].weather[0].icon;
            const url = ` https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById(`iconoClima${i}`).innerHTML = `<img src=${url} width="40" height="40">`;
            document.getElementById(`maximo${i}`).innerHTML = `${parseInt(respuesta.daily[i].temp.max)}°C↑`;
            document.getElementById(`minimo${i}`).innerHTML = `${parseInt(respuesta.daily[i].temp.min)}°C↓`;
            mañana.setDate(hoy.getDate() + i);
            document.getElementById(`fechaDia${i}`).innerHTML = `
                ${mañana.toString().substr(0,3)}, ${mañana.toString().substr(7,3)}`
        }
}


/*
clear:both;
    float: left;
    text-align: right;
*/