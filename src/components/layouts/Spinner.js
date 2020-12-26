import React, {Fragment} from 'react';
import spin from '../../../src/assets/gifs/YCZH.gif';


const Spinner = () => {
    return (
        <Fragment>
            <img src={spin} className="spinner" alt={'loading...'} 
            style={{width:'200px', margin: 'auto', display:'block'}} />
        </Fragment>
    )
}

export default Spinner;
