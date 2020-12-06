import React from 'react'
import { Container, Grid, Paper, Box, Button, borders } from '@material-ui/core';
import OrderButton from '../OrderButton';
import BigTitle from '../BigTitle';
import Image from '../Image';
import NewMenu from '../NewMenu';


class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
     <Container fixed>
     <Box border ={25}
          borderColor="grey.500"
          borderRadius={17}>
         <BigTitle title="ORDER HERE"> </BigTitle>
         <Image />
         <NewMenu/>
           <Grid
             id="grid"
             container
             spacing={2}
             direction="row"
             justify="center"
             alignItems="flex-end">
             <Grid item><OrderButton onClick={this.nextStep} button="Dine In"></OrderButton></Grid>
             <Grid item><OrderButton button="Pick Up"></OrderButton></Grid>
           </Grid>
       </Box>
     </Container>
     </div>
    )
  }
}

export default FirstPage;
