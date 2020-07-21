import React from 'react';
import loader from './../../assets/loader.svg';
function Loader(props) {
    return (
        <div>
            {
                props.isFetching ? 
                <div className="loader">
                    <img src={loader}/>
                </div> :   
                props.content
            }
        </div>
       
    )
}
export default Loader;