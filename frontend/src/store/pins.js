import csrfFetch from "./csrf";

const RECEIVE_PINS = 'RECEIVE_PINS'
const RECEIVE_PIN = 'RECEIVE_PIN'
const REMOVE_PIN = 'REMOVE_PIN'

const receivePin=(pin)=>({
    type: RECEIVE_PIN,
    pin
})
// const receivePins = (pins) => ({
//     type: RECEIVE_PINS,
//     pins
// })
const removePin = (pinId) => ({
    type: REMOVE_PIN,
    pinId
})

export const getPin = (postId) => (state) => {
    return state.pins ? state.pins[postId] : null
}
// export const getPins = (state) => {
//     return state.pins ? Object.values(state.pins) : []
// }

// export const fetchPins = () => async (dispatch) => {
//     const res = await fetch("/api/pins");

//     if (res.ok) {
//         const pins = await res.json();
//         dispatch(receivePins(pins))
//     }
// }
export const fetchPin = (pinId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${pinId}`);

    if (res.ok) {
        const pin = await res.json();
        dispatch(receivePin(pin))
    }
}

export const createPin = (pin) => async (dispatch) => {
    const res = await fetch(`/api/pins`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pin)
    });

    if (res.ok) {
        const pin = await res.json();
        dispatch(receivePin(pin))
    }
}
export const updatePin = (pin) => async (dispatch) => {
    const res = await fetch(`/api/pins/${pin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pin)
    });

    if (res.ok) {
        const pin = await res.json();
        dispatch(receivePin(pin))
    }
}

export const deletePin = (pinId) => async (dispatch) => {
    const res = await fetch(`/api/pins/${pinId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        dispatch(removePin(pinId))
    }
}

export default function pinsReducer(oldstate = {}, action) {
    const newState = { ...oldstate }
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PIN:
            newState[action.pin.id] = action.pin
            return newState;
        case REMOVE_PIN:
            delete newState[action.pinId]
            return newState;
        default:
            return oldstate
    }
}