import React from 'react';
import loader from './../../assets/loader.svg';
function Loader(props) {
    return (
        <div>
            {
                props.isFetching ? 
                <div className="loader">
                    <img src={loader}/>
                </div> : null
            }
        </div>
       
    )
}
export default Loader;