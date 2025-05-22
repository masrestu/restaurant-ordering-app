import {menuArray} from "/data.js"



const menuItem = `
        <div class="menu-item">
                <div class="emoji">${emoji}</div>
                <div class="item-info">
                <h3 class="item-name">${name}</h3>
                <p class="item-ingredients">${ingredients}</p>
                <p class="item-price>$${price}</p>
                </div>
        </div>
        `



/* Strategy

     styling similar to Oldagram:
        1 section in HTML, iterate in JS for innerHtml

*/