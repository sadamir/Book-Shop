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
    { "name": "NoName Book", "id": 1, "sign": "$", count: 52 },
    { "name": "Summer Bird Blue", "id": 2, "sign": "$", count: 12 },
    { "name": "What You Think", "id": 3, "sign": "$", count: 32 },
    { "name": "Boring Girls", "id": 4, "sign": "$", count: 43 },
    { "name": "Unleash the Dragon", "id": 5, "sign": "$", count: 54 },
    { "name": "A Million to One", "id": 6, "sign": "$", count: 65 },
    { "name": "Edit This", "id": 7, "sign": "$", count: 14 },
    { "name": "Design Formula", "id": 8, "sign": "$", count: 32 }
];

//single product
//


let cart = [];

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
        item_img.setAttribute('src', "images/book-" + i + ".jpeg");
        item_img.setAttribute('alt', 'product');
        item_img.setAttribute('class', 'product-img');

        if (item.count > 0) {
            item_node.innerHTML = `<button class="bag-btn" data-id=${i+1}><i class = 'fas fa-shopping-cart'>add to bag</i></button><h3>${item.name}</h3>${' '}<h4>${item.sign}
            <span id="badge">${item.count}</span></h4>`;
            appendNode(items_container, item_node);
            appendNode(item_node, item_img);
        }
    }
}

displayItems(items_array, "container");

function addOrRemoveItemsFromCart(action) {
    let container = '';

    function takeAction(container) {
        container.addEventListener("click", function (event) {
            let item_id = event.target.id;

            if (item_id !== "items" && item_id !== "badge") {
                let item = items_array.filter(function (item) {
                    return item.id == item_id;
                })[0];

                let item_in_cart = cart.filter(function (item) {
                    return item.id == item_id;
                })[0];

                if (item_in_cart == undefined) {
                    cart.push(item);
                } else if (action == "add") {
                    item_in_cart.count++;
                } else if (action == "remove") {
                    item_in_cart.count--;
                }

                console.log(cart);
                displayItems(cart, "cart");
            };
        });
    };

    if (action == "add") {
        container = getDiv("items");

        takeAction(container)
    }
    else if (action == "remove") {
        container = getDiv("cart");

        takeAction(container)
    };


}


addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');





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

//cart item
const divCartItemList = document.createElement('div');
divCartItemList.setAttribute('class', 'cart-item');
cartContent.appendChild(divCartItemList);

const imgCartList = document.createElement('img');
imgCartList.setAttribute('src', 'images/book-1.jpeg');
imgCartList.setAttribute('alt', 'product');
imgCartList.setAttribute('class', 'product-img');
divCartItemList.appendChild(imgCartList);

const divCartItemInfo = document.createElement('div');
divCartItemList.appendChild(divCartItemInfo);

const cartItemName = document.createElement('h4');
cartItemName.textContent = 'Summer Bird Blue';
divCartItemInfo.appendChild(cartItemName);

const cartItemPrice = document.createElement('h5');
cartItemPrice.textContent = '$123';
divCartItemInfo.appendChild(cartItemPrice);

const cartItemRemove = document.createElement('span');
cartItemRemove.setAttribute('class', 'remove-item');
cartItemRemove.textContent = 'remove';
divCartItemInfo.appendChild(cartItemRemove);

const divCartChevrons = document.createElement('div');
divCartItemList.appendChild(divCartChevrons);

const iChevronUp = document.createElement('i');
iChevronUp.setAttribute('class', 'fas fa-chevron-up');
divCartChevrons.appendChild(iChevronUp);

const pItemAmount = document.createElement('p');
pItemAmount.setAttribute('class', 'item-amount');
pItemAmount.textContent = 1;
divCartChevrons.appendChild(pItemAmount);

const iChevronDown = document.createElement('i');
iChevronDown.setAttribute('class', 'fas fa-chevron-down');
divCartChevrons.appendChild(iChevronDown);
//end of cart item

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
clearCartBtn.textContent = 'clear cart';
divCartFooter.appendChild(clearCartBtn);

//end of Cart


//logic

cartBtn
closeCartBtn
clearCartBtn
cartDOM
cartOverlay
cartItems
cartTotal
cartContent
//productsDOM




// //cart
// let cart = [];
//
// //getting the productsDOM
//
// //display productsDOM
// class UI{
//
// }
//
// //local storage
// class Storage{
//
// }


// document.addEventListener("DOMContentLoaded",()=>{
//   const ui = new UI();
//   const products = new Products();
//
//   // get all products
//   products.getProducts().then(data => console.log(data));
//
// })
