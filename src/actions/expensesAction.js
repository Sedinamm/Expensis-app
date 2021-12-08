export const addExpens = (expen) => {
    console.log("addExpens", expen);

    return {
        type: "ADD_EXPENS",
        payload: expen
    }
}


export const deleteExpens = (expenId) => {
    return {
        type: "DELETE_EXP",
        payload: expenId,
    };
}


export const editExpens = (expenId, updatedExpens) => {
    return {
        type: "EDIT_EXP",
        payload: {expenId, updatedExpens}
    };
}
