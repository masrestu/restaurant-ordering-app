import {menuArray} from "/data.js"



const menuHtml = menuArray.map (function(menuItem) {
                return `
                <div class="menu-item">
                        <div class="emoji">${menuItem.emoji}</div>
                        <div class="item-info">
                                <h3 class="item-name">${menuItem.name}</h3>
                                <p class="item-ingredients">${menuItem.ingredients}</p>
                                <p class="item-price>$${menuItem.price}</p>
                        </div>
                </div>
                `
        })

document.getElementById("menu-item").innerHTML = menuHtml



/* Strategy

     styling similar to Oldagram:
        1 section in HTML, iterate in JS for innerHtml

*/