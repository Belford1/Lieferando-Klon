let deliveryCosts = 1;
let showMobileBasket = false;

function init() {
  let topImg = document.getElementById("topContainer");
  let info = document.getElementById("infoContainer");

  topImg.innerHTML = '<img src="img/pizza-5275191_1280.jpg" alt="">';
  info.innerHTML = `
    <div class="info">
        <div>   
            <h2>Osteria Bella Napoli</h2>
            <img class="stars" src="img/bewertung.png" alt="">
        </div>
        <div class="infoIqon">
            <div class = "i">
                <span>I</span>
            </div>
            <div class="heart">
                <img src="img/mogen.png" alt="">
            </div>
        </div>
    </div>`;
  dishesRender();
}
function dishesRender() {
  const dishesContainer = document.getElementById("dishesContainer");
  for (let i = 0; i < dishes.length; i++) {
    dishesContainer.innerHTML += `
            <div class="dishesContainers">
                <div>
                    <div class="dishes">
                        <h3>${dishes[i].name}</h3>
                        <div onclick="addBasket(${i})" id="cross" class="cross">
                            <img src="img/kreuz.png" alt="">
                        </div>
                         <div onclick="addBasket(${i}); renderMobileBasket();basketControl();toggleMenu()" id="cross2" class="cross2">

                            <img src="img/kreuz.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="dishesInfo">
                    <h5>${dishes[i].info}</h5>
                </div>
                <div>
                    <h5>${dishes[i].price.toFixed(2)} €</h5>
                </div>
            </div>`;
  }
}
function renderMobileBasket(){
  const basketContainer = document.getElementById("menu");

  basketContainer.innerHTML = `
        <div class="headlineBasket">
            <h3>Warenkorb</h3>
        </div>
        <div class="basketDishes" id="basketList"></div>
        <div class="calculatorContainer">
            <ul id="calculator" class="calculator"></ul>
        </div>
        <div class="buttonContainer">
          <a href="#" class="myButton">Bestellen</a>
        </div>
    `;
    showMobileBasket = true;
  dishesBasket();
}  

function renderBasket() {
  const basketContainer = document.getElementById("basketContainer");

  basketContainer.innerHTML = `
        <div class="headlineBasket">
            <h3>Warenkorb</h3>
        </div>
        <div class="basketDishes" id="basketList"></div>
        <div class="calculatorContainer">
            <ul id="calculator" class="calculator"></ul>
        </div>
        <div class="buttonContainer">
          <a href="#" class="myButton">Bestellen</a>
        </div>
    `;
  dishesBasket();
}

function dishesBasket() {
  const basketList = document.getElementById("basketList");
  let subtotal = 0;

  for (let j = 0; j < basket.length; j++) {
    basketList.innerHTML += `
            <ul class="basketItem">
                <li class="dishesPieces">${basket[j].pieces}</li>
                <li class="dishesName">${basket[j].name}</li>
                <li class="basketControls">
                    <div onclick="addPieces(${j})" class="borderBasket">
                        <img src="img/kreuz.png" alt="">
                    </div>
                    <div onclick="deletPices(${j})" class="borderBasket">
                        <img src="img/minus.png" alt="">
                    </div>
                </li>
                <li class="dishesPrice">${(
                  basket[j].price * basket[j].pieces
                ).toFixed(2)} €</li>
                <li onclick="deletBasket(${j})" class="trashIcon">
                    <img src="img/trash-can.png" alt="">
                </li>
            </ul>
        `;
    subtotal += basket[j].price * basket[j].pieces;
  }

  calculateBasket(subtotal);
}

function calculateBasket(subtotal) {
  const calculator = document.getElementById("calculator");

  let total = subtotal + deliveryCosts;

  calculator.innerHTML = `
        <div>
            <li>Zwischensumme</li>
            <li>${subtotal.toFixed(2)} €</li>
        </div>
        <div>
            <li>Lieferkosten</li>
            <li>${deliveryCosts.toFixed(2)} €</li>
        </div>
        <div>
            <li>Gesamt</li>
            <li>${total.toFixed(2)} €</li>
        </div>
    `;
  toggleBasket();
  
}

function basketControl() {
if (showMobileBasket=== false) {
  renderBasket()
} else {
  const basketShadow = document.getElementById("basketShadow");
  const basketContainer = document.getElementById("basketContainer");
  basketContainer.classList.add("displaynone");
  basketShadow.classList.add("displaynone");
  renderMobileBasket()
}
}

function addBasket(i) {
  const dishIndex = basket.findIndex(function (item) {
    return item.name === dishes[i].name;
  });
  if (dishIndex !== -1) {
    basket[dishIndex].pieces += 1;
  } else {
    basket.push({
      name: dishes[i].name,
      price: dishes[i].price,
      pieces: 1,
    });
  }
  basketControl() 
}

function deletBasket(index) {
  basket.splice(index, 1);
  basketControl() 
}

function deletPices(index) {
  if (basket[index].pieces > 1) {
    basket[index].pieces -= 1;
  } else {
    deletBasket(index);
  }
  basketControl() 
}

function addPieces(index) {
  basket[index].pieces += 1;
  basketControl() 
}

function toggleBasket() {
  const basketContainer = document.getElementById("basketContainer");
  const basketShadow = document.getElementById("basketShadow");

  if (!showMobileBasket) { // Wenn showMobileBasket false ist
    if (basket.length === 0) {
      basketContainer.classList.add("displaynone");
      basketShadow.classList.add("displaynone");
    } else {
      basketContainer.classList.remove("displaynone");
      basketShadow.classList.remove("displaynone");
    }
  }
}


// BurgerMenu
function toggleIcon() {
  document.getElementById("navIcon").classList.toggle("open");
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.width === "100%") {
    menu.style.width = "0";
  } else {
    menu.style.width = "100%";
  }
}
