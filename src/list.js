import React, { Component } from "react";
import {connect} from "react-redux";

class List extends Component {
    constructor(props) {
        super(props);
            this.state = {
                arry:[],
                name: "",
                bool: -1,
            }
    }


    componentWillReceiveProps(nextprops){
        let data = [...nextprops.arryList]
        console.log("****"+nextprops);
        this.setState({arry:data, name: " "},() => {
            console.log("&&&&&&&&&&&&&"+ this.state.arry);
        })
    } 



    changeHandler = (e) =>{
        this.setState({name:e.target.value})
    }



    addDataHandler = () => {
        this.props.displayData(this.state.name);
    }



    render() {
            let arry = this.state.arry;

                let display = arry.map((val,i) => {
                    return(
                        <li key={i}>{val}</li>
                    );
                }) 




        return (
            <div>
             Insert Data :   <input onChange={this.changeHandler} value={this.state.value}></input>
                            <button onClick={this.addDataHandler} >Add Data</button>


                            <ul>
                                {display}
                            </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        arryList: state.arryList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayData : (data) => dispatch({type:'ADD',payload:data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);