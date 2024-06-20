import React from 'react';
import classNames from 'classnames';

// styles
import './spinner.scss';

interface SpinnerProps {
  size?: 'small' | 'default' | 'large';
  className?: string;
  dataTestId?: string;
}

export const SpinnerDefaultProps: SpinnerProps = {
  size: 'default',
  dataTestId: 'byp-library-spinner',
};

const Spinner: React.FC<SpinnerProps> = ({ size, className, dataTestId }) => {
  const classList = classNames(
    'tecma-spinner',
    {
      [`size-${size}`]: size,
    },
    className,
  );
  return <span className={classList} data-test-id={dataTestId} />;
};

Spinner.defaultProps = SpinnerDefaultProps;

export default React.memo(Spinner);
