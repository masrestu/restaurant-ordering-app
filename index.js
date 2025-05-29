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

const itemsOrderedArr = []
let itemsOrdered = document.getElementById("items-ordered")
document.addEventListener("click", function(e) {
       if (e.target.dataset.addBtn) {
        itemsOrderedArr.push(menuArray[e.target.dataset.addBtn])
        itemsOrdered.innerHTML += `
                <h3>${itemsOrderedArr[itemsOrderedArr.length - 1].name} 
                <button class="remove-btn" data-remove-btn="${menuArray[e.target.dataset.addBtn].id}">
                REMOVE</button> $${itemsOrderedArr[itemsOrderedArr.length - 1].price}
                </h3>
                `
       }    
        const totalPrice = itemsOrderedArr.reduce((total,currentPrice) => 
                 total + currentPrice.price, 0)
        let total = document.getElementById("total")
        total.innerHTML = `
                <h3>Total price: $${totalPrice}</h3>
                `
        order.style.display = "block"
        
        if (e.target.dataset.removeBtn) {
                const itemToRemove = menuArray[e.target.dataset.removeBtn]
                itemsOrderedArr.splice(itemsOrderedArr.indexOf(itemToRemove), 1)
                itemsOrdered.innerHTML = ""
                itemsOrdered.innerHTML = itemsOrderedArr.map(function(item) {
                        return `
                        <h3>${item.name} 
                        <button class="remove-btn" data-remove-btn="${item.id}">
                        REMOVE</button> $${item.price}
                        </h3>
                        `
                })        
                total.innerHTML = `
                <h3>Total price: $${totalPrice - itemToRemove.price}</h3>`
        
        }
        
})

document.getElementById("confirm-modal").innerHTML =`
        <h2>Thanks, {username}! Your order is on its way!</h2>
        `
function openConfirmModal(){
    document.getElementById("confirm-modal").style.display = 'flex'
}
        
/*openConfirmModal()*/



/*dataset in lines 31 and 32 need to be changed*/
/* Strategy

     styling similar to Oldagram:
        1 section in HTML, iterate in JS for innerHtml

*/