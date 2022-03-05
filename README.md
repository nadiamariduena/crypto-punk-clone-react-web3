<br>

### WORK IN PROGRESS ⛏️

> In this tutorial you will learn how to set up:

<br>

---

<br>

#### Login in **ThirdWeb**: [Thirdweb](https://bit.ly/3EJLftx)

#### Login [Opensea](https://testnets.opensea.io/)

<br>
<br>

[<img src="/src/img/the-issue-ipfs2.gif"/>]()

<br>

#### Branches:

<br>

##### [1-nft-mining-inting-metamask-setup-fake-eth](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/1-nft-mining-inting-metamask-setup-fake-eth)

##### [2-opensea-api-components-setup-issues](https://github.com/nadiamariduena/crypto-punk-clone-react-web3/tree/2-opensea-api-components-setup-issues)

<br>
<br>
<br>

<br>

## ⚠️ To be continue... 🐄

<br>
<br>

---

<br>

<br>

### 🔴 Deploying the app (regardless of the bug)

- When deploying the app regardless of the bug, **I encountered another problem**, it was impossible to see the components where the 🌟 magic happens.

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
