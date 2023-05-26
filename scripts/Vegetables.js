import { setVegetableState } from "../transientState.js"

export const vegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let vegetableHTML = ``

    for (const vegetable of vegetables) {
        vegetableHTML += `<input type='radio' name='vegetable' value='${vegetable.id}' price='${vegetable.price}'/>${vegetable.name}<br>`
    }

    document.addEventListener("change", handleVegetableChanges)

    return vegetableHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleVegetableChanges = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const chosenVegetable = changeEvent.target.value
        setVegetableState(parseInt(chosenVegetable))
    }
}
