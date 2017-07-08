import React, { Component } from 'react';
import firebase from 'firebase';
import { 
      Content, Form, Item, Input, Label, Button, Text
 } from 'native-base';

 import { View } from 'react-native';

 class Contentmain extends Component { 
    state = { email: '', password: '', error: '' };    
    
    onButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                            .catch(() => {
                                this.setState({ error: 'Authentication failed' });
                            });
                });
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
                    <Button block rounded onPress={this.onButtonPress}>
                        <Text>Sign In</Text>
                    </Button>
                </View>    
                <View>
                    <Text style={{ color: 'red' }}>
                        {this.state.error}
                    </Text>
                </View>
                                           
            </Content>
        ); 
    }
       
 }

 export default Contentmain;
