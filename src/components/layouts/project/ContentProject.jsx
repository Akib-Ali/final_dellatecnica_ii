import React from "react";
const ContentProject = (props) => {
    const { product } = props;

    return <>
        <div className="detail-gallery">
            <div className="themesflat-spacer clearfix" data-desktop={21} data-mobile={21} data-smobile={21} />
            <div className="themesflat-gallery style-2 has-arrows arrow-center arrow-circle offset-v-82 has-thumb w185 clearfix"
                data-gap={0} data-column={1} data-column2={1} data-column3={1} data-auto="false">
                <div className="gallery-item">
                    <div className="inner">
                        <div className="thumb">
                            {
                                product && product.srcimg && (
                                    <img src={product.srcimg} alt="imagealt" />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_heading mt-5">
                <h6 className="fw-bold">TECHNICAL SPECIFICATIONS</h6>
                <div className="descriptionTable">
                    <table>
                        <thead>
                            <tr>
                                <th className="text-left">DESCRIPTION</th>
                                {
                                    product && product.model_one && (
                                        <th className="desc__value">{product.model_one}</th>
                                    )
                                }
                                {
                                    product && product.model_two ?
                                        <th className="desc__value">{product.model_two}</th>
                                        : null
                                }
                                {
                                    product && product.model_three ?
                                        <th className="desc__value">{product.model_three}</th>
                                        : null
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product && product.specifications && (
                                    product.specifications.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.heading}</td>
                                            <td className="desc__value">
                                                {
                                                    item.specs.map((list, i) => (
                                                        <p className="m-0" key={i}>{list}</p>
                                                    ))
                                                }
                                            </td>
                                            {
                                                product && product.model_two ?
                                                    <td className="desc__value">
                                                        {
                                                            item.anotherSpecs.map((list, i) => (
                                                                <p className="m-0" key={i}>{list}</p>
                                                            ))
                                                        }
                                                    </td>
                                                    : null
                                            }
                                            {
                                                product && product.model_three ?
                                                    <td className="desc__value">
                                                        {
                                                            item.anotherSpecsTwo.map((list, i) => (
                                                                <p className="m-0" key={i}>{list}</p>
                                                            ))
                                                        }
                                                    </td>
                                                    : null
                                            }
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default ContentProject;