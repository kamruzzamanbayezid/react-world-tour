import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";



const Countries = () => {

      const [countries, setCountries] = useState([]);

      const [visitedCountry, setVisitedCountry] = useState([]);

      const [visitedFlag, setVisitedFlag] = useState([]);

      useEffect((() => {
            // fetch('https://restcountries.com/v3.1/all')
            // .then(response=>response.json())
            // .then(data=>console.log(data))
            const fetchCountryData = async () => {
                  try {
                        const response = await fetch('https://restcountries.com/v3.1/all');
                        const data = await response.json();
                        setCountries(data);
                  } catch (error) {
                        console.log(error);
                  }
            }
            fetchCountryData();
      }), [])

      const handleToAddVisitedCountry = (country) => {
            const newVisitedCountry = [...visitedCountry, country];
            setVisitedCountry(newVisitedCountry);
      }

      const handleVisitedFlag = (flag) => {
            const newVisitedFlag = [...visitedFlag, flag];
            setVisitedFlag(newVisitedFlag)
      }
      console.log(visitedFlag);
      return (
            <div>
                  <h3 className="text-3xl font-medium">Countries: {countries.length}</h3>

                  <div className="mt-4">
                        <h3 className="text-3xl">Visited Countries: {visitedCountry.length}</h3>
                        {/* <img src={flags.png} alt="" /> */}
                        <ul className="ml-10">
                              {
                                    visitedCountry.map(country => <li key={country.name.common} className="font-bold list-decimal">{country.name.common}</li>)
                              }
                        </ul>
                  </div>

                  <div className="mt-4">
                        <h3 className="text-3xl">Visited Flag: {visitedFlag.length}</h3>
                        <ul className="ml-10 grid grid-cols-10 gap-2">
                              {
                                    visitedFlag.map((flag, index) => <img className="w-[100px]  h-[50px]" key={index} src={flag.flags.png} alt="" />)
                              }
                        </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                              countries.map(country =>
                                    <Country
                                          country={country}
                                          key={country.cca3}
                                          handleToAddVisitedCountry={handleToAddVisitedCountry}
                                          handleVisitedFlag={handleVisitedFlag}>
                                    </Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;