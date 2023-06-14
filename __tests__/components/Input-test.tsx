import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Input} from '../../src/components';

describe('Input component', () => {
  const mockProps = {
    value: '',
    onChangeText: jest.fn(),
    placeholder: 'Enter text',
  };

  it('renders an input field with the provided placeholder', () => {
    const {getByPlaceholderText} = render(<Input {...mockProps} />);
    const inputElement = getByPlaceholderText('Enter text');

    expect(inputElement).toBeTruthy();
  });

  it('calls the onChangeText function when the input value changes', () => {
    const {getByPlaceholderText} = render(<Input {...mockProps} />);
    const inputElement = getByPlaceholderText('Enter text');

    fireEvent.changeText(inputElement, 'Test Input');

    expect(mockProps.onChangeText).toHaveBeenCalledTimes(1);
    expect(mockProps.onChangeText).toHaveBeenCalledWith('Test Input');
  });
});
