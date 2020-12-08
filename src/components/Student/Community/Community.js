import React, { Component } from "react";

import NotificationNav from "./NotificationNav";
import AdNav from "./AdNav";
import ProfileNav from "./ProfileNav";
import MyScheduleNav from "./MyScheduleNav";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faPaperPlane,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import "./Community.css";
let postsArr = [
  {
    profilePhoto:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
    name: "Abhimanyu Singh",
    designation: "HR Consultant at Dabur Industries",
    time: "10h",
    tags: "#Codsule #CodingChallenge #Nagarro #Coding #Programming",
    postContent: {
      mainContent:
        "Did you hear that buzzing sound? That's for you to set the alarm for the Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.",
      sideContent: " Register for the Contest at",
      contentLink: "https://cb.lk/codjulyli",
      contentImage: "https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg",
    },
  },
  {
    profilePhoto:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
    name: "Abhimanyu Singh",
    designation: "HR Consultant at Dabur Industries",
    time: "10h",
    tags: "#Codsule #CodingChallenge #Nagarro #Coding #Programming",
    postContent: {
      mainContent:
        "Did you hear that buzzing sound? That's for you to set the alarm for the Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.",
      sideContent: " Register for the Contest at",
      contentLink: "https://cb.lk/codjulyli",
      contentImage: "https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg",
    },
  },
  {
    profilePhoto:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
    name: "Abhimanyu Singh",
    designation: "HR Consultant at Dabur Industries",
    time: "10h",
    tags: "#Codsule #CodingChallenge #Nagarro #Coding #Programming",
    postContent: {
      mainContent:
        "Did you hear that buzzing sound? That's for you to set the alarm for the Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.",
      sideContent: " Register for the Contest at",
      contentLink: "https://cb.lk/codjulyli",
      contentImage: "https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg",
    },
  },
  {
    profilePhoto:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
    name: "Abhimanyu Singh",
    designation: "HR Consultant at Dabur Industries",
    time: "10h",
    tags: "#Codsule #CodingChallenge #Nagarro #Coding #Programming",
    postContent: {
      mainContent:
        "Did you hear that buzzing sound? That's for you to set the alarm for the Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.",
      sideContent: " Register for the Contest at",
      contentLink: "https://cb.lk/codjulyli",
      contentImage: "https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg",
    },
  },
];

