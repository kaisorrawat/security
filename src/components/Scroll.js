import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'flex',
        bottom: '2vh',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: theme.palette.secondary.dark,
            backgroundColor: theme.palette.secondary.dark
        },
        right: '5%'
    }
}))

const Scroll = (showBelow) => {
    const classes = useStyles()
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if (!show) setShow(true)
        }else{
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if(showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <div>
            {show && 
            <IconButton onClick={handleClick} className={classes.toTop} >
                <ExpandLessIcon />
            </IconButton>
            }
        </div>
    )
}

export default Scroll
