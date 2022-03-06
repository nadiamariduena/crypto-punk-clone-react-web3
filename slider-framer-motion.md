#### Start by installing and importing Framer-motion

```javascript
npm i framer-motion
```

- import it

```javascript
import { motion } from "framer-motion";
```

<br>

# 🥭

#### Change the name of the following divs, so that we dont get confused when we will be adding the stuff we need to make the slider work

<br>

- We will be nesting our data inside divs that contain the property from framer-motion: **motion.div**, we will change the name of divs and create another div that will be nesting the whole thing

```javascript
//
//              Before
//
return (
  <div className="punkaLista">
    {punkListData.map((punk) => (
      <div key={punk.token_id}>
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_preview_url}
          />
        </div>
      </div>
    ))}
  </div>
);
//
//              after
//
return (
  <motion.div className="carousel">
    <motion.div drag="x" className="inner-carousel-punkList">
      {punkListData.map((punk) => (
        <motion.div key={punk.token_id}>
          <div onClick={() => setSelectedPunk(punk.token_id)}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_preview_url}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
```

#### Modify the styles too

```scss
// punkLista.scss
//
//             before
//
.punkaLista {
  // background-color: pink;
  cursor: pointer;
  display: flex;

  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  // border-bottom: 1px solid #fff;
  //
  //
  &::-webkit-scrollbar {
    display: none;
  }
}

//
//              after
//

.carousel {
  cursor: grab;
  overflow: hidden;
  margin: 0 0.8%;
  background-color: rgb(255, 221, 146);
  .inner-carousel-punkList {
    display: flex;
    margin-top: 20px;
    padding-bottom: 20px;
  }
}
```

<br>

### ⚠️ add the pointer events: none here below

```scss
// _collectionCard.scss
//
//
.collectionCard {
  background-color: black;
  color: rgb(253, 253, 253);
  // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin-right: 30px;
  // border: 1px solid #fff;
  img {
    width: 100%;
    pointer-events: none; ✋
  }
```

<br>

### without pointer Events

- its faisable but complicated when grabing the card

<br>

[<img src="/src/img/without-pointerEvents.gif"/>]()

<br>

### with pointer Events

- You can smoothly slide it

<br>

[<img src="/src/img/with-pointerEvents.gif"/>]()

<br>
<br>

#### Its working but there is not constraint, as you can see in the image above

- But first lets see what is making it move to the X direction (left to right):

```javascript
drag = "x";
```

<br>
<br>

#### Now lets add the constraint

- We could add this:

```javascript
 drag="x"
        dragConstraints={{ right: 0 }}
```

##### result

- As you can see, when I drag it to the **right**, it will push it to the 0 position (**which is the beginnning**) , but when i drag it to the left, it goes all the way **without ending**

[<img src="/src/img/drag-constrains-to-right.gif"/>]()

<br>
<br>

##### To handle the calculation to drag to the left, we will need to set up a state that will check the width of the slide

```javascript
import React, { useState, useRef, useEffect }
//
//
//
const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //
  const [width, setWidth] = useState(0); ✋
```

<br>
<br>

### Now we need to grab the width of the parent:

<br>

- For that we will need to use **useRef** on the parent, so start by importing it here:

```javascript
import React, { useState, useRef, useEffect } from "react";
```

<br>

- Now declare it:

```javascript
  const [width, setWidth] = useState(0);
  const carousel = useRef(); ✋
```

 <br>

#### Use it:

```javascript
 <motion.div ref={carousel}  className="carousel">
```

<br>

### 👾 The logical part 👾

<br>

#### Add the useEffect

- Here we will calculate what needs to be calculated to figure out when the slider has to stop

<br>

#### Add the useEffect

- lets console.log to see the stuff we need to calculate it

```javascript
// 1
const carousel = useRef();
//
//  2 ✋
useEffect(() => {
  // we will use the ref to see it on the console
  console.log(carousel);
}, []);
//
```

<br>

### Go to the console on the browser and open the arrow, you will something like this:

<br>

- SO here we can see that we got back an **object** with the **current** of the div carousel

[<img src="/src/img/useefefct-carousel-console.gif"/>]()

<br>

#### Now we have to add the dot to access it:

```javascript
useEffect(() => {
  console.log(carousel.current);
}, []);
//
```

##### result

<br>

[<img src="/src/img/useefefct-carousel-console-current.gif"/>]()
