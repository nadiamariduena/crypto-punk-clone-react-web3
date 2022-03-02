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
<br>

#### Create the folder assets, there you will store the images related to the logo

##### Download Assets: [here](https://drive.google.com/drive/folder...)

<br>
<br>

#### Add the logo to the header and then resize it

```javascript
import React from "react";

import punkaLogo from "./assets/header/cryptopunk-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkaLogo} className="imgBox-punkLogo" alt={punkaLogo} />
      </div>
    </div>
  );
};

export default Header;
```

#### resize

```scss
.header {
  h2 {
    color: rgb(0, 60, 255);
  }
  //
  // LOGO
  .imgBox-punkLogo {
    width: 200px;
  }
}
```

<br>

#### The search-bar

```javascript
<div className="searchBar">
  <div className="searchIconContainer">
    <img src={searchIcon} alt={searchIcon} />
  </div>
  <input className="searchInput" placeholder="Collection, item or user" />
</div>
```

```scss
// searchbar
.searchBar {
  background-color: #1c1c1e;
  height: 50px;
  flex: 1; //with this, the bar will dinamically stretch
  display: flex;
  align-items: center;
  border-radius: 50px;
  //
  //
  .searchIconContainer {
    margin: 10px;
  }
  //
  //
  .searchInput {
    background-color: transparent;
    border: none;
    width: 100%;
  }
}
```

<br>

[<img src="/src/img/search-bar-progress.gif"/>]()

<br>

<br>

```javascript
import React from "react";

import punkaLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import swithIcon from "../assets/header/theme-switch.png";

//
//
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkaLogo} className="imgBox-punkLogo" alt={punkaLogo} />
      </div>
      {/*
       */}
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt={searchIcon} />
        </div>
        <input className="searchInput" placeholder="Collection, item or user" />
      </div>
      {/*
       */}
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      {/*
       */}

      <div className="headerActions">
        <div className="themeSwithContainer">
          <img src={swithIcon} alt={swithIcon} />
        </div>
      </div>
      {/*
       */}
      <div className="loginButton">Gettin</div>
    </div>
  );
};

export default Header;
```

##### scss

```scss
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: pink;
  height: 100px;
  margin: 10px;
  h2 {
    color: rgb(0, 60, 255);
  }
  //
  // LOGO
  .imgBox-punkLogo {
    width: 200px;
  }
  //
  // searchbar
  .searchBar {
    background-color: #1c1c1e;
    height: 50px;
    flex: 1; //with this, the bar will dinamically stretch
    display: flex;
    align-items: center;
    border-radius: 50px;
    //
    //
    .searchIconContainer {
      margin: 10px;
    }
    //
    //
    .searchInput {
      background-color: transparent;
      border: none;
      width: 100%;
      outline: none;
      color: #eee;
      font-size: 0.9em;
    }
  }
  //
  //
  .headerItems {
    display: flex;
    p {
      margin: 0 10px;
    }
  }

  //
  //
  .headerActions {
    display: flex;
    align-items: center;
    .themeSwithContainer {
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1c1c1e;
      border-radius: 50px;
      padding: 15px;
      object-fit: contain;
      img {
        height: 25px;
      }
    }
  }

  //
  //GETTIN BTN

  .loginButton {
    background: linear-gradient(to right, #59f9b7, #66feea);
    padding: 10px 40px;
    border-radius: 50px;
    color: #070707;
  }

  //
  //
}
```

[<img src="/src/img/header-basic-done.jpg"/>]()
