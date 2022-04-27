import React from 'react'; 
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Header from '../Header'
import ViewBio from './ViewBio';
import axios from 'axios';
import ViewEducationItem from './ViewEducationItem';
import ViewExperienceItem from './ViewExperienceItem';
import "../CSS/styles.css";



class ViewStudentProfile extends React.Component {
    constructor() {
        super();
        this.state = {basicDetail: [], educationDetails: [], experienceDetails: []};
    }
    // componentDidMount() {
    //     //const id = this.props.location.state.id;
    //     const id = 17;
    //     axios.get(`http://localhost:3000/api/student/${id}`).then((res) => {  
    //         if(res.status === 200) {
    //             console.log(res.data);
    //             this.setState({basicDetail: res.data.result})
    //         }
    //     })

    //     axios.get(`http://localhost:3000/api/student/education/${id}`).then((res) => {  
    //         if(res.status === 200) {
    //             console.log(res.data);
    //             this.setState({educationDetails: res.data.result})
    //         }
    //     })

    //     axios.get(`http://localhost:3000/api/student/experience/${id}`).then((res) => {  
    //         if(res.status === 200) {
    //             console.log(res.data);
    //             this.setState({experienceDetails: res.data.result})
    //         }
    //     })


    // }
    render() {
        return (
            <div>
                <div>
                <Header />
                </div>
                <div style={{float: 'left', width: '20%', marginTop:'20px', marginLeft: '100px'}}>
                    <ViewBio bio={this.state.basicDetail} />
                </div>
                <div style={{float: 'left', width: '60%', marginLeft: '100px', marginTop: '20px'}}>
                    <div className="ui segment">
                        <h5>Career Objective</h5> 
                        <div>
                            {"Highly driven recent business school graduate seeking a full-time position in finance where I can lend my knowledge of market analytics to help your organization improve profitability."}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>University</h5> 
                        <div>
                            {"San Jose State University"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>Degree</h5> 
                        <div>
                            {"Masters Degree"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>Course</h5> 
                        <div>
                            {"Computer Engineering"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>GPA</h5> 
                        <div>
                            {"4.0"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>Skills</h5> 
                        <div>
                            {"Cassandra/Java/Python/C++/C"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>Work Experience</h5> 
                        <div>
                            {"3 Years"}
                        </div>
                    </div>
                    <div className="ui segment">
                        <h5>Project</h5> 
                        <div>
                            {"Student Portfolio Using Node, Express, React and Cassandra as a distributed database"}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default ViewStudentProfile;