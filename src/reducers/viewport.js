const INITIAL_STATE = {
    width: "100px",
    height: "100px",
    latitude: 12.992649,
    longitude: 77.600297999999995,
    zoom: 10
}

export const viewport = (viewport = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_VIEW_PORT":
            return action.payload
        default:
            return viewport
    }
}