import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import LoginForm from './login-form';


describe('Login Page', () => {

  test('Login Form submits username and password', async () => {
    const username = 'testuser';
    const password = 'testpassword'
    const mockLogin = jest.fn();

    act(() => {
      render(<LoginForm submitting={false} initialValues={{username: '', password: ''}} onSubmit={mockLogin({username, password})} />)
    })

    const usernameInput = await waitFor(() => screen.getByRole('textbox', { name: /Username/i }))
    const passwordInput = await waitFor(() => screen.getByLabelText('Password'))
    const loginButton = await waitFor(() => screen.getByRole('button', { name: /Sign In/i }))

    //ACT
    act(()=> {
      userEvent.type(usernameInput, username)
      userEvent.type(passwordInput, password)
      userEvent.click(loginButton);
    })

    //ASSERT
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith({username, password});
  })

})