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
    <article className='text-center grid gap-8 text-center sm:text-center'>
      <h3 className='text-2xl text-black m-3'><b>{weather.name},{weather.sys.country} </b>  </h3>
      {/* seccion temperatura, descripcion e imagen */}
      <div className='text-black grid gap-6 sm:grid sm:grid-cols-[65%,35%] sm:text-2xl'>
        <section className='grid grid-cols-2 h-[200px] bg-white/60 p-2 rounded-xl justify-items-center items-center sm:justify-center sm:text-center sm:h-[250px] ' >
          <h3 className='col-span-2  text-[18px] capitalize  sm:col-span-2 sm:p-4 sm:text-[18px]'><strong>  {weather.weather[0].description}</strong> </h3>
          <span className='text-[20px]'> <b> {celsius ? (`${weather.main.temp} °C`) : (celsiusToFarenheit(weather.main.temp)) + '°F'}</b></span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </div>
        </section>
        {/* seccion detalles temperatura */}
        <section className='grid grid-cols-3 gap-2 justify-items-center bg-white/60 p-2 rounded-xl sm:flex sm:flex-col sm:justify-center sm:text-[14px] sm:gap-5 '   >
          <div className='flex gap-2'>
            <div>
              <img src="/images/ventoso.png" alt="Viento" />
            </div>
            <span> <strong>{weather.wind.speed} m/s</strong></span>
          </div>
          <div className='flex gap-2'>
            <div>
              <img src="/images/dos.png" alt="Humedad" />
            </div>
            <span><strong>{weather.main.humidity}</strong> %</span>
          </div>
          <div className='flex gap-2'>
            <div className='flex'>
              <img src="/images/humedad.png" alt="Presurización" />
              <img src="/images/humedad.png" alt="Presurización" />
            </div>
            <span><strong>{weather.main.pressure} hPa</strong></span>
          </div>
        </section>
      </div>

      <button onClick={handleCF}className='top-20  bg-white/60  border-1  m-[0_auto] text-black p-3 text-[12px] border-solid rounded-3xl hover:bg-sky-700 transition-colors sm:text-[16px] sm:h-[45px] sm:hover:items-center sm:p- '>
        <b>{celsius ? "Farenheit" : "Centigrados"} </b>
      </button>
    </article>
  )
}

export default WeatherDetaill