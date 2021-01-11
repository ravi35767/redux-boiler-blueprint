import React, { Component } from 'react';
import {connect} from "react-redux";
import { set_data } from ".././store/action";

class Home extends Component {

    render() {
        console.log("props==>",this.props);
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=> this.props.set_data()}>SETDATA</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        users: state.users
    }
        
}
const mapDispatchToProps = (dispatch) =>({
    set_data: () => dispatch(set_data())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);