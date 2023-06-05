import React, { Component } from 'react';

class BannerTitle extends Component {
    render() {
        return (
            <div id="featured-title" className="featured-title clearfix">
                <div id="featured-title-inner" className="container clearfix">
                    <div className="featured-title-inner-wrap">
                        <div id="breadcrumbs">
                            <div className="breadcrumbs-inner">
                                <div className="breadcrumb-trail">
                                    <a href="/" className="trail-begin">Home</a>
                                    <span className="sep">{this.props.data.border}</span>
                                    <a href={this.props.data.links} className="trail-begin">{this.props.data.titlelink}</a>
                                    <span className="sep">|</span>
                                    <span className="trail-end">Products</span>
                                </div>
                            </div>
                        </div>
                        <div className="featured-title-heading-wrap">
                            <h1 className="feautured-title-heading">
                                {this.props.data.heading}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerTitle;