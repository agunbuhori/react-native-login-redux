import { Platform } from 'react-native';
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import firebase from 'react-native-firebase';

const WEB_CLIENT_ID = "913084521100-8cohvo0hg01i9fbga7r0ull3sonrrg01.apps.googleusercontent.com";
const IOS_CLIENT_ID = "913084521100-rbdtmac22n555nceo1s5qovntrv4nh0q.apps.googleusercontent.com";

export default {
    configure: async () => {
        if (Platform.OS === "android") {
            GoogleSignin.configure({
                scopes: [
                    "email",
                    "profile",
                    "https://www.googleapis.com/auth/plus.profile.emails.read",
                    "https://www.googleapis.com/auth/plus.login"
                ],
                webClientId: WEB_CLIENT_ID,
                offlineAccess: true
            });
        } else {
            GoogleSignin.configure({
                scopes: [
                    "email",
                    "profile",
                    "https://www.googleapis.com/auth/plus.profile.emails.read",
                    "https://www.googleapis.com/auth/plus.login"
                ],
                iosClientId: IOS_CLIENT_ID,
                webClientId: WEB_CLIENT_ID
            });
        }
    },

    siginIn: async () => {
        try {
            await GoogleSignin.configure();

            const data = await GoogleSignin.signIn();
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
            
            return currentUser.user.toJSON();
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED)
                return error.code;
        }
    },

    signOut: async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            firebase.auth().signOut();
        } catch (error) {
            console.error(error);
        }
    },

    isSignedIn: async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        return isSignedIn;
    }
}