import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {

    const slidecard = [
        {
            id: 1,
            srcimg: 'assets/img/imagebox/top-rated-product-1.png',
            heading: 'PANEL SAW (PS-300T)',
            slug: "panel-saw-300",
            category: "Holzmac"
        },
        {
            id: 2,
            srcimg: 'assets/img/imagebox/top-rated-product-2.png',
            heading: 'AUTOMATIC THROUGH FEED EDGE BANDER (TF-6) ',
            slug: "edge-banding-machine-tf-6",
            category: "Holzmac"
        },
        {
            id: 3,
            srcimg: 'assets/img/imagebox/top-rated-product-3.png',
            heading: 'TWIN HEAD DRILLING MACHINE (DUPLEX)',
            slug: "multi-borer-duplex",
            category: "Holzmac"
        },
        {
            id: 4,
            srcimg: 'assets/img/imagebox/top-rated-product-4.png',
            heading: "CNC ROUTER (NC-1300ATC)",
            category: "Holzmac",
            slug: "cnc-router-nc-1300",
        },
        {
            id: 5,
            srcimg: 'assets/img/imagebox/top-rated-product-5.png',
            heading: 'CNC NESTING MACHINE (NM-4)',
            slug: "automatic-cnc-nesting-machine-nm-4",
            category: "Promac"
        },
        {
            id: 6,
            srcimg: 'assets/img/imagebox/top-rated-product-6.png',
            heading: 'MULTI BORER (4S-DRILLTEK)',
            slug: "multi-borer-drilltek",
            category: "Promac"

        },
        {
            id: 7,
            srcimg: 'assets/img/imagebox/top-rated-product-7.png',
            heading: 'CNC DOOR LOCK MACHINE (LOCK MASTER)',
            slug: "lock-master",
            category: "Promac"
        }
    ];

    return (
        <div className="themesflat-carousel-box data-effect clearfix" data-gap={30} data-column={3} data-column2={2}
            data-column3={1} data-auto="true">
            <div className="owl-carousel owl-theme">
                {
                    slidecard.map(data => (
                        <div className="themesflat-image-box style-1 has-icon icon-right w65 clearfix" key={data.id}>
                            <div className="image-box-item" >
                                <div className="inner">
                                    <div className="thumb data-effect-item">
                                        <img src={data.srcimg} alt="altimage" />
                                        <div className="overlay-effect bg-color-accent" />
                                    </div>
                                    <div className="text-wrap">
                                        <h5 className="heading top_rated_heading"><a href={data.category === 'Holzmac' ? `/holzmac/${data.slug}` : `/promac/${data.slug}`} >{
                                            data.heading.length < 25 ? data.heading : data.heading.slice(0, 25) + "..."
                                        }</a>
                                        </h5>
                                        {/* <p>Hello</p> */}
                                        <span className="icon-wrap">
                                            <i className="fa fa-angle-right" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;
