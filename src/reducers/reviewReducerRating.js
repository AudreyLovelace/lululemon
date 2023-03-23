import {ADD_REVIEW, SORT_REVIEW} from "../helper/constants";


const initState = {
    review: [],
    sortType: 'Most Recent',
}

const reviewReducer = (state = initState, action) => {


        switch (action.type) {
            case ADD_REVIEW:
                console.log(`[reducer] ${ADD_REVIEW}`, action?.payload)
                return {
                    ...state, review: action?.payload
                };

            case SORT_REVIEW:
                const sortType = action.payload
                if (sortType === 'Most Recent') {
                    return {
                        ...state,
                        sortType: "Most Recent",
                        review: [...state.review]
                    }
                }
                console.log(`[reducer] ${SORT_REVIEW}`, action?.payload)


                if (sortType === 'Highest to Lowest Rating') {
                    return {
                        ...state,
                        sortType: sortType,
                        review: [...state.review].sort((a, b) => b.rating.value - a.rating.value)
                    }
                }

                if (sortType === ' Lowest to Highest Rating') {
                    return {
                        ...state,
                        sortType: sortType,
                        review: [...state.review].sort((a, b) => a.rating.value - b.rating.value)
                    }
                }

                return state

            default:
                return state;
        }
    }
;

export default reviewReducer;
