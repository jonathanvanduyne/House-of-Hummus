import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

//custom event listener for when a new combo is added to the database
document.addEventListener("newComboPurchased", (event) => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})