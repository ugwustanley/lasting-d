import React, { useState} from 'react'
import { Button , Avatar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Grid , Box } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(
    {  
        mainStyle: { 
          borderBottom: "1px solid gray",
          paddingBottom:"1rem",
          marginBottom:"2rem"
       },
        nameStyle: {
            fontStyle:"bolique",
            lineHeight:'.9',
        },
        buttonStyle:{
            fontSize:'.7rem',
            padding:'.6rem 1rem',
            float:"right",

        },
        imageStyle:{
            borderRadius: "30px",
            display:'grid',
            PlaceSelf:'center',

        },
        paraStyle:{
            fontSize:".9rem",
            lineHeight:.8,
            margin:0,
            marginTop:'.7rem',
        }
    }
)



const User = ({name , email , picture , phone , handleLike}) => {

 const [liked , setLiked] = useState(false)

 const handleClick = () =>{
     if(liked){
         handleLike("decrease")
         setLiked(false)
     }
     else{
         handleLike("increase")
         setLiked(true)
     }
 }

 const classes = useStyles()

  return (
    <Grid container gap={0} className={classes.mainStyle}>
        <Grid item xs={2}>
           <Avatar variant="rounded" size={300} src={picture} alt="user image" />
       </Grid>

       <Grid item xs={6} className="">

           <Typography className={classes.nameStyle} variant="h6">{`${name?.first}  ${name?.last}`}</Typography>

           <Box className="">
               <Box className={classes.paraStyle} component="p">{email}</Box>
               <Box className={classes.paraStyle} component="p">{phone}</Box>
           </Box>

          
       </Grid>

        <Grid item xs={4}>
           <Button onClick={handleClick} variant="contained" color={liked? 'secondary':'primary'} className={classes.buttonStyle} >{liked ? `unlike User` : `Like User` }</Button>
       </Grid>
    </Grid>
  )
}

export default User