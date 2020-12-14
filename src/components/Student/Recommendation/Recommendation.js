// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import './Recommendation.css'

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            message: ""
        }
    }
    handlemessage = (event) => {
        this.setState({ message: event.target.value });
    }
    handleusername = (event) => {
        this.setState({ username: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ message: "" })
        this.setState({ username: "" })
    }

    render() {

        return (
            <div className="container-md px-3" style={{textAlign: 'center'}}>
                <br></br>
                <h1 className="Heading">Recommendation Badges </h1><br></br>
                <form className='px-3' onSubmit={this.handlesubmit}>
                    <label style={{ fontFamily: 'Pt sans narrow', fontWeight: '700' }}>Username:</label>
                    <input style={{width: '50vh', margin: 'auto'}} className="form-control" value={this.state.username} onChange={this.handleusername} required /><br></br>
                    <label style={{ fontFamily: 'Pt sans narrow', fontWeight: '700' }}>Message:</label>
                    <input style={{width: '50vh', margin: 'auto'}} className="form-control" value={this.state.message} onChange={this.handlemessage} /><br></br>
                </form>

                   
                <h4 style={{ fontFamily: 'Pt sans narrow', fontWeight: '700' }}>How strongly do you recommend</h4>
                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                            <br/><br/>
                        <div style={{textAlign:"center"}}>
                    <button className="btn" style={{ color: "white", backgroundColor: '#138808' }}>Submit</button>
                        </div><br/><br/>
               
            </div>
        )
    }
}
