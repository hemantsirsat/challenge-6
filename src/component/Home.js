import React from "react";
import Desktophero from "./images/hero-desktop.jpg";
import Mobilehero from "./images/hero-mobile.jpg"; 
import Backg from "./images/bg-pattern-desktop.svg"; 
import Arrow from "./images/icon-arrow.svg";
import Errorimg from "./images/icon-error.svg"; 
import Logo from "./images/logo.svg"; 
import "./css/style.css";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
      mail: "",
    }
  }

  checkmail=(mail)=>{
    if(mail.length > 0){
      if(mail.includes("@")){
        this.setState({
          hidden: true
        })
      }
      else{
        this.setState({
          hidden: false
        })
      }
    }
    if(mail.length === 0){
      this.setState({
        hidden: false
      })
    }
  }

  handlemail=(event)=>{
    console.log(event.target.value)
    this.setState({
      mail:event.target.value
    })
  }

  render(){
    return (
      <div className="container">
        <div className="main">
          <div className="mobilelogocontainer">
            <img 
              src={Logo}
              alt="logo"
              className="mobilelogo"
            />
          </div>
          <div className="leftsection">
            <img 
              src={Backg}
              alt="left section bg"
            />
            <div className="content">
              <div className="logocontainer">
                <img 
                  src={Logo}
                  alt="logo"
                  className="logo"
                />
              </div>
              <div className="heading">
                <p>
                  W E' R E
                  <br />
                  <span className="comingsoon">
                    C O M I N G 
                    <br />
                    S O O N
                  </span>
                </p>
              </div>
              <div className="description">
                <p>
                  Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
              </div>
              <div className="emailcontainer">
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.mail}
                  onChange={this.handlemail}
                  className={this.state.hidden?"email":"highlightederror"}
                />
                <img
                    src={Errorimg}
                    alt='errorrrr'
                    className="errorimg"
                    id={this.state.hidden?"hidden":""}
                />
                <button
                  className="submitbutton"
                  onClick={()=>{
                    this.checkmail(this.state.mail)
                  }}
                >
                  <img 
                    src={Arrow}
                    alt="arrow"
                  />
                </button>
              </div>
              <div className="validemailcontainer">
                <p 
                  className="validemail"
                  id={this.state.hidden?"hidden":""}
                >
                    Please provide a valid email
                </p>
              </div>
            </div>
          </div>
          <div className="rightsection">
            <img 
              src={Desktophero}
              alt="lady"
              className="desktophero"
            />
            <img 
              src={Mobilehero}
              alt="lady"
              className="mobilehero"
            />
          </div>
        </div>
      </div>
    )
  }
}
