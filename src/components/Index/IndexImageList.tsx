import * as React from 'react';

export default class IndexImageList extends React.PureComponent<{}, {}> {

    render() {
        return (
            <section id="blog" className="wow fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="section-title">What we do</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="300ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="/">
                                        <img src="images/img_list01.png" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">United Hackathon 'UNITHON'</a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        <a href="/">대학생 연합 해커톤 '유니톤'</a> | since 2015
                                    </span>
                                    <p className="width-90">
                                        참여과정이 어렵고 부담스럽던 다른 해커톤의 틀을 벗어나 즐거운 분위기 속에서
                                        같은 관심을 가진 또래들과 교류하며, 자유롭게 프로젝트를 진행하고
                                        결과를 도출하는 행사입니다.<br/>
                                        2015년 8월을 시작으로 IT 연합단체가 공동으로 주관했으며,
                                        UNIT은 2016년 7월부터 함께하였습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="600ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="/">
                                        <img src="images/img_list02.png" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">
                                        United Project League(Undefined)
                                    </a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        <a href="/">프로젝트 리그(행사명 미정) </a> | May 2018
                                    </span>
                                    <p className="width-90">
                                        프로젝트 완성을 위한 환경을 조성하고 가이드를 제시합니다.
                                        프로젝트 진행상황 공유, 집중도 향상을 위한 1박 2일 해커톤,
                                        실무자 연계, 소정의 상금이 있는 데모데이 등을 진행하며,
                                        6개월 동안 격주로 진행하며 팀별로 지원을 받습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="900ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="blog-single-full-width.html">
                                        <img src="images/img_list03.png" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">Netwoking Session</a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        <a href="/">관심사 기반의 네트워킹 세션</a> | May 2018
                                    </span>
                                    <p className="width-90">
                                        개발자, 디자이너, 기획자들의 다양하고 세부적인 관심분야를 충족할 수 있는
                                        소규모 네트워킹 세션을 진행합니다. 12 ~15명의 멤버들이 모여 하나의 주제로
                                        이야기할 수 있는 자리를 마련합니다.
                                        (개발자들의 문제해결 방법, 1 ~2년차 디자이너의 커리어관리 등)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeInUp" data-wow-duration="1200ms">
                            <a className="btn btn-black btn-small margin-four no-margin-bottom" href="/">
                                View All Blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
