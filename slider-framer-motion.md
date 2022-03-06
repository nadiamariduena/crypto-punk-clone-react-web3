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
