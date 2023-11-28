import React, { useState } from 'react'
const WeatherDetaill = ({ weather }) => {

  console.log(weather);
  const [celsius, setCelsius] = useState(true);
  const handleCF = () => {
    setCelsius(!celsius)
  }
  const celsiusToFarenheit = (celsius) => {
    const farenheit = ((weather.main.temp * (9 / 5) + 32)).toFixed(1);
    return farenheit;
  }
  return (
    <article className='text-center grid gap-6p sm:text-center'>
      <h3 className='text-3xl text-black m-5 sm:text-5xl'>{weather.name},{weather.sys.country} </h3>
      {/* seccion temperatura, descripcion e imagen */}
      <div className='text-black grid gap-6 sm:grid sm:grid-cols-2'>
        <section className='grid grid-cols-2 h-60 bg-white/60 p-2 rounded-xl justify-items-center items-center sm:h-96 sm:justify-center sm:text-center' >
          <h3 className='col-span-2 text-xl capitalize sm:text-4xl sm:col-span-2 sm:p-4'>{weather.weather[0].description} </h3>
          <span className='text-3xl sm:text-5xl'>{celsius ? (`${weather.main.temp} °C`) : (celsiusToFarenheit(weather.main.temp)) + '°F'}</span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </div>
        </section>
        {/* seccion detalles temperatura */}
        <section className='grid grid-cols-3 gap-5 justify-items-center bg-white/60 p-2 rounded-xl sm:flex sm:flex-col sm:justify-center sm:text-4xl sm:gap-12 sm:p-16'   >
          <div className='flex gap-2'>
            <div>
              <img src="/images/ventoso.png" alt="Viento" />
            </div>
            <span>{weather.wind.speed} m/s</span>
          </div>
          <div className='flex gap-2'>
            <div>
              <img src="/images/dos.png" alt="Humedad" />
            </div>
            <span>{weather.main.humidity} %</span>
          </div>
          <div className='flex gap-2'>
            <div className='flex'>
              <img src="/images/humedad.png" alt="Presurización" />
              <img src="/images/humedad.png" alt="Presurización" />
            </div>
            <span>{weather.main.pressure} hPa</span>
          </div>
        </section>
      </div>

      <button onClick={handleCF}className='bg-white/60 border-3 text-black w-25 m-6 p-1 text-2x border-solid rounded-3xl hover:bg-sky-700 transition-colors sm:text-5xl sm:h-5xl sm:hover:items-center sh:m-3xl'>
        {celsius ? "Farenheit" : "Centigrados"}
      </button>
    </article>
  )
}

export default WeatherDetaill