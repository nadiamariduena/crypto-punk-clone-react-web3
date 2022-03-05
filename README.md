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

<br>

##### To retrieve assets from our API, call the /assets endpoint with the desired filter parameters.

#### [Retrieving assets](https://docs.opensea.io/reference/getting-assets)

[<img src="/src/img/opensea1.gif"/>]()

<br>

---

<br>

# OpenSea API ✋

##### [testing mode](https://docs.opensea.io/reference/retrieving-a-single-contract-testnets) 👍

<br>

```javascript
//example assets
https://testnets-api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/

//
// example: Retrieving a single contract
https://testnets-api.opensea.io/api/v1/asset_contract/0x06012c8cf97bead5deae237070f9587f8e7a266d
```

<br>

<br>

[<img src="/src/img/retrieving-options.gif"/>]()

<br>

> https://testnets-api.opensea.io/api/v1/asset_contract/**{asset_contract_address}**

<br>

> **To retrieve an individual from our API**, call the /**asset endpoint with the address of the asset's contract and the token id** 🔴. The endpoint will return an Asset Object.

<br>

---

<br>

#### OpenSea API

- 🔴 not testing: [OpenSea API](https://docs.opensea.io/reference/retrieving-a-single-asset)

```javascript
//example assets
https://api.opensea.io/api/v1/assets


//
// example: Retrieving a single contract
https://api.opensea.io/api/v1/asset_contract/0x06012c8cf97bead5deae237070f9587f8e7a266d
```

<br>
<br>

---

#### The one I will be using, will have one more property

```javascript
// before
https://testnets-api.opensea.io/api/v1/asset_contract/0x06012c8cf97bead5deae237070f9587f8e7a266d

//
//   after
https://testnets-api.opensea.io/assets?asset_contract_contract_address=0x06012c8cf97bead5deae237070f9587f8e7a266d
```

<br>

### Getting this error

```javascript
Manifest: Line: 1, column: 1, Syntax error.
xhr.js:210 GET https://testnets-api.opensea.io/assets?asset_contract_contract_address=undefined 400

    at createError (createError.js:16)
    at settle (settle.js:17)
    at XMLHttpRequest.onloadend (xhr.js:66)
```

> Its saying that my key variable inside the **.env** is undefined 🔴

<br>

#### I Tested adding the long code and it worked, so there s some issue with the .env . Anyway.. after i tested with the long code it showed me an array, but it was an empty array.

<br>

# 🌈

> **The reason:** The teacher didnt add the correct api reference, as he was grabbing the **wallet id** instead of the collection id

<br>

[<img src="/src/img/id_collection-to-add-in-axios.gif"/>]()

<br>
<br>

### This works!!!

```javascript
useEffect(() => {
  const getMyNfts = async () => {
    // the collection id
    const openseaData = await axios.get(
      `https://testnets-api.opensea.io/assets?asset_contract_address=0x20978D62136a8855E29e1Cc6b841f7dacaF578A2&order_direction=asc`
    );
    //
    console.log(openseaData.data.assets);
  };
  return getMyNfts();
}, []);
```

<br>

[<img src="/src/img/api_collection-success.gif"/>]()

<br>
<br>

### Now that we have access to the data from the Opensea

- store it in the state, so that we can pass it to other components

```javascript
      console.log(openseaData.data.assets);
      // assign the state to the data
      setPunkaListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
```

<br>

#### Create a new component and call it: "PunkList.jsx"

- In this component you will map the data from the state, that is passed through props

<br>

```javascript
import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkaListData }) => {
  return (
    <div className="punkaLista">
      👍{" "}
      {punkaListData.map((punk) => (
        <>
          <div>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default PunkList;
```

<br>
<br>

#### Now import it inside the App.js

- 🔴 I noticed that i made an error, the fetching had to be made in the app.js in this project, so i passed the fetching to the app instead of the **CollectionCard-jsx**

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

//
//
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";

function App() {
  const [punkaListData, setPunkaListData] = useState([]);
  //
  //
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=0x20978D62136a8855E29e1Cc6b841f7dacaF578A2&order_direction=asc`
      );
      //
      console.log(openseaData.data.assets);
      // assign the state to the data
      setPunkaListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

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
        <PunkList punkaListData={punkaListData} />
      </div>
    </div>
  );
}

export default App;
```

<br>
<br>

## Result

#### The data is being fetched but somehow the first property and "the one" the teacher is using in the video, isnt working:

<br>

- image_original_url (dont work, can be because it says **ipfs** and not **https** ?)

- **the following works:** image_preview_url, image_thumbnail_url, image_url

<br>
<br>

[<img src="/src/img/the data.gif"/>]()

<br>
<br>

# 🐖

> I know this is not a blog, but my sister is visiting me and I didnt see her for 4 years so I had to make a pause for a couple of hours.

### Now we don't need the hardcoded data so delete it

```javascript
// before

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
      <PunkList punkaListData={punkaListData} />
    </div>
  </div>
);

//
//
// AFTER
return (
  <div className="page">
    <div className="app">
      <Header />

      <PunkList punkaListData={punkaListData} />
    </div>
  </div>
);
```

<br>
<br>

#### Style it: flex the column to a row

[<img src="/src/img/basic-cards.webp"/>]()

```scss
.punkaLista {
  cursor: pointer;
  display: flex;
  overflow: scroll; ✋
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  //
  //
  &::-webkit-scrollbar {
    display: none;  ✋
  }
}
```

<br>
<br>

##### Some icons assets

##### [install react icons](https://react-icons.github.io/react-icons/)

##### [social icons](https://react-icons.github.io/react-icons/search?q=social)

<br>
<br>

# 🍨

## Create the main or banner

#### The main picture of the banner will be connected with the ones we have inside the <u>**PunkList.jsx**</u> , so that when we click one of the pictures, it will automatically put it on the banner.

<br>

- For that we will be **using states**

<vr>

#### Go to the App and create a state that will handle the change of state

<br>

- we will start at **(0)**

<br>

```javascript
//  App.js
function App() {
  const [punkaListData, setPunkaListData] = useState([]);
  //
  const [selectedPunka, setSelectedPunka] = useState(0); ✋

  //
```

<br>

#### pass the state props (so that we bring the state above to the other components)

```javascript
//Still on the  App.js
<PunkList punkaListData={punkaListData} setSelectedPunka={setSelectedPunka} />✋
```

<br>

#### Now we are ready to bring the state to the children, which in this case are: PunkList.jsx and Main.jsx

<br>

- In **PunkList.jsx** we will be adding a **onClick** event to make the image **behave** when we click on it.

<br>

- For that you need to pass the freshly created state that handle the **changes**: <u>setSelectedPunka</u> ✋

```javascript
// while in PunkList.jsx
const PunkList = ({ punkaListData, setSelectedPunka }) => {
```

<br>

#### Now add the "On click" event and attach the state <u>setSelectedPunka</u>

<br>

```javascript
const PunkList = ({ punkaListData, setSelectedPunka }) => {
  return (
    <div className="punkaLista">
      {punkaListData.map((punk) => (
        //
        // here
        <div onClick={() => setSelectedPunka(punk.token_id)}>

        //
        //
         <CollectionCard
```

<br>
<br>

#### Once done, pass the prop state to the Main.jsx too

<br>

```javascript
// Main.jsx
const Main = ({ selectedPunka, punkaListData }) => {

```

<br>

#### Now create a new state in the Main.jsx

- This one will also start from **punkaListData[0]**

```javascript
// require it
import React, { useState, useEffect } from "react";
//
// then use it
// ✋ here we connect the data from the opensea to the new state
const [activePunka, setActivePunka] = useState(punkaListData[0]);
```

<br>

### The useEffect

```javascript
const Main = ({ selectedPunka, punkaListData }) => {
const [activePunka, setActivePunka] = useState(punkaListData[0]);

//----------- useEffect ------------
//
  useEffect(() => {
    setActivePunka(punkaListData[selectedPunka]);
  }, [punkaListData, selectedPunka]);
  // This means that the page will update, if the punkaListData or selectedPunka changes, because we dont want to refresh it so to see the changes, we want to see t in real time ✋
  //
//----------- useEffect ------------
//
```

<br>

#### 🔴 At this point we will be getting an error because of this line:

```javascript
// Main.jsx
const [activePunka, setActivePunka] = useState(punkaListData[0]);
```

<br>

#### the reason, is because we are not passing the prop back into the parent here:

- here i already passed the props that will be used in the Main.jsx

<br>

```javascript
// App.js
//
//
<Main punkaListData={punkaListData} /> ✋
```

<br>

### Now use the actual data

- Right now we are using local images or dummy data to see the progress, but now we need to grab the actual data coming from the api

```javascript
//      BEFORE
<div className="punkaContainer">
<img className="selectedPunk" src={ethIcon} alt="" />
  {/* <img className="selectedPunk" src={activePunk.image_url} alt="" />  */}
