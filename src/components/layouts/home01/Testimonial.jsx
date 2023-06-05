import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial : [
                {
                    id: 1,
                    text: '“I have been professional wood worker for over 20 years  and I have used many different brand of wood working machine  in my career. Therefore I have to say that the machines for this company are some of the best i have ever used. They are built to last and have features that make my work easier and   more efficient. I specially appreciate the precision and accuracy of their panel saw. If you are serious about wood working and want equipment that can handle heavy use,  This is the company to go with. ”',
                    name: 'Rabia Ali'
                },
                {
                    id: 2,
                    text: '“I recently purchased a few wood working machinery from Dellatecnica and I must say, I am extremely impressed with their quality and performance. The machines were setup by them, and they delivered excellent results. I particularly appreciated the attention to details in their design and construction, which shows that the company takes pride in production high-quality equipment. Overall, I would highly recommend this wood working machines company to anyone in the market for reliable and efficient tools.. ”',
                    name: 'Aditi Sharma'
                },
                {
                    id: 3,
                    text: '“ I have been using wood working machines from Dellatecnica for years and have always been impressed by their durability and reliability. They offer a great selection of machines and their customer service is excellent. ”',
                    name: 'Gopal Sharma'
                },
                {
                    id: 4,
                    text: '“ I purchased a wood working machine from Dellatecnica and it is the best one I have ever used. The support provided by the company is also exceptional. Highly recommend!. ”',
                    name: 'कार्य सिद्धि'
                },
                {
                    id: 5,
                    text: '“ Dellatecnica is the best option for all your woodworking machines. Their machines are high quality and efficient. Been in touch with Mr. Gera since 2013 ”',
                    name: 'Ashutosh Jha'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="row-testimonials parallax-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60}
                                data-smobile={60} />
                            <div className="themesflat-carousel-box has-arrows arrow-center arrow-circle offset-v-24 clearfix"
                                data-gap={30} data-column={1} data-column2={1} data-column3={1} data-auto="true">
                                <div className="owl-carousel owl-theme">
                                    {
                                        this.state.testimonial.map(data => (
                                            <div
                                                className="themesflat-testimonials style-1 max-width-70 align-center has-width w100 circle border-solid clearfix" key={data.id}>
                                                <div className="testimonial-item">
                                                    <div className="inner">
                                                        <div className="icon-wrap">
                                                            <i className="fa fa-quote-left" />
                                                        </div>
                                                        <blockquote className="text">
                                                            <p>{data.text}</p>
                                                            <div className="sep has-width w80 accent-bg clearfix" />
                                                            <h6 className="name">{data.name}</h6>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={68} data-mobile={60}
                                data-smobile={60} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;