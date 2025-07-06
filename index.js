import {menuArray} from "/data.js"
const main = document.getElementById("main")
const menuHtml = menuArray.map (function(menuItem) {
                return `
                <div class="menu-item">
                        <div class="emoji">${menuItem.emoji}</div>
                        <div class="item-info">
                                <h3 class="item-name">${menuItem.name}</h3>
                                <p class="item-ingredients">${menuItem.ingredients}</p>
                                <h2 class="item-price">$${menuItem.price}</h2>
                        </div>
                        <button id="add-btn" class="add-btn" data-add-btn="${menuItem.id}">+</button>
                </div>`
        }).join("")

document.getElementById("menu-items").innerHTML = menuHtml

const itemsOrderedArr = []
const completeBtn = document.getElementById("complete-btn")
let itemsOrdered = document.getElementById("items-ordered")
let total = document.getElementById("total")
document.addEventListener("click", function(e) {
       if (e.target.dataset.addBtn) {
        itemsOrderedArr.push(menuArray[e.target.dataset.addBtn])
        itemsOrdered.innerHTML += `
                <div class="item-ordered" id="item-ordered">
                <h3>${itemsOrderedArr[itemsOrderedArr.length - 1].name} 
                <button class="remove-btn" 
                data-remove-btn="${menuArray[e.target.dataset.addBtn].id}">
                remove</button>
                </h3>
                <h3> $${itemsOrderedArr[itemsOrderedArr.length - 1].price}
                </h3>
                </div>`
        order.style.display = "block"
        completeBtn.style.display = "block"
       } 
        const totalPrice = itemsOrderedArr.reduce((total,currentPrice) => 
                 total + currentPrice.price, 0)
        let total = document.getElementById("total")
        total.innerHTML = `
                <h3>Total price: </h3>
                <h3> $${totalPrice}</h3>`
        if (e.target.dataset.removeBtn) {
                const itemToRemove = menuArray[e.target.dataset.removeBtn]
                itemsOrderedArr.splice(itemsOrderedArr.indexOf(itemToRemove), 1)
                itemsOrdered.innerHTML = ""
                itemsOrdered.innerHTML = itemsOrderedArr.map(function(item) {
                        return `
                        <div class="item-ordered" id="item-ordered">
                        <h3>${item.name} 
                        <button class="remove-btn" data-remove-btn="${item.id}">
                        remove</button>
                        </h3>
                        <h3> $${item.price}</h3>
                        </div>`
                })        
                total.innerHTML = `
                <h3>Total price: </h3>
                <h3> $${totalPrice - itemToRemove.price}</h3>`
                }     
})

console.log(document.getElementsByClassName("item-ordered"))
console.log(document.getElementById("item-ordered"))

completeBtn.addEventListener("click", function() {
        paymentModal.style.display = "block"
        main.style.backgroundColor = "rgba(0,0,0,0.4)"
        
        })


        

const paymentModal = document.getElementById("payment-modal")
const confirmModal = document.getElementById("confirm-modal")
paymentModal.addEventListener("submit", function(e) {
        e.preventDefault()
        const paymentModalData = new FormData(paymentModal)
        const userName = paymentModalData.get("name-input")
        confirmModal.innerHTML = `
                <h2>Thanks, ${userName}! Your order is on its way!</h2>`
        confirmModal.style.display = 'flex'
        paymentModal.reset()
        main.style.backgroundColor = "white"        
        paymentModal.style.display = "none"
        order.style.display = "none"
        completeBtn.style.display = "none"
})




/* Styling strategy

     styling similar to Oldagram:
        1 section in HTML, iterate in JS for innerHtml

*/