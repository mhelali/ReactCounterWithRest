import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid" style={{
        "display": "table-cell",
        "height": "367px",
        "verticalAlign": "middle",
        "padding": "10px"}}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
