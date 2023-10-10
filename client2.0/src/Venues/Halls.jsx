import React,{Component} from "react";
import Card from '../Dashboard/CardUI'

import img1 from "../assets/img1.jpg"
import img5 from "../assets/img5.jpg"
import img4 from "../assets/img4.jpg"
import img3 from "../assets/img3.jpg"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <Card imgsrc={img3} title="Seminar Hall"/>
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img5} title="Mondini Hall"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;