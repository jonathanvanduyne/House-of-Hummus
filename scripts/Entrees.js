import { setEntreeState } from "../transientState.js"

export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreeHTML = ``

    for (const entree of entrees) {
        entreeHTML += `<input type='radio' name='entree' value='${entree.id}' price='${entree.price}'/>${entree.name}<br>`
    }

    document.addEventListener("change", handleEntreeChanges)

    return entreeHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleEntreeChanges = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        const chosenEntree = changeEvent.target.value
        setEntreeState(parseInt(chosenEntree))
    }
}