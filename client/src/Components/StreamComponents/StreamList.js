import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStreams } from '../../actions/index';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderAdminActions(stream) {
    if ( stream.userId === this.props.userId ) {
      return (
        <div className="right floated content">
          <div className="ui button basic primary">
            Edit
          </div>
          <div className="ui button basic negative">
            Delete
          </div>
        </div>
      )
    }
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button basic secondary'>
            Create Stream
          </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminActions(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{ this.renderList() }</div>
        { this.renderCreateButton() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { getStreams })(StreamList);
