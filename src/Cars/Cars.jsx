import React from "react";

const Cars = (props) => {
    return (
        <>
            <div className="main"><br></br>
                <div className="second">
           
                    <div className="imgs">
                        <img className="img" src={props.imgs}></img>
                        <div className="details">
                            <div className="title">
                                <h3>Car Name:{props.title} </h3>
                            </div>
                            <div className="brand">
                                <h3>Car Brand:{props.brand}</h3>
                            </div>

                            <div className="description">
                                <h3>Car Description:<p>{props.description}</p></h3>
                            </div>
                            <div className="price">
                                <h3>Price:{props.price}</h3>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Cars;