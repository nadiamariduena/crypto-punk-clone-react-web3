import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="page">
      <div className="app">
        <Header />
        <CollectionCard id={0} name={""} traits={[{ value: 7 }]} image="" />
      </div>
    </div>
  );
}

export default App;
