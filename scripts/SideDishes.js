import { setSideState } from "../transientState.js"

export const sidesOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sidess = await response.json()

    let sidesHTML = ``

    for (const sides of sidess) {
        sidesHTML += `<input type='radio' name='side' value='${sides.id}' price='${sides.price}'/>${sides.name}<br>`
    }

    document.addEventListener("change", handleSideChanges)

    return sidesHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleSideChanges = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const chosenSide = changeEvent.target.value
        setSideState(parseInt(chosenSide))
    }
}