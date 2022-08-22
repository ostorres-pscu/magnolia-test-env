import React from 'react';

const Disclosure = props => (
    <div>
        <hr></hr>
        <p className='small' dangerouslySetInnerHTML={{ __html: props.richText }} />
    </div>
);

export default Disclosure;
