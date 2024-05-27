import { useState } from "react";
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

export default function ShowContentCards(props){
    const [limit, setLimit] = useState(6)
    return(
        <>
            <div className={`${props.contentName}-section mt-5 pt-3 pb-5`}>
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        {props.latest ? `Latest-${props.contentName}` : `${props.contentName}`}
                    </h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                        {props.content.map((item) => {
                            if(props.latest ? props.content.indexOf(item) >= (props.content.length - 3) : props.content.indexOf(item) < limit){               
                                return(
                                    <Fade className="col col-md-6 col-lg-4 mb-4">
                                        <div className="card h-100 overflow-auto">
                                            {props.contentName === "lectures" && <img src={item.thumbnailUrl} className="card-img-top h-75" alt="..."/>}
                                            <div className="card-body h-50">
                                                <h5 className="card-title pb-2 text-center fs-3 fw-bold mb-3">{item.title}</h5> 
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center" style={{padding: '0.5rem 0', margin: '0 16px'}}>
                                                <small>{item.uploadTime}</small>
                                                <Link to={`/${props.contentName}/${item.id}`} className="btn text-light">open</Link>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            }
                        })}
                    </div>
                    {props.latest ? 
                        <Link to={`/${props.contentName}`} type="button" className="btn btn-outline-primary outline-btn fs-5 d-block mx-auto mt-5 w-50">Show More</Link> :
                        limit < props.content.length && <button type="button" className="btn btn-outline-primary outline-btn fs-5 d-block mx-auto mt-5 w-50" onClick={() => {setLimit(limit + 3)}}>Show More</button>}
                </div>    
            </div>
        </>
    )
}