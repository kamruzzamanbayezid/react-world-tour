import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";


const Countries = () => {
      const [countries, setCountries] = useState([]);
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
      return (
            <div>
                  <h3 className="text-3xl font-medium">Countries: {countries.length}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                              countries.map(country => <Country country={country} key={country.cca3}></Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;