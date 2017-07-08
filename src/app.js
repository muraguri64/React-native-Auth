import React, { Component } from 'react';
import { Container, Button, Text, Content } from 'native-base';

//import firebase
import firebase from 'firebase';

//import custom components - header and content
import HeaderTop from './components/layout/headerTop';
import ContentMain from './components/layout/contentMain';
import Spinner from './components/layout/spinner';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({           
            apiKey: 'AIzaSyCx5haiOdUoChn9Az-NbJ-DNAYLvVkoHF0',
            authDomain: 'authentication-f1b5d.firebaseapp.com',
            databaseURL: 'https://authentication-f1b5d.firebaseio.com',
            projectId: 'authentication-f1b5d',
            storageBucket: 'authentication-f1b5d.appspot.com',
            messagingSenderId: '833386039807'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (<Content padder><Button block><Text>Sign Out</Text></Button></Content>);
            case false:
                return (<ContentMain />); 
            default:
                return (<Spinner size='large' />);

        }
    }
    
    render() {
        return (

            <Container>
                <HeaderTop headerTitle={'Auth'} />
                {this.renderContent()}
            </Container>
                
        );
    }
}
export default App;

