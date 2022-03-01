import React from "react"; 
import "./about.css";
import logo from "../assets/images/diane2.jpg";
const About = () =>{
    return(
        
        <div className="about">
            <div>

<img src={logo} style={{height:"40vh", width:"100%"}}/>
<h1 style={{textAlgin:"center" , marginTop:"-90px",marginLeft:"40%"}}>About Me</h1>
            </div>
            <div className="about-container">
          
            <div>
            <p> 

            I am able to handle multiple tasks on a daily basis.<br/>
            
I use a creative approach to problem solve.<br/>


I am a dependable person who is great at time management.<br/>


I am always energetic and eager to learn new skills.<br/>


I have experience working as part of a team and individually.<br/>

</p>
</div>
<div>
<p>
I work with the team to provide imaginative solutions for our customers.<br/>

I am always coming up with innovative ideas.<br/>

I delivered all projects in a timely fashion.<br/>


Lucy has managed the team through several large projects.<br/>


I made cost savings on projects by using local manufacturers.<br/>

I won gold in my very first cross-fit competition.


            </p>
            </div>
            <a href="/home"> <button style={{marginTop:"250px"}}> Go to the Home</button></a>
            </div>
        </div>
    )
}
export default About;