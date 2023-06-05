import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SVG from './svg';

class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // iconbox: [
            //     {
            //         id: 1,
            //         icon: "autora-icon-quality",
            //         title: "BEST QUALITY",
            //         text: "At DELLATECNICA, we understand the importance of quality in the woodworking industry, which is why we only offer the highest quality machines to our customers. "
            //     },
            //     {
            //         id: 2,
            //         icon: "autora-icon-time",
            //         title: "ON TIME DELIVERY",
            //         text: "At DELLATECNICA, we understand that on-time delivery is critical to the success of your woodworking projects. That's why we are committed to delivering your orders on time, every time."
            //     },
            //     {
            //         id: 3,
            //         icon: "autora-icon-author",
            //         title: "COMPETITIVE PRICE",
            //         text: "At DELLATECNICA, We provide you best quality machines at a competitive price by designing and manufacturing the machines ourselves."
            //     }
            // ]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="35" style={{ height: "0px" }}></div>
                    <div className="themesflat-content-box clearfix" data-margin="0 5px 0 5px" data-mobilemargin="0 0 0 0" style={{ margin: "0 5px 0 5px" }}>
                        <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 clearfix">
                            <div className="icon-wrap"><i className="autora-icon-quality"></i></div>
                            <div className="text-wrap">
                                <h5 className="heading"><a href="#">BEST QUALITY</a></h5>
                                <div className="sep clearfix"></div>
                                <p className="sub-heading">At DELLATECNICA, we understand the importance of quality in the woodworking industry, which is why we only offer the highest quality machines to our customers. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="35" style={{ height: "0px" }}></div>
                    <div className="themesflat-content-box clearfix" data-margin="0 5px 0 5px" data-mobilemargin="0 0 0 0" style={{ margin: "0 5px 0 5px" }}>
                        <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 clearfix">
                            <div className="icon-wrap"><i className="autora-icon-time"></i></div>
                            <div className="text-wrap">
                                <h5 className="heading"><a href="#">ON TIME DELIVERY</a></h5>
                                <div className="sep clearfix"></div>
                                <p className="sub-heading">At DELLATECNICA, we understand that on-time delivery is critical to the success of your woodworking projects. That's why we are committed to delivering your orders on time, every time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="35" style={{ height: "0px" }}></div>
                    <div className="themesflat-content-box clearfix" data-margin="0 5px 0 5px" data-mobilemargin="0 0 0 0" style={{ margin: "0 5px 0 5px" }}>
                        <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 clearfix">
                            <div className="icon-wrap"><SVG /></div>
                            <div className="text-wrap">
                                <h5 className="heading"><a href="#">COMPETITIVE PRICE</a></h5>
                                <div className="sep clearfix"></div>
                                <p className="sub-heading">At DELLATECNICA, We provide you best quality machines at a competitive price by designing and manufacturing the machines ourselves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IconBox;