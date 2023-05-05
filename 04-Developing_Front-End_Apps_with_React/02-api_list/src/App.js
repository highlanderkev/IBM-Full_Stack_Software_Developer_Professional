import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { APIlist:[] }

  componentDidMount() {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let entryDetails = listOfEntriesAsArray.map((entryDetail)=>{
          return <tr><td style={{color: "red", border: "2px solid black"}}>{entryDetail[1]["API"]}</td>
            <td style={{color: "green", border:"2px solid black"}}>{entryDetail[1]["Link"]}
            </td></tr>
        })
        this.setState({APIlist:<ul>{entryDetails}</ul>})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        <h2>APIs List</h2>
        <br/>

        <div>
            {
            this.state.APIlist
            }
        </div>
    </div>
    );
  }
}

export default App;














// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = { counter:0 }

//   incrementCounter = ()=> {
//     this.setState({counter:this.state.counter+1});
//   }

//   render() {
//     const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
//     return (
//       <div style={colorStyle}>
//         React Component
//         <br /><br />
//         <button onClick={this.incrementCounter}>Click Me!</button>
//         <br /><br />
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// export default App;








// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const colorStyle = {
//     color:this.props.color,
//     fontSize:this.props.size+"px"
//     }
//     return (
//       <div>
//         <div style={colorStyle}>
//         Project-Starboy, Day-1!
//         </div>
//       </div>
//     );
//   }
// }

// export default App;





// function App() {
//   return (
//     <div >
//       Hello World!
//     </div>
//   );
// }

// export default App;




// function App(props) {
//   const colorStyle = {
//     color:props.color,
//     fontSize:props.size+"px"
//   }
//   return (
//     <div>
//       <div style={colorStyle}>
//       Project-Starboy, Day-1!
//       </div>
//     </div>
//   );
// }

// export default App;
