
const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIco = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIco.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){

    const isAsideclose = aside.classList.contains ('inactive');
    if(!isAsideclose){
        aside.classList.add('inactive');
    }
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideclose = aside.classList.contains ('inactive');
    if(!isAsideclose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
 }

 function toggleCarritoAside (){

    aside.classList.toggle('inactive');

    const isMobileMenuclose = mobileMenu.classList.contains ('inactive');
    const isDesktopMenuclose = desktopMenu.classList.contains ('inactive');

    if(!isMobileMenuclose){
        mobileMenu.classList.add('inactive');
    }
  
    if(!isDesktopMenuclose){
        desktopMenu.classList.add('inactive');
    }
  
  


}
 
const productList = [];
productList.push({
name: 'bike',
price: 120,
Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

} );

productList.push({
    name: 'bike2',
    price: 123,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
    } );

    productList.push({
        name: 'bike3',
        price: 124,
        Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
         } );

        for (product of productList){
           const productCard = document.createElement('div');
           productCard.classList.add('product-card');

           const productImg = document.createElement('img');
           productImg.setAttribute('src', product.Image);

           const productInfo = document.createElement('div');
           productInfo.classList.add('product-info');

           const productInfoDiv = document.createElement('div');

           const productPrice = document.createElement('p');
          productPrice.innerText = product.price;
           const productName = document.createElement('p');
           productName.innerText = product.name;

           productInfoDiv.appendChild(productPrice);
           productInfoDiv.appendChild(productName);

           const productInfoFigure = document.createElement('figure');
           const productImgCart = document.createElement('img');
           productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

           productInfoFigure.appendChild(productImgCart);

           productInfo.appendChild(productInfoDiv);
           productInfo.appendChild(productInfoFigure);

           productCard.appendChild(productImg);
           productCard.appendChild(productInfo);

           cardsContainer.appendChild(productCard);


        } 