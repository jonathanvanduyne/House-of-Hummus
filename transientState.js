export let transientState = {
    "entreeId": null,
    "vegetableId": null,
    "sideId": null
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Change Transient State

export const setEntreeState = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}
export const setVegetableState = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}
export const setSideState = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function to Reset Transient State to default

export const resetTransientState = () => {
    transientState =
    {
        "entreeId": null,
        "vegetableId": null,
        "sideId": null
    }
    console.log(transientState)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
