<br>

#### Login in **ThirdWeb**: [Thirdweb](https://bit.ly/3EJLftx)

#### Login [Opensea](https://testnets.opensea.io/)

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

#### this is the basic set up

```javascript
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
          traits={[{ value: 8 }]} //price
          image="https://ipfs.thirdweb.com/ipfs/QmQMu9v7UaLpNFtVswB1RewvjVxz8ko8fLBSZgv1Rf3McL/0.jpg"
        />
      </div>
    </div>
  );
}

export default App;
```

<br>
<br>

# Opensea 🌟

> **OpenSea is an online marketplace that allows users to purchase, sell, and trade non-fungible tokens (NFTs). ...** Digital collectibles can either be bought directly by accepting the fixed price the seller set or by bidding on it (leaving the seller to either accept or decline the offer

<br>
<br>

### 🍍 To grab the image

<br>

- Check the tutorial [min 1:18:10](https://youtu.be/hhZtiytNaBQ)

- Sign in **ThirdWeb**: [Thirdweb](https://bit.ly/3EJLftx)

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

[<img src="/src/img/basic-card-setup.gif"/>]()

```scss
.collectionCard {
  color: rgb(253, 253, 253);
  background-color: #1a1c1e;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin-right: 30px;

  .details {
    padding: 20px;
  }

  //@at-root
  .name {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 900;
    .id {
      color: #a1a5b0;
      font-size: 18px;
      font-weight: 600;
    }
  }
  img {
    width: 100%;
  }
  .priceContainer {
    display: flex;
    align-items: center;
    margin-top: 10px;
    object-fit: contain;
    .wethImg {
      height: 23px;
      width: 15px;
    }
    .price {
      margin-left: 5px;
      font-weight: 600;
    }
  }
}
```

<br>
<br>

---

<br>
<br>

# 🍨

## Fetching the data

#### Here we will be using the state for the fetching and also the useEffect

```javascript
import React, { useState, useEffect } from "react";
//
//
```

### [Axios](https://github.com/nadiamariduena/merging-back-frontend-mern2021/blob/master/z_AXIOS.md)

**[READ MORE: Fetch and Axios](https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch)**

#### We will be using using axios to fetch the data

- install it

```javascript
npm i axios
//  "axios": "^0.26.0",
```

<br>

#### Now that you have axios installed, import it:

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";
```

<br>

#### Making the API call

```javascript
// const CollectionCard = ({ id, name, traits, image }) => {

//
const [punkaListData, setPunkaListData] = useState([]);
//
//
```

> We are going to store all our punkas here: **punkaListData ✋**

<br>

#### Now we need to use the <u>useEffect</u>, as we are going to make an API call

```javascript
useEffect(() => {}, []);
```

<br>

#### Insert the url inside the useEffect and the async {}

```javascript
useEffect(() => {
  const getMyNfts = async () => {
    //
    const openseaData = await axios.get();

    //
  };
}, []);
```

#### To retrieve assets from our API, call the /assets endpoint with the desired filter parameters.

#### [Retrieving assets](https://docs.opensea.io/reference/getting-assets)
