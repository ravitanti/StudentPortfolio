import React from 'react';
import logo1 from './profile.png';

const ViewBio = props => {
  console.log(props);
  if(props.bio.length === 0) {
    return (
    
    <div>
        <div >
        <img style={{height: 200, width: 200 }}
            src={logo1} 
            alt="Student portfolio logo"
            />
        </div>
        
        

      <div className="ui segment">
      <h3>User1</h3> 
        <div>
            {"User1@gmail.com"}
        </div>
      </div>
    </div>
)
  }
};

export default ViewBio;