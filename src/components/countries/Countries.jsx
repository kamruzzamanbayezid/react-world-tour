import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import { addCartToLocalStorage, getStoredCartFromLocalStorage, removeStoredCart } from "../../Utilities/Localstorage";


const Countries = () => {

      const [countries, setCountries] = useState([]);

      const [visitedCountry, setVisitedCountry] = useState([]);

      const [visitedFlag, setVisitedFlag] = useState([]);

      useEffect((() => {
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

      useEffect(() => {
            if (countries.length > 0) {
                  const storedCart = getStoredCartFromLocalStorage();

                  let savedFlag = [];
                  for(let flag of storedCart){
                        const findCart = countries.find(country=> country.cca3 === flag);
                        savedFlag.push(findCart)
                  }
                  setVisitedFlag(savedFlag);
            }

      }, [countries])

      const handleToAddVisitedCountry = (country) => {
            const newVisitedCountry = [...visitedCountry, country];
            setVisitedCountry(newVisitedCountry);
      }

      const handleVisitedFlag = (flag) => {
            const newVisitedFlag = [...visitedFlag, flag];
            setVisitedFlag(newVisitedFlag)
      }

      // handle click for remove flag
      const showFlagToUI = (flag) => {
            addCartToLocalStorage(flag);
      }

      const handleFlagRemove = (flag) => {
            removeStoredCart(flag)

            const previousCart = visitedFlag.filter(flags=>flags.cca3 !== flag)
            setVisitedFlag(previousCart);
      }

      return (
            <div>
                  <h3 className="text-3xl font-medium">Countries: {countries.length}</h3>

                  <div className="mt-4">
                        <h3 className="text-3xl">Visited Countries: {visitedCountry.length}</h3>
                        {/* <img src={flags.png} alt="" /> */}
                        <ul className="ml-10">
                              {
                                    visitedCountry.map((country, index) => <li key={country.name.common + index} className="font-bold list-decimal">{country.name.common}</li>)
                              }
                        </ul>
                  </div>

                  <div className="mt-4">
                        <h3 className="text-3xl">Visited Flag: {visitedFlag.length}</h3>
                        <ul className="ml-10 grid grid-cols-10 gap-2">
                              {
                                    visitedFlag.map((flag, index) => <div key={index}>
                                          <img className="w-[100px]  h-[50px]"
                                                src={flag.flags.png} alt="" />
                                          <button onClick={()=>{handleFlagRemove(flag.cca3)}}>remove</button>
                                    </div>)
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
                                          handleVisitedFlag={handleVisitedFlag}
                                          showFlagToUI={showFlagToUI}>
                                    </Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;