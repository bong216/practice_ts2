import * as React from 'react';

export default class NotFound extends React.PureComponent<{}, {}> {

    render() {
        return (
            <section className="wow fadeIn bg-gradation01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-8 col-xs-11 text-center center-col">
                            <p className="not-found-title white-text margin-ten no-margin-bottom">
                                Not found, 404 Error</p>
                            <p className="text-med text-uppercase letter-spacing-1">
                               페이지를 찾을 수 없습니다.<br />
                               The page you were looking for <br />
                               could not be found.
                            </p>
                            <a className="highlight-button-green btn btn-small no-margin-right" href="/">
                               Go to Main page
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
