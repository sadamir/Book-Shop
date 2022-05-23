//navbar

const mainbody = document.querySelector('body');
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'navbar');
mainbody.appendChild(navBar);

const divNav = document.createElement('div');
divNav.setAttribute('class', 'navbar-center');
navBar.appendChild(divNav);

const spanNav = document.createElement('span');
spanNav.setAttribute('class', 'nav-icon');
divNav.appendChild(spanNav);

const iNav = document.createElement('i');
iNav.setAttribute('class', 'fas fa-bars');
spanNav.appendChild(iNav);

/* logo start */
const divLogo = document.createElement('div');
divLogo.setAttribute('class', 'divLogo');
divNav.appendChild(divLogo);

const logo1 = document.createElement('h1');
logo1.setAttribute('class', 'logo1');
logo1.textContent = 'Book';
divLogo.appendChild(logo1);

const logoBook = document.createElement('span');
logoBook.setAttribute('class', 'nav-icon');
divLogo.appendChild(logoBook);

const ilogo = document.createElement('i');
ilogo.setAttribute('class', 'fa-solid fa-book-bookmark');
logoBook.appendChild(ilogo);

const logo2 = document.createElement('span');
logo2.setAttribute('class', 'logo2');
logo2.textContent = 'Shop';
divLogo.appendChild(logo2);
/* logo end */

const cartBtn = document.createElement('div');
cartBtn.setAttribute('class', 'cart-btn');
divNav.appendChild(cartBtn);

const spanCart = document.createElement('span');
spanCart.setAttribute('class', 'nav-icon');
cartBtn.appendChild(spanCart);

const iCart = document.createElement('i');
iCart.setAttribute('class', 'fas fa-cart-plus');
spanCart.appendChild(iCart);

const cartItems = document.createElement('div');
cartItems.setAttribute('class', 'cart-items');
cartItems.textContent = 0;
cartBtn.appendChild(cartItems);
//end of navbar

//products
const sectionProducts = document.createElement('section');
sectionProducts.setAttribute('class', 'products');
mainbody.appendChild(sectionProducts);

const divProductTitle = document.createElement('div');
divProductTitle.setAttribute('class', 'section-title');
sectionProducts.appendChild(divProductTitle);

const title = document.createElement('h2');
title.textContent = 'Our Books';
divProductTitle.appendChild(title);


let items_array = [
    { "title": "Summer Bird Blue", "id": 1, image: "./images/book-1.jpeg", "sign": "$", price: 12.99, "author": "Akemi Dawn", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "What You Think", "id": 2, image: "./images/book-2.jpeg", "sign": "$", price: 32.99, "author": "Michael McAffe", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "Boring Girls", "id": 3, image: "./images/book-3.jpeg", "sign": "$", price: 43.99, "author": "Lee Cooper", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "Unleash the Dragon", "id": 4, image: "./images/book-4.jpeg", "sign": "$", price: 54.99, "author": "Jackie Chan", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "A Million to One", "id": 5, image: "./images/book-5.jpeg", "sign": "$", price: 65.99, "author": "Luci Lu", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "Edit This", "id": 6, image: "./images/book-6.jpeg", "sign": "$", price: 14.98, "author": "Van Damme", "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "Design Formula", "id": 7, image: "./images/book-7.jpeg", "sign": "$", price: 32.99, "author": "Vlad Zelen","description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"},
    { "title": "NoName Book", "id": 8, image: "./images/book-8.jpeg",  "sign": "$", price: 52.99, "author": "Tobi McGuer","description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data"}
];

//single product
//

//cart
let cart = [];
//buttons
let buttonsDOM = [];


function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};

const productsDOM = document.createElement('div');
productsDOM.setAttribute('class', 'products-center');
productsDOM.setAttribute('id', 'container');
sectionProducts.appendChild(productsDOM);

const productsPopup = document.createElement('div');
productsPopup.setAttribute('class', 'products-popup');
productsPopup.setAttribute('id', 'p-popup');
sectionProducts.appendChild(productsPopup);

// const popupContent = document.createElement('div');
// popupContent.setAttribute('class', 'popup-content');
// popupContent.setAttribute('id', 'popup-content');
// productsPopup.appendChild(popupContent);

// function popupArticle(items, container) {
//     let popup_container = getDiv(container);
//     popup_container.innerHTML = '';
//
//     for (let i = 0; i < items.length; i++) {
//         let item = items[i];
//
//         let item_node = createNode("div");
//         item_node.setAttribute("id", item.id);
//         item_node.setAttribute("class", 'popup-content');
//
//         let item_img = createNode("img");
//         item_img.setAttribute('src', item.image);
//         item_img.setAttribute('alt', 'book-img');
//         item_img.setAttribute('class', 'popup-img');
//
//         if (item.price > 0) {
//             item_node.innerHTML = `<h3>${item.title}</h3><h3>${item.author}</h3>${item.description}`;
//             appendNode(popup_container, item_node);
//             appendNode(item_node, item_img);
//         }
//     }
// }
// popupArticle(items_array, "container");


