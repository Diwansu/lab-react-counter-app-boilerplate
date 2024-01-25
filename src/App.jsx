import  {Component}  from "react"
import './App.css'

export default class App extends Component{
   constructor(){
    super() 
       this.state={count:0,
      } 
   }
        handleReset=()=>{
          this.setState({count:0}) 
        }

           Addition = () => {
          this.setState((prevState) => ({
          count: prevState.count + 1,
           }));
              };
           
         Subtraction=()=>{
          if(this.state.count>0) {
          this.setState((prevState)=> ({
            count: prevState.count - 1 
          }))
         }
        }
        
         render() {
           return (
             <div className="resultContainer">
                 <h2>Counter App</h2>
                <div className="data">{this.state.count}</div>

                <div className="control">
                     <button onClick={this.Addition}>+</button>
                     <button onClick={this.Subtraction}>-</button>
                     <button onClick={this.handleReset}>Reset</button>
                </div>
                
             </div>
           )
         }
  }
