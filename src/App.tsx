import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Africa from "./pages/africa";
import Breweries from "./pages/breweries";
import Europe from "./pages/europe";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import Petlje from "./pages/petlje";
import Pokemons from "./pages/pokemons";
import Varijable from "./pages/varijable";
import Vjezba0305 from "./pages/Vjezba0305";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import "./styles/styles.scss";
import ChatBox from "./pages/chatbox-dz";
import Vjezba1505 from "./pages/1505";
import ToDoList from "./pages/todolist";
import PovijestPlesa from "./pages/povijestplesa";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/ispit", element: <Ispit /> },
    { path: "/exe", element: <Exe /> },
    { path: "/mlinar", element: <Mlinar /> },
    { path: "/varijable", element: <Varijable /> },
    { path: "/petlje", element: <Petlje /> },
    { path: "/vjezba2604", element: <Vjezba2604 /> },
    { path: "/vjezba2804", element: <Vjezba2804 /> },
    { path: "/vjezba0305", element: <Vjezba0305 /> },
    { path: "/breweries", element: <Breweries /> },
    { path: "/pokemons", element: <Pokemons /> },
    { path: "/europe", element: <Europe /> },
    { path: "/africa", element: <Africa /> },
    { path: "/chatbox", element: <ChatBox /> },
    { path: "/vjezba1505", element: <Vjezba1505 /> },
    { path: "/todolist", element: <ToDoList /> },
    { path: "/povijestplesa", element: <PovijestPlesa /> },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
