import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  test("size select element initially displays 'Small'", () => {
    render(<App />);
    const selectSize = screen.getByLabelText(/select size/i);
    expect(selectSize).toHaveDisplayValue("Small");
  });

  test("select Size dropdown displays the user's selected value", () => {
    render(<App />);
    const selectSize = screen.getByLabelText(/select size/i);
    
    userEvent.selectOptions(selectSize, "medium");
    expect(selectSize).toHaveDisplayValue("Medium");
    
    userEvent.selectOptions(selectSize, "large");
    expect(selectSize).toHaveDisplayValue("Large");
  });

  test("'Your Selection' message initially displays 'small cheese'", () => {
    render(<App />);
    expect(screen.getByText(/small cheese/i)).toBeInTheDocument();
  });

  test("'Contact Info' text box has placeholder", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
  });

  test("form contains and responds to 'Submit Order' button", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /submit order/i });
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);
    expect(screen.getByText(/thanks for your order!/i)).toBeInTheDocument();
  });
});
