import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Weather from './Weather';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

const mockData = {
  name: 'Nairobi',
  sys: { country: 'KE' },
  main: {
    temp: 25,
    feels_like: 26,
    temp_max: 28,
    temp_min: 22,
    humidity: 80,
    pressure: 1013,
  },
  weather: [{ description: 'clear sky' }],
  wind: { speed: 5 },
};

describe('Weather component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('displays an error message when no city is entered', async () => {
    render(<Weather />);
    userEvent.click(screen.getByAltText('Search Icon'));
    expect(await screen.findByText('Please enter a city name!')).toBeInTheDocument();
  });
});
