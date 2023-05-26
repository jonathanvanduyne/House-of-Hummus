import { entreeOptions } from "./Entrees.js"
import { Orders, purchaseCombo } from "./Sales.js"
import { sidesOptions } from "./SideDishes.js"
import { vegetableOptions } from "./Vegetables.js"


export const FoodTruck = async () => {
    const entreeHTML = await entreeOptions()
    const vegetableHTML = await vegetableOptions()
    const sidesHTML = await sidesOptions()
    const purchaseComboHTML = purchaseCombo()
    const customerOrdersHTML = await Orders()
    
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
        <section class="options">
            <h2>Base Dish:</h2>
        ${entreeHTML}
        </section>

        <section class="options">
            <h2>Vegetable:</h2>
        ${vegetableHTML}
        </section>

        <section class="options">
            <h2>Side:</h2>
        ${sidesHTML}
        </section>
        </article

        <section>
            ${purchaseComboHTML}
        </section>

        <section class="customerOrders">
            <h2>Monthly Sales</h2>
        ${customerOrdersHTML}
        </section>
    `
}
