import React from 'react';
import '../CSS/dashboard.css';
const Dashboard = () => {
    return (
        <div className='container1'>
            <h1>Hi, I am <span>Feeshan Sheikh</span></h1>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design.I also make 
                 <br></br>website more & more interactive with web animations.</p>
                 <i class='fab fa-facebook-f' style={{fontSize:'25px' ,padding:'0.5%',textAlign:'center',borderRadius:'50%',backgroundColor:'transparent',color:'#254371' ,borderWidth:'1px', borderStyle:'solid',width:'25px',marginLeft:'38%'}}></i>
                 <i class='fab fa-twitter' style={{fontSize:'25px' ,padding:'0.5%', borderRadius:'50%',backgroundColor:'transparent',color:'#254371' ,borderWidth:'1px', borderStyle:'solid',width:'25px',marginLeft:'2%'}}></i>
                 <i class='fab fa-github' style={{fontSize:'25px' ,padding:'0.5%', borderRadius:'50%',backgroundColor:'transparent',color:'#254371' ,borderWidth:'1px', borderStyle:'solid',width:'25px',marginTop:'1.5%',marginLeft:'2%'}}></i>
        </div>
    );
};

export default Dashboard;