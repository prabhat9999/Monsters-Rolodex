
import "./card-list.styles.css"
import CardContainer  from '../card/card-container'



const Cardlist=({monsters})=>{


 

return (
<div className="card-list" > 
{monsters.map((monster)=> {
 return (<div key={monster.id}><CardContainer monster={monster}/></div>

    )
  })} </div>

)


}




// class Cardlist extends Component{


// render(){
//     const {monsters}=this.props

// return (
// <div className="card-list" > 
// {monsters.map((monster)=> {
//  return (<div key={monster.id}><CardContainer monster={monster}/></div>

//     )
//   })} </div>

// )
// }


// }
 
export default Cardlist;