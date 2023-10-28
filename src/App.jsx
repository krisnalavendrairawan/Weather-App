import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Features from './components/Features';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const apiKey = 'fc43400dc47fd47e4e1ee5cc64ad1d8d'



function App() {
  const [weather, setWeather] = useState(null)
  const [clouds, setClouds] = useState(null)
  const [temp, setTemp] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [city, setCity] = useState(null)
  const [icon, setIcon] = useState(null)

  const handleButton = () => {
    const city = document.getElementById('search').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(res => {
  console.log(res.data)
  const weather = res.data.weather[0].main
  const clouds = res.data.clouds.all
  const temp = res.data.main.temp
  const humidity = res.data.main.humidity
  const wind = res.data.wind.deg
  const windSpeed = res.data.wind.speed
  const city = res.data.name
  const icon = res.data.weather[0].icon
  setWeather(weather)
  setClouds(clouds)
  setTemp(Math.round((temp - 273.15)*1.000000))
  setHumidity(humidity)
  setWind(wind)
  setWindSpeed(windSpeed)
  setCity(city)
  setIcon("https://openweathermap.org/img/wn/"+icon+".png")

  //saat sudah diclik valuenya jadi kosong
  document.getElementById('search').value = ''
})
//buatkan untuk error
.catch(err => {
  console.log(err);
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Kota Tidak Ditemukan!',
  })
})
}

useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bandung&appid=${apiKey}`)
.then(res => {
  // console.log(res.data)
  const weather = res.data.weather[0].main
  const clouds = res.data.clouds.all
  const temp = res.data.main.temp
  const humidity = res.data.main.humidity
  const wind = res.data.wind.deg
  const windSpeed = res.data.wind.speed
  const city = res.data.name
  const icon = res.data.weather[0].icon
  setWeather(weather)
  setClouds(clouds)
  setTemp(Math.round((temp - 273.15)*1.000000))
  setHumidity(humidity)
  setWind(wind)
  setWindSpeed(windSpeed)
  setCity(city)
  setIcon("https://openweathermap.org/img/wn/"+icon+".png")
  console.log(humidity);

})
}, [])



  return (
    // <div className="main w-[100%]  flex justify-center mt-[5%] md:max-h-screen">
    //   <div className="card bg-gradient-to-br from-teal-400 from-50% via-sky-500 via-65% to-indigo-400 to-80% w-[40%] md:max-h-screen text-white flex pt-[20px] flex-col rounded-lg">
    //     <Header />
    //     <div className="search flex justify-center">
    //       <Search />
    //       <Button />
    //     </div>
    //     <div className="body flex justify-center mt-[5%]">
    //     <Container weather={weather} temp={temp} clouds={clouds} humidity={humidity} wind={wind} windSpeed={windSpeed} city={city} icon={icon}/>
    //     </div>
    //   </div>
    // </div>

    <div >
      <Features weather={weather} temp={temp} clouds={clouds} humidity={humidity} wind={wind} windSpeed={windSpeed} city={city} icon={icon} handleButton={handleButton} />
    </div>
  );
}

export default App;
