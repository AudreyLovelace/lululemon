import {FiveStar, FourStar, ThreeStar, TwoStar} from "../components/review/reviewMiddle/star/MuliStar";
import {Star} from "../components/review/reviewMiddle/star/Star";
import {ADD_REVIEW, CHECK_FILTER,  SORT_REVIEW} from "../helper/constants";

export const review = [
    {
        rating: <FourStar/>,
        name: 'cokeJS',
        title: 'Light but not White',
        des: 'Super cool (literally) pants. Very good for late spring or early fall when it starts cool and gets cold warmer. They are light and let the air in. “Vapor” Color is not as light/white as website depicts.',
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 4,
        ratingId: '4 stars',
        number: 1

    },

    {
        rating: <TwoStar/>,
        name: 'beepboopboopbeep',
        title: 'Not for me',
        des: 'I have 15+ pair of ABC pants, all the way back to OG pairs. The latest pair is crazy different waist size than the last several. They all fit a bit different in the waist and leg, but these really are snug. Even compared to a pair I bought less than 6 months ago. Crazy!',
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 2,
        ratingId: '2 stars',
        number: 1


    },


    {
        rating: <FiveStar/>,
        name: 'Martin',
        title: 'Great formal/casual/sport pant',
        des: 'Love these pants. I wear them in meetings, to golf, to dinner and then to the bar after. Meant for everything. The slim pockets are my favourite feature and the bottoms of the pants can be folded up to give a more casual look.',
        UsualSize: 'Usual Size: 31',
        SizePurchased: 'Size Purchased: 30',
        isChecked: false,
        id: 5,
        ratingId: '5 stars',
        number: 1


    },


    {
        rating: <ThreeStar/>,
        name: 'Lisa',
        title: 'See through?',
        des: "This my 2nd pair of these. I loved the first pair, but the 2nd pair does not fit nearly as well – not as slim and probably an inch larger around the waist despite ordering the same size and fit. Great pants, but be aware that the sizing is inconsistent.",
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 3,
        ratingId: '3 stars',
        number: 1

    },


    {
        rating: <Star/>,
        name: 'Sean',
        title: 'Not true to size - waist 32',
        des: 'I have a few different pairs of ABC pants in 32x32 and these do not fit true to size, they are much tighter in the waist than a normal 32. I will be unable to wear.',
        UsualSize: 'Usual Size: 32',
        SizePurchased: 'Size Purchased:32',
        isChecked: false,
        id: 1,
        ratingId: '1 stars',
        number: 1

    },
]



export const addReview = () => {
    return {
        type: ADD_REVIEW,
        payload: review
    };
};


export const sortReview = (id) => {
    return {
        type: SORT_REVIEW,
        payload: id,
    }
}

export const checkFilter = (id) => {
    return {
        type: CHECK_FILTER,
        payload: id
    };
}