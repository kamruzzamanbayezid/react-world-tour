
import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
      console.log(country);
      const { name, flags, population, area, independent } = country;

      const [visited,setVisited] = useState(false);

      const handleVisit = () => {
            setVisited(!visited);
      }
      // const handleVisit = () => {
      //       setVisited(true);
      // }

      return (
            <div className='country'>
                  <h3 className='text-2xl mb-3 font-medium'>Country Name: {name.common}</h3>
                  <img className='w-[400px] h-[150px]' src={flags.png} alt="" />
                  <h3 className='text-xl font-normal'>Population: {population}</h3>
                  <h3 className='font-bold'>Area: {area}</h3>
                  <h3 className='font-bold'>Is Independent: {independent ? 'True' : 'False'}</h3>
                  <h3 className=' mb-4'>{visited?"I have visited it":"I haven't visit yet"}</h3>
                  <button onClick={handleVisit} className='btn btn-neutral'>{visited ? 'Visited' : 'Visit'}</button>
                  
            </div>
      );
};

export default Country;