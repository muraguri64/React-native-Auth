import React, { Component } from 'react';
import { Container } from 'native-base';

//import custom components - header and content
import HeaderTop from './components/layout/headerTop';
import ContentMain from './components/layout/contentMain';

class App extends Component {
    
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

