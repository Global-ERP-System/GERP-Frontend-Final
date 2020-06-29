import React, { Component } from "react"
import './faculty.css'


class Faculty extends Component {
    
    render() {
        return (
            <div id="Contentbox">
            <form>
                <label>
                 Faculty Name:
                 <input type="text" name="name" style={{width: "370px"}} />
                 </label>
                 <br></br>
                 <label>
                 Department:
                 <input type="number" name="name" style={{width: "370px"}} />
                 </label>
                 <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Faculty;