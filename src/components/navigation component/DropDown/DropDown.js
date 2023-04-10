import './DropDown.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const DropDown = () => {

    const whatsNew = [
        {id: 0, label: "What's New"},
        {id: 1, label: "Bestsellers"},
        {id: 2, label: "Align Shop"},
        {id: 3, label: "New On the Move Collection"},
        {id: 4, label: "Pastel Shop"},
        {id: 5, label: "Spring Clothes Shop"},
        {id: 6, label: "Plus Size Clothes"},
        {id: 7, label: "lululemon lab"},
        {id: 8, label: 'We Made Too Much'}]


    const womenLeft = [
        {id: 0, label: 'Leggings'},
        {id: 1, label: 'Coats & Jackets'},
        {id: 2, label: 'Dresses'},
        {id: 3, label: 'Hoodies & Sweatshirts'},
        {id: 4, label: 'Capris'},
        {id: 5, label: 'Pants'},
        {id: 6, label: 'Shirts'},
        {id: 7, label: 'Shoes'}]

    const womenRight = [
        {id: 0, label: 'Shorts'},
        {id: 1, label: 'Skirts'},
        {id: 2, label: 'Socks'},
        {id: 3, label: 'Sports Bras'},
        {id: 4, label: 'Sweaters'},
        {id: 5, label: 'Swimsuits'},
        {id: 6, label: 'Tank Tops'},
        {id: 7, label: 'Underwear'}]

    const accessories = [
        {id: 0, label: 'Bags'},
        {id: 1, label: 'Equipment'},
        {id: 2, label: 'Gloves & Mittens'},
        {id: 3, label: 'Hair Accessories'},
        {id: 4, label: 'Hats'},
        {id: 5, label: 'Scarves & Wraps'},
        {id: 6, label: 'Water Bottles'},
        {id: 7, label: 'Yoga Mats'},
    ]


    const activity = [
        {id: 0, label: 'Running'},
        {id: 1, label: 'Casual'},
        {id: 2, label: 'Tennis'},
        {id: 3, label: 'Golf'},
        {id: 4, label: 'Workout'},
        {id: 5, label: 'Yoga'}]


    return (
        <div className='dropdownFile'>
            <div className='dropdownFile_main'>
                <div className='dropdownFile_main_left'>
                    {whatsNew.map(item => (
                            <div key={item.id} className='textHover'>
                                {item.label}
                            </div>
                        )
                    )}
                </div>


                <div className='dropdownFile_main_middle'>
                    <div className='textHover'>
                        WOMEN CLOTHES
                    </div>
                    <div className='dropdownFile_main_middle_detail'>
                        <div className='dropdownFile_main_middle_detail_eachRow'>
                            {womenLeft.map(item => (
                                    <div key={item.id} className='textHover'>
                                        {item.label}
                                    </div>
                                )
                            )}
                        </div>
                        <div className='dropdownFile_main_middle_detail_eachRow'>
                            {womenRight.map(item => (
                                    <div key={item.id} className='textHover'>
                                        {item.label}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className='dropdownFile_main_middle_detailRight'>
                    <div className='textHover'>
                        ACCESSORIES
                    </div>

                    <div className='dropdownFile_main_middle_detailRight_detail'>
                        <div className='dropdownFile_main_middle_detailRight_detail_eachRow'>
                            {accessories.map(item => (
                                    <div key={item.id} className='textHover'>
                                        {item.label}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>


                <div className='dropdownFile_main_right'>
                    <img width='300px' height='200px'
                         src="NA_Mar23_Membership_EA_Ecomm_teaser_MegaNav_D.webp" alt=""/>
                    <div className='dropdown_main_right_highLight'>
                        Early access? It’s in the bag.
                    </div>
                    <div className='normal'>
                        Go-getters deserve to move with ease. <br/> On March 21,
                        be first to shop new styles <br/> and
                        accessories that always keep up.
                    </div>
                    <div className='dropdownFile_main_right_download'>
                        Download the App
                        <ArrowForwardIcon style={{color: 'red'}}/>
                    </div>
                </div>
            </div>

            <div className='dropdownFile_under'>
                <div className='dropdownFile_under_activity'>
                    ACTIVITY
                </div>
                <div className='dropdownFile_under_sports '>
                    {activity.map(item => (
                            <div key={item.id} className='textHover'>
                                {item.label}
                            </div>
                        )
                    )}
                </div>
                <div className='dropdownFile_under_shop'>
                    SHOP ALL WOMEN

                    <ArrowForwardIcon style={{color: 'red'}}/>
                </div>
            </div>
        </div>
    )
}