import React from 'react'
import { Container, Grid, Paper, Box, Button, borders } from '@material-ui/core';
import OrderButton from '../OrderButton';


class SecondPage extends React.Component {
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
          <Grid>
            <Grid item><OrderButton onClick={this.onClick} button="Back" /></Grid>
          </Grid>

       </Box>
     </Container>
     </div>
    )
  }
}

export default SecondPage;
