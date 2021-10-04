import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        {/*Catchy Line*/}
      <h1>Sports Bar that Energize You!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
               {/*Sports Available*/}
            <CardItem
              src='images/img-1.jpg'
              text='"Only a Shuttler knows How Demanding the Fastest Sport in the World is."'
              label='Badminton'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='"Let the Racket do the talking."'
              label='Lawn Tennis'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='"Life is like riding a bicycle. To keep your balance you must keep moving."'
              label='Cycling'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='"Jump in and lose yourself."'
              label='Swimming'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='“I let my feet spend as little time on the ground as possible. From the air, fast down, and from the ground, fast up.” '
              label='Track and Field '
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='“Draw not your bow till your arrow is fixed.”'
              label='Archery'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;