import React, {useState} from 'react';
import User from '../components/user'
import useFetch  from '../hooks/useFetch'
import {Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  mainStyle: {
      //  display:'grid',
      //  placeContent:"center",
       margin:"1rem",
  },
  innerStyle: {
      maxWidth:'400px',
      margin:"auto", 
      background:'tomato', 
      padding:"1rem",
  },
  heading:{
     padding:"2rem 1rem",
     marginBottom:"2rem",
     borderRadius:".3rem",
     display:'flex',
     justifyContent:"space-between",
     color:"#fff",
  }
})


function Users() {

  const [clicks , setClicks] = useState(0)

  function clickIncrement(action){
    if(action === "increase"){
      setClicks( clicks + 1 )
    }
    if(action === "decrease"){
      setClicks( clicks - 1)
    }
  }

  const classes = useStyles()

  const {error , loading , data} = useFetch()
   
  if(data) console.log(data)

  if(loading) return <h1>Loading</h1>

  if(error) return <h1>There is an error</h1>

  return (
    <Grid className={classes.mainStyle}>

      <div className={classes.innerStyle}>

          <Box variant="contained" bgcolor='primary.main'  className={classes.heading}>

            <Typography variant="h6" color="">Users List</Typography>

            <Typography variant="h6" color="">{clicks} Liked</Typography>

          </Box>

          {
             data?.results?.map( user => <User name= {user.name} email={user.email} picture={user.picture.medium} phone={user.cell} handleLike={clickIncrement} />)
          }

      </div>
     
    </Grid>
  );
}

export default Users;
