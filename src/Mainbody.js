import {slideData, bigPictures, productData,productData2, productData3, productData4, productData5, productData6} from "./Data.js";
import Card from "./Card.js";
import CarouselSection from "./CarouselSection";
import Banners from "./Banners.js";

function Mainbody() {
    return (
      <div>
         <div className="container cn cn2 itemgrid">
        
        {productData.map((product) => (
          <Card productObject={product} />
        ))}
    
        
        
        
      </div>
      <div class="cn viewAll dafont stigsize">
        
          STIG
        
      </div>

      <div className="container d-flex pb-5 productSpace2">
      {productData3.map((product) => (
          <Card productObject={product} />
        ))}
      </div>


      <div className="container cn cn2 itemgrid">
        {productData4.map((product) => (
          <Card productObject={product} />
        ))}
      </div>

      <div className="container cn cn2 itemgrid">
        {productData5.map((product) => (
          <Card productObject={product} />
        ))}
      </div>


      <div className="container d-flex pb-5 productSpace2">
      {productData6.map((product) => (
          <Card productObject={product} />
        ))}
      </div>

      <div class="cn viewAll">
        
          <button className="btn btn-dark rounded-0" type="button">VIEW ALL</button>
        
      </div>
  
      <div className="container d-flex pb-5 productSpace2">
        
      {productData2.map((product) => (
          <Card productObject={product} />
        ))}
        
    
    
      </div>
       {slideData.map((slide) => (
          <CarouselSection slideObject={slide} />
        ))}
  
        {bigPictures.map((pictures) => (
          <Banners picObject={pictures} />
        ))}
      
      </div>
     
    );
  }

  export default Mainbody;