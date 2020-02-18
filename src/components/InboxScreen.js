import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PureInboxScreen from './PureInboxScreen';

export function InboxScreen({ error }) {
  return (<PureInboxScreen {...error}/>)
}

InboxScreen.propTypes = {
  error: PropTypes.string,
};

InboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(InboxScreen);