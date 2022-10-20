import React from 'react'

import image_1 from '../images/breakfast-burrito.jpg';
import image_3 from '../images/jammy-egg-toasts.jpeg';
import image_4 from '../images/sausage-egg-sandwich.jpeg';



function Content() {
  return (
  <> 
      <div className='content-card'>
        <img src={image_1} alt='egg' className='h-full rounded mb-10 shadow '/>
        <div className='card-text'>
          <h2 className='text-2xl mb-2' >Breakfast Burrito</h2>
          <p> Meal prep has never been easier than with this tasty and filling breakfast burrito.
            After making the 6-egg filling, you can enjoy these wraps all week. 
          </p>
          <span className='mb-40'>$20</span>
        </div>
      </div>

      <div className='content-card'>
        <img src={image_3} alt='egg' className='h-full rounded mb-10 shadow '/>
        <div className='card-text'>
          <h2 className='text-2xl mb-2' >Jammy Egg Toast</h2>
          <p> 
          Fifteen minutes is all you need to create a perfect velvety egg that isn't quite boiled nor exactly poached. 
          Something more marvelous in between!
          </p>
          <span>$50</span>
        </div>
      </div>

      <div className='content-card'>
        <img src={image_4} alt='egg' className='h-full rounded mb-10 shadow '/>
        <div className='card-text'>
          <h2 className='text-2xl mb-2'>Sausage Egg Sandwich</h2>
          <p> 
            Forget cheese and put down the ketchup! 
            Our secret addition of DIY pickled peppers contributes a sweet, spicy element to the rich bite of egg and sausage 
          </p>
          <p>You'll never reach for condiments again.</p>
          <span>$135</span>
        </div>
      </div>
  </>
  )
}

export default Content