</div>

//
//
//      AFTER
<div className="punkaContainer">
  {/* <img className="selectedPunk" src={ethIcon} alt="" /> */}
  <img className="selectedPunk" src={activePunka.image_url} alt="" />
</div>
```

<br>

### 🔴 After uncovering the img, we will have an error

- Its says the following

```javascript
The above error occurred in the <Main> component

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
```

<br>

#### 🌈

#### The reason:

> You need an error handler in case something goes wrong with the **API CALL**

<br>

- To prevent that, wrap the **Main.jsx and the PunkList.jsx** inside **{}** this will handle the situation in case we have less > than 0 in our opensea data: **punkaListData**, it will show nothing but if we have more than 0, it will show the content of the curly brackets

```javascript
{
  punkaListData.length > 0 && (
    <>
      <Main punkaListData={punkaListData} />
      <PunkList
        punkaListData={punkaListData}
        setSelectedPunka={setSelectedPunka}
      />
    </>
  );
}
```

<br>

<br>

```javascript
// App.js
//
//        BEFORE
return (
  <div className="page">
    <div className="app">
      <Header />
      <Main punkaListData={punkaListData} />
      <PunkList
        punkaListData={punkaListData}
        setSelectedPunka={setSelectedPunka}
      />
    </div>
  </div>
);
//
//          AFTER
return (
  <div className="page">
    <div className="app">
      <Header />

      {punkaListData.length > 0 && (
        <>
          <Main punkaListData={punkaListData} />
          <PunkList
            punkaListData={punkaListData}
            setSelectedPunka={setSelectedPunka}
          />
        </>
      )}
    </div>
  </div>
);
```

<br>

### 🔴 After that we will continue to have the error due to the img

<br>

👾

> Errors are a good thing to become better at what you do, they are terrifying, annoying and can make you feel like the lowest being on earth, but the more errors you know and the reasons why, the better it will be. 👾

<br>

#### SO the error was due to the fact that the teacher FORGOT to pass the prop <u>selectedPunk</u> inside the <u>Main.jsx</u>

<br>

- I have notice that this type of issues happens when you dont structure or concentrate into automatically linking the props to their respective components, for example here in this error, this error ocurred because he created the props then went on into styling the components, and after a while when going back to the functionality, **he forgot this props**. I ve notice few teachers in youtube do it in such way, which endup confusing newbies like me.

##### In conclusion don't focus on the aesthetic so much in the beginning unless you have a (great memory), make it work first.

```javascript

