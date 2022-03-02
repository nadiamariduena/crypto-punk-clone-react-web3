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

<br>
<br>

# 🥭

### The Slider / Gallery

#### Create the <u>**collection card**</u> component:

- CollectionCard.jsx

> the traits is data coming from opensea, with the traits we will have access to all the traits or properties from the "the minted art we did in the beginning"

```javascript
import React from "react";
import wethIcon from "../assets/icons-eth/weth.png";
// import ethIcon from "../assets/icons-eth/eth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt={name} />
      <div className="details"></div>
      <div className="name">
        {name} <div className="id">.#{id}</div>
      </div>
      {/* ------ */}
      <div className="priceContainer">
        <img src={wethIcon} alt={wethIcon} />
        {/* the traits is data coming from opensea, with the
        traits we will have access to all the traits or 
        properties from the "the minted art 
        we did in the beginning" */}
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
```

<br>
<br>

### Import the component above, to the app.js

- pass the props: **id, name, traits, image**

- like so:

```javascript
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
```

<br>
<br>

### 🍍 To grab the image

<br>

- Check the tutorial [min 1:18:10](https://youtu.be/hhZtiytNaBQ)

- Sign in in **ThirdWeb**: [Thirdweb](https://bit.ly/3EJLftx)

- Copy your **wallet address**

<br>

- Go to **https://testnets.opensea.io/** and past it there like you see it in Gif.

<br>

[<img src="/src/img/opensea1.gif"/>]()

<br>

> 🔴 If there is any issue (if the artwort dont appear like in the gif), make sure your **metamask is correctly connected**: [Why-can-t-I-see-my-NFTs-in-my-account](https://support.opensea.io/hc/en-us/articles/1500003338421-Why-can-t-I-see-my-NFTs-in-my-account-)

<br>

#### ✋ After that, log out and then log in, then click on the profile logo. (sometimes it does it automatically)

<br>

[<img src="/src/img/testopensea-success.gif"/>]()

<br>
<br>
<br>

#### Lets check what I have

- to get the image, right click on the image stored in opensea and choose **copy img address**

[<img src="/src/img/preview-collection-card-process.gif"/>]()

<br>

> 🔴 **I presume this is only to style the cards and later on**, he will fetch and map the data like it should be done. BUt lets see, since i am new in web3 and nfts I have no idea how it will be done :)

<br>
<br>

# 🌈

### Styling the collection card
