import React from "react";

export const Newscart = (props) => {
  let { description, title, imageUrl, url, author, date, source } = props;

  return (
    <div className="container">
      <div style={{ marginTop: "50px" }}>
        <div className="card" style={{ height: "470px" }}>
          <img src={imageUrl} className="card-img-top" style={{ height: "200px" }} alt=".." />
          <span
            className="badge rounded-pill bg-danger"
            style={{
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            {source}
          </span>

          <div className="card-body">
            <h5 className="card-title">
              {title}....
              <span className="badge bg-dark text-light" style={{ width: "34px", height: "15px", fontSize: "10px" }}>
                New
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">By {author} on {new Date(date).toUTCString()}</small>
            </p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscart;
