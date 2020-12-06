import React from 'react';
import { Button, Box } from '@material-ui/core';

class OrderButton extends React.Component {
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
      <Box mb={5}>
        <Button onClick={this.onClick} size="large"
              style={{ backgroundColor: "#331717",
                       color: "white"}}
              variant="outlined"
              color="pink">{this.props.button}</Button>
          </Box>



      </div>
    );
  }
}

export default OrderButton;
