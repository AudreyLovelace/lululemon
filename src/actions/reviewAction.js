import {FETCH_DATA} from "../helper/constants";

const reviewRating = [
    {
        rating: '5 stars',
        name: 'Martin',
        title: 'Great formal/casual/sport pant',
        des: 'Love these pants. I wear them in meetings, to golf, to dinner and then to the bar after. Meant for everything. The slim pockets are my favourite feature and the bottoms of the pants can be folded up to give a more casual look.',
        UsualSize: '31/30',
        SizePurchased: '31/30',
        isChecked: false,
    },

    {
        rating: '4 stars',
        name: 'cokeJS',
        title: 'Light but not White',
        des: 'Super cool (literally) pants. Very good for late spring or early fall when it starts cool and gets cold warmer. They are light and let the air in. “Vapor” Color is not as light/white as website depicts.',
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,

    },

    {
        rating: '3 stars',
        name: 'Lisa',
        title: 'See through?',
        des: "Didn't realize there were little holes in the fabric that make the fabric see through",
        UsualSize: '',
        SizePurchased: '',
        isChecked: false,

    },

    {
        rating: '2 stars',
        name: 'beepboopboopbeep',
        title: 'Not for me',
        des: 'a little too flimsy feeling, and almost see through at that size and color (light blue)',
        UsualSize: '',
        SizePurchased: '',
    },

    {
        rating: '1 star',
        name: 'Sean',
        title: 'Not true to size - waist 32',
        des: 'I have a few different pairs of ABC pants in 32x32 and these do not fit true to size, they are much tighter in the waist than a normal 32. I will be unable to wear.',
        UsualSize: '32',
        SizePurchased: '32',
    },
]


export const fetchReview = () => {
    return {
        type: FETCH_DATA,
        payload: reviewRating,
    }
}