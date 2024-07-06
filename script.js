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
      const dishesContainer = document.getElementById("dishesContainer");
  
      dishesContainer.innerHTML += `
              <div class="dishesContainers">
                  <div>
                      <div class="dishes">
                          <h3>${dishes[i].name}</h3>
                          <div onclick="addBasket(${i})" id="cross${i}" class="cross">
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
      
    
    `;
    }
  }
  
  function renderBasket() {
    const basketContainer = document.getElementById("basketContainer");
  
    basketContainer.innerHTML = ``;
    basketContainer.innerHTML += `
      <div class="hedlineBasket">
          <h3>Warenkorb</h3>
      </div>
      <div class="basketDishes">
        <div id="basketList"></div>  
      </div>
      <div>
          <ul id="calculator" class="calculator">
    
          </ul>
      </div>
      <div class="buttonContainer">
          <button>Bestellen</button>
      </div>
      `;
  
    const basketList = document.getElementById("basketList");
    const calculator = document.getElementById("calculator");
  
    let subtotal = 0;
  
    for (let j = 0; j < basket[0].name.length; j++) {
      basketList.innerHTML += `
          <ul>
            <li class ="dichesPices">${basket[0].pieces[j]}</li>
            <li class ="dichesName">${basket[0].name[j]}</li>
            <li>
                <div class="borderBasket">
                    <img src="img/kreuz.png" alt="">
                </div>
                <div class="borderBasket">
                    <img src="img/minus.png" alt="">
                </div>
            </li>
            <li class ="dichesPrice">${(basket[0].price[j] * basket[0].pieces[j]).toFixed(2)} €</li>
             
            <li onclick="deletBasket(${j})"><img src="img/trash-can.png" alt=""></li>
          </ul>
          `;
      subtotal += basket[0].price[j] * basket[0].pieces[j];
    }
  
    let deliveryCosts = basket[0].deliveryCosts[0];
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
  }
  
  function addBasket(i) {
    const dishIndex = basket[0].name.indexOf(dishes[i].name);
    if (dishIndex !== -1) {
      basket[0].pieces[dishIndex] += 1;
    } else {
      basket[0].name.push(dishes[i].name);
      basket[0].price.push(dishes[i].price);
      basket[0].pieces.push(1);
    }
    renderBasket();
  }
  
  // zwischensumme
  function subtotal() {
    let sum = 0;
    for (let i = 0; i < basket[0].price.length; i++) {
      sum += basket[0].price[i];
    }
    return sum;
  }

  function deletBasket(index) {
    basket[0].name.splice(index, 1);
    basket[0].price.splice(index, 1);
    renderBasket();
  }

 
  
  
  // BurgerMenu
  // document.getElementById("navIcon").classList.toggle("open");
  
  // function toggleMenu() {
  //   let menu = document.getElementById("menu");
  //   if (menu.style.width === "250px") {
  //     menu.style.width = "0";
  //   } else {
  //     menu.style.width = "250px";
  //   }
  // }