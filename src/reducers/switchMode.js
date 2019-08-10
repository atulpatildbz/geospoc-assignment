export const switchMode = (mode = "pincode", action) => {
    switch (action.type) {
        case "SET_MODE_PINCODE":
            return action.payload
        case "SET_MODE_LOCALITY":
            return action.payload
        default:
            return mode
    }
}