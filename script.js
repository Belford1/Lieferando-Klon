


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
                        <div onclick="" id="cross${i}" class="cross">
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
  