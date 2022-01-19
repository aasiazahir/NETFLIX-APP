import React from 'react';
import Images from './Images';

function Card(props){ //props mean property.by writing this we got all props(custom attribute)
    return(
        <>
  <div className='cards'>
      <div className='card'>
      <Images imgsrc={props.imgsrc}/>
          <div className='card_info'>
          <h3 className='card_name'>{props.sname}</h3>
              <span className='card_title'>{props.title}</span>
              <a href={props.link} target='_blank'>
                  <button>Watch Now</button>
              </a>
          </div>
      </div>
  </div>
</>
    );
}
export default Card;