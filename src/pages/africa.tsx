import { useEffect, useState } from "react";
import leftside from "./../assets/leftside.svg";
import rightside from "./../assets/rightside.svg";

type CountryType = {
  name: CountryName;
  maps: CountryMaps;
  population: number;
  borders: string[];
  car: CountryCars;
};

type CountryName = {
  common: string;
  official: string;
};

type CountryMaps = {
  googleMaps: string;
};

type CountryCars = {
  side: string;
  signs: string[];
};

const Africa = () => {
  const [africaData, setAfricaData] = useState<CountryType[]>([]);

  const getAfricaData = () => {
    fetch(`https://restcountries.com/v3.1/region/africa`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAfricaData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAfricaData();
  }, []);

  return (
    <div className="container">
      <h1>Africa</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Maps</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {africaData.map((country: CountryType) => {
            return (
              <tr key={country.name.official}>
                <td>{country.name.common}</td>
                <td>
                  <a href={country.maps.googleMaps}>Maps</a>
                </td>
                <td>{country.population.toLocaleString()}</td>
                <td>{country.borders + ","} </td>
                <td>
                  <span>
                    {country.car.side === "left" ? (
                      <img src={leftside} alt="left" />
                    ) : (
                      <img src={rightside} alt="right" />
                    )}
                  </span>
                  <span>
                    {country.car.signs.map((cars) => {
                      return cars + " ";
                    })}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Africa;
