import React,{Component} from 'react';
import Header from './Header-Footer/header';
import HeaderFaculty from './Header-Footer/HeaderF';
//import Footer from './Header-Footer/footer';
import FooterF from './Header-Footer/FooterF';
import Navbars from './Header-Footer/navbar';

import Community from './Student/Community/Community';
import Profile from './Student/profile/profile';
import Intern from './Student/internship/intern'
import Assignment from './Student/assignment/assignment'
import Attendance from './Student/attendance/attendance'
import Previous from './Student/previousdata/previous'
import Timetable from './Student/Timetable/tt'
import Research from './Student/Research/Research' 
import FeeStructure from './Student/Fee Structure/FeeStructure'
import Examination from './Student/Exam/ExaminationBacklog'
import Project from './Student/Project/Project'
import Studymaterial from './Student/Study/Studymaterial'
import RaiseReq from './Student/RaiseReq/RaiseReq'
import Relation from './Student/myrelations/Relation'
import Recommendation from './Student/Recommendation/Recommendation' 

import Salary from './Faculty/Salary/Salary'
import FeedbackF from './Faculty/FeedbackF/FeedbackF'
import AppreciationF from './Faculty/AppreciationF/appreciation';
import AttendenceF from './Faculty/AttendenceF/AttendenceF';
import ProfileF from './Faculty/Profile/profile'
import LeaveF from './Faculty/Leaves/leaves'
import TimeTableF from './Faculty/TimeTableF/TimeTableF'
import AssignmentF from './Faculty/Assignment/Assignment'
import InternshipF from './Faculty/InternshipF/InternshipF'
import CommunityF from './Faculty/CommunityF/CommunityF';
import ExamMarksF from './Faculty/ExamMarksF/ExamMarksF';
import ProjectF from './Faculty/Project/Project';
import RelationF from './Faculty/RelationF/RelationF.js';
import StudymaterialF from './Faculty/StudyMaterial/studyMaterialFaculty';
import ResearchF from './Faculty/ResearchF/ResearchF'
import RaiseReqF from './Faculty/RaiseReq/RaiseReq';

import Signup from './signup';
import Login from './Login';
import Allposts from './Allposts';
import singlepost from './singlepost';



import {BrowserRouter as Router,Route,Link,Switch, Redirect,withRouter} from 'react-router-dom'
class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            isLoggedIn: true
            
        });
    }
   
    render(){
        if(this.state.isLoggedIn){         
            return(
                <div>
                {this.props.location.pathname!=='/login'&&this.props.location.pathname!=='/signup'?<Header />:null}
                <Switch>   
                    <Route path='/login' component={Login}/>
                    <Route path='/signup'component={Signup} />
                    <Route path='/allposts'component={Allposts} />
                    <Route path='/singlepost'component={singlepost} />
                    <Route path='/community' component={Community} />
                    <Route path='/intern' component={Intern} />
                    <Route path='/assignment' component ={Assignment} />
                    <Route path='/attendance' component={Attendance} />
                    <Route path='/previous' component={Previous} />
                    <Route path='/timetable' component={Timetable} />
                    <Route path='/research' component={Research} />
                    <Route path='/exam' component={Examination} />
                    <Route path='/project' component={Project} />
                    <Route path='/study' component={Studymaterial} />
                    <Route path='/raisereq' component={RaiseReq} />
                    <Route path='/relation' component={Relation} />
                    <Route path='/recommendation' component={Recommendation} /> 
                    <Route path='/profile' component={Profile} />
                    <Route path='/fee' component={FeeStructure} />  
                    <Redirect to="/login" />
                </Switch> 
            {  /*  <Footer />  */}
                </div>
            )

        }
        else if(this.state.facultyLoggedIn){
            return(
                <div>
                    <HeaderFaculty/>
                        <Router>
                            <Switch>
                                <Route path='/appreciationf' component={AppreciationF} /> 
                                <Route path='/assignmentf' component ={AssignmentF} />
                                <Route path='/attendencef' component={AttendenceF}/>
                                <Route path='/frontendfinal/communityf' component={CommunityF} />
                                <Route path='/examf' component={ExamMarksF}/>
                                <Route path='/feedbackf' component={FeedbackF} />
                                <Route path='/internshipf' component={InternshipF} />
                                <Route path='/leavesf' component={LeaveF} />
                                <Route path='/profilef' component={ProfileF} />
                                <Route path='/projectf' component={ProjectF}/>
                                <Route path='/raisereqf' component={RaiseReqF}/>
                                <Route path='/relationf' component={RelationF}/>
                                <Route path='/salaryf' component={Salary} /> 
                                <Route path='/timetablef' component={TimeTableF}/>                                 
                                <Route path='/studyf' component={StudymaterialF}/>
                                <Route path='/researchf' component={ResearchF}/>
                            </Switch>
                        </Router><br/><br/>
                    <FooterF/>
                </div>
            )
        }
        else{
            return(
                <Router>
                <Switch>  
                <Route path='/login' />
                <Route path='/signup'component={Signup} />
                <Redirect to="/login" />
                </Switch> 
                </Router>
               
                );
        }
    }
}

export default withRouter(MainComponent);