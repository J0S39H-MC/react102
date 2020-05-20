import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import './components/Game.jsx'
import Game from './components/Game.jsx';

// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }

// export default function Index(){
//     return(<div>
//         <h1>Hello World</h1>
        
//     </div>)
// }

ReactDom.render(<Game />, document.getElementById("root"));