import { useEffect } from "react";

const Vjezba0305 = () => {
  //Zadaci
  //1. dohvatimo box i promijenimo mu background-color (kroz JS)

  const boja = document.getElementsByClassName("box")[0] as HTMLDivElement;
  boja.style.backgroundColor = "red";

  //2. dodamo dodatnu klasu na box koja će povećati njegove dimenzije
  //3. na klik animiramo box do 30px i nazad (kroz JS)
  //3.2. animirati box dijagonalno do (39px, 30px) i nazad do 50px
  //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izračunati sumu 2 parametra i rezultat ispisati unutar box-a
  //5. dodaj onClick event i na klik smanji dimenzije box-a

  let position = 0;
  let reverse = false;

  useEffect(() => {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";

      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 200);
  }, []);

  const handleClick = () => {
    //da se smanji button box.style.width = manja vrijednost
  };

  return (
    <div className="container">
      <h1>Vjezba 0305</h1>
      <hr />
      <div className="box"></div>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
};

export default Vjezba0305;
