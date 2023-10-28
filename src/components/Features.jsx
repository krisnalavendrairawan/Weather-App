import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import Search from './Search'
import Temp from './Temp'
import Paragraf from './Paragraf'

const features = [
  {
    name: 'Wind Speed',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon:   CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function Features({temp, windSpeed, city, humidity, icon, handleButton}) {
  return (
    <div className="bg-slate-700 py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  py-[6%] bg-white rounded-lg">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <p className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 min-[240px]:text-center">
            Weather App
          </p>
          <div className="search flex items-center mt-[5%] justify-center ml-[5%]">
            <Search />
            <Button handleButton={handleButton}/>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:max-w-4xl flex flex-col items-center">
            <div className="city flex justify-center flex-col  items-center">
                <h2 className=" text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl text-indigo-600 mr-4 "><i className="fa-solid fa-location-dot mr-2 "  style={{ color: "#c12525" }}></i>{city}</h2>
                <div className="temp flex mb-5 flex-col justify-center items-center">
                  <div className="icon w-[125px] h-[125px] bg-indigo-300 mt-5 rounded-lg flex justify-center items-center">

                  <img src={icon} alt="" className="w-[150px] h-[150px] mx-auto" />
                  </div>
                  <Temp temp={temp} />
                </div>
            </div>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="desc">
                    
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <i className="fa-solid fa-wind" style={{ color : "#fff" }}></i>
                  </div>
                  <Paragraf text={windSpeed + " km/h"} className="temp text-indigo-600" />
                  </div>
                  <Paragraf text="Kecepatan Angin" className="temp text-lg" />
                </dt>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="desc">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <i className="fa-solid fa-water" style={{ color : "#fff" }}></i>
                    </div>
                    <Paragraf text={humidity + "%"} className="temp text-indigo-600" />
                  </div>
                    <Paragraf text="Kelembaban Udara" className="temp text-lg" />
                </dt>
              </div>
            {/* {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))} */}
          </dl>
        </div>
      </div>
    </div>
  )
}