import { transientState, resetTransientState } from "../transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generate order button//
export const purchaseCombo = () => {

    document.addEventListener("click", handleOrderClick)
    return `<br><button id='purchase'>Create Custom Order</button>`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create a function to post a new order to the JSON database when clicked on//

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to purchases API
    await fetch("http://localhost:8088/purchases", postOptions)

    const customEvent = new CustomEvent("newComboPurchased")
    document.dispatchEvent(customEvent)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//handle the order button click event//

const handleOrderClick = async (clickEvent) => {

    if (clickEvent.target.id === "purchase") {
        if (transientState.entreeId !== null && transientState.vegetableId !== null && transientState.sideId !== null) {
            placeOrder()
            resetTransientState()
            }
        }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generate the orders dynamic html linked to the json server//
//fix the problems here in the fetch
export const Orders = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const purchases = await response.json()

    let ordersHTML = ""

    for (const purchase of purchases) {
        const purchasePrice = purchase.entree.price + purchase.vegetable.price + purchase.side.price
        const formattedPrice = purchasePrice.toLocaleString("en-US", { style: "currency", currency: "USD" })

        ordersHTML += `<div>
        Receipt #${purchase.id} = ${formattedPrice}
        </div>`
    }

    return ordersHTML
}