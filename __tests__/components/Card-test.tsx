import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Card} from '../../src/components';
import {TProduct} from '../../src/utils/types';

describe('Card component', () => {
  const mockItem: TProduct = {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3,
      count: 400,
    },
  };

  const mockOnPress = jest.fn();

  it('renders the card with correct item title and price', () => {
    const {getByText} = render(<Card item={mockItem} onPress={mockOnPress} />);
    const titleElement = getByText('White Gold Plated Princess');
    const priceElement = getByText('$ 9.99');

    expect(titleElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });

  it('calls onPress when the card is pressed', () => {
    const {getByTestId} = render(
      <Card item={mockItem} onPress={mockOnPress} />,
    );
    const card = getByTestId('card-component');

    fireEvent.press(card);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
