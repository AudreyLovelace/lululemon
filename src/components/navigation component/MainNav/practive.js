import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%',
        background: '#f5f5f5',
    },
});

export function MyComponent() {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={classes.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? 'Hovering' : 'Not Hovering'}
        </div>
    );
}
