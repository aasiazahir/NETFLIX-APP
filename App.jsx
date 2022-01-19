import React from 'react';
import Card from './Cards';
import CardData from './CardData';

const favSeries='netflix';
if(favSeries=='netflix'){

}else{

}
 
const App = ()=>( //components are custom elements and props are custom attributes
<>
<h1 className='heading'>List Of Top 5 Netflix Series</h1>
{CardData.map((val) =>{  //this val has all data inform of object
  return ( 
    <Card          //component
     key={val.id}  //'key' is a mandatory property when u use map func. every childcomponent(array objects) has different key
     imgsrc={val.imgsrc} //props
     title={val.title} 
     sname={val.sname} 
     link={val.link} 
     />   
        )
        }
)
}     
{/*map func syntax: array.map( function(currentvalue, index(opt), arr(opt) ), this value)
 The map() method in JavaScript creates an array by calling a specific 
 function on each element present in the parent array. 
 map iterates */}
</>
);
 export default App;