import React from 'react';

const Banner = props => 
    
<img className="img-fluid mb-3" src={process.env.REACT_APP_MGNL_DAM_RAW + props.image['@link']} />


export default Banner;
