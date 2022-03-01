<br>

<br>

[<img src="/src/img/minting-art-2_various.gif"/>](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/1-nft-mining-inting-metamask-setup-fake-eth)

<br>

#### Branches:

##### [1-nft-mining-inting-metamask-setup-fake-eth](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/1-nft-mining-inting-metamask-setup-fake-eth)

<br>
<br>

---

<br>
<br>

## Lets Begin!

<br>

#### Start by creating the "components" folder, then inside the components folder create the Header.jsx

<br>

```javascript
import React from "react";

const Header = () => {
  return <div>Header</div>;
};

export default Header;
```

<br>

#### Now import it inside the App.js

```javascript
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```

<br>

#### Create the folder assets, there you will store the images related to the logo
