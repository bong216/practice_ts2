import * as React from 'react';

export default class Footer extends React.PureComponent<{}, {}> {

    render() {
        return (
            <footer className="bg-gray-light">
                <div className="container footer-middle">
                    <div className="row">
                        <div
                            className={ 'col-md-6 col-sm-12 col-xs-12 sm-text-center xs-text-center'
                                + 'footer-link1 xs-display-none margin-one' }
                        >
                            <p className="footer-text">
                            UNIT(유닛)은 IT에 관심있는 대학생과 청년들을 위한 네트워크를 지향합니다.<br/>
                            유관 단체들과 팀들의 많은 관심 바라며, 궁금한 사항이 있다면 언제든지 문의주세요. <br/>
                            <b>E-mail : contact@unit.center</b>
                            </p>
                        </div>
                        <div
                            className={'col-md-6 col-sm-12 col-xs-12 footer-social xs-text-center'
                                + 'text-right sm-text-center margin-three text-right' }
                        >
                            <a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                            <a target="_blank" href="https://pinterest.com"><i className="fa fa-pinterest" /></a>
                            <a target="_blank" href="https://instagram.com"><i className="fa fa-instagram" /></a>
                            <a target="_blank" href="https://www.youtube.com/"><i className="fa fa-youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-main-color footer-bottom">
                    <div className="container">
                        <div className="row margin-two">
                            <div
                                className={'col-md-6 col-sm-6 col-xs-12 text-left letter-spacing-1'
                                + ' xs-text-center xs-margin-bottom-one text0bol white-text'}
                            >
                                &copy; 2017 UNIT.center powered by Hodong, QURIAN
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 footer-logo text-right xs-text-center">
                                <a href="index.html"><img src="images/logo-light-gray.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" className="scrollToTop"><i className="fa fa-angle-up" /></a>
            </footer>
        );
    }
}
