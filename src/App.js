import React from "react";


// class CountingParent extends React.Component {
//     state = {
//       actionCount: 0,
//     };

//   handleAction = (action) => {
//     console.log("Child says", action);
//     this.setState(() => {
//       return {
//         actionCount: this.state.actionCount + 1,
//       }
//     });
//   }
//   resetAction = () => {
//     this.setState(() => {
//       return {
//         actionCount: 0,
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Child onAction={this.handleAction} onActionR={this.resetAction} />
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     );
//   }
// }

// function Child({ onAction, onActionR }) {
//   return (
//     <div>
//       <button onClick={onAction}>Click Me!</button>
//       <button onClick={onActionR}>RESET ME!</button>
//     </div>
//   );
// };


/*
Exercises
1. Create a component called House to model a home with 4 rooms, each with its own light and
lightswitch. Use state to keep track of whether each light is on or off. Add 4 buttons to represent
the lightswitches, and flip the respective light on or off when the buttons are clicked. Use this
initial state:
*/

class House extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingroom: true,
      bedroom: false
    }  
  }

  switch = (e) => {
    let roomSwitch = e.target.textContent.toLowerCase();
    console.log('Button', roomSwitch);
    
    this.setState(({rooms: {kitchen, bathroom, livingroom, bedroom}}) => {
      // console.log(this.state.rooms);
      for ( let property in this.state.rooms) {
        
        if (property === roomSwitch && property === 'kitchen') {
          console.log(property);
          return (
            {rooms: {
              kitchen: !kitchen,
              bathroom: bathroom,
              livingroom: livingroom,
              bedroom: bedroom
              }
            }
          );
        } else if (property === roomSwitch && property === 'bathroom') {
          console.log(property);
          return (
            {rooms: {
              kitchen: kitchen,
              bathroom: !bathroom,
              livingroom: livingroom,
              bedroom: bedroom
              }
            }
          );
        }
      }

    });
  }

  render() {
    return (
      <div>
        <Switches kitchenAction={(e) => this.switch(e)} />
      </div>
    )
  }

}

function Switches ({kitchenAction}) {
  return (
    <div>
      <button onClick={kitchenAction}>Kitchen</button>
      <button onClick={kitchenAction}>Bathroom</button>
    </div>
  );
};


export default House;
