import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
          <button className='ui button negative'>Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return (this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          <div>{this.renderAdmin(stream)}</div>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    }));
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button primary'>Create new stream</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderCreate()}
        <div className='ui celled list'>
          {this.renderList()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  });
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);