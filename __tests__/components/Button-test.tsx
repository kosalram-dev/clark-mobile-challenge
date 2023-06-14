import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Button from '../../src/components/button';

describe('Button component', () => {
  const onPressMock = jest.fn();
  const defaultProps = {
    title: 'Button',
    onPress: onPressMock,
    icon: {
      name: 'icon',
      type: 'example-type',
    },
  };

  it('renders the button with the correct title', () => {
    const {getByText} = render(<Button {...defaultProps} />);
    const buttonTitle = getByText('Button');
    expect(buttonTitle).toBeTruthy();
  });

  it('calls onPress when the button is pressed', () => {
    const {getByText} = render(<Button {...defaultProps} />);
    const button = getByText('Button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders an icon when provided', () => {
    const {getByTestId} = render(<Button {...defaultProps} />);
    const iconComponent = getByTestId(
      `icon-component-${defaultProps.icon.name}`,
    );
    expect(iconComponent).toBeTruthy();
  });

  it('does not render an icon when not provided', () => {
    const {queryByTestId} = render(
      <Button {...defaultProps} icon={undefined} />,
    );
    const iconComponent = queryByTestId(
      `icon-component-${defaultProps.icon.name}`,
    );
    expect(iconComponent).toBeFalsy();
  });
});
