import React from 'react';
import Navbar from './Navbar';
import './News.css';



import { Slide } from 'react-slideshow-image';


const News = () => {
    return (
      <>
        <Navbar />
      <div>
        <div class="about-section">
          <h2>News..</h2>
        </div>

        <section>
          <nav>
           <h3>Trending Posts</h3><br/><br/><br/>
           <p><h1> Chirag-Satwik pair withdraws from Sudirman Cup on medical grounds</h1></p><br/><br/><br/>
           <p><h1> Montreal wins the the Hockey Tournament</h1> </p><br/><br/><br/>
           <p><h1> Vishwanathan Anand wins the the Chess Tournament </h1></p><br/><br/><br/>
           <p><h1> Chennai Super Kings wins the the Cricket Tournament</h1> </p><br/><br/>
           </nav>

        <article> 
        <Slide easing="ease">
          <div className="each-slide">
          <br></br> <div src='images/img-1.jpg'>
            </div>
          </div>
          <div className="each-slide">
          <br></br> <div src='images/img-1.jpg'>
            </div>
          </div>
          <div className="each-slide">
          <br></br>  <div src='images/img-1.jpg'>
            </div>
         </div>
         <div className="each-slide">
          <br></br>  <div src='images/img-1.jpg'>
            </div>
         </div>
        </Slide>
        </article>
        </section>
      </div>
      </>
    )
};

export default News;