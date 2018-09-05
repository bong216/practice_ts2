import * as React from 'react';

import './style.css';

export default class Header extends React.PureComponent<{}, {}> {

    render() {
        return(
            <section id="slider" className="no-padding">
            <div>
                <div
                    className="item owl-bg-img"
                    style={{'backgroundImage' : 'url(images/bg_img01.png)'}}
                >
                    <div className="opacity-light bg-dark-gray" />
                    <div className="container full-screen position-relative">
                        <div className="slider-typography text-center">
                            <div className="slider-text-middle-main">
                                <div
                                    className={'slider-text-middle slider-text-middle6 '
                                    + 'padding-left-right-px wow fadeInUp'}
                                >
                                    <span
                                        className={'slider-title-big7 white-text text-uppercase '
                                        + 'font-weight-700 letter-spacing-8 audiowide-font' }
                                    >
                                        Everyday Grow Up
                                    </span>
                                    <span
                                        className={'white-text text-large letter-spacing-8 '
                                        + 'margin-three no-margin-bottom display-block xs-letter-spacing-6'}
                                    >
                                    Universal Network for IT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
