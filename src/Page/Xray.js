import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Xray extends Component {
    render() {
        return (

            <div>
                <Header />
                <div class="wrapper">

                    <div className="container-fluid">

                        <div className="card">
                            <div className="card-header">
                                <h3>X-ray</h3>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Xray;
