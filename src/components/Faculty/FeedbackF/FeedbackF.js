import React from 'react';
//import {Card} from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import classes from "./FeedbackF.module.css";

const feedbacks=[
  {
    name:'Student - 1',
    class:'Computer Science - 5A',
    comment:'You continue to be excellent in your teaching, both in the classroom and online.You are a teacherwho devotes a great amount of personal effort and interest to your daily teaching activities, as well as to your students.As one would expect, student evaluations of your teaching remain very high in all categories.',
    stars:5
  },{
    name:'Student - 2',
    class:'Computer Science - 4B',
    comment:'You continue to be excellent in your teaching, both in the classroom and online.You are a teacherwho devotes a great amount of personal effort and interest to your daily teaching activities, as well as to your students',
    stars:4
  },{
    name:'Student - 3',
    class:'Computer Science - 3C',
    comment:'You continue to be excellent in your teaching, both in the classroom and online.You are a teacherwho devotes a great amount of personal effort and interest to your daily teaching activities, as well as to your students',
    stars:5
  },{
    name:'Student - 4',
    class:'Computer Science - 1A',
    comment:'You continue to be excellent in your teaching, both in the classroom and online.You are a teacherwho devotes a great amount of personal effort and interest to your daily teaching activities, as well as to your students',
    stars:4
  }
]

const Feedback=props=>{
  const feeds=feedbacks.map(feed=>{
    return <li>
        <h2>{feed.name}</h2>
        <h3>{feed.class}</h3>
        <StarRatingComponent className={classes.Stars} name = "rate1" editing = {false} starCount = {5} value = {feed.stars} />
        <p>{feed.comment}</p>
      </li>
  })
  return (
    <div className={classes.Feedback}>
      <h1>Feedback</h1>
      <ul>
        {feeds}
      </ul>
    </div>
  );
};

export default Feedback;
