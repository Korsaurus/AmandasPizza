import React from "react";
import Context from "./Context";

// Higher order component which appends context to a wrapped component's props

//Takes a component as parameter - returns a function that takes the component's props as a parameter and assigns our context as a prop while retaining previous props using ...
const withContext = WrappedComponent => {
  const WithHOC = props => {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };

  return WithHOC;
};

export default withContext;