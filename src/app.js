import React, { Component } from 'react';
import { Container } from 'native-base';

//import firebase
import firebase from 'firebase';

//import custom components - header and content
import HeaderTop from './components/layout/headerTop';
import ContentMain from './components/layout/contentMain';

class App extends Component {
    state = { loggedIn: false };
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
    
    render() {
        return (

            <Container>
                <HeaderTop headerTitle={'Auth'} />
                <ContentMain />
            </Container>
                
        );
    }
}
export default App;

