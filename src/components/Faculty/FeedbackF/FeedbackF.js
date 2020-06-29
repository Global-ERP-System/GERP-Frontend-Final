import React from 'react';
import {
  Card
} from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import "./FeedbackF.css";

class Feedback extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  render() {
    const {
      rating
    } = this.state;
    const mystyle = {
      color: "orangered",

      padding: "10px",
      width: "100%",
      fontFamily: "Arial",
      textalign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }

    return ( <div>
      <h1 style = {
        mystyle
      } > < b > Feedback </b></h1 >
      <Card className = "Card" >
      <div className = "div" >
      <h4 style = {
        {
          color: "blue"
        }
      }> Student - 1 </h4>   <h6 style = {
        {
          color: "gray"
        }
      } > computer science - 5 A </h6> <
      StarRatingComponent name = "rate1"
      editing = {
        false
      }
      starCount = {
        5
      }
      value = {
        4
      }
      /> <h6> You
      continue to be excellent in your teaching, both in the classroom and online.You are a teacher
      who devotes a great amount of personal effort and interest to your daily teaching activities, as well as to your students.As one would expect, student evaluations of your teaching remain very high in all categories. </h6> </div > </Card >  <Card className = "Card" >
      <div className = "div" >
      <h4 style = {
        {
          color: "blue"
        }
      } > Student - 2 </h4>   <h6 style = {
        {
          color: "gray"
        }
      } > computer science - 5 A </h6> <
      StarRatingComponent name = "rate1"
      editing = {
        false
      }
      starCount = {
        5
      }
      value = {
        5
      }
      /> <h6 > excellent </h6> </div > </Card >  <Card className = "Card" >
      <div className = "div" >
      <h4 style = {
        {
          color: "blue"
        }
      } > Student - 3 </h4>   <h6 style = {
        {
          color: "gray"
        }
      } > computer science - 5 A </h6> <
      StarRatingComponent name = "rate1"
      editing = {
        false
      }
      starCount = {
        5
      }
      value = {
        4
      }
      /> <h6 > good </h6> </div > </Card >  <Card className = "Card" >
      <div className = "div" >
      <h4 style = {
        {
          color: "blue"
        }
      } > Student - 4 </h4>   <h6 style = {
        {
          color: "gray"
        }
      } > computer science - 4 A </h6> <
      StarRatingComponent name = "rate1"
      editing = {
        false
      }
      starCount = {
        5
      }
      value = {
        3
      }
      /> <h6 > good </h6> </div > </Card > 

      </div>
    );
  }
}
export default Feedback;