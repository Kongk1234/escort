import '../css/annoncediv.css';
import React, { Component } from 'react';
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annonce: [],
        }
    }

    componentDidMount() {
        this.addannonce();
    }
    
    addannonce = () => {
        fetch('/json/annonce.json')
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    annonce: result.annonce
                });
            },
            error => {
                console.log("Error: " + error);
                this.setState({
                    error
                });
            }
        )
    }

    shortAnnonce = () => {
        console.log(this.state)
        return (
            <div>
                {this.state.annonce.map(element => {
                    return(
                    <div className="annoncediv">
                        {/* Make it os image is in a div and give the div a width and height */}
                        <div id="imagediv">
                            {/* Make image 100% max-width and height */}
                            <img src={element.image} alt="profile_image" id="annoncedivimg"></img>
                        </div>
                        <div id="profileinfo">
                            <h3 id="profilename">{element.name}</h3>
                            <textarea id="profiledesc" rows="4" cols="40" disabled>{element.desc}</textarea> <br></br>
                        </div>
                    </div>
                    )

                })}
            </div>
        )
    }

    render() {
        return (
            <div className="annonce">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                {this.shortAnnonce()}
            </div>
        );
    }
}

export default MyComponent;