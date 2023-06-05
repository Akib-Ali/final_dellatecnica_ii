import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

const TabProject = (props) => {
    const { category } = props;
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    useEffect(() => {
        axios.get('/server.json')
            .then(response => {
                const filteredProjects = response.data.projects.filter(project => project.name01 === category);
                setProjects(filteredProjects);
            })
            .catch(error => {
                console.log(error);
            });
    }, [category]);

    const indexOfLastProject = (currentPage + 1) * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(projects.length / itemsPerPage);
    return <>
        <div className="container">
            <div className="themesflat-spacer clearfix" data-desktop={73} data-mobile={60} data-smobile={60}></div>
            <ul className="product__name style-1">
                <li className='m-3'>PRODUCTS</li> |
                <li><a href="/holzmac">HOLZMAC </a></li> |
                <li><a href="/promac">PROMAC</a></li>
            </ul>
            <div className="my-card mt-4">
                <div className="row">
                    {
                        currentProjects.map((data, index) => (
                            <div className="custom-card col-md-4 my-3" onClick={() => { window.location.href = `${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}` }} key={index}>
                                <div className="card border-0">
                                    <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                                        <img src={data.srcimg} className='img-fluid' alt={category} />
                                        <div className="elm-link">
                                            <a href={`${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`} className="icon-1 icon-search"> </a>
                                            <a href={`${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`} className="icon-1" ></a>
                                        </div>
                                        <div className="overlay-effect bg-color-3"></div>
                                    </div>
                                    <div className="card-body text-wrap text-center">
                                        <h5 className="heading m-0">
                                            <a href={`${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}>{
                                                data.heading.length < 30 ? data.heading : data.heading.slice(0, 30) + "..."
                                            }</a>
                                        </h5>
                                        <div className="elm-meta">
                                            <span>
                                                <a href={`${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}>{data.name01}</a></span>
                                            <span> | &nbsp;
                                                <a href={`${category === 'Holzmac' ? '/holzmac/' : '/promac/'}${data.slug}`}>{data.name02}</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <ReactPaginate
                        previousLabel={<FiChevronsLeft />}
                        nextLabel={<FiChevronsRight />}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="pagination m-0"
                        activeClassName="active"
                    />
                </div>
            </div>
        </div>
    </>
}

export default (TabProject);