import { createSwitchNavigator, createNavigationContainer } from 'react-navigation';

import Login from '../screens/auth/Login';

const AuthNavigator = createSwitchNavigator({
    screen: Login
});

export default createNavigationContainer(AuthNavigator);