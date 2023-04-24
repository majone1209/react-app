import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferarri" = "bmw";
  const obj: UserType = {
    name: "Maja",
    lastName: "Juratovac",
    age: 32,
    height: "169cm",
    guitars: {
      prva: "Fender",
      druga: "Gibson",
    },
  };
  const fruit: string = "jabuka";
  const calorie: string = "52cal";
  const fruitcolor: string = "zelena";
  const edable: boolean = true;
  color = "green";
  color = "asd";

  //obje vrijednosti moraju biti true kako bi program ušao u if statment
  if (pi & number) {
    console.log(pi);
  }
  //samo jedna od varijabli treba biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + "5"}</h4>
        <h4>Vrijednost color varijable je: {color + "red"}</h4>
        <h4>Vrijednost color varijable je: {car}</h4>
      </div>
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>Rezultat naše funkcije je: {addOnOurValue(5, 4)}</div>
      <hr />
      <div>
        <h4>Vrijednosti našeg objekta su:</h4>
        <div>
          Ime i prezime: {obj.name} {obj.lastName}{" "}
        </div>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
        <div>
          Gitare: {obj.guitars.prva} {obj.guitars.druga}
        </div>
        <hr />
        <div>Ime voća: {fruit}</div>
        <div>Kalorijska vrijednost: {calorie}</div>
        <div>Boja voća: {fruitcolor}</div>
        <div>Jestivost: {edable ? "da" : "ne"}</div>
        <div>
          <table className="table">
            <tr className="tr">
              <th className="th">Voće</th>
              <th>Kalorije</th>
              <th>Boja</th>
              <th>Jestivost</th>
            </tr>
            <tr>
              <td className="td">{fruit}</td>
              <td>{calorie}</td>
              <td>{fruitcolor}</td>
              <td>{edable ? "da" : "ne"}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Varijable;
