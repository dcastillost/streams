import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return (
      <div>StreamShow</div>
    );
  }
}

export default connect(null, { fetchStream })(StreamShow);