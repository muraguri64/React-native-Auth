import React, { Component } from 'react';
import firebase from 'firebase';
import { 
      Content, Form, Item, Input, Label, Button, Text
 } from 'native-base';

 import { View } from 'react-native';
 import Spinner from './spinner';

 class Contentmain extends Component { 
    state = { email: '', password: '', err_msg: '', loading: false };    
    
    onButtonPress = () => {        
        const { email, password } = this.state;
        this.setState({ err_msg: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                            .catch(() => {
                                this.setState({ err_msg: 'Authentication failed' });
                            });
                });                
    };

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size='large' />;
        }

        return (
            <Button block rounded onPress={this.onButtonPress}>
                <Text>Sign In</Text>
            </Button>
        );
    };

    render() {
        return (

            <Content padder>                 
                              
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            onChangeText={email => this.setState({ email })} 
                            value={this.state.email} 
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            secureTextEntry
                        />
                    </Item>
                </Form>
                <View style={{ marginTop: 40 }}>
                    { this.renderButton() }
                </View>    
                <View>
                    <Text
                        style={{ 
                                  color: 'red', 
                                  marginTop: 30, 
                                  alignSelf: 'center' 
                              }}
                    >                        
                        {this.state.err_msg}
                    </Text>
                </View>
                                           
            </Content>
        ); 
    }
       
 }

 export default Contentmain;
