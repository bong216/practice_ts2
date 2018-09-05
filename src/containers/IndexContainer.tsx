import * as React from 'react';

import { Navbar, Header, IndexDescript, Footer, IndexImageList } from '../components';

export default class IndexContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
        this.navbarScrollEvent();
    }

    navbarScrollEvent() {

        if (window) {
            window.addEventListener('scroll', (event: Event) => {
                let navbar: Element = document.getElementsByClassName('navbar')[0];
                if (window.scrollY > 50) {
                    this.addClass(navbar, 'shrink-nav');
                } else {
                    this.removeClass(navbar, 'shrink-nav');
                }
            });
        }
    }

    addClass(element: Element, className: string) {
        element.classList.add(className);
    }

    removeClass(element: Element, className: string) {
        element.classList.remove(className);
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <IndexDescript />
                <IndexImageList />
                <Footer />
            </div>
        );
    }
}
