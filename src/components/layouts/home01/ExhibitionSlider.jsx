import React from 'react';
import TitleHeading from './TitleHeading';

const ExhibitionSlider = () => {
    const images = [
        {
            id: 1,
            srcimg: "/assets/img/slider/slider-00.jpg"
        },
        {
            id: 2,
            srcimg: "/assets/img/slider/slider-01.jpg"
        },
        {
            id: 3,
            srcimg: "/assets/img/slider/slider-02.jpg"
        },
        {
            id: 4,
            srcimg: "/assets/img/slider/slider-03.jpg"
        },
        {
            id: 5,
            srcimg: "/assets/img/slider/slider-04.jpg"
        },
        {
            id: 6,
            srcimg: "/assets/img/slider/slider-05.jpg"
        }
    ];

    const heading = [
        {
            id: 1,
            classnames: 'heading',
            title: 'EXHIBITION'
        }
    ]

    return (
        <div className="container-fluid p-0">
            <div className="themesflat-headings style-1 text-center clearfix">
                <h2 className="heading">EXHIBITION HIGHLIGHTS</h2>
                <div className="sep has-icon width-125 clearfix">
                    <div className="sep-icon">
                        <span className="sep-icon-before sep-center sep-solid" />
                        <span className="icon-wrap"><i className="autora-icon-build" /></span>
                        <span className="sep-icon-after sep-center sep-solid" />
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div
                        className="themesflat-carousel-box arrow-circle offset-v-24 clearfix"
                        data-gap={30}
                        data-column={1}
                        data-column2={1}
                        data-column3={1}
                        data-auto="true"
                    >
                        {/* <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={35} data-smobile={35} />
                        <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={35} data-smobile={35} /> */}
                        <div className="owl-carousel owl-theme arrow_setting">
                            {images.map((data) => (
                                <div
                                    className="themesflat-testimonials style-1 max-width-70 align-center has-width w100 circle border-solid clearfix height-100" key={data.id}>
                                    <div className="testimonial-item Bts_vedio">
                                        <img src={data.srcimg} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <iframe width="100%" height="100%" className='bts_video_height' src="https://www.youtube.com/embed/VrHNDidZM0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionSlider;
