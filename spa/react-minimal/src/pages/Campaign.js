import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const Campaign = props => {
  const { main, extras, title, last } = props;

  return (
      
      <div className="cotainer-fluid">

        <main>
            {main && <EditableArea className="container-fluid text-center" content={main} />}  
        </main>
        
        <div className='container-fluid bg-light'>
            <div className="col-md-4 col-lg-2 mx-auto py-5">
                <h2 className='text-dark text-center'>Register Here</h2>
                <input className='form-control mb-2'></input>
                <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </div>
        </div>

        <div className="container-fluid mt-4" >
            {extras && <EditableArea className="text-left container" content={extras} />}  
        </div>    

        <div className='container'>   
            {last && <EditableArea content={last} />}
        </div>
    </div>
  ) 
};

export default Campaign;
