import React from 'react';
import LoginScreen from '../screens/LoginScreen';

import { create } from 'react-test-renderer';
import renderer from 'react-test-renderer';

const tree = create(<LoginScreen />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
});

it('login function empty email test', () => {
    let data = renderer.create(<LoginScreen />).getInstance();

    window.alert = jest.fn();
    data.loginUser('','');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Write your email!");
})

it('login function empty password test', () => {
    let data = renderer.create(<LoginScreen />).getInstance();

    window.alert = jest.fn();
    data.setState({email: 'username@yahoo.com'});
    data.loginUser(data.state.email,'');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Write your password!");
})