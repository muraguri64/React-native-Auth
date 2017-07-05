import React from 'react';
import { 
       Header, Title, Button, Left, Body, Icon,
 } from 'native-base';

 const Headertop = (props) => {    
    return (

        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>                    
            <Body>
                <Title>{props.headerTitle}</Title>
            </Body>
                    
        </Header>
        );    
 };

 export default Headertop;
