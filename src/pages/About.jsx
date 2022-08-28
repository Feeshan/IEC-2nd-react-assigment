import React from 'react';
import '../CSS/about.css';
import img1 from "../image/feesh.jpg";
import img11 from "../image/Feeshan-Sheikh.pdf"

const About = () => {
    return (
        <div>
           <div className='header'> <h1 >About me <br></br> _<span>___</span></h1></div>
            <div class="section">
    <img  width="350px" height="500px" src={img1} alt="frame"/>
    <div class="hed"><h1>I am <span>Feeshan Sheikh</span></h1>
    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. 
        I also make website more & more interactive with web animations.</p>
        <table>
        <tr>
          <td>Full Name</td>
          <td>:</td>
          <td>Feeshan Sheikh</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>:</td>
          <td>21 Years</td>
        </tr>
        <tr>
          <td>Nationality</td>
          <td>:</td>
          <td>Pakistan</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>:</td>
          <td>English, Urdu</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>:</td>
          <td>Mohalla Sheikh-an-wala, ward no.13</td>
        </tr>
        <tr>
          <td>Freelance</td>
          <td>:</td>
          <td>Available</td>
        </tr>
      </table>        
       <a href={img11} download={img11}><button type='submit'>Download Cv</button></a>

    </div>
        </div>
        <div className='header'> <h1 >SERVICES <br></br> _<span>___</span></h1></div>
        <div className="review">
		<div className="review1">
        <i class='fas fa-paint-brush' style={{color:'blue' , fontSize:'50px'}}></i>
      <h2>Web Design</h2>
      <h3>_____</h3>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			<div className="review1">
            <i class='fab fa-html5' style={{color:'blue' , fontSize:'50px'}}></i>
        <h2>Web Development</h2>
        <h3>_____</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			<div className="review1">
            <i class='fas fa-mobile-alt' style={{color:'blue' , fontSize:'50px'}}></i>
        <h2>Mobile Application</h2>
      
        <h3>____</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
			</div>
			</div>
            <div className='header'> <h1 >REVIEWS<br></br> _<span>___</span></h1></div>
        </div>
    );
};

export default About;