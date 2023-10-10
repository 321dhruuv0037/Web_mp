import React,{Component} from "react";
import Card from '../Dashboard/CardUI'

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Basketball Court"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Football Ground"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Top Court"/> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;