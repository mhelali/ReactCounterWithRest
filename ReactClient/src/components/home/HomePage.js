import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/homeActions';
import toastr from 'toastr';
export class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);   
    this.updateCurrentCount = this.updateCurrentCount.bind(this);
    this.props.actions.getCurrentCount();
  }

  updateCurrentCount() {
    this.props.actions.updateToNextCount(this.props.nextCount);
    toastr.success('Counter updated successfully');
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm-6" style={{"display":"inline-block"}}>
            <h5><strong>Count: {this.props.currentCount}</strong></h5>
          </div>
          <div className="col-sm-6" style={{"display":"inline-block"}}>
            <form onSubmit={this.submitHandler}>
              <input
                type="button"
                className="btn btn-primary"
                value="Increment"
                onClick={() => this.props.actions.getNextCount()}
                data-toggle="modal" data-target="#confirmModal"
              />
            </form>
          </div>
        </div>

        <div className="modal" id="confirmModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Confirm</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Current count is: {this.props.currentCount}</p>
                <p>Next count is : {this.props.nextCount}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" onClick={() => this.updateCurrentCount()} data-dismiss="modal" className="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentCount: state.homes.currentCount,
    nextCount: state.homes.nextCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  currentCount: PropTypes.number,
  nextCount: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);