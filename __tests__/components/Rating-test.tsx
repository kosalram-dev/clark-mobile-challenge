import React from 'react';
import {render} from '@testing-library/react-native';

import {Rating} from '../../src/components';

describe('Rating component', () => {
  const mockRatingProps = {
    rate: 4.5,
    count: 10,
  };

  it('renders the correct number of filled stars based on the rate', () => {
    const {getAllByTestId} = render(<Rating {...mockRatingProps} />);
    const filledStars = getAllByTestId('filled-star');

    expect(filledStars.length).toBe(4); // Math.floor(4.5) = 4
  });

  it('renders a half star if the rate has a decimal part', () => {
    const {getByTestId} = render(<Rating {...mockRatingProps} />);
    const halfStar = getByTestId('half-star');

    expect(halfStar).toBeTruthy();
  });

  it('renders the correct review count', () => {
    const {getByText} = render(<Rating {...mockRatingProps} />);
    const reviewCount = getByText('(10 Reviews)');

    expect(reviewCount).toBeTruthy();
  });
});
