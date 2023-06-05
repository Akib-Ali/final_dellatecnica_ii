import React from 'react';

const RelateProject = (props) => {
    const { banner, data } = props;
    let link;
    banner.map((item) => {
        link = item.links;
    })
    return <>
        <div className="themesflat-carousel-box data-effect has-arrows arrow-top arrow75 arrow-circle arrow-style-2 clearfix" data-gap={30} data-column={3} data-column2={2} data-column3={1}
            data-auto="false">
            <div className="owl-carousel owl-theme">
                {
                    data.map(data => (
                        <div className="themesflat-project style-1 clearfix" key={data.id}>
                            <div className="project-item">
                                <div className="inner">
                                    <div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                                        <img src={data.srcimg} alt="altimage" />
                                        <div className="text-wrap text-center">
                                            <h5 className="heading"><a href={`${link}/${data.slug}`}>{data.heading}</a></h5>

                                            <div className="elm-meta">
                                                <span>
                                                    <a href="/holzmac">{data.meta}</a></span>
                                                <span>
                                                    <a href={`${link}/${data.slug}`}>{data.text}</a></span>
                                            </div>
                                        </div>
                                        <div className="elm-link">
                                            <a href={`${link}/${data.slug}`} className="icon-1 icon-search"></a>
                                            <a href={`${link}/${data.slug}`} className="icon-1"></a>
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
    </>
}

export default RelateProject;