import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// styles
import './radioButton.scss';

/**
 * This component returns a radio button
 */
const RadioButton = ({ value, onChange, isChecked, disabled, className, ...rest }) => {
  const classList = classNames('tecma-radiobtn', { disabled }, className);

  const handleOnChange = useCallback(() => {
    if (!disabled) {
      onChange(value);
    }
  }, [value]);

  return (
    <div className={classList} onClick={handleOnChange} {...rest}>
      <div className='radio-btn'>{isChecked && <div className='checked'></div>}</div>
      <label>{value}</label>
    </div>
  );
};

RadioButton.propTypes = {
  /**
   * The label value
   */
  value: PropTypes.string.isRequired,
  /**
   * The callback to be perform on click
   */
  onChange: PropTypes.func.isRequired,
  /**
   * If true, the radio button is checked
   */
  isChecked: PropTypes.bool,
  /**
   * If true the checkbox is disabled
   */
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  isChecked: false,
  disabled: false,
};

export default React.memo(RadioButton);
