import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders counter with initial value', () => {
    render(<Counter />);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('0');
  });

  test('increments the counter', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Incrementar');
    fireEvent.click(incrementButton);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('1');
  });

  test('decrements the counter', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrementar');
    fireEvent.click(decrementButton);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('-1');
  });
});