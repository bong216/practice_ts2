import * as React from 'react';

import {Navbar, NotFound, Footer } from '../components';

export default class NotFoundContainer extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Navbar />
                <NotFound />
                <Footer />
            </div>
        );
    }
}
