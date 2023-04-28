const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];

  for (let i = 0; i < arr.length; i++) {
    //if (arr[i] == "baka") {
    //  break;
    //}
    //console.log(arr[i]);
    //}
    //if (arr[i] == "tata") {
    //delete arr[i];
    //}
  }

  //delete arr[1];

  //arr.push("Maja");

  //console.log("nas array je:", arr);

  //Funkcije

  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //Objekti

  //Kreiraj objekt ime objekta: 8 vrijednosti ubacite, vezane uz auto

  type carType = {
    [key: string]: number | string;
  };
  let car: carType = {
    obujamMotora: 1600,
    boja: "plava",
    brojVrata: 5,
    cijena: "70000 eura",
    markaModel: "Ford Mustang",
    snaga: "310kw",
    kotaca: 4,
    maxBrzina: 220,
  };

  const recenica = `Specifikacije ovog auta su: ${car.boja} ${car.markaModel} ${car.snaga} ${car.cijena}`;
  console.log(recenica);

  const printValue = (key: string) => {
    return car[key];
  };

  return (
    <div className="container">
      <h1>Nizovi</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <div>{recenica}</div>
      <div>{JSON.stringify(car, null, 2)}</div>
      <div>{printValue("snaga")}</div>
    </div>
  );
};

export default Vjezba2604;
