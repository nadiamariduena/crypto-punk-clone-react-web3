import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="page">
      <div className="app">
        <Header />
        <CollectionCard
          id={0}
          name={"bulle001"}
          traits={[{ value: 8 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmQMu9v7UaLpNFtVswB1RewvjVxz8ko8fLBSZgv1Rf3McL/0.jpg"
        />
      </div>
    </div>
  );
}

export default App;
