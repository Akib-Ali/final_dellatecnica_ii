import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    srcimg: 'assets/img/partners/featured-product-01.png',
                    heading: 'CURVILINEAR EDGE BANDER & TRIMMER',
                    meta: 'Holzmac',
                    text: 'EB-Smart+',
                    slug: "eb-smart-plus"

                },
                {
                    id: 2,
                    srcimg: 'assets/img/partners/featured-product-02.png',
                    heading: 'AUTOMATIC THROUGHFEED EDGE BANDER',
                    meta: 'Holzmac',
                    text: 'TF-3',
                    slug: "edge-banding-machine-tf-3"
                },
                {
                    id: 3,
                    srcimg: 'assets/img/partners/featured-product-03.png',
                    heading: 'AUTOMATIC BEVEL EDGE BANDER',
                    meta: 'Holzmac',
                    text: 'Inclinia',
                    slug: "edge-bander-inclinia"
                },
                {
                    id: 4,
                    srcimg: 'assets/img/partners/featured-product-04.png',
                    heading: 'HOT PRESS',
                    meta: 'Holzmac',
                    text: 'HP-100',
                    slug: "hot-press-hp-100"
                },
                {
                    id: 5,
                    srcimg: 'assets/img/partners/featured-product-05.png',
                    heading: 'COLD PRESS',
                    meta: 'Holzmac',
                    text: 'CP-50',
                    slug: "cold-press-cp-50"
                },
                {
                    id: 6,
                    srcimg: 'assets/img/partners/featured-product-06.png',
                    heading: 'BEAM SAW',
                    meta: 'Holzmac',
                    text: 'BS-320AT/R',
                    slug: "beam-saw"
                }
            ]
        }
    }
    render() {
        return (
            <div className="themesflat-carousel-box clearfix" data-gap={20} data-column={3} data-column2={2} data-column3={1}
                data-auto="true">
                <div className="owl-carousel owl-theme">
                    {
                        this.state.data.map(data => (
                            <div className="themesflat-project style-1 data-effect  clearfix" key={data.id}>
                                <div className="project-item">
                                    <div className="inner">
                                        <div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                                            <img src={data.srcimg} alt="altimage" />
                                            <div className="text-wrap text-center">
                                                <h5 className="heading"> <a href={`${Project === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`} className="icon-1" >{data.heading}</a></h5>
                                                <div className="elm-meta">
                                                    <span>
                                                        <a href="/holzmac">{data.meta}</a></span>
                                                    <span>
                                                        <a href={`${Project === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}>{data.text}</a></span>
                                                </div>
                                            </div>
                                            <div className="elm-link">
                                                <a href={`${Project === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}  className="icon-1 icon-search"></a>
                                                <a href={`${Project === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}  className="icon-1"></a>
                                            </div>
                                            <div className="overlay-effect bg-color-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Project;