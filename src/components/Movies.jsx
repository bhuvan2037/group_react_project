import React from "react";

const Movies = (props) => {
    return (
        <>
            <div>
                <div className="background">
                    <div className="bg1">
                        <div className="imgs">
                            <img className="img" src={props.imgs} alt=""></img>
                        </div>
                        <div className="movie">
                            <h5>movie name:{props.movie}</h5>
                        </div>
                        <div className="genere">
                            <h5>Genere:{props.genere}</h5>
                        </div>
                        <div>
                            <a className="link" href={props.link} id="">
                                <button className="btn">DOWNLOAD:</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;