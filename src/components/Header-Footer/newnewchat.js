import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import './newChat.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane, faTimes, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value:true,
      showBox: false,
      shownToggle: true,
      data: [
        { id: "1", name: "Tony" },
      ],
    //  currentRec: undefined,
    };

    this.showBox = this.showBox.bind(this);
    this.closeBox = this.closeBox.bind(this);
    this.toggle = this.toggle.bind(this);
  }

//   showBox = (i, pid, name) => {
//     this.setState({ currentRec: i });
//     console.log(`Selected record index: ${i}`);

//     // alert(pid);
//     // alert(name);

//     this.setState({ showBox: true }, () => {
//       document.addEventListener('click', this.closeBox);
//     });
  //}

  showBox = () => {
      alert("i worked");
        this.setState({ showBox: true }, () => {
          document.addEventListener('click', this.closeBox);
        });
    }

  closeBox(event) {
    if (this.dropdownBox.contains(event.target)) {
      this.setState({ showBox: false }, () => {
        document.removeEventListener('click', this.closeBox);
      });
    }
  }

  toggle() {
    this.setState({
      shownToggle: !this.state.shownToggle
    });
  }

  render() {
    var hidden = {
      display: this.state.shownToggle ? "block" : "none"
    }

    return (
        <div>
            <ul style={{ float: "right" }}>
                <div className="chat-sidebar">
                    {this.props.value ? <h4>true</h4>: <h4>false</h4>}
                     {this.props.value? ()=>this.showBox(): null} 
                    {/* <Link to="#" onClick={() => this.showBox()}>Msg<FontAwesomeIcon icon={faComment} /></Link> */}
                    {this.state.showBox ? (
                        <div className="msg_box" style={{ right: '270px' }}>
                            <div onClick={this.toggle.bind(this)} class="msg_head">
                                    <FontAwesomeIcon icon={faWindowMaximize} /> 
                                <div className="close" ref={(element) => { this.dropdownBox = element; }} style={{ color: 'white' }}>
                                    <FontAwesomeIcon icon={faTimes} /> 
                                </div>
                            </div>
                            <div style={hidden} className="msg_wrap">
                                <div className="msg_body" style={{color:'black'}}>
                                    <form  style={{marginTop:"0px"}}>
                                        <textarea placeholder="Type Message here" rows="8" cols="34"/>
                                    </form>
                                </div>
                                <div className="msg_body" style={{height:'70px'}} ><Link to="#" style={{color:'#ff5200'}}><h6>Send <FontAwesomeIcon icon={faPaperPlane} /> </h6>  </Link></div>
                            </div>
                            
                    </div>) : (null)}
            </div>
            </ul>
        </div>
    );

    // return (
    //   <div>
    //     <ul style={{ float: "right" }}>
    //       {this.state.data.map((person, i) => (
    //         <div className="chat-sidebar" key={i}>
    //           <button onClick={() => this.showBox(i, person.id, person.name)}>Chat </button>
    //           {this.state.showBox ? (
    //             <div className="msg_box" style={{ right: '270px' }}>
    //               <div onClick={this.toggle.bind(this)} class="msg_head">
    //                 (<b style={{ color: 'orange' }}>
    //                   {this.state.currentRec !== undefined &&
    //                     <div className="modal-body">
    //                       {this.state.data[this.state.currentRec].name}
    //                       {this.state.data[this.state.currentRec].id}
    //                     </div>
    //                   }
    //                 </b>)
    //                 Minimize
    //                 <div className="close" ref={(element) => { this.dropdownBox = element; }} style={{ color: 'white' }}>Close</div>
    //               </div>
    //               <div style={hidden} className="msg_wrap"><div className="msg_body">Message will appear here</div></div>
    //           </div>) : (null)}
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }
}

export default MessageBox;