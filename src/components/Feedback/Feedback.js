import React from 'react';
import PropTypes from 'prop-types';

import s from './Feedback.module.css';

function Feedback({onLeaveFeedback}) {
  
  return (
    <>
        <button
          className={s.button}
          name="good"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Good
        </button>
        <button
          className={s.button}
          name="neutral"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Neutral
        </button>
        <button
          className={s.button}
          name="bad"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Bad
        </button>
      </>
  )

};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default Feedback;

