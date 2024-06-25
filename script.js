


function init () {
    let topImg = document.getElementById('topContainer')
    let info = document.getElementById('infoContainer')
    topImg.innerHTML = ` <img src="img/pizza-5275191_1280.jpg" alt="">`
    info.innerHTML = '<h2>Osteria Bella Napoli</h2>'
}

// BurgerMenu
document.getElementById("navIcon").classList.toggle("open");


function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
      menu.style.width = "0";
    } else {
      menu.style.width = "250px";
    }
  }
  