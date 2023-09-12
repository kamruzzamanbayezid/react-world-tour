
import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleToAddVisitedCountry, handleVisitedFlag, showFlagToUI }) => {
      const { name, flags, population, area, independent } = country;

      const [visited, setVisited] = useState(false);

      const handleVisit = () => {
            setVisited(!visited);
            handleVisitedFlag(country);
            showFlagToUI(country.cca3)
      }

      return (
            <div className={`country ${visited && 'visitedCountry'}`}>
                  <h3 style={{ color: visited ? 'red' : 'black' }} className='text-2xl mb-3 font-medium'>Country Name: {name.common}</h3>
                  <img className='w-[400px] h-[150px]' src={flags.png} alt="" />
                  <h3 className='text-xl font-normal'>Population: {population}</h3>
                  <h3 className='font-bold'>Area: {area}</h3>
                  <h3 className='font-bold'>Is Independent: {independent ? 'True' : 'False'}</h3>
                  <h3 style={{ color: visited && 'red', fontWeight: visited && 'bold' }} className=' mb-4'>{visited ? "I have visited it" : "I haven't visit yet"}</h3>
                  <div className='flex justify-between'>
                        <button onClick={handleVisit} className='btn btn-neutral'>{visited ? 'Visited' : 'Visit'}</button>

                        <button onClick={() => handleToAddVisitedCountry(country)} className='btn btn-neutral'>Add visit lish</button>
                  </div>

                  <button className='mt-4 w-full btn btn-outline'>Country I'll visit</button>

            </div >
      );
};

export default Country;