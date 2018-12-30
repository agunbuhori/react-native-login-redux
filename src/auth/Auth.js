import { AsyncStorage } from 'react-native';
import http from '../variables/http';
import { resolve } from 'uri-js';
import { reject } from 'rsvp';

export default {
    checkAuth: async () => {
        try {
            let token = await AsyncStorage.getItem('token');
            return token !== null;
        } catch (error) {
            console.error(error);
        }

        return loggedIn;
    },

    login: async (credentials) => {
        try {
            const login = await fetch(http.BASE_URL + "auth/signin", {
                method: "POST",
                headers: http.HEADERS,
                body: JSON.stringify(credentials)
            });
            const json = login.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    },

    setAuthToken: (token, username, password) => {
        AsyncStorage.setItem('token', token);
        AsyncStorage.multiSet([
          ["username", username],
          ["password", password]
        ]);
    },
    
    removeAuthToken: () => {
        AsyncStorage.multiRemove(['token', 'username', 'password']);
        AsyncStorage.removeItem('token');
    }
}