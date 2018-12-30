import React, { Component } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Form, Button, Text, View, Container, Item, Input, Icon } from 'native-base';
import { Theme, i18n, Auth } from '../../global';
import { loginSuccess } from '../../actions/authentication';
import Image from 'react-native-scalable-image';


class Login extends Component {
    state = {
        loginProgress: false,
        username: null,
        password: null,
        authentication: {
            authenticated: false
        }
    }

    componentDidMount() {

    }

    async login() {
        this.setState({loginProgress: true});

        const login = await Auth.login({username: this.state.username, password: this.state.password});
        if (login.token) {
            Auth.setAuthToken(login.token, this.state.username, this.state.password);
            this.props.onLogin({authenticated: true});
        }
    }

    renderLogo() {
        return (
            <View style={Theme.mb2}>
                <Image source={require('../../assets/images/logo.png')} width={150} />
                <Image source={require('../../assets/images/akari.png')} width={130} />
            </View>
        );
    }

    renderForm() {
        return (
            <Form style={styles.loginForm}>
                <Item regular style={styles.loginInput}>
                    <Icon type="AntDesign" name="user"/>
                    <Input placeholder={i18n.t('username')} autoCapitalize="none" onChangeText={username => this.setState({username})}/>
                </Item>
                
                <Item regular style={styles.loginInput}>
                    <Icon type="AntDesign" name="lock"/>
                    <Input placeholder={i18n.t('password')} secureTextEntry={true} onChangeText={password => this.setState({password})}/>
                </Item>

                <Button block style={styles.loginButton} onPress={this.login.bind(this)} activeOpacity={1}>
                    {
                        this.state.loginProgress
                        ? <ActivityIndicator color="white"/>
                        : <Text style={Theme.lightBold}>{i18n.t('login')}</Text>
                    }
                </Button>
            </Form>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                {this.renderLogo()}
                {this.renderForm()}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Theme.p1,
        ...Theme.centered
    },
    loginForm: {
        width: '100%'
    },
    loginInput: {
        ...Theme.bgSecondary,
        ...Theme.mb1,
        ...Theme.r1
    },
    loginButton: {
        ...Theme.bgPrimary,
        ...Theme.r1,
        ...Theme.primaryButton
    }
});

const mapStateToProps = state => ({
    authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
    onLogin: (user) => {
        dispatch(loginSuccess(user));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);