```

<br>
<br>
<br>

### ⚠️ The code is working but it has a bug, and due to that i will spend the entire day trying to figure out the reasons:

<br>

- for now I only now that the **image_original_url** that the teacher uses in this tutorial, dont work.

<br>

#### [ image_original_url:](https://docs.opensea.io/reference/asset-object) An image for the item. Note that this is the cached URL we store on our end. The original image url is image_original_url

<br>

[<img src="/src/img/image_original_url__about.gif"/>](https://docs.opensea.io/reference/asset-object)

<br>

> **I really think it has to do with this** line of code:

```javascript
image_original_url: "ipfs://QmQQVwdSn..etc
```

<br>

- Because every time i try to add the **image_original_url**, it shows me the following:

<br>

[<img src="/src/img/IPFS_probable-issue.gif"/>]()

<br>

## What is IPFS?

<br>

##### [Read the whole article here | What is IPFS?](https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization)

<br>

##### Its the first time i see this, so I hat no idea

> IPFS is a distributed system for storing and accessing files, websites, applications, and data.

- When you put that URL in your browser's address bar, your computer asks one of Wikipedia's computers, which might be somewhere on the other side of the country (or even the planet), for the aardvark page.

> However, that's not the only option for meeting your aardvark needs! **There's a mirror of Wikipedia stored on IPFS, and you could use that instead. If you use IPFS, your computer asks to get the aardvark page like this:**

```javascript

/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Aardvark.html
```

<br>

##### That jumble of letters after /ipfs/ is called a _content identifier_ and it’s how IPFS can get content from multiple places.

<br>

#### Traditional URLs and file paths such as…

https://en.wikipedia.org/wiki/Aardvark

/Users/Alice/Documents/term_paper.doc

C:\Users\Joe\My Documents\project_sprint_presentation.ppt

> …identify a file by where it's located — what computer it's on and where on that computer's hard drive it is. That doesn't work if the file is in many places, though, like your neighbor's computer and your friend's across town.

<br>

##### [Read the whole article here | What is IPFS?](https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization)

> #### NOTE

Why do we say "content" instead of "files" or "web pages" here? Because a content identifier can point to many different types of data, such as a single small file, a piece of a larger file, or metadata. (In case you don't know, metadata is "data about the data." You use metadata when you access the date, location, or file size of your digital pictures, for example.) So, an individual IPFS address can refer to the metadata of just a single piece of a file, a whole file, a directory, a whole website, or any other kind of content. For more on this, check out our guide to how IPFS works.

<br>

---

<br>

### Other links

<br>

- [Ipfs node won't connect to my react app running on local host](https://stackoverflow.com/questions/67169501/ipfs-node-wont-connect-to-my-react-app-running-on-local-host)

<br>

- [How do I fix ERR_UNKNOWN_URL_SCHEME when trying to GET an ipfs url?](https://ethereum.stackexchange.com/questions/120132/how-do-i-fix-err-unknown-url-scheme-when-trying-to-get-an-ipfs-url)
