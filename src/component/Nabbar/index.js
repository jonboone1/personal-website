import {Link} from "react-router-dom";
import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';


class Nabbar extends Component {
    state = {
        redirect: false
    }
    setRedirect = (e) => {
        var link = window.location.href.split('/').pop(),
            link2 = window.location.href.split(link)[0];
        var host  = link2+'blog',
            host2 = link2+'blog2',
            host3 = link2+'blog3';
                if(window.location.href === host || window.location.href === host2 || window.location.href === host3){
                    this.setState({
                    redirect: true
                })
            }
        }
        render() {
          $(document).ready(() => {
              $('ul.header-menu li a[href^="#"]').bind('click', function (event) {
                var link = window.location.href.split('/').pop(),
                    link2 = window.location.href.split(link)[0],
                    host  = link2+'blog',
                    host2 = link2+'blog2',
                    host3 = link2+'blog3';

                  if(host2 !== window.location.href && host !== window.location.href && host3 !== window.location.href){
                    event.preventDefault();
                    event.stopPropagation();
                    var $anchor = $(this);
                    if ($(window).width() > 991) {
                        var headerH = '78';
                    } else {
                        headerH = '56';
                    }
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
                    }, 800);
                  }
              });

              if ($(window).width() > 767) {
                $("ul.header-menu.navbar-nav li").hover(function () {
                    $(this).children('ul.sub-menu').stop(true, false, true).slideToggle(300);
                });
            } else {
                $('ul.header-menu.navbar-nav>li>a>i').click(function (e) {
                    $(this).parent("ul.header-menu.navbar-nav li a").parent("ul.header-menu.navbar-nav li").children('ul.sub-menu').stop(true, false, true).slideToggle(300); // toggle element
                    return false;
                });
            }

          });

          return (
              <Fragment>
              {this.state.redirect && <Redirect to='/' />}
                {/* <!-- Header Area Starts --> */}
                <header id="header-area" className="header-area">
                    <div className="header-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <nav className="mmn navbar navbar-expand-md navbar-dark sticky-top">
                                        <div className="logo">
                                            <Link to='/'>  <h1 alt="logo" id="logo-text">JB</h1>  </Link>
                                        </div>
                                        <button className="navbar-toggler second-button" type="button" data-toggle="collapse" data-target="#mmn1"
                                        aria-controls="mmn1" aria-expanded="false" aria-label="Toggle navigation">
                                            <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
                                        </button>
                                        <div className="collapse navbar-collapse" id="mmn1">
                                            <ul className="header-menu navbar-nav text-capitalize">
                                                <li><a onClick={this.setRedirect} href="#banner-area" className="nav-link">home</a></li>
                                                <li><a onClick={this.setRedirect} href="#brand" className="nav-link">about me</a></li>
                                                <li><a onClick={this.setRedirect} href="#about" className="nav-link">my skills</a></li>
                                                <li><a onClick={this.setRedirect} href="#team" className="nav-link">work history</a></li>                                                
                                                <li><a onClick={this.setRedirect} href="#contact" className="nav-link">contact</a></li>
                                            </ul>
                                        </div>
                                    </nav>{/*<!-- end: navbar -->*/}
                                </div>{/*<!-- end: col+ -->*/}
                            </div>{/*<!-- end: row -->*/}
                        </div>{/*<!-- end: container -->*/}
                    </div>{/*<!-- end: header-overlay -->*/}
                </header>
                {/*<!-- end: Header Area -->*/}
            </Fragment>
        );
    }
}
export default Nabbar;
