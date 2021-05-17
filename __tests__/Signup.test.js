import React from 'react';
import SignupScreen from '../screens/SignupScreen';

import { create } from 'react-test-renderer';
import renderer from 'react-test-renderer';

const tree = create(<SignupScreen />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
});

it('signup function empty username test', () => {
    let data = renderer.create(<SignupScreen />).getInstance();
    window.alert = jest.fn();
    data.signUpUser('','','');
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Write your username!');
})

it('signup function empty email test', () => {
    let data = renderer.create(<SignupScreen />).getInstance();
    window.alert = jest.fn();
    data.setState({username: 'username'});
    data.signUpUser('','', data.state.username);
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Write your email!');
})

it('signup function empty password test', () => {
    let data = renderer.create(<SignupScreen />).getInstance();
    window.alert = jest.fn();
    data.setState({username: 'username'});
    data.setState({email: 'username@yahoo.com'});
    data.signUpUser(data.state.email, '', data.state.username);
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Write your password!');
})

it('signup function invalid password test', () => {
    let data = renderer.create(<SignupScreen />).getInstance();
    window.alert = jest.fn();
    data.setState({username: 'username'});
    data.setState({email: 'username@yahoo.com'});
    data.setState({password: '123'});
    data.signUpUser(data.state.email, data.state.password, data.state.username);
    
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Password must have at least 6 characters!');
})

it('signup function success test', () => {
    let data = renderer.create(<SignupScreen />).getInstance();
    data.setState({username: 'username'});
    data.setState({email: 'username@yahoo.com'});
    data.setState({password: '123456'});
    data.signUpUser(data.state.email, data.state.password, data.state.username);
    
    expect(data.state.signup).toEqual('success');
})