
import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import PureTaskList from './PureTaskList'
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

export function TaskList(props){
    return (<PureTaskList {...props}/>)
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};

export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id)),
  })
)(TaskList);