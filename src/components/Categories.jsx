import React, { useState } from 'react'

// class Categories extends React.Component {
//     state = {
//         activeItem: 2,
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         })
//     }
    
//     render() {
//         const {items, onClickItem} = this.props;
//         return(
//             <div className="categories">
//                 <ul>
//                     {/* <li>Все</li> */}
//                     {
//                         items.map((name, index) => (
//                             <li   
//                                 className={this.state.activeItem === index ? 'active' : ''}
//                                 onClick={() => this.onSelectItem(index)}
//                                 key={`${name}_${index}`}>
//                                 {name}
//                             </li>
//                         ))
//                     }
                    
//                 </ul>
//             </div>
//         )
//     }
// }





export default function Categories({ items, onClickItem }) {
    const [activeItem, setActiveState] = React.useState(null)
    
    const onSelectItem = (index) => {
        setActiveState(index);
    }

    console.log(activeItem, setActiveState);
  return (
    <div>
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} 
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {
                    items.map((name, index) => (
                        <li 
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)} 
                            key={`${name}_${index}`}>{name}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

// export default Categories;