import React from 'react';

const Example = (props) => {
      console.log(props);
      return (
            <div>
                  <p>This is ChildComponent</p>
                  {props.children}
            </div>
      );
};

export default Example;