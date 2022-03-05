## 🔴 Error np.1

<br>

#### ⚠️ The code is working but it has a bug, and due to that i will spend the entire day trying to figure out the reasons:

<brs>

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

### Other links 🌈

<br>

- [Ipfs node won't connect to my react app running on local host](https://stackoverflow.com/questions/67169501/ipfs-node-wont-connect-to-my-react-app-running-on-local-host)

<br>

- [How do I fix ERR_UNKNOWN_URL_SCHEME when trying to GET an ipfs url?](https://ethereum.stackexchange.com/questions/120132/how-do-i-fix-err-unknown-url-scheme-when-trying-to-get-an-ipfs-url)

<br><br>

---

<br><br>
