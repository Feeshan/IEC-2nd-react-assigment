import '../CSS/contact.css';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ProductList = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2e1aw5",
        "template_uzvyxkt",
        form.current,
        "tTW8OZ72vjlaZvMYZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div>
            <div className='header'> <h1 >Contact Me <br></br> _<span>___</span></h1></div>
   
        <div class="row">
            <div class="column1">
            <div class="second">
           <form ref={form} onSubmit={sendEmail}>
            <h1>Get In Touch</h1>
        <input type="text" placeholder="Email" name="user_name"></input>
        <input type="text" placeholder="Name" name="user_email"></input>
        <textarea rows="10" cols="50" placeholder="Your Message" name="message"></textarea>
        <input  type="submit" value="Send" style={
            {
      marginTop: '2rem',
      cursor: 'pointer',
      background: 'blue',
      color: 'white',
      border:'none',
    }}/>
    </form>
    </div>
    </div>
  <div class="column1">
  <div className="review3">
		<div className="review4">
        <i class="material-icons" style={{fontSize:"36px"}}>call</i>
      <h3>phone</h3>
			<p>03007857154</p>
            <p>03184883939</p>
			</div>
			<div className="review4">
            <i class="material-icons" style={{fontSize:"36px"}}>email</i>
            <h3>Email</h3>
			<p>Feeshanm@gmail.com</p>
            <p>Feeshan4@gmail.com</p>
			</div>
			<div className="review4">
            <i class="material-icons" style={{fontSize:"36px"}}>location_on</i>
        <h3>Location</h3>
			<p>Mohallah Sheikh-an-wala ward no.13 ,Layyah</p>
			</div>
			</div>
        </div>
  </div>
</div>
    );
};

export default ProductList;