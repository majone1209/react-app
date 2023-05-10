import { useEffect, useState } from "react";

type CountryType = {
  name: CountryName;
  flags: FlagType;
  capital: string;
  currencies: CurrenciesType;
};

type CountryName = {
  common: string;
  official: string;
};

type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

type FlagType = {
  svg: string;
  png: string;
};

const Europe = () => {
  const [europeData, setEuropeData] = useState<CountryType[]>([]);

  const getEuropeData = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEuropeData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getEuropeData();
  }, []);

  return (
    <div className="container">
      <h1>Europe</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          {europeData.map((country: CountryType) => {
            return (
              <tr>
                <td>{country.name.common}</td>
                <td>
                  <img src={country.flags.svg} alt="" />
                </td>
                <td>
                  {Object.keys(country.currencies).map((currency) => {
                    return (
                      <div>
                        {country.currencies[currency].name},{" "}
                        {country.currencies[currency].symbol}
                      </div>
                    );
                  })}
                </td>
                <td>{country.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Europe;
