import React, { Component } from 'react';

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordion: [
                {
                    id: 1,
                    classname: 'accordion-item active',
                    heading: 'What is smart factory?',
                    text: "A Smart Factory refers to the use of advanced technologies such as computer numerical control (CNC) machines, automation, and robotics to optimize production processes and improve efficiency."
                },
                {
                    id: 2,
                    classname: 'accordion-item',
                    heading: 'How do I maintain my woodworking machines?',
                    text: "Proper maintenance is crucial for keeping your woodworking machines in good working condition. Regular cleaning and lubrication can help prevent wear and tear on the machine's components."
                },
                {
                    id: 3,
                    classname: 'accordion-item',
                    heading: 'What types of woodworking machines are available?',
                    text: "Woodworking machines come in many different types, including Panel Saws, Cold Press, Automatic Throughfeed Edge Banding Machine & many more. Each type of machine is designed for a specific purpose, and some machines are more versatile than others."
                }
            ]
        }
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                <div className="themesflat-content-box" data-margin="0 0 0 18px" data-mobilemargin="0 0 0 0">
                    <div className="themesflat-headings style-1 clearfix">
                        <h2 className="heading">FAQs</h2>
                        <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={38} data-mobile={35} data-smobile={35} />
                    <div className="themesflat-accordions style-1 has-icon icon-left iconstyle-1 clearfix">
                        {
                            this.state.accordion.map(data => (
                                <div className={data.classname} key={data.id}>
                                    <h3 className="accordion-heading"><span className="inner">{data.heading}</span></h3>
                                    <div className="accordion-content">
                                        <div>{data.text}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default Faq;