class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Comment: "",
      Visibility: "",
    };
  }
  handlePostChange = (event) => {
    this.setState({
      Comment: event.target.value,
    });
  };
  handleVisibilityChange = (event) => {
    this.setState({
      Visibility: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.Comment} ${this.state.Visibility}`);
  };

  render() {
    return (
      <div className="community-page">
        <div
          className="mobile-hide"
          style={{ height: "100vh", width: "410px" }}
        >
          <NotificationNav
            className="side-notification-bar ml-2"
            style={{
              width: "18vw",
              backgroundColor: "rgb(245,245,245)",
            }}
            fluid
          />
          <AdNav
            className="side-notification-bar ml-2"
            style={{
              width: "18vw",
              height: "38%",
              bottom: "2px",
              backgroundColor: "rgb(245,245,245)",
            }}
            fluid
          />
        </div>
        <div className="community-page-content">
          <div className="responsive-side-nav mb-1  ">
            <div style={{ display: "flex" }}>
              <NotificationNav
                className="mt-1 mr-1 mb-1"
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  flexBasis: "100%",
                }}
              />
              <ProfileNav
                className="mt-1 mb-1 ml-1 "
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  flexBasis: "100%",
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <AdNav
                className="mt-1 mr-1 "
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  flexBasis: "100%",
                }}
              />
              <MyScheduleNav
                className="mt-1 ml-1"
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  flexBasis: "100%",
                }}
              />
            </div>
          </div>

          <div className="community-form" fluid>
            <h2 className="community-heading">Community Forum</h2>
            <div className="write-post">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h5>Write a Post</h5>
                  <textarea
                    value={this.state.Comment}
                    style={{ width: "100%" }}
                    rows={6}
                    onChange={this.handlePostChange}
                    placeholder="Write Something..."
                  ></textarea>
                </div>
                <div>
                  <div>
                    <Button type="submit" className="m-2" variant="info">
                      Tag
                    </Button>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="m-2"
                        alt="img"
                        src="https://cdn2.iconfinder.com/data/icons/rounded-white-basic-ui-set-3/139/Photo_Add-RoundedWhite-512.png"
                        style={{ width: "45px" }}
                      />
                      <input
                        className="m-2"
                        style={{ border: "0px", width: "210px" }}
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="m-2"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ flexGrow: "1" }}>
                    <label className="mr-2">Visibility:</label>
                    <select
                      value={this.state.visibility}
                      onChange={this.handleVisibilityChange}
                    >
                      <option value="Public">Public </option>
                      <option value="ClassMate">Classmates</option>
                      <option value="SubOrdinates">Subordinates</option>
                    </select>
                  </div>
                  <Button variant="info" type="submit">
                    Post
                  </Button>
                </div>
              </form>
            </div>
            <div className="recent-posts mt-3">
              <h4 className="pt-3">Recent posts</h4>

              {postsArr.map((post, index) => {
                return (
                  <div key={index} className="m-4 mb-5">
                    <div className="profile-information mb-1">
                      <img
                        alt="profile"
                        src={post.profilePhoto}
                        className="mr-3"
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "100px",
                        }}
                      />
                      <div>
                        <b>{post.name}</b>
                        <p>
                          {post.designation}
                          <br />
                          <span>{post.hour}</span>
                        </p>
                      </div>
                    </div>

                    <div className="post-content p-3">
                      <p>
                        {post.postContent.mainContent}
                        <br />
                        {post.postContent.sideContent}{" "}
                        <a href={post.postContent.contentLink}>
                          {post.postContent.contentLink}
                        </a>
                      </p>
                      <br />
                      <p className="post-tags m-3">{post.tags}</p>
                      <div>
                        <img
                          alt="img"
                          src={post.postContent.contentImage}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <br />
                      <hr className="mb-1 mt-1" style={{ width: "95%" }}></hr>
                      <div className="post-icons">
                        <div className="icon-block">
                          <FontAwesomeIcon
                            className="fa-lg"
                            icon={faThumbsUp}
                          />
                          <a href="#1" style={{ textDecoration: "none" }}>
                            Acknowledge
                          </a>
                        </div>
                        <div className="icon-block">
                          <FontAwesomeIcon
                            className="fa-lg"
                            icon={faCommentDots}
                          />
                          <a href="#1" style={{ textDecoration: "none" }}>
                            Express
                          </a>
                        </div>
                        <div className="icon-block">
                          <FontAwesomeIcon
                            className="fa-lg"
                            icon={faShareSquare}
                          />
                          <a href="#1" style={{ textDecoration: "none" }}>
                            Share
                          </a>
                        </div>
                        <div className="icon-block">
                          <FontAwesomeIcon
                            className="fa-lg"
                            icon={faPaperPlane}
                          />
                          <a href="#1" style={{ textDecoration: "none" }}>
                            Send
                          </a>
                        </div>
                      </div>

                      <hr className="mt-1 mb-1" style={{ width: "95%" }}></hr>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="mobile-hide"
          style={{ width: "430px", height: "100vh" }}
        >
          <ProfileNav
            className="side-notification-bar mr-2"
            style={{
              width: "18vw",
              right: "0px",
              backgroundColor: "rgb(245,245,245)",
            }}
          />
          <MyScheduleNav
            className="side-notification-bar mr-2 "
            style={{
              width: "18vw",
              height: "38%",
              bottom: "2px",
              right: "0px",
              backgroundColor: "rgb(245,245,245)",
            }}
          />
        </div>
      </div>
    );
  }
}
export default Community;
