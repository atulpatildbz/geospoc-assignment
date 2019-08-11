export const setMode = (newMode) => {
    if(newMode==='pincode') {
        return {
            type: 'SET_MODE_PINCODE',
            payload: 'pincode'
        }
    }
    if(newMode === 'locality') {
        return {
            type: 'SET_MODE_LOCALITY',
            payload: 'locality'
        }
    }
}

export const setViewPort = (viewport) => {
    return {
        type: 'SET_VIEW_PORT',
        payload: viewport
    }
}

export const setSelectedArea = (area) => {
    return {
        type: 'SET_SELECTED_AREA',
        payload: area
    }
}