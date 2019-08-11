export const setArea = (area={}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_AREA':
            return action.payload;
        case 'SET_MODE_PINCODE':
        case 'SET_MODE_LOCALITY':
            return {}
        default:
            return area
    }
}