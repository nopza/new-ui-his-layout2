import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Home extends Component {

    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;