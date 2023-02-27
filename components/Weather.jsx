import Image from "next/image";

function Weather({data}) {
console.log(data)
  return (
    <div className="relative flex flex-col 
    justify-between max-w-[500px] w-full h-[90vh]
    m-auto p-4 text-gray-300 z-10">
        <div className="relative flex justify-between pt-12">
            <div className="flex flex-col items-center">
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt='/'
                width='100'
                height='100'
                className="absolute"
                />
                <p className="text-2xl">{data.weather[0].main}</p>
            </div>
            <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Bottom */}
        <p>Weather in {data.name}</p>
        <div>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels Like</p>
        </div>
    </div>
  )
}

export default Weather;