const articleProducts = document.createElement('article');
articleProducts.setAttribute('class', 'product');
articleProducts.setAttribute('id', 'items');
productsDOM.appendChild(articleProducts);

function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("div");
        item_node.setAttribute("id", item.id);
        item_node.setAttribute("class", 'img-container');

        let item_img = createNode("img");
        item_img.setAttribute('src', item.image);
        item_img.setAttribute('alt', 'product');
        item_img.setAttribute('class', 'product-img');

        if (item.price > 0) {
            item_node.innerHTML = `<button class="showmore-btn" data-id=${i}>show more</button><button class="bag-btn" data-id=${i}>add to bag</button><h2>${item.title}</h2><h3>${item.author}</h3>${' '}<h4>${item.sign}
            <span id="badge">${item.price}</span></h4>`;
            appendNode(items_container, item_node);
            appendNode(item_node, item_img);
        }
    }
}

displayItems(items_array, "container");


const buttons = [...document.querySelectorAll(".bag-btn")];
buttonsDOM = buttons;
buttons.forEach(button => {
  let id = button.dataset.id;
  let inCart = cart.find(item => item.id === id);
  if(inCart){
    //button.innerText = "in cart";
    let itemCartURL = "in cart"
    button.innerHTML = itemCartURL;
    button.disabled = true;
  }

    button.addEventListener('click', (event)=>{
      //event.target.innerText = "in cart";
      let itemCartURL = "in cart"
      event.target.innerHTML = itemCartURL;
      event.target.disabled = true;
      // get product from products
      let cartItem = {...items_array[id], amount: 1};
      // add product to the cart
      cart = [...cart, cartItem];
      console.log(cart);
      // save cart in local storage - undone
      // set cart values
      function setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item =>{
          tempTotal += item.price * item.amount;
          itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
      }
      setCartValues(cart);

      // display cart items
      function addCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<img src=${item.image} alt="product"/>
                        <div>
                          <h4>${item.title}</h4>
                          <h5>$${item.price}</h5>
                          <span class = "remove-item" data-id=${item.id}>remove</span>
                        </div>
                        <div>
                          <i class="fas fa-chevron-up" data-id=${item.id}></i>
                          <p class="item-amount">${item.amount}</p>
                          <i class="fas fa-chevron-down" data-id=${item.id}></i>
                        </div>`;
                    cartContent.appendChild(div);
      }
      addCartItem(cartItem);

      //show the cart

      cartBtn.addEventListener('click', function showCart () {
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
      });

      closeCartBtn.addEventListener('click', function hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
      });

      function cartLogic() {
        clearCartBtn.addEventListener('click', () => {
          this.clearCart();
        })
      }

        // function clearCart(){
        //   let elem =
        //   cartContent.
        // }


    })
  })

//popup





//end of popup


//end of products

//Cart

const cartOverlay = document.createElement('div');
cartOverlay.setAttribute('class', 'cart-overlay');
mainbody.appendChild(cartOverlay);

const cartDOM = document.createElement('div');
cartDOM.setAttribute('class', 'cart');
cartDOM.setAttribute('id', 'container');
cartOverlay.appendChild(cartDOM);

const closeCartBtn = document.createElement('span');
closeCartBtn.setAttribute('class', 'close-cart');
cartDOM.appendChild(closeCartBtn);

const iCartClose = document.createElement('i');
iCartClose.setAttribute('class', 'fas fa-window-close');
closeCartBtn.appendChild(iCartClose);

const cartText = document.createElement('h2');
cartText.textContent = 'your cart';
cartDOM.appendChild(cartText);

const cartContent = document.createElement('div');
cartContent.setAttribute('class', 'cart-content');
cartDOM.appendChild(cartContent);

const divCartFooter = document.createElement('div');
divCartFooter.setAttribute('class', 'cart-footer');
cartDOM.appendChild(divCartFooter);

const totalCartInfoText = document.createElement('h3');
totalCartInfoText.textContent = 'your total : $ ';
divCartFooter.appendChild(totalCartInfoText);

const cartTotal = document.createElement('span');
cartTotal.setAttribute('class', 'cart-total')
cartTotal.textContent = 0;
totalCartInfoText.appendChild(cartTotal);

const clearCartBtn = document.createElement('button');
clearCartBtn.setAttribute('class', 'clear-cart banner-btn');
clearCartBtn.textContent = 'confirm order';
divCartFooter.appendChild(clearCartBtn);

//end of Cart

clearCartBtn.onclick = function () {
  location.href = "order-form.html";
}

//logic

class UI {

}
