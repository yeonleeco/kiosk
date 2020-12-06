import React from 'react';
import Wall from '../assets/wall.png';
import Stairs from '../assets/stairs.png';
import Boba1 from '../assets/boba1.png';
import Boba2 from '../assets/boba2.png';
import Boba3 from '../assets/boba3.png';
import Boba4 from '../assets/boba4.png';

class Image extends React.Component {
  render() {
    return (
      <div>
      <img src={Wall}
           style={{ width : "502px",
                    position: "absolute",
                    zIndex: -2 }} />
      <img src={Stairs}
           style = {{ width: "45%",
                      position: "absolute",
                      left: "23.8vh",
                      top: "43vh" }}/>
      <img src={Boba1}
           style ={{ position: "absolute",
                     width: "11.8%",
                     left: "32vh",
                     top: "40vh" }}/>
       <img src={Boba2}
              style ={{ position: "absolute",
                        width: "13.5%",
                        left: "48vh",
                        top: "31.5vh" }}/>
      <img src={Boba3}
             style ={{ position: "absolute",
                       width: "16%",
                       left: "47vh",
                       top: "47.5vh" }}/>
      <img src={Boba4}
            style ={{ position: "absolute",
                      width: "16.5%",
                      left: "59vh",
                      top: "44vh" }}/>

      </div>
    );
  }
}

export default Image;
