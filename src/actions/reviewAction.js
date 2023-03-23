import {FiveStar, FourStar, ThreeStar, TwoStar} from "../components/review/reviewMiddle/star/MuliStar";
import {Star} from "../components/review/reviewMiddle/star/Star";
import {ADD_REVIEW, SORT_REVIEW} from "../helper/constants";

const review = [
    {
        rating: <FourStar/>,
        name: 'cokeJS',
        title: 'Light but not White',
        des: 'Super cool (literally) pants. Very good for late spring or early fall when it starts cool and gets cold warmer. They are light and let the air in. “Vapor” Color is not as light/white as website depicts.',
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 4
    },

    {
        rating: <TwoStar/>,
        name: 'beepboopboopbeep',
        title: 'Not for me',
        des: 'a little too flimsy feeling, and almost see through at that size and color (light blue)',
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 2
    },


    {
        rating: <FiveStar/>,
        name: 'Martin',
        title: 'Great formal/casual/sport pant',
        des: 'Love these pants. I wear them in meetings, to golf, to dinner and then to the bar after. Meant for everything. The slim pockets are my favourite feature and the bottoms of the pants can be folded up to give a more casual look.',
        UsualSize: 'Usual Size: 31',
        SizePurchased: 'Size Purchased: 30',
        isChecked: false,
        id: 5
    },


    {
        rating: <ThreeStar/>,
        name: 'Lisa',
        title: 'See through?',
        des: "Didn't realize there were little holes in the fabric that make the fabric see through",
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,
        id: 3
    },


    {
        rating: <Star/>,
        name: 'Sean',
        title: 'Not true to size - waist 32',
        des: 'I have a few different pairs of ABC pants in 32x32 and these do not fit true to size, they are much tighter in the waist than a normal 32. I will be unable to wear.',
        UsualSize: 'Usual Size: 32',
        SizePurchased: 'Size Purchased:32',
        isChecked: false,
        id: 1
    },
]


export const addReview = () => {
    return {
        type: ADD_REVIEW,
        payload: review
    };
};


export let sortReview = (rating) => {
    return {
        type: SORT_REVIEW,
        payload: rating,review
    }
}