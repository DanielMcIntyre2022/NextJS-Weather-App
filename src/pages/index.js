import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Home() {

  const [ city, setCity ] = useState('');
  const [ weather, setWeather ] = useState({});
  const [ loading, setLoading ] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  console.log(city);

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => (
      console.log(response.data),
      setWeather(response.data)
    ))
    setCity('')
    setLoading(false)
  };

  return (
    <div>
      <Head>
        <title>Weather Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
          <Image src='https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
          fill
          objectFit="contain"
          className='object-cover'
      />

      {/* Search */}
      <div className='relative flex justify-between 
      items-center max-w-[500px] w-full m-auto
      text-white z-10'>
          <form className='flex justify-between items-center 
          w-full m-auto p-3 bg-transparent border border-gray-300
          text-white rounded-2xl'>
            <div>
              <input 
              onChange={(e) => setCity(e.target.value)}
              type="text" 
              placeholder="Search a city"
              className='bg-transparent border-none
               text-white focus:outline-none
               text-2xl'/>
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20}/>
            </button>
          </form>
      </div>
    </div>
  )
}
