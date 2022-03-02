# AXIOS 🍌

<br>

- **install** axios:

```javascript
npm i axios
```

- Import/**require** axios

```javascript
const axios = require("axios");
```

#### We can use javascript FETCH but we will be using AXIOS

<br>
<br>

---

# 🍿

> **Why JavaScript developers should prefer Axios over fetch?**
> By using the optional timeout property in the config object, you can set the number of milliseconds before the request is terminated. One of the reasons that JavaScript developers choose Axios rather than fetch() is the ease of setting timeout.

<br>

> **Why Use Axios in React** <br>Here are five reasons why you should use Axios as your client to make HTTP requests: It has good defaults to work with JSON data. Unlike alternatives such as the Fetch API, you often don't need to set your headers. Or perform tedious tasks like converting your request body to a JSON string.

<br>
<br>

**[Fetch and Axios](https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch)** are very similar in functionality, but for more backwards compatibility Axios seems to work better (fetch doesn't work in IE 11 for example, [check this article](https://stackoverflow.com/questions/37258632/first-fetch-api-call-cancelled-by-the-second-in-ie11)

<br>

- Fetch's **body** = Axios' **data**
- Fetch's body has to be **stringified**, Axios' data contains the object
- Fetch **has no url** in request object, Axios **has url** in request object
- Fetch request function includes the **url as parameter**, Axios request function **does not include the url as parameter**.
- Fetch request is **ok** when response object contains the **ok property**, Axios request is **ok when status is 200** and **statusText is 'OK'**

<br>

- To get the json object response: in fetch call the **json() function** on the response object, in Axios get **data property** of the response object.

<br>

**[READ MORE: Fetch and Axios](https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch)**

#### ⚠️

> **One more major difference between fetch API & axios API** <br> <br>
>
> - While using service worker, you have to use fetch API only if you want to intercept the HTTP request
> - Ex. While performing caching in PWA using service worker you won't be able to cache if you are using axios API (it works only with fetch API)

<br>

- Axios is a stand-alone 3rd party package that can be easily installed into a React project using NPM.

<br>

> - The other option you mentioned is the fetch function. Unlike Axios, fetch() is built into most modern browsers. With fetch you do not need to install a third party package.

<br>
<br>

---

<br>
<br>

## What is better for HTTP Requests: Fetch or Axios Comparison

> Overview, JSON data, Error handling, HTTP interception, Response Timeout, Simultaneous Requests, Download progress, Upload progress, Browser support

<br>

## FETCH

**Fetch** — The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

**Fetch()** is part of a JavaScript window-object method within the Fetch API. It is built-in, so users don’t have to install it. Fetch() allows us to get data from the API asynchronously without installing any additional libraries.

**The fetch()** method takes one mandatory argument—the path to the resource you want to fetch—and returns a Promise that resolves with an object of the built-in Response class as soon as the server responds with headers. Let’s take a look at the syntax of the .fetch() method.

```javascript
fetch(url)
  .then((res) =>
    // handle response
  )
  .catch((error) => {
    // handle error
  })
```

##### or

```javascript
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
  .then((response) => response.json())
  .catch((error) => console.log(error))
```

> In the code example above, you can see the simple POST request with method, header, and body params.

<br>

#### credits: AYUSH VERMA

##### [see more examples | article](https://towardsdev.com/what-is-better-for-http-requests-fetch-or-axios-comparison-920ceffc5161)

##### [An Introductory Index to Front-End Knowledge base](https://ayushv.medium.com/an-introductory-index-to-basic-front-end-knowledge-base-a5da77baf910)

<br>

## AXIOS

> **Axios is a Javascript library used to make HTTP requests from node.js** or XMLHttpRequests from the browser, and it supports the Promise API that is native to JS ES6.

<br>

##### Some core features of Axios, according to the documentation, are:

    It can be used to intercept HTTP requests and responses.
    It automatically transforms request and response data.
    It enables client-side protection against CSRF.
    It has built-in support for download progress.
    It has the ability to cancel requests.

<br>

**To be able to use axios library**, we have to install it and import it to our project. axios can be installed using CDN, npm, or bower. Now let’s take a look at the syntax of a simple GET method.

```javascript
axios.get(url)
  .then(response => console.log(response));
  .catch((error) => console.log(error));
```

<br>
<br>

#### credits: AYUSH VERMA

##### [see more examples | article](https://towardsdev.com/what-is-better-for-http-requests-fetch-or-axios-comparison-920ceffc5161)
