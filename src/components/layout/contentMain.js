import React, { Component } from 'react';
import { 
      Content, Form, Item, Input, Label, Button, Text
 } from 'native-base';

 import { View } from 'react-native';

 class Contentmain extends Component {      
    render() {
        return (

            <Content padder>                 
                              
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <View style={{ marginTop: 40 }}>
                    <Button block rounded>
                        <Text>Sign In</Text>
                    </Button>
                </View>                                
            </Content>
        ); 
    }
       
 }

 export default Contentmain;
