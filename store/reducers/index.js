import * as actionTypes from "../actions/actionTypes"
// Making sure we have an initial state available to be used
const initialState = {
    items: [],
    title: "",
    item: "",
    edit: false,
    error: ""
}


const items = (state = initialState, action) => {
    switch (action.type) {
        // Adding an item to you list of items!
        case actionTypes.ADD_ITEM:
            const newitem = {
                id: Date.now(),
                value: state.title
            }
            return {
                ...state,
                items: state.items.concat(newitem),
                title: "",
                error: ""
            }

        // On click of any of the items, first the item is stored to state item variable item
        // next, a copy of new list is created and the index of the selected item is found
        // finally, the value perpoerty of the selected index is updated
        case actionTypes.EDIT_ITEM:
            var newList = [...state.items];
            var index = newList.indexOf(state.item);
            if (index !== -1) {
                newList[index].value = state.title;
                return {
                ...state,
                title: "",
                edit: false,
                items: newList,
                error: ""
                }
            } else {
                return {
                    ...state
                }
            }

        // Iterating through until we find the element we want to delete, then delete it
        case actionTypes.DELETE_ITEM:
            newList = [...state.items];
            index = newList.indexOf(state.item);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                ...state,items: newList
                }
            } else {
                return {
                    ...state
                }
            }

        // Storing the title to the state
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        
        // The clicked item is stored in state!
        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.item,
                error: ""
            }

        // The error message is stored in state and displayed to the user
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }

        // The edit flag is set to true if edit action button is clicked on list item
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                error: ""
            }



            default:
            return state;
    }
}

export default items;