const labels = document.getElementById("labels");
const ordersInCart = document.getElementById("orderSummary");

const shopItems = [
  {
    image: "../img/homeCart/image1.png",
    title: "Classic Fit Suit",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 1899",
    uniqueId: "classic"
  },
  {
    image: "../img/homeCart/image2.png",
    title: "Slim Fit Suit",
    description: "Contoured to the body, slim but has some room for comfort",
    price: "Ghc 1960",
    uniqueId: "slim"
  },
  {
    image: "../img/homeCart/image3.png",
    title: "Modern Fit Suit",
    description: "Slim fit, contoured, shorter length.",
    price: "Ghc 2899",
    uniqueId: "modern"
  },
  {
    image: "../img/homeCart/image4.png",
    title: "Patch Pocket Blazer",
    description:
      "Popular style from the 80s where the classic ‘V’ style was a mainstay",
    price: "Ghc 2099",
    uniqueId: "patchpocket"
  },
  {
    image: "../img/homeCart/image5.png",
    title: "Double Breasted Suit",
    description: "4, 6 or 8 buttons max, 6 being the most common",
    price: "Ghc 2800",
    uniqueId: "doublebreasted"
  },
  {
    image: "../img/homeCart/image6.png",
    title: "Single Breasted Suit",
    description: "Inclusion of either one, two or three buttons along the seam",
    price: "Ghc 1999",
    uniqueId: "singlebreasted"
  },
  {
    image: "../img/homeCart/image7.png",
    title: "Peak Lapel Suit",
    description:
      "Noticeable high peaks directed to shoulders, most popular style from the 16th century.",
    price: "Ghc 2444",
    uniqueId: "peak"
  },
  {
    image: "../img/homeCart/image8.png",
    title: "Shawl Lapel Suit",
    description:
      "Rounded sides, continuous curve with no hard edges, iconic smoking jacket style.",
    price: "Ghc 2223",
    uniqueId: "shawl"
  },
  {
    image: "../img/homeCart/image9.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "tshirts"
  },
  {
    image: "../img/homeCart/image10.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "longsleeves"
  },
  {
    image: "../img/homeCart/image11.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "shortsleeves"
  },
  {
    image: "../img/homeCart/image13.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "womensjacket"
  }
];

let cartBasket = JSON.parse(localStorage.getItem("suits")) || [];
  

const loadCartItems = () => {
 if (cartBasket.length !== 0) {
  return (ordersInCart.innerHTML = cartBasket.map((idx) => {
    console.log(idx)
    const {id , item} = idx;
    const findItems = shopItems.find((idx) => idx.id === id) || [];
    
    return `
    <div class="selectedCartItems">
    <img width="100" src=${findItems.image}/>
    <div class="details">
    <div class="priceTitle">
    <h4>
    <p>${findItems.name}</p>
    </h4>
    </div>
    <div class="cartButtons"></div>
    <h3></h3>
    </div>
    </div>
    `
  }).join(""));
 } else {
  ordersInCart.innerHTML = ``;
  labels.innerHTML = `
  <h3><b>No Items in Cart</b></h3>
  <a href="./shop.html">
  <button class="backToShopBtn">Back to Shop</button>
  </a>
  `
 }
}

loadCartItems();

const itemsInCart = () => {
  let cartIcon = document.getElementById("itemsUpdate");
  cartIcon.innerHTML = cartBasket.map((idx) => idx.quantity).reduce((x, y) => x + y, 0);
}

const itemsMobileInCart = () => {
  let cartIcon = document.getElementById("mobileItemsUpdate");
  cartIcon.innerHTML = cartBasket.map((idx) => idx.quantity).reduce((x, y) => x + y, 0);
}

itemsInCart();
itemsMobileInCart();