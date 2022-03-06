## WORK IN PROGRESS ⛏️ ✋

# 🌈

> **In this tutorial you will learn** how to get comfortable with creating NFT's in testing mode (using specific networks for that matter in [metamask](https://metamask.io/) & [thirdweb](https://thirdweb.com/dashboard) ), you will also learn hot to create **fake ethereum** (with [faucets.chain](faucets.chain.link/rinkeby) ) to be used in your **tests** apps.

<br>

#### [signup for thirweb](https://thirdweb.com/start?utm_source=youtube&utm_medium=social&utm_campaign=clever+programmer&utm_id=clever+programmer)

<br>

#### This is a basic app, that has no real functionality other than: <u>fetching</u> the data from [opensea](https://opensea.io/) ✋

<br>
<br>

[<img src="/src/img/preview-with-bug.gif"/>](https://a-rainbow-of-fugly.netlify.app/)

<br>

---

<br>

#### Login in Metamask : [metamask](https://metamask.io/)

#### Login in ThirdWeb : [Thirdweb](https://bit.ly/3EJLftx)

#### Login [Opensea](https://testnets.opensea.io/)

 <br>

---

 <br>

## Branches

<br>

#### [1-nft-mining-inting-metamask-setup-fake-eth](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/1-nft-mining-inting-metamask-setup-fake-eth)

#### [2-opensea-api-components-setup-issues](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/2-opensea-api-components-setup-issues)

#### [3-slider-framermotion](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/3-slider-framermotion)

<br>
<br>

---

 <br>
  <br>

## The Bug 🔴

<br>

#### Click on the arrow to unfold 🖐️

<details>
<summary>  Deploying the app (regardless of the bug)</summary>

<br>
<br>

#### The Img Bug

[Read More here](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/issues/1)

<br>

---

<br>

#### CORS

<br>

- When deploying the app regardless of the bug, **I encountered another problem**, it was impossible to see the components where the 🌟 magic happens.

<br>
<br>

#### the error

```javascript
hardcore-snyder-3fbe84.netlify.app/:1 Access to XMLHttpRequest at 'https://testnets-api.opensea.io/assets?asset_contract_address=0x8Cbb2AE3eB35fB23f2BE1E388Faf6544a9D9fcC8&order_direction=asc&limit=4' from origin 'https://hardcore-snyder-3fbe84.netlify.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
testnets-api.opensea.io/assets?asset_contract_address=0x8Cbb2AE3eB35fB23f2BE1E388Faf6544a9D9fcC8&order_direction=asc&limit=4:1 Failed to load resource: net::ERR_FAILED
createError.js:16 Uncaught (in promise) Error: Network Error
    at e.exports (main.9cfd9428.js:2)
    at XMLHttpRequest.y.onerror (main.9cfd9428.js:2)
/favicon.ico:1 Failed to load resource: the server responded with a status of 404 ()
```

<br>

#### I must to admit that <u>CORS</u> issues are a pain...

<br>

[<img src="/src/img/cors-issue1.gif"/>]()

<br>

#### So after having spend a couple of hours looking for an answer (for the image bug) i felt discouraged but i also felt like i still had some energy to make a last search, so i started to look for CORS and opensea related articles, but i didnt find anything, just other people having the same issue.

<br>

### Until i found the following articles:

##### 1. [cors on uploaded site only](https://stackoverflow.com/questions/70497930/cors-on-uploaded-site-only)

> CORS blocked your POST request. You need to whitelist your domain (https://mthree.netlify.app) at the server end.

##### Take a look at what actually CORS is https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

<br>

##### 2. [What is domain whitelisting? How to whitelist a domain?](https://support.chargebee.com/support/solutions/articles/237999-what-is-domain-whitelisting-how-to-whitelist-a-domain-#:~:text=A%20whitelist%20is%20a%20list,pages%20to%20your%20domain%2Fwebsite.)

> A whitelist is a list of domains approved for authorized access to data. In Chargebee a domain would need to be whitelisted if you wish to send secure subscription/payment related information while redirecting from the Chargebee pages to your domain/website.

<br>

### 👾 then when i read this, something came to my mind

When do we need to whitelist a domain?

**Checkout Page V3** - The Chargebee instance object is used to set callbacks for checkout, self-serve portals, and to fetch cart and product data related to checkout.To ensure that you get all callbacks you setup, you would need to whitelist your domain in Chargebee. Here’s more on this.

👾

<br>

#### I remember that when looking for a solution to solve the image issue, i read the documentation to manipulate the api line, without success of course!, but i thought... what if there is just a piece of code missing, what if i dont have to try the whole backend setup to just make the cors error go away?

<br>

- 🔴 I know its maybe wrong to do it in such way, but i sincerely felt exhausted but i had so much curiosity :)

<br>

##### So i read again that part of the documentation [Retrieving events - Testnets](https://docs.opensea.io/reference/retrieving-events-testnets)

- SO I added this:

```javascript
api/v1/
```

<br>

- to this:

```javascript
// before
const openseaData = await axios.get(
  // permalink
  `https://testnets-api.opensea.io/assets?asset_contract_address=0x8Cbb2AE3eB35fB23f2BE1E388Faf6544a9D9fcC8&order_direction=asc&limit=4`
);
//
// after
const openseaData = await axios.get(
  // permalink
  `https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x8Cbb2AE3eB35fB23f2BE1E388Faf6544a9D9fcC8&order_direction=asc&limit=4`
);
```

<br>

# 🍨

- You can test it here and enjoy the **image bug**:

##### https://a-rainbow-of-fugly.netlify.app/

<br>

[<img src="/src/img/cors-solution.gif"/>](https://a-rainbow-of-fugly.netlify.app/)

</details>
