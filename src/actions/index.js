export const setModePincode = () => {
    return {
        type: 'SET_MODE_PINCODE',
        payload: 'pincode'
    }
}

export const setModeLocality = () => {
    return {
        type: 'SET_MODE_LOCALITY',
        payload: 'locality'
    }
}

export const changeMode = (newMode) => {
    return {
        type: 'SET_MODE',
        payload: newMode
    }
}

export const setViewPort = (viewport) => {
    return {
        type: 'SET_VIEW_PORT',
        payload: viewport
    }
}