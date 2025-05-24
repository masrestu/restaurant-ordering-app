import {menuArray} from "/data.js"



const menuHtml = menuArray.map (function(menuItem) {
                return `
                <div class="menu-item">
                        <div class="emoji">${menuItem.emoji}</div>
                        <div class="item-info">
                                <h3 class="item-name">${menuItem.name}</h3>
                                <p class="item-ingredients">${menuItem.ingredients}</p>
                                <p class="item-price">$${menuItem.price}</p>
                        </div>
                        <button id="add-btn" data-add-btn="${menuItem.id}">+</button>
                </div>
                `
        })



document.getElementById("menu-items").innerHTML = menuHtml

const addBtn = document.getElementById("add-btn")
document.addEventListener("click", function(e) {
       if (e.target.dataset.addBtn) {
        console.log(menuArray[e.target.dataset.addBtn].name + 
                " $" + menuArray[e.target.dataset.addBtn].price)
        }
})



document.getElementById("confirm-modal").innerHTML =`
        <h2>Thanks, {username}! Your order is on its way!</h2>
        `
function openConfirmModal(){
    document.getElementById("confirm-modal").style.display = 'flex'
}
        
/*openConfirmModal()*/




/* Strategy

     styling similar to Oldagram:
        1 section in HTML, iterate in JS for innerHtml

*/