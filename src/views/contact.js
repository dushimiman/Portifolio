import React from "react"; 
import "./contact.css";
import {TwitterOutlined} from "@ant-design/icons";
import{LinkedinOutlined} from "@ant-design/icons";
import {FacebookOutlined} from "@ant-design/icons";
import {PhoneOutlined} from "@ant-design/icons";
import {InboxOutlined} from "@ant-design/icons";

const Contact = () =>{
    return(
        <div className="contact">
        <div className="col2">
        <h2>Contact Me</h2>
        <ul>
          <li>
          <a href=""> <InboxOutlined />dushimediane12@gmail.com</a><br/><br/>
          </li>
          <li>
          <a href=""><PhoneOutlined />+250780564438</a>
          </li>
        </ul>
      </div>
      <div className="col4">
          <h2>Follow Me</h2>
          <a href="https://twitter.com/" target="blank"><TwitterOutlined style={{fontSize: '2em'}} /></a>
          <a href="https://www.linkedin.com/" target="blank"><LinkedinOutlined style={{fontSize: '2em'}} /></a>
          <a href="https://www.facebook.com/" target="blank"><FacebookOutlined style={{fontSize: '2em'}}  /></a>
      </div>
      <a href="/home"> <button>Go To the Home</button></a>

      </div>
    )
}
export default Contact;