function Banners(props) {
    return (
      <div style={{ overflow: 'hidden' }}>
        <img src={props.picObject.photo} style={{ width: '100%', height: 'auto' }} alt="Full Width" />
      </div>
    );
    
  }

  export default Banners;