import React, { Component } from 'react'
import './CommunityF.css'


class CommunityF extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Comment: '',
            Visibility: ''
        }
    }
    handlePostChange = (event) => {
        this.setState({
            Comment: event.target.value
        })
    }
    handleVisibilityChange = (event) => {
        this.setState({
            Visibility: event.target.value
        })
    }
    handleSubmit= event => {
        alert(`${this.state.Comment} ${this.state.Visibility}`)
    }

    render() {
        return (
            <div id="main">
                <div id="SideNavBar">
                
                   </div>
                <div id="Contentbox">
                    <h1 className="Community">Community</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="commentheading">Comment</label>
                            <textarea value={this.state.Comment}
                                onChange={this.handlePostChange} cols="80" rows="5" placeholder="Write Something..."
                                className="something"></textarea></div>
                        <div>
                            <button id="Tags">Tag</button>
                        </div>
                        <br></br>
                        <div>
                            <label id="Visibility1">Visibility:</label>
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2">
                                <option value="Public">Public </option>
                                <option value="ClassMate">Classmates</option>
                                <option value="SubOrdinates">Subordinates</option>
                            </select>
                        </div>
                        <div>
                            <button id="Post">Post</button>
                        </div>
                    </form>
                    <div id="Recent">
                    <label className="recentheading">Recent posts</label>
                    
                    </div>
                </div>
                <div id="RightSidebox">
                    <div id="Notificationbox">
                    <h3> NOTIFICATION </h3>
                    </div>
                    <div id="Profilebox">
                        <h3> PROFILE<br></br></h3>
                        <h3>&lt;NAME&gt;</h3>
                        <a href="/profilef" >Edit profile</a><br></br><br></br>
                        <label className="profilecontent">School/College : </label><br></br><br></br>
                        <label className="profilecontent">Experience in years : </label><br></br><br></br>
                        <label className="profilecontent">Domain : </label><br></br><br></br>
                    </div>
                </div>
            </div>

        )
    }
}
export default CommunityF;