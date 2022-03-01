#### If you already have all the steps below: just log in:

##### [Signup for thirdweb](https://bit.ly/3EJLftx)

<br>
<br>

##### Before starting create a new metamask account as the one we will create here below will be a children account.

##### [MetaMask setup](https://www.creatokia.com/en/s/metamask-setup)

##### [METAMASK EXPLAINED! All you need to know about wallets!](https://youtu.be/03CxRvOa4E0)

<br>
<br>

### Seed Phrase 🔑

- Click on the image to see more: 🐖

[<img src="/src/img/seed-phrase.gif"/>](https://youtu.be/03CxRvOa4E0)

<br>

#### Once you have the parent metamask setup (with the long **seed** phrase and password), then you can start here:

<br>
<br>

#### 1. Lets get started with _Third-web_ 🌟

<br>

- Click in **lets get started** (it will only work if you took the **metamask option** and not the coinbase)

[<img src="/src/img/1_web3_start.webp"/>]()

<br>

<br>

#### 2. Once connected to the metamask create a new account for this project

<br>

[<img src="/src/img/create-new-metamask-account.gif"/>]()

<br>
<br>

# Rinkeby

#### 3. We will then set it up to a <u>_testing network_</u>.

<br>

🔴 In this app we will be using the Rinkeby network, be careful, as if you dont do it correctly things can get messy.

<br>

> ✋ **Ethereum Networks** ✋ - The Ethereum Main Network (a.k.a Homestead) is considered to be the production environment. This is where real Ether (ETH) can be exchanged, burned, and mined. Also, there are popular public test networks: Ropsten, Göerli, Kovan, and **Rinkeby** ✋. All of these networks can be accessed via Infura’s API.

<br>
<br>

[<img src="/src/img/rinkeby-network.gif"/>]()

<br>
<br>

##### 4. Once You choose the network, go to the top and click on the <u>SHOW/HIDE</u>, you will then have to scroll down and click on the toggle: <u>TURN/ON</u> like in the gif, after you turned it ON, go up and choose your "Rinkeby" network as it s now available.

<br>

[<img src="/src/img/rinkeby-network3.gif"/>]()

<br>
<br>

### 5. Connect to a Wallet

<br>

- Once you choose to connect to **metamask**, choose the test account you just created.

<br>

- ⚠️ It will ask you to continue, but before check that your **ETH** is in **Rinkeby**, then choose **Rinkeby** again

<br>

- After that you will have a **successful message** and then it will ask you to **create a first project on Rinkeby**

<br>

[<img src="/src/img/connect-to-rinkeby.gif"/>]()

<br>

### 🔴 Now you are ready to start the project but we dont have <u>ETH</u>

- for this project I will be using fake **Eth**

<br>
<br>

---

<br>
<br>

## [Ethereum Development Key Concepts](https://medium.com/compound-finance/setting-up-an-ethereum-development-environment-7c387664c5fe)

<br>

##### Setting up your dev environment for Ethereum development takes just a few minutes. It’s important to have a basic understanding of a few general concepts before we start writing code.

<br>

**Solidity** - The most popular programming language for writing smart contracts on Ethereum.

<br>

**Web3.js** - A JavaScript library for web browsers and Node.js that enables developers to elegantly read and write to the Ethereum blockchain. Smart contracts written in Solidity can be executed using JSON RPC from Web3.js.

<br>

**Infura.io** - A company that provides an API for simple Ethereum network access through HTTP and WebSockets. To access the network without a service like Infura’s API, you must host your own Ethereum network node.

<br>

> ✋ **Ethereum Networks** ✋ - The Ethereum Main Network (a.k.a Homestead) is considered to be the production environment. This is where real Ether (ETH) can be exchanged, burned, and mined. Also, there are popular public test networks: Ropsten, Göerli, Kovan, and **Rinkeby** ✋. All of these networks can be accessed via Infura’s API.

<br>

**Cloudflare’s Ethereum Gateway** - Cloudflare, a popular DNS and general web-infrastructure company provides a free API for accessing the Ethereum Main Net. Unlike Infura, Cloudflare’s gateway can be used without an account or API. The network can be interfaced with at https://cloudflare-eth.com. However, you can interface with only Homestead; not Ropsten, Göerli, Kovan, or Rinkeby.

<br>

**Truffle** - A company that creates Ethereum development tools like Truffle, Ganache, and Drizzle. In this guide, we’ll be installing Ganache CLI so we can run our Solidity and Web3.js code locally during development.

<br>

**Ganache CLI** - A command line interface for running a locally hosted instance of Ethereum. We can start up a blank Ethereum blockchain, or a fork of a public network’s blockchain on your local machine.

<br>

**Solc** - The Solidity compiler. This turns our human-readable Solidity code into Ethereum bytecode, which Ethereum network nodes understand how to execute.

<br>

**MetaMask** - A web browser extension that facilitates invocation of Ethereum smart contracts from a web page. MetaMask uses Web3.js under the hood. It is a tool for end users to use ETH, Ethereum based cryptocurrency tokens, and keep track of their Ethereum wallets when using decentralized, Web3 applications (a.k.a. DApps).

<br>

#### Installing MetaMask

> MetaMask is a web browser extension that can be installed on Google Chrome, FireFox, Opera, or Brave. End users can use the extension to interface with smart contracts.

<br>
<br>

---

<br>
<br>

# 🍨

# Fake ETH

<br>

### 1. Get free Ethereum for testing purposes

> The reason why we need this, is because we are going to **mint** our project, and due to that we will not need to pay gaz feeds

<br>

#### [faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby)

<br>

**Cryptocurrency transactions** are grouped in what is known as a block. Block size varies between blockchains. For example, Bitcoin's block size has a theoretical limit of 4MB but averages closer to 1MB.

<br>

**Unlike Bitcoin, Ethereum's block size varies based upon the amount of gas spent per block rather than a data limit.** Currently, there is a 30 million gas limit per block, but the target size is 15 million gas per block. But effectively, your transaction "competes" with others to feature in the next block sent to the network for validation. So, your competitor might pay a priority fee (tip) to increase the chance of pushing their transaction ahead of yours, increasing the gas fee.

<br>

##### Read more [9 Ways to Reduce Your Ethereum Gas Fees](https://www.makeuseof.com/ways-reduce-ethereum-gas-fees/)

<br>

### 2. Copy the clipboard in the little icon of metamask

```javascript
0x56 very long code...
```

<br>

#### 3. Paste that code inside here:

[faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby)

- paste it inside the **Wallet address**

<br>

[<img src="/src/img/faucets_chain_link_rinkeby.webp"/>](https://faucets.chain.link/rinkeby)

<br>
<br>

- 🔴 In my case, it asked to connect to the metamask wallet to check if i was in the **correct network** (for testing), in this case: **Ethereum Rinkeby**

<br>
<br>

#### 4. After you added the code inside the walled address:

- uncheck the 10 test LINK and check the **0.1 test ETH**

<br>

[<img src="/src/img/uncheck_10_test.webp"/>](https://faucets.chain.link/rinkeby)

<br>

#### 5. After that, send the request:

- You will see something like this:

[<img src="/src/img/transaction-initiated.webp"/>](https://faucets.chain.link/rinkeby)

<br>

#### 6. Once its done, you will receive a token:

- i am hiding mine, that s why you cannot see it

[<img src="/src/img/free-ethereum-success.webp"/>](https://faucets.chain.link/rinkeby)

<br>

### inside the metamask you should have:

- 0.2 test ethers..

[<img src="/src/img/free-ethereum-metamask.gif"/>](https://faucets.chain.link/rinkeby)

<br>
<br>

## 🥭

#### this is what we have, of course 'ours' is fake:

> 0.1994 ETH

https://bitcoinsprice.org/price/eth/usd/0.1994

<br>
<br>

#### 7. Create the project and confirm it (inside the pop up)

<br>

[<img src="/src/img/ether-project.gif"/>](https://faucets.chain.link/rinkeby)

<br>
<br>

# 🥥

#### 8. In the next step we will be creating a new module

<br>

> As you can see here below, we have **6 different** options:

<br>

- You can create your own **Crypto currency** inside the **TOKEN module** , (you can call it whatever you want..cookieMonsta 🍪 etc)

<br>

- You can also build your own **marketplace**, you can build your own **opensea** ([What is OpenSea? The Marketplace For NFT Artwork](https://youtu.be/uBN6B99Mzx4))

<br>

#### In my case, I am interested in the "NFT Collection " module

- So click on **NFT Collection**, and then click on the blue button **Setup Module**

[<img src="/src/img/create_nft_collection.gif"/>]()
