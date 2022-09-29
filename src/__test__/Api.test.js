import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';

describe('Test case for testing login', () => {
  test('should render login component', () => {
    render(
      <Router>
        <Login />
      </Router>,
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('email check', () => {
    const utils = render(<Router><Login /></Router>);
    const input = utils.getByLabelText('username-input');
    fireEvent.change(input, { target: { name: 'username', value: 'dave300' } });
    expect(input.value).toBe('dave300');
  });

  test('password check', () => {
    const utils = render(<Router><Login /></Router>);
    const input = utils.getByLabelText('password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });
});

describe('Test case for testing sign up', () => {
  test('should render login component', () => {
    render(
      <Router>
        <Signup />
      </Router>,
    );
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('name check', () => {
    const utils = render(<Router><Signup /></Router>);
    const input = utils.getByLabelText('name-input');
    fireEvent.change(input, { target: { name: 'email', value: 'roland' } });
    expect(input.value).toBe('roland');
  });

  test('email check', () => {
    const utils = render(<Router><Signup /></Router>);
    const input = utils.getByLabelText('email-input');
    fireEvent.change(input, { target: { name: 'email', value: 'roland@test.com' } });
    expect(input.value).toBe('roland@test.com');
  });

  test('password check', () => {
    const utils = render(<Router><Signup /></Router>);
    const input = utils.getByLabelText('password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });

  test('confirm password check', () => {
    const utils = render(<Router><Signup /></Router>);
    const input = utils.getByLabelText('confirm-password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });
});
