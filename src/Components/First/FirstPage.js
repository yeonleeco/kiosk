import React from 'react'
import { Container, Grid, Paper, Box, Button, borders } from '@material-ui/core';
import OrderButton from '../OrderButton.js';
import BigTitle from '../BigTitle.js';
import Image from '../Image.js';
import NewMenu from '../NewMenu.js';


class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
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
             <Grid item><OrderButton onClick={this.onClick} button="Dine In"></OrderButton></Grid>
             <Grid item><OrderButton button="Pick Up"></OrderButton></Grid>
           </Grid>
       </Box>
     </Container>
     </div>
    )
  }
}

export default FirstPage;
