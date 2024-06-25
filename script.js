

// BurgerMenu
function toggleIcon() {
    document.getElementById("navIcon").classList.toggle("open");
  }


function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
      menu.style.width = "0";
    } else {
      menu.style.width = "250px";
    }
  }
  