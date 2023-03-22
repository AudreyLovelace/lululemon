import {FETCH_DATA} from "../helper/constants";

const initState = {
    reviewRating: []
}

export const reviewReducerRating = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, reviewRating: action?.payload}
    }
}