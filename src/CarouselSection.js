function CarouselSection(props) {
    return (
      <div>
        <div id={props.slideObject.id} className="carousel slide" data-bs-ride="carousel"  data-bs-wrap="true">
          <ol className="carousel-indicators">
          <li data-bs-target={"#" + props.slideObject.id} data-bs-slide-to="0" className="active"></li>
          <li data-bs-target={"#" + props.slideObject.id} data-bs-slide-to="1"></li>
          <li data-bs-target={"#" + props.slideObject.id} data-bs-slide-to="2"></li>
          <li data-bs-target={"#" + props.slideObject.id} data-bs-slide-to="3"></li>
          <li data-bs-target={"#" + props.slideObject.id} data-bs-slide-to="4"></li>
          </ol>
          <div className="carousel-inner" style={{ height: '50vw' }}>
            <div className="carousel-item active" data-bs-interval="1700">
              <img className="d-block w-100" src={props.slideObject.s1} alt="First slide"  />
            </div>
            <div className="carousel-item" data-bs-interval="1700">
              <img className="d-block w-100" src={props.slideObject.s2} alt="Second slide" />
            </div>
            <div className="carousel-item" data-bs-interval="1700">
              <img className="d-block w-100" src={props.slideObject.s3} alt="Third slide" />
            </div>
            <div className="carousel-item" data-bs-interval="1700">
              <img className="d-block w-100" src={props.slideObject.s4} alt="Fourth slide" />
            </div>
            <div className="carousel-item" data-bs-interval="1700">
              <img className="d-block w-100" src={props.slideObject.s5} alt="Fifth slide" />
            </div>
           
          </div>
          <a className="carousel-control-prev" href={"#"+props.slideObject.id} role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href={"#"+props.slideObject.id} role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    );
  }

  export default CarouselSection;