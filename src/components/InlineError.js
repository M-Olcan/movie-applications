import React from 'react'
import PropTypes from 'prop-types';

const InlineError =props =>{
        return (
            <div className="inlineError">
                {props.massage}
                
            </div>
        )
}
InlineError.propTypes={
    massage:PropTypes.string.isRequired
}
export default InlineError;