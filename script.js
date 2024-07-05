


function init() {
    let topImg = document.getElementById('topContainer');
    let info = document.getElementById('infoContainer');

        

    topImg.innerHTML = '<img src="img/pizza-5275191_1280.jpg" alt="">';
    info.innerHTML = `
<div class="info">
<div>   
<h2>Osteria Bella Napoli</h2>
    <img class="stars" src="img/bewertung.png" alt="">
</div>
<div class="infoIqon">
    <div>
        <span>I</span>
    </div>
    <div>
        <img src="img/mogen.png" alt="">
    </div>
</div>

</div>
    `;
    
    for (let i = 0; i < dishes.length; i++) {
        const dishesContainer = document.getElementById('dishesContainer');

       
        dishesContainer.innerHTML += `
            <div class="dishesContainers">
                <div>
                    <div class="dishes">
                        <h3>${dishes[i].name}</h3>
                        <div onclick="addBasket (${i})" id="cross${i}" class="cross">
                            <img src="img/kreuz.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="dishesInfo">

                    <h5> ${dishes[i].info}</h5>
                </div>
                <div>

                    <h5> ${dishes[i].price} €</h5>
                </div>
    
  
  `;
  

}
renderBasket()
}
function renderBasket(){
    const basketContainer = document.getElementById('basketContainer');
    
    basketContainer.innerHTML = ``;
    basketContainer.innerHTML += `
    <div class="hedlineBasket">
        <h3>Warenkorb</h3>
    </div>
    <div class="basketDishes">
      <div id ="basketList"></div>  
    </div>
    <div>
        <ul class="calculator">
            <div>
                <li>Zwischensumme</li>
                <li>${basket[0].price}€</li>
            </div>
            <div>
                <li>Lieferkosten</li>
                <li>${basket[0].deliveryCosts} €</li>
            </div>
            <div>
                <li>Gesamt</li>
                <li>${basket[0].price + basket[0].deliveryCosts}€</li>
            </div>
        </ul>
    </div>
    <div class="buttonContainer">
        <button>Bestellen</button>
    </div>
    `;
    
    for (let j = 0; j < basket[0].price.length; j++) {        
       
        const basketList = document.getElementById('basketList');
        basketList.innerHTML += `
        <ul>
        <li>1</li>
            <li>${basket[0].name[j]}</li>
            <li>
                <div class="borderBasket">
                    <img src="img/kreuz.png" alt="">
                </div>
                <div class="borderBasket">
                    <img src="img/minus.png" alt="">
                </div>
            </li>
            <li>${basket[0].price[j]} €</li>
            <li><img src="img/trash-can.png" alt=""></li>
            </ul>
        `; 
        
    }
}function addBasket (i){
basket[0].name.push(dishes[i].name);
basket[0].price.push(dishes[i].price);
renderBasket()
}
// zwischensumme 
function subtotal (){                    
}
// gesamt
function total (){ 
}
// BurgerMenu
// document.getElementById("navIcon").classList.toggle("open");


function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
      menu.style.width = "0";
    } else {
      menu.style.width = "250px";
    }
  }
  