import React from 'react';

const Spinner = (props) => {

  return(
    
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>

  );
}

//this provides default properties to the component, in case we FORGOT TO pass down required props
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;