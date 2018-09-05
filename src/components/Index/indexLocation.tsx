import * as React from 'react';

export default class IndexLocation extends React.PureComponent<{}, {}> {

    render() {
        return(
            <section id="new-project" className="new-project wow fadeIn">
            <div className="container">
                <div className="row center-col text-center">
                    <h5 className="wow fadeInDown">We'd love to hear about your project.</h5>
                    <a
                        className="btn highlight-button-black-border margin-four no-margin-bottom wow fadeInUp"
                        href="contact-us.html"
                    >
                        Start Now
                    </a>
                </div>
            </div>
        </section>
        );
    }
}
