

import "./search-box.styles.css"

const SearchBox=({placeHolder,onSearchChangeHandler})=>{
console.log(onSearchChangeHandler)
    return (
        <div>
            <input className='search-box' type='search' placeholder={placeHolder} onChange={onSearchChangeHandler}/>
            
            </div>)

}

// class SearchBox extends Component{

 

//     render(){

//         const {onSearchChangeHandler}=this.props;
// return (
// <div>
//     <input className='search-box' type='search' placeholder={this.props.placeHolder} onChange={onSearchChangeHandler}/>
    
//     </div>)

//     }



// }

export default SearchBox;