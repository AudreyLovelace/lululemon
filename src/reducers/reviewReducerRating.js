import {ADD_REVIEW, CHECK_FILTER, SORT_REVIEW} from "../helper/constants";
import {review} from "../actions/reviewAction";


const initState = {
    review: [],
    sortType: '',
    filter: ''
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
                    console.log([...state.review].sort((a, b) => b.id - a.id))

                    return {
                        ...state,
                        sortType: sortType,
                        review: [...state.review].sort((a, b) => b.id - a.id)
                    }
                }

                if (sortType === 'Lowest to Highest Rating') {
                    console.log([...state.review].sort((a, b) => a.id - b.id))

                    return {
                        ...state,
                        sortType: sortType,
                        review: [...state.review].sort((a, b) => a.id - b.id)
                    }
                }
                return state



            case CHECK_FILTER:
                const filter = action.payload
                state = {...state, review: review}

                if (filter === 1) {
                    return {
                        ...state,
                        filter: filter,
                        review: [...state.review]?.filter((item) => item.id === 1)
                    }
                }
                if (filter === 2) {
                    return {
                        ...state,
                        filter: filter,
                        review: [...state.review]?.filter((item) => item.id === 2)
                    }
                }
                if (filter === 3) {
                    return {
                        ...state,
                        filter: filter,
                        review: [...state.review]?.filter((item) => item.id === 3)
                    }
                }
                if (filter === 4) {
                    return {
                        ...state,
                        filter: filter,
                        review: [...state.review]?.filter((item) => item.id === 4)
                    }
                }
                if (filter === 5) {
                    return {
                        ...state,
                        filter: filter,
                        review: [...state.review]?.filter((item) => item.id === 5)
                    }
                }

            default:
                return state;
        }
    }
;

export default reviewReducer;
