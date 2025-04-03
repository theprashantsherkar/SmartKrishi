import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { database } from '@/firebase/firebase';
import Card from '@/components/custom/Card';
import {
  Droplet,
  Thermometer,
  Sun,
  CloudRain,
  Leaf,
  Sprout,
  AlarmSmoke,
  CloudLightning,
  SnailIcon
} from 'lucide-react';
import { Button } from '@/components/ui/Button';



function Values() {

  const [data, setData] = useState({});
  const [insect, setInsect] = useState();
  const [waterPump, setWaterPump] = useState(false);

  useEffect(() => {
    const dataRef = ref(database, 'sensor');
    onValue(dataRef, (snapshot) => {
      if (snapshot.val()) {
        setData(snapshot.val());
      } else {
        console.log('no data available');
      }

    })
    return () => {

    }
  }, []);

  useEffect(()=>{
setInsect(JSON.stringify(data.Insect));
  }, [data])

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data.Nitrogen || !data.Potassium || !data.humidity || !data.pH) {
  return <div className='h-screen flex items-center justify-center'>Loading...</div>;
}

  return (
      <div className='h-screen flex flex-col justify-center items-center gap-8'>
      <div className='text-4xl font-bold'>Real time data</div>
      <div className='text-center border border-gray-300 px-5 py-3 rounded-md hover:scale-105 hover:shadow-md hover:shadow-slate-300 transition-all hover:cursor-pointer'>
        <h1 className='text-2xl font-bold flex items-center justify-center gap-2'><SnailIcon className='text-orange-500'/>Insect Detection</h1>
        <p className='font-bold text-xl'>{insect == 1?"Insect Detected":(insect == 2?"Butterfly detected":"No Insects")}</p> 
      </div>

      <h1 className='text-2xl font-bold'>Soil Parameters:</h1>
      <div className='flex gap-4'>
        <Card title={"Nitrogen"} amount={JSON.stringify(data.Nitrogen)} unit={"ppm"} icon={<Sprout />} colors={"text-green-500"} />
        <Card title={"Phosphorus"} amount={JSON.stringify(data.Phosphorus)} unit={"ppm"} icon={<CloudLightning />} colors={"text-blue-500"} />
        <Card title={"Potassium"} amount={JSON.stringify(data.Potassium)} unit={"ppm"} icon={<Sun />} colors={"text-yellow-500"} />
        <Card title={"Humidity"} amount={JSON.stringify(data.humidity)} unit={"ppm"} icon={<Droplet/>} colors={"text-blue-500"}/>
        <Card title={"pH"} amount={JSON.stringify(data.pH)} icon={<Leaf />} colors={"text-green-500"} />

      </div>
      <div className='flex gap-4'>
        <Card title={"Smoke"} amount={JSON.stringify(data.smoke)} unit={""} icon={<AlarmSmoke />} colors={"text-red-500"} />
        <Card title={"Soil Moisture"} amount={JSON.stringify(data.soilmositure)} unit={"%"} icon={<Droplet />} colors={"text-blue-500"} />
        <Card title={"Temperature"} amount={JSON.stringify(data.temperature)} unit={"`C"} icon={<Thermometer />} colors={"text-red-500"} />
        <Card title={"Rain"} amount={JSON.stringify(data.Rain)} unit={""} icon={<CloudRain />} colors={"text-blue-500"} />

      </div>
<h1 className='text-2xl font-bold'>
  Pump Operators:
</h1>
<div>
  <Button variant={"default"} size={"lg"} className='bg-black text-white' onClick={() => { setWaterPump(!waterPump) }}>{waterPump ? "Turn Off Water Pump" : "Turn On Water Pump"}</Button>
  
</div>
    </div>
  )
}

export default Values