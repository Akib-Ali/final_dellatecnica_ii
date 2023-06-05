import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconbox: [
                {
                    id: 1,
                    headding: "+91 87279 22330",
                    subheading: "Mon- Sat: 10:00 am to 06:30 pm",
                    morelink: "Call us now",
                    icon: 'icon-phone',
                    linkContent: "tel:+91 87279 22330"
                },
                {
                    id: 2,
                    headding: "Maharaj Nagar, Ludhiana, Punjab",
                    subheading: "Mon- Sat: 10:00 am to 06:30 pm",
                    morelink: "Sunday: Close",
                    icon: 'icon-map',
                    linkContent: 'https://www.google.com/maps/search/1979%2F1,+Lane+No.+2,+Ferozepur+Rd,+Maharaj+Nagar,+Ludhiana,+Punjab+141001/@30.898864,75.820743,13z?hl=en-US'
                },
                {
                    id: 3,
                    headding: "Email: info@dellatecnica.in",
                    subheading: "Mon- Sat: 10:00 am to 06:30 pm",
                    morelink: "Mail us now",
                    icon: 'icon-envelope',
                    linkContent: "mailto:info@dellatecnica.in"
                }
            ]
        }
    }

    render() {
        return (
            <div className="row gutter-16">
                {
                    this.state.iconbox.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                            <div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
                                <div className="icon-wrap">
                                    <i className={data.icon} />
                                </div>
                                <div className="text-wrap">
                                    <h5 className="heading"><a target='_blank' href={data.linkContent}>{data.headding}</a></h5>
                                    <p className="sub-heading">{data.subheading}</p>
                                    <span className="class more-link"><a target='_blank' href={data.linkContent}>{data.morelink}</a></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default IconBox;