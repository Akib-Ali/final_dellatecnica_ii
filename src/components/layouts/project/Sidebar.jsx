import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';

const Sidebar = (props) => {
    const { product } = props;

    return <>
        <div className="detail-info">
            <div className="content-info">
                <div className="themesflat-headings style-2 clearfix">
                    <h2 className="heading line-height-62">{
                        product && product.heading && (
                            product.heading
                        )
                    }</h2>
                    <div className="sep has-width w80 accent-bg clearfix mb-5">
                    </div>
                    {product && product.content.map((item, index) => (
                        <div key={index} className='' style={{ display: 'flex', gap: '8px' }}>
                            <div className='description_icon'><GiCheckMark /></div>
                            <div className='description'>{item.description}</div>
                        </div>
                    ))}

                </div>
            </div>{/* /.content-info */}
            <div className="themesflat-spacer clearfix" data-desktop={46} data-mobile={35} data-smobile={35} />
            <div className="content-info info-brochures">
                <div className="themesflat-headings style-2 clearfix">
                    <h2 className="heading line-height-62">BROCHURES</h2>
                    <div className="sep has-width w60 accent-bg clearfix">
                    </div>
                </div>
                <div className="themesflat-spacer clearfix" data-desktop={34} data-mobile={35} data-smobile={35} />
                <div className="button-wrap has-icon icon-left size-14 pf21">
                    <Link to="#" className="themesflat-button font-default bg-light-white w100"><span>Brochures.PDF <span
                        className="icon"><i className="fa fa-file-pdf-o" /></span></span></Link>
                </div>
                <div className="button-wrap has-icon icon-left size-14 pf21">
                    <Link to="#" className="themesflat-button font-default bg-light-white w100"><span>Brochures.DOC <span
                        className="icon"><i className="fa fa-file-word-o" /></span></span></Link>
                </div>
            </div>
        </div>
    </>
}
export default Sidebar;