import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyTable from "./components/MyTable";
import MyFilmList from "./components/MyFilmList";

function App() {
  return (
    <>
      <MyNav />
      <MyTable />
      <MyFilmList filmName="Harry Potter" />
      <MyFilmList filmName="Lord of the rings" />
      <MyFilmList filmName="Star wars" />

      <MyFooter />
    </>
  );
}

export default App;
