import React, { Component } from "react";
import "./Community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
//import "@reach/menu-button/styles.css";
import { Link } from "react-router-dom";
import {
  faCommentDots,
  faPaperPlane,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

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
    alert(`${this.state.Comment} ${this.state.Visibility}`);
  };

  render() {
    return (
      <div id="main">
        <div id="SideNavBar" style={{ width: "18%" }}>
          <h5 id="notify">Notifications</h5>

          <ul id="notify-points">
            <marquee direction="up" scrollamount="3">
              <li>
                <a href="#1" style={{ textDecoration: "none" }}>
                  Attendance
                </a>
              </li>
              <br></br>
              <li>
                <a href="#1" style={{ textDecoration: "none" }}>
                  Attendance
                </a>
              </li>
              <br></br>
              <li>
                <a href="#1" style={{ textDecoration: "none" }}>
                  Attendance
                </a>
              </li>
              <br></br>
              <li>
                <a href="#1" style={{ textDecoration: "none" }}>
                  Attendance
                </a>
              </li>
              <br></br>
              <li>
                <a href="#1" style={{ textDecoration: "none" }}>
                  Attendance
                </a>
              </li>
              <br></br>
            </marquee>
          </ul>
        </div>

        <div id="SideNavBar" style={{ width: "18%", marginTop: "18%" }}>
          <img
            alt="img"
            src="https://dcassetcdn.com/design_img/3361176/175408/175408_18909504_3361176_2e474988_image.png"
            style={{ height: "90%", width: "80%", marginTop: "5%" }}
          ></img>
        </div>

        <div
          id="Contentbox"
          style={{
            height: "316px",
            marginRight: "-135px",
            marginTop: "-60px",
            marginLeft: "20%",
          }}
        >
          <h3
            className="Community"
            style={{ fontSize: "28px", padding: "2px" }}
          >
            Community Forum
          </h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label className="commentheading">Write a Post</label>
              <textarea
                value={this.state.Comment}
                onChange={this.handlePostChange}
                cols="80"
                rows="5"
                placeholder="Write Something..."
                className="something"
              ></textarea>
            </div>
            <div>
              <button id="Tags">Tag</button>
              <img
                src="https://cdn2.iconfinder.com/data/icons/rounded-white-basic-ui-set-3/139/Photo_Add-RoundedWhite-512.png"
                style={{
                  marginLeft: "10%",
                  marginTop: "-7%",
                  height: "4%",
                  width: "4%",
                }}
              ></img>
              <div
                style={{
                  width: "23%",
                  marginLeft: "9%",
                  marginTop: "-3.5%",
                  position: "absolute",
                }}
              >
                <input style={{ border: "0px" }} type="file" />
              </div>
            </div>
            <br></br>
            <div>
              <label
                id="Visibility1"
                style={{ marginTop: "-4%", marginLeft: "2%" }}
              >
                Visibility:
              </label>
              <select
                value={this.state.visibility}
                onChange={this.handleVisibilityChange}
                id="Visibility2"
                style={{ marginTop: "-4%", padding: "0px", marginLeft: "8%" }}
              >
                <option value="Public">Public </option>
                <option value="ClassMate">Classmates</option>
                <option value="SubOrdinates">Subordinates</option>
              </select>
            </div>
            <div>
              <button id="Post">Post</button>
            </div>
          </form>
          <div id="newRecent">
            <h5 className="recentheading">Recent posts</h5>

            {postsArr.map((post) => {
              return (
                <React.Fragment>
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "100px",
                      margin: "2% 3%",
                    }}
                  >
                    <img
                      alt="profile"
                      src={post.profilePhoto}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "100px",
                      }}
                    ></img>

                    <div id="designation">
                      <b>{post.name}</b>
                      <p style={{ width: "120%", marginLeft: "13%" }}>
                        {post.designation}
                        <br></br>
                        <span style={{ marginLeft: "-79%", color: "green" }}>
                          {post.hour}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div id="post-content">
                    <p id="main-content-matter">
                      {post.postContent.mainContent}
                      <br></br>
                      {post.postContent.sideContent}
                      <a href={post.postContent.contentLink}>
                        {post.postContent.contentLink}
                      </a>
                    </p>

                    <p
                      id="main-content-matter"
                      style={{ color: "#3498DB", fontWeight: "bold" }}
                    >
                      {post.tags}
                    </p>

                    <img
                      alt="img"
                      src={post.postContent.contentImage}
                      style={{ width: "86%", height: "53%" }}
                    ></img>

                    <br></br>
                    <hr style={{ width: "95%", marginTop: "1%" }}></hr>

                    <FontAwesomeIcon
                      style={{
                        height: "4%",
                        width: "3%",
                        float: "left",
                        margin: "-1% 10%",
                      }}
                      icon={faThumbsUp}
                    />

                    <FontAwesomeIcon
                      style={{
                        height: "4%",
                        width: "3%",
                        float: "left",
                        margin: "-1% 11%",
                      }}
                      icon={faCommentDots}
                    />

                    <FontAwesomeIcon
                      style={{
                        height: "4%",
                        width: "3%",
                        float: "left",
                        margin: "-1% 11%",
                      }}
                      icon={faShareSquare}
                    />

                    <FontAwesomeIcon
                      style={{
                        height: "4%",
                        width: "3%",
                        float: "left",
                        margin: "-1% 10%",
                      }}
                      icon={faPaperPlane}
                    />

                    <span
                      style={{
                        fontSize: "10px",
                        float: "left",
                        margin: "1% 8%",
                      }}
                    >
                      <a href="#1" style={{ textDecoration: "none" }}>
                        Acknowledge
                      </a>
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        float: "left",
                        margin: "1% 11%",
                      }}
                    >
                      <a href="#1" style={{ textDecoration: "none" }}>
                        Express
                      </a>
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        float: "left",
                        margin: "1% 10%",
                      }}
                    >
                      <a href="#1" style={{ textDecoration: "none" }}>
                        Share
                      </a>
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        float: "left",
                        margin: "1% 12%",
                      }}
                    >
                      <a href="#1" style={{ textDecoration: "none" }}>
                        Send
                      </a>
                    </span>
                    <hr style={{ width: "95%", marginTop: "6%" }}></hr>
                  </div>

                  <br></br>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div id="SideNavBar" style={{ width: "18%", marginLeft: "81%" }}>
          {/* <h5 id="notify">Profile</h5>  */}
          <img
            alt="profile"
            src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/cover/487.jpg?v=1575095450"
            style={{ height: "27%", width: "100%" }}
          ></img>

          <div
            id="profile_circle"
            style={{
              height: "30%",
              width: "33%",
              borderRadius: "60%",
              marginLeft: "6%",
              marginTop: "-25%",
            }}
          >
            <img
              alt=""
              src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg"
              style={{ borderRadius: "60%", width: "99%", height: "100%" }}
            ></img>
          </div>

          <p style={{ margin: "8% 8%", fontWeight: "bold" }}>Abhimanyu Singh</p>
          <p style={{ margin: "-9% 8%" }}>Dabur India Pvt. Ltd</p>
          <p style={{ margin: "8% 8%" }}>IIM Lucknow, Lucknow, India</p>
          <p style={{ margin: "-8% 8%" }}>abhi@gmail.com</p>
          <p style={{ margin: "8% 8%", color: "blue" }}>
            <ul>
              <li>230 connections</li>
            </ul>
            <img
              alt="img"
              src="https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png"
              style={{
                height: "12%",
                width: "14%",
                marginLeft: "4%",
                marginTop: "-5%",
              }}
            ></img>
            <p
              style={{ marginTop: "-12%", marginLeft: "19%", fontSize: "90%" }}
            >
              84 Recommendation Badges
            </p>
          </p>
          <span
            style={{
              float: "right",
              fontSize: "10px",
              paddingRight: "5%",
              height: "20px",
              marginTop: "-3%",
            }}
          >
            <Link
              to="/profile"
              style={{
                float: "right",
                textDecoration: "none",
                marginBottom: "30%",
              }}
            >
              View Details
            </Link>
          </span>
        </div>

        <div
          id="SideNavBar"
          style={{ width: "18%", marginLeft: "81%", marginTop: "18%" }}
        >
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size="3x"
            style={{ margin: "3% 7%" }}
          ></FontAwesomeIcon>

          <h5 id="notify" style={{ marginTop: "-15%" }}>
            My Schedule
          </h5>

          <p style={{ margin: "13% 20%" }}>Monday class at 3PM</p>
        </div>
      </div>
    );
  }
}
export default Community;
