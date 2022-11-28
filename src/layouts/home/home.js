import './home.css'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import Countdown from "react-countdown";


function Home() {
    const [repeat, setRepeat] = useState(false);
    useEffect(() => {
        function addClass(theId, theClass) {
            var element = document.getElementById(theId);
            element.classList.add(theClass);
        }

        function getLineLength(theId) {
            var letterLine = document.querySelector(theId);
            var lineLength = letterLine.getTotalLength();
            letterLine.style.strokeDasharray = lineLength;
            letterLine.style.strokeDashoffset = lineLength;
        }

        function wormIt() {
            document.querySelector("#NASA").innerHTML = "";
            document.querySelector("#NASA").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0, 0, 145, 40">
        
          <defs xmlns="http://www.w3.org/2000/svg">
            <clipPath id="baseline-clip">
              <rect x="0" y="0" width="145" height="39"/>
            </clipPath>
            </defs>
        
            <path d="M5,39 L5,10 C5,6.686 7.686,4 11,4 C13.603,4 15.818,5.664 16.644,7.988 L23.356,32.012 C24.182,34.336 26.397,36 29,36 C32.314,36 35,33.314 35,30 L35,1" fill-opacity="0" stroke="#e60d2e" stroke-width="8" id="N"/>
            <path d="M40.5,41.5 L51.356,7.988 C52.181,5.664 54.397,4 57,4 C59.603,4 61.819,5.664 62.644,7.988 L73.5,41.5" fill-opacity="0" stroke="#e60d2e" stroke-width="8" id="A" clip-path="url(#baseline-clip)"/>
            <path d="M104,5 L84.494,5 C80.35,5 76.99,8.359 76.99,12.502 C76.99,16.645 80.35,20.004 84.5,20.004 L94.5,20.004 C98.642,20.004 102,23.361 102,27.502 C102,31.643 98.642,35 94.5,35 L74,34.992" fill-opacity="0" stroke="#e60d2e" stroke-width="8" stroke-miterlimit="0" id="S"/>
            <path d="M106.625,41.5 L117.5,7.988 C118.327,5.664 120.546,4 123.154,4 C125.762,4 127.981,5.664 128.808,7.988 L139.683,41.5" fill-opacity="0" stroke="#e60d2e" clip-path="url(#baseline-clip)" stroke-width="8" id="A2" />
        
            </svg>
            `;
            getLineLength("#N");
            getLineLength("#A");
            getLineLength("#S");
            getLineLength("#A2");
            addClass("N", "animate");
            addClass("A", "animate");
            addClass("S", "animate");
            addClass("A2", "animate");
        }
        wormIt();
        setTimeout(() => { setRepeat(!repeat) }, 5000);
    }, [repeat]);

    useEffect(() => {
        console.log(document.documentElement.clientHeight)
        function addClass(theId, theClass) {
            var element = document.getElementById(theId);
            element.classList.add(theClass);
        }

        function getLineLength(theId) {
            var letterLine = document.querySelector(theId);
            var lineLength = letterLine.getTotalLength();
            letterLine.style.strokeDasharray = lineLength;
            letterLine.style.strokeDashoffset = lineLength;
        }
        function wormIt() {
            document.querySelector("#NASA1").innerHTML = "";
            document.querySelector("#NASA1").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0, 0, 145, 40">
        
          <defs xmlns="http://www.w3.org/2000/svg">
            <clipPath id="baseline-clip">
              <rect x="0" y="0" width="145" height="39"/>
            </clipPath>
            </defs>
        
            <path d="M5,39 L5,10 C5,6.686 7.686,4 11,4 C13.603,4 15.818,5.664 16.644,7.988 L23.356,32.012 C24.182,34.336 26.397,36 29,36 C32.314,36 35,33.314 35,30 L35,1" fill-opacity="0" stroke="#e60d2e" stroke-width="8" id="N1"/>
            <path d="M40.5,41.5 L51.356,7.988 C52.181,5.664 54.397,4 57,4 C59.603,4 61.819,5.664 62.644,7.988 L73.5,41.5" fill-opacity="0" stroke="#e60d2e" stroke-width="8" id="A1" clip-path="url(#baseline-clip)"/>
            <path d="M104,5 L84.494,5 C80.35,5 76.99,8.359 76.99,12.502 C76.99,16.645 80.35,20.004 84.5,20.004 L94.5,20.004 C98.642,20.004 102,23.361 102,27.502 C102,31.643 98.642,35 94.5,35 L74,34.992" fill-opacity="0" stroke="#e60d2e" stroke-width="8" stroke-miterlimit="0" id="S1"/>
            <path d="M106.625,41.5 L117.5,7.988 C118.327,5.664 120.546,4 123.154,4 C125.762,4 127.981,5.664 128.808,7.988 L139.683,41.5" fill-opacity="0" stroke="#e60d2e" clip-path="url(#baseline-clip)" stroke-width="8" id="A21" />
        
            </svg>
            `;
            getLineLength("#N1");
            getLineLength("#A1");
            getLineLength("#S1");
            getLineLength("#A21");
            addClass("N1", "animate");
            addClass("A1", "animate");
            addClass("S1", "animate");
            addClass("A21", "animate");
        }
        wormIt();
        setTimeout(() => { setRepeat(!repeat) }, 5000);
    }, [repeat]);

    useEffect(() => {
        console.log(window.location.pathname)
        console.log(document.referrer)
        console.log(window.history.length)

        console.log(navigator.appName)
        console.log(navigator.product)
        console.log(navigator.appVersion)
        console.log(navigator.userAgent)
        console.log(navigator.language)
        console.log(navigator.onLine)
        console.log(navigator.platform)
        console.log(navigator.javaEnabled())
        console.log(navigator.cookieEnabled)
        console.log(document.cookie)
        console.log(decodeURIComponent(document.cookie.split(";")))
        console.log(localStorage)

        console.log(window.screen.width)
        console.log(window.screen.height)
        console.log(document.width)
        console.log(document.height)
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        console.log(window.screen.availWidth)
        console.log(window.screen.availHeight)
        console.log(window.screen.colorDepth)
        console.log(window.screen.pixelDepth)
        fetch("http://geolocation-db.com/json/").then(response => {
            console.log(response.json())
        })
    }, [])

    return (
        <div>
            <header className='App-header'>
                <div className='downArrow'>
                    <svg class="arrows downArrow">
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
                <div id='name' className='section'>
                    <div className='intro'>
                        <div className="pronunciation">
                            <span>[juh-nayd]</span>
                        </div>
                        <div className="name">
                            <span>Junaid</span>
                        </div>
                        <div className="description">
                            <span>Software Engineer with a passion for UI/UX design. Trying to make the world a better place by developing beautiful, useful products</span>
                        </div>
                    </div>
                    <div className="illustration-editor">
                        <div className="code-blocks">
                            <div className="code code-html">
                                <header>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
                                    <h1>HTML</h1>
                                    <svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
                                </header>
                                <div className="code-content">
                                    <code>
                                        <span className="c-r">&lt;div</span> <span className="c-y">className</span><span className="c-w">=</span><span className="c-g">"intro"</span><span className="c-r">&gt;&lt;/div&gt;</span></code></div><code>
                                </code>
                            </div>
                        </div>
                        <div className="code code-css">
                            <header>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
                                <h1>CSS</h1>
                                <svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
                            </header>
                            <div className="code-content">
                                <code>
                                    <p className="line-1"><span className="c-y">.intro</span> <span>{'{'}</span></p><br /><p className="line-2"><span className="c-p">display</span><span>:</span> <span className="c-y">flex</span></p><br /><span className="line-3"><span className="c-p">width</span>: <span className="c-y">50vw</span></span><br /><span className="line-4"><span className="c-p">color</span>: <span className="c-y">white</span></span><br /><p className="line-5"><span className="c-y">$dark-gray</span> <span className="c-o">100%</span>);{'}'}</p>
                                </code>
                            </div>
                        </div>
                        <div className="code code-js">
                            <header>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z" fill="#4C4F5A" /></svg>
                                <h1>JS</h1>
                                <svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z" fill="#4C4F5A" /></svg>
                            </header>
                            <div className="code-content">
                                <code>
                                    <span className="c-y">var</span> <span className="c-b">colors</span> = [<span className="c-g">“#74B087”</span>, <span className="c-g">“#DE7300”</span>, <span className="c-g">“#74B087”</span>];<br /><br />
                                    <span className="c-c">// Do the thing</span><br />
                                    <span className="c-y">function</span> <span className="c-b">animate</span>() {'{'}{'}'}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="education" className='section'>
                    <div className='train trainMove'>
                        <div className="toy-train">
                            <div className="engine">
                                <div className="window">
                                    <div className="engine-main">
                                        <div className="smokes">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="engine-body">
                                    <div className="wheels">
                                        <div className="big-wheel"></div>
                                        <div className="normal-wheel"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="locomotive">
                                <div className="trash"></div>
                                <div className="wheels">
                                    <div className="normal-wheel"></div>
                                    <div className="normal-wheel"></div>
                                </div>
                            </div>
                            <div className="tracks">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className='education'>
                        <div className="sectionTitle">
                            <span className='underline'>Education</span>
                        </div>
                        <div className="name">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 237.133 75.811"
                                width="237.133"
                                height="75.811"
                            >
                                <path
                                    fill="#f2f2f2"
                                    d="M206.66 426.1v-2.725h1.053c3.157 0 4.024-1.3 4.024-4.705v-23.093c0-3.406-.867-4.707-4.024-4.707h-1.053v-2.723c2.848.123 5.634.122 8.482.122 2.847 0 5.697 0 8.545-.122v2.723h-.99c-3.22 0-4.088 1.24-4.088 4.707v9.039h5.078c9.224 0 13.683 3.219 13.683 10.711-.001 7.429-4.83 10.773-14.8 10.773h-15.91zm11.949-3.59h3.776c5.448 0 8.297-2.477 8.297-7.06 0-5.077-2.724-7.49-8.357-7.49h-3.716v14.549zm21.013-4v-2.18h.792c2.18 0 2.725-1.188 2.725-3.764v-13.919c0-7.38 4.11-11.193 11.985-11.193 8.372 0 11.74 3.665 11.74 11.888v13.224c0 2.626.594 3.764 2.723 3.764h.892v2.18c-1.933-.05-3.914-.1-5.895-.1-2.03 0-4.06.05-6.19.1v-2.18h.793c2.873 0 3.417-.991 3.417-3.914v-13.372c0-5.548-1.783-8.124-6.984-8.124-5.3 0-7.033 2.577-7.033 8.224v13.421c0 2.823.496 3.764 3.22 3.764h.841v2.18c-2.13-.05-4.26-.098-6.44-.098-2.179 0-4.359.048-6.587.098zm33.63 0v-2.18h.795c2.525 0 3.267-1.04 3.267-3.764v-18.477c0-2.773-.692-3.764-3.267-3.764h-.794v-2.178c2.279.098 4.508.098 6.786.098 2.279 0 4.557 0 6.836-.098v2.178h-.841c-2.527 0-3.22.991-3.22 3.764v7.828h2.773c4.111 0 5.051-1.19 6.19-4.458.545-1.636.843-4.955 2.477-9.313h8.174v2.178h-.495c-2.526 0-3.37 1.488-4.21 4.905-1.19 4.756-1.488 7.48-5.301 8.123 3.565.942 5.548 3.566 5.548 7.083 0 5.746-3.864 8.074-11.987 8.074h-12.73zm30.909 0v-2.18h.792c2.527 0 3.267-1.04 3.267-3.764v-18.477c0-2.723-.74-3.764-3.267-3.764h-.792v-2.178h14.511c11.245 0 16.744 5.051 16.744 15.552 0 10.054-5.745 14.81-17.534 14.81h-13.72zm32.453 0v-2.18h.795c2.18 0 2.723-1.188 2.723-3.764v-13.919c0-7.38 4.11-11.193 11.988-11.193 8.37 0 11.737 3.665 11.737 11.888v13.224c0 2.626.595 3.764 2.727 3.764h.89v2.18a229.41 229.41 0 00-5.893-.1c-2.033 0-4.063.05-6.194.1v-2.18h.795c2.871 0 3.417-.991 3.417-3.914v-13.372c0-5.548-1.785-8.124-6.984-8.124-5.302 0-7.034 2.577-7.034 8.224v13.421c0 2.823.495 3.764 3.218 3.764h.842v2.18c-2.129-.05-4.26-.098-6.439-.098-2.18 0-4.36.048-6.589.098zm33.584-.15v-2.03h.842c2.577 0 3.218-1.04 3.218-3.764v-18.477c0-2.723-.593-3.764-3.218-3.764H370v-2.178h24.716v9.062h-2.478c-.048-5.448-.843-6.042-5.497-6.042h-6.983v11.295h2.427c3.616 0 4.504-.349 4.556-4.063h2.228v10.799h-2.28c0-3.813-.839-4.063-4.603-4.063h-2.328v10.253h7.18c3.962 0 5.053-.297 5.053-4.16v-.793h2.525v7.925h-24.318zm-56.477-2.723h3.464c8.372 0 12.334-3.666 12.334-11.888 0-8.67-3.863-12.68-12.083-12.68h-3.716v24.568zm-30.908-.05h3.169c4.656 0 6.737-1.685 6.737-5.696 0-3.863-2.427-5.349-7.43-5.349h-2.476v11.046z"
                                    transform="matrix(1.25 0 0 -1.25 -258.32 534.63) translate(.745 .745)"
                                ></path>
                                <path
                                    fill="#c28e0e"
                                    d="M206.905 384.083V382.3H394.77v1.783H206.905zm126.544-6.658c-2.543 0-3.934-1.12-3.934-2.9 0-1.293.777-2.019 2.347-2.699l1.89-.81c.794-.34 1.133-.694 1.133-1.391 0-.971-.66-1.506-1.875-1.506-1.506 0-2.281.649-2.281 1.926 0 .064.017.146.017.228h-1.184v-2.798a16.133 16.133 0 013.562-.424c2.62 0 4.027 1.086 4.027 2.961 0 1.2-.697 2.056-2.105 2.622l-2.053.824c-.857.34-1.245.73-1.245 1.426 0 .857.727 1.455 1.893 1.455 1.342 0 1.958-.55 1.958-1.778 0-.097 0-.213-.018-.327h1.246v2.736c-1.211.292-2.344.455-3.378.455zm-125.456-.228v-.858h.194c.647 0 .792-.42.792-1.261v-4.581c0-2.295 1.311-3.446 3.982-3.446 2.847 0 3.96 1.199 3.96 3.852v4.175c0 .857.23 1.26.813 1.26h.24v.859a75.532 75.532 0 00-1.973-.031c-.663 0-1.325.014-2.022.03v-.857h.194c.825 0 1.036-.371 1.036-1.261v-4.322c0-1.57-.616-2.312-2.088-2.312-1.521 0-2.021.727-2.021 2.28v4.354c0 .938.163 1.261 1.051 1.261h.194v.858a89.972 89.972 0 00-2.152-.031c-.711 0-1.457.014-2.2.03zm21.308 0v-.858h.194c.825 0 1.052-.371 1.052-1.261v-5.664c0-.89-.227-1.277-1.052-1.277h-.194v-.858c.711.032 1.408.032 2.103.032.696 0 1.391 0 2.088-.032v.858h-.195c-.845 0-1.04.387-1.04 1.277l-.033 5.953 3.803-8.087h2.752v7.798c0 .89.208 1.261 1.034 1.261h.194v.858a89.633 89.633 0 00-2.119-.031c-.697 0-1.375.014-2.07.031v-.858h.193c.842 0 1.035-.37 1.035-1.26l.048-6.004-3.801 8.122h-3.996zm22.213 0v-.858h.194c.826 0 1.036-.371 1.036-1.261v-5.664c0-.89-.21-1.277-1.036-1.277h-.194v-.858c.777.032 1.554.032 2.33.032.76 0 1.538 0 2.314-.032v.858h-.21c-.825 0-1.035.388-1.035 1.277v5.664c0 .89.21 1.26 1.035 1.26h.21v.859c-.776-.017-1.554-.032-2.314-.032-.776 0-1.553.015-2.33.032zm15.775 0v-.858c.55-.05.777-.388 1.035-1.1l3.01-8.122h2.344l2.913 8.187c.21.615.454.921 1.036 1.035v.858a64.911 64.911 0 00-1.877-.032c-.68 0-1.392.015-2.168.032v-.858c.793 0 1.167-.16 1.167-.581 0-.114-.017-.26-.066-.422l-2.091-6.292-2.184 6.323c-.063.18-.098.325-.098.44 0 .451.34.498 1.166.532v.858c-.89-.017-1.7-.031-2.395-.031-.696 0-1.294.014-1.796.03zm41.29 0v-.858h.196c.824 0 1.033-.371 1.033-1.261v-5.664c0-.89-.21-1.277-1.033-1.277h-.195v-.858c.777.032 1.555.032 2.33.032.761 0 1.538 0 2.315-.032v.858h-.21c-.826 0-1.035.388-1.035 1.277v2.25h.775c.888 0 1.391-.26 1.617-.908.308-.857.358-2.102.955-3.477h2.978v.858h-.082c-.452 0-.793.13-1.037.42-.29.339-.403 1.067-.663 2.07-.274 1.02-.5 1.49-1.423 1.62 1.132.273 1.748 1.066 1.748 2.278 0 1.96-1.328 2.672-4.159 2.672h-4.11zm40.254 0v-.858h.196c.824 0 1.035-.371 1.035-1.261v-5.664c0-.89-.211-1.277-1.035-1.277h-.196v-.858c.778.032 1.555.032 2.33.032.761 0 1.537 0 2.315-.032v.858h-.211c-.827 0-1.036.388-1.036 1.277v5.664c0 .89.21 1.26 1.036 1.26h.21v.859c-.777-.017-1.553-.032-2.313-.032-.776 0-1.553.015-2.331.032zm16.067 0v-2.994h1.018c-.016.162-.015.291-.015.42 0 1.085.37 1.375 1.455 1.375h.873v-6.584c0-.89-.208-1.277-1.034-1.277h-.341v-.858c.826.032 1.652.032 2.475.032.81 0 1.636 0 2.461-.032v.858h-.34c-.827 0-1.037.388-1.037 1.277v6.584h.713c1.196 0 1.553-.257 1.553-1.534v-.261h1.067v2.994c-1.731 0-2.767-.032-3.104-.032h-2.735c-.324 0-1.328.032-3.01.032zm19.853 0v-.858c.66-.034.986-.403 1.373-1.067l2.264-3.933V369.3c0-.856-.177-1.164-1.098-1.164h-.227v-.858c.793.032 1.583.032 2.36.032.794 0 1.57 0 2.33-.032v.858h-.226c-.938 0-1.1.308-1.1 1.164v2.008l2.413 3.949c.434.71.74 1.08 1.259 1.08h.066v.859a72.847 72.847 0 00-1.927-.032c-.661 0-1.326.015-2.022.032v-.858c.55 0 .794-.147.794-.519 0-.16-.066-.389-.18-.614l-1.26-2.477-1.263 2.558c-.115.226-.194.42-.194.583 0 .323.228.469.744.469h.083v.858a95.236 95.236 0 00-2.154-.032c-.694 0-1.374.015-2.035.032zm-95.992-.032v-.826h.193c.825 0 1.036-.371 1.036-1.261v-5.664c0-.856-.162-1.277-1.036-1.277h-.193v-.858h8.121v3.105h-.908c-.031-1.73-.387-1.94-2.004-1.94h-1.813v3.43h.631c1.003 0 1.247-.195 1.296-1.262h.873v3.59h-.873c-.018-1.1-.293-1.293-1.361-1.293h-.566V376h1.99c1.196 0 1.73-.193 1.73-1.132v-.44h.922v2.738h-8.039zm23.22-1.167h.824c1.359 0 1.972-.451 1.972-1.681 0-1.181-.647-1.602-2.054-1.602h-.743v3.283z"
                                    transform="matrix(1.25 0 0 -1.25 -258.32 534.63) translate(.745 .745)"
                                ></path>
                            </svg>
                        </div>
                        <div className="sectionDescription">
                            <span>Currently a junior </span><span className='countdown'>(T- <Countdown date={'2024-05-10T13:00:00'} />)</span><span> at Purdue University. Majoring in Computer Science with concentrations in Software Engineering, Machine Intelligence, and Security. Minoring in Mathematics and Innovation & Leadership Studies along with a certificate in Entrepreneurship. </span>
                        </div>
                    </div>
                </div>
                <div id='experience' className='experienceSection'>
                    <div className='experience'>
                        <div className="sectionTitle">
                            <span className='underline'>Experience</span>
                        </div>
                        <div id={'horizontalScroll'} className='horizontalSnapScroll'>
                            <div className='nasa2'>
                                <div className="positionName">
                                    <div id="NASA"></div>
                                </div>
                                <div className='sectionPosition'>
                                    <span>CX2 - Robotics Operation</span>
                                </div>
                                <div className='sectionDate'>
                                    <span>August - December 2022</span>
                                </div>
                                <div className="sectionDescription">
                                    <span>Expanded the functionality of the robotics planning software to allow for more complex commands to be sent to ISS. Developed an extension for the robotic planning software to track tip of the robotic arms in space. Built an automated script to automatically point all cameras on the outside of ISS to the tip of the robotic arm during motion. Saved flight operators countless hours by automating the movement of cameras during real time operations.</span>
                                </div>
                                <div className="rocketDiv">
                                    <div className="rocket">
                                        <div className="rocket-body">
                                            <div className="body"></div>
                                            <div className="fin fin-left"></div>
                                            <div className="fin fin-right"></div>
                                            <div className="window"></div>
                                        </div>
                                        <div className="exhaust-flame"></div>
                                        <ul className="exhaust-fumes">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='meta'>
                                <div className="positionName">
                                    <div className='metaLogo'>
                                        <svg viewBox="0 0 500 100"><defs><linearGradient gradientUnits="userSpaceOnUse" id="jsc_c_j" x1="124.38" x2="160.839" y1="99" y2="59.326"><stop offset=".427" stopColor="#0278F1"></stop><stop offset=".917" stopColor="#0180FA"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="jsc_c_k" x1="42" x2="-1.666" y1="4.936" y2="61.707"><stop offset=".427" stopColor="#0165E0"></stop><stop offset=".917" stopColor="#0180FA"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="jsc_c_l" x1="27.677" x2="132.943" y1="28.71" y2="71.118"><stop stopColor="#0064E0"></stop><stop offset=".656" stopColor="#0066E2"></stop><stop offset="1" stopColor="#0278F1"></stop></linearGradient></defs><path d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z" fill="#1C2B33"></path><path d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z" fill="#0180FA"></path><path d="M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z" fill="url(#jsc_c_j)"></path><path d="M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z" fill="url(#jsc_c_k)"></path><path d="m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z" fill="url(#jsc_c_l)"></path></svg>
                                    </div>
                                </div>
                                <div className='sectionPosition'>
                                    <span>Growth - New People Relevance</span>
                                </div>
                                <div className='sectionDate'>
                                    <span>May - August 2022</span>
                                </div>
                                <div className="sectionDescription">
                                    <span>Built the new onboarding flow for the Facebook app consisting of profile picture upload, notification permissions, contact importing, quick friending, and interest picker. Increased new user day to day retention by 4.3% from showing posts related to interests collected during onboard. Wrote logging scripts to allow for a better understanding of user interactions during onboard. Created comprehensive interactive tests to spot issues before release</span>
                                </div>
                                <div className='metaCards'>
                                    <div class="container">
                                        <div class="camera-top">
                                            <div class="zoom"></div>
                                            <div class="mode-changer"></div>
                                            <div class="sides"></div>
                                            <div class="range-finder"></div>
                                            <div class="focus"></div>
                                            <div class="red"></div>
                                            <div class="view-finder"></div>
                                            <div class="flash">
                                                <div class="light"></div>
                                            </div>
                                        </div>
                                        <div class="camera-mid">
                                            <div class="sensor"></div>
                                            <div class="lens"></div>
                                        </div>
                                        <div class="camera-bottom"></div>
                                    </div>

                                </div>
                            </div>
                            <div className='nasa1'>
                                <div className="positionName">
                                    <div id="NASA1"></div>
                                </div>
                                <div className='sectionPosition'>
                                    <span>EV3 - Human Interface</span>
                                </div>
                                <div className='sectionDate'>
                                    <span>August - December 2021</span>
                                </div>
                                <div className="sectionDescription">
                                    <span>Developed a standalone Python and C++ application to analyze camera/lens properties using computer vision. Worked on the camera system for the Next Generation Space Suits to develop 5 different custom algorithms to detect and fix sensor defects caused by heavy proton radiation in space. Created a solution to fix distorted images to allow for a more thorough examination of space footage. Programmed an intuitive UI to allow any NASA employee to correct sensor defects and image distortion.</span>
                                </div>
                                <div className='nasaSolarSystem'>
                                    <div class="solar-system">
                                        <div class="sun"></div>

                                        <div class="planet mercury"></div>
                                        <div class="planet-backwards venus"></div>
                                        <div class="planet earth">
                                            <div class="moon"></div>
                                        </div>
                                        <div class="planet mars"></div>
                                        <div class="planet jupiter"></div>
                                        <div class="planet saturn"></div>
                                        <div class="planet-backwards uranus"></div>
                                        <div class="planet neptune"></div>
                                    </div>
                                </div>
                            </div>
                            <div className='southwest'>
                                <div className='positionName'>
                                    <div className="southwestLogo">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0"
                                            y="0"
                                            enableBackground="new 0 0 223 34"
                                            version="1.1"
                                            viewBox="0 0 223 34"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                fill="#304CB2"
                                                d="M59 27c-.9.2-2 .3-3.1.3-3.2 0-3.9-1.1-3.9-3.2V12h-6v12.8c0 5.7 3.2 8.3 9.6 8.3 3.1 0 6-.6 9.5-1.4V12H59v15zm19.5.6c-2.2 0-2.5-1-2.5-2.7v-7.8h5V12h-5V6h-6v6h-3v5h3v8.2c0 3.6.7 7.8 6.7 7.8 1.8 0 3.3-.4 5-.9l-.6-5c-.9.3-1.7.5-2.6.5zM15.4 16.3c-1.1-.4-2.4-.8-3.7-1.2-3.5-1-4.6-1.5-4.6-3.1 0-1.8 1.3-2.7 4.5-2.7 2.6 0 4.9.7 7.2 1.5L20.1 5c-2.7-1-5.2-1.9-8.3-1.9C4.6 3.1.6 7.2.6 12.1c0 3.7 1.6 6.1 5.2 7.6 1 .4 2.3.8 3.6 1.2 3.9 1.2 5.1 1.8 5.1 3.3C14.5 26 13 27 9.9 27c-2.8 0-5.4-.8-8.1-2L.4 31c3 1.2 5.9 2 9.5 2 7.4 0 11.2-4.1 11.2-9.1 0-4-2.3-6.3-5.7-7.6zM94.2 11c-2 0-3.9.5-5.2.9V2h-6v31h6V17.5c1.1-.4 2.3-.8 3.8-.8 2.3 0 3.2.9 3.2 3.1V33h6V19.1c0-5.5-2.5-8.1-7.8-8.1zm-60.8-.1c-6.1 0-11 4.3-11 11s4.9 11.2 11 11.2 11-4.4 11-11.2-4.9-11-11-11zm0 16.2c-2.6 0-4.7-1.9-4.7-5.3s2-5.2 4.7-5.2 4.7 1.8 4.7 5.2c0 3.5-2.1 5.3-4.7 5.3zm134.7-6.9c-.9-.3-1.8-.6-2.9-.9-2.1-.6-2.9-.9-2.9-1.8s.8-1.5 2.7-1.5c2 0 3.8.4 5.8 1l1-5.2c-2.2-.5-4.3-.9-6.7-.9-5.7 0-8.8 2.9-8.8 6.9 0 2.8 1.4 4.6 4.2 5.8.8.3 1.7.7 2.8 1 2.2.6 3.3.9 3.3 1.9 0 1-1.3 1.4-3.1 1.4-2.2 0-4.2-.4-6.3-1.2l-.9 5.2c2.6.7 5 1.2 7.7 1.2 6 0 8.7-3.1 8.7-7-.1-2.7-1.2-4.7-4.6-5.9zm-22.5-9.3c-6.3 0-10.8 4.4-10.8 11.4 0 6.5 3.9 10.8 10.9 10.8 3.1 0 5.6-.9 8.2-2l-.9-5c-2 .9-4 1.6-6.4 1.6-3.6 0-5.1-1.5-5.3-3.7h13.5s.2-2.4.2-2.9c0-5.7-3.1-10.2-9.4-10.2zm-4.2 9.1c.4-1.8 1.3-4.1 3.9-4.1 2.6 0 3.4 2.6 3.4 4.1h-7.3zm43.1 7.6c-2.2 0-2.5-1-2.5-2.7v-7.8h5V12h-5V6h-6v6h-3.1v5.1h3.1v8.2c0 3.6.9 7.8 6.9 7.8 1.8 0 3.3-.4 5-.9l-.7-5c-1 .2-1.8.4-2.7.4zm4-24.4c-1.5 0-2.6 1.2-2.7 2.7s1.2 2.7 2.6 2.7c1.5 0 2.7-1.2 2.7-2.7s-1.1-2.7-2.6-2.7zm0 4.9c-1.2 0-2.1-.9-2.1-2.2 0-1.3.9-2.2 2.2-2.2 1.2 0 2.2.9 2.1 2.2-.1 1.3-1 2.2-2.2 2.2zm.3-2.1c.5-.1.8-.3.8-.8s-.4-.9-1-.9h-1v3.1h.6V6.1c.2 0 .3.1.4.3l.7 1h.7l-.6-1c-.4-.2-.5-.3-.6-.4zm-.4-.3h-.3v-.9h.4c.4 0 .5.2.5.4 0 .4-.3.5-.6.5zM129.2 12l-3.8 11.5-3.8-11.5h-5.2l-3.9 11.5-3.8-11.5h-6.5l7.5 21h5.5l3.8-11.4 3.8 11.4h5.5l7.5-21h-6.6z"
                                                className="st0"
                                            ></path>
                                            <path
                                                fill="#CCC"
                                                d="M207 10.8c-2 0-3.7.7-5 1.4-1.3-.7-2.9-1.4-5-1.4-4.1 0-6.7 2.6-6.7 7.2 0 5.5 5.3 10.9 11.7 15.3 6.4-4.3 11.7-9.7 11.7-15.3 0-4.6-2.7-7.2-6.7-7.2z"
                                                className="st1"
                                            ></path>
                                            <linearGradient
                                                id="SVGID_1_"
                                                x1="190.944"
                                                x2="206.401"
                                                y1="781.481"
                                                y2="781.481"
                                                gradientTransform="translate(0 -757)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset="0" stopColor="#3656CC"></stop>
                                                <stop offset="0.35" stopColor="#304CB2"></stop>
                                                <stop offset="0.72" stopColor="#283B80"></stop>
                                            </linearGradient>
                                            <path
                                                fill="#3250be"
                                                d="M190.9 18.1c0 5.6 6 10.9 11 14.4 1.5-1 3-2.2 4.4-3.4-6.7-5.6-13.1-10.7-15.3-12.5 0 .4-.1.9-.1 1.5z"
                                                className="st2"
                                            ></path>
                                            <linearGradient
                                                id="SVGID_2_"
                                                x1="193.139"
                                                x2="210.601"
                                                y1="769.27"
                                                y2="781.497"
                                                gradientTransform="translate(0 -757)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset="0.3" stopColor="#E61C23"></stop>
                                                <stop offset="0.8" stopColor="#C3161C"></stop>
                                            </linearGradient>
                                            <path
                                                fill="#d2191f"
                                                d="M212.6 20.7c-4.9-4-7.8-6.1-11-8-.9-.5-2.6-1.3-4.5-1.3-1.8 0-3.4.6-4.5 1.7-.7.7-1.2 1.6-1.4 2.7 2.5 1.8 9.4 6.7 16.3 12.2 2.3-2.2 4.2-4.7 5.1-7.3z"
                                                className="st3"
                                            ></path>
                                            <linearGradient
                                                id="SVGID_3_"
                                                x1="203.964"
                                                x2="213.948"
                                                y1="767.689"
                                                y2="774.68"
                                                fill="#d2191f"
                                                gradientTransform="translate(0 -757)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset="0" stopColor="#FDBC11"></stop>
                                                <stop offset="0.25" stopColor="#FCB415"></stop>
                                                <stop offset="0.8" stopColor="#F89E1C"></stop>
                                            </linearGradient>
                                            <path
                                                fill="#faaa19"
                                                d="M211.3 13.1c-1.1-1.1-2.6-1.7-4.4-1.7-1.9 0-3.3.6-4.4 1.2 1.9 1.1 6 3.4 10.3 6.6.1-.4.1-.9.1-1.3.1-2-.5-3.7-1.6-4.8z"
                                                className="st4"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='sectionPosition'>
                                    <span>Enterprise Mobile</span>
                                </div>
                                <div className='sectionDate'>
                                    <span>June - August 2021</span>
                                </div>
                                <div className="sectionDescription">
                                    <span>Created an inventory tracking application for all devices used by the on-ground airport teams. Allowed managers to ping and sync devices themselves, saving them from submitting tickets and waiting 15-20 minutes per device. Saved thousands of dollars a year in lost inventory by allowing the ability to track the devices. Worked with 5 other interns in creating a separate dashboard giving any employee access to basic server/network metrics</span>
                                </div>
                                <div className="southwestPlane">
                                    <div class="scene">
                                        <div class="plane__floater">
                                            <div class="plane__looper">
                                                <div class="plane">
                                                    <div class="plane__wheels">
                                                        <div class="plane__axle">
                                                            <div class="cuboid cuboid--axle">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="plane__wheel plane__wheel--left">
                                                            <div class="cuboid cuboid--wheel-left">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="plane__wheel plane__wheel--right">
                                                            <div class="cuboid cuboid--wheel-right">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__body">
                                                        <div class="cuboid cuboid--body">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__nose">
                                                        <div class="cuboid cuboid--nose">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__propellor">
                                                        <div class="propellor"></div>
                                                    </div>
                                                    <div class="plane__screen">
                                                        <div class="cuboid cuboid--screen">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__wings wings">
                                                        <div class="wings__top">
                                                            <div class="cuboid cuboid--wings-top">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="wings__ghost">
                                                            <div class="cuboid cuboid--wings-ghost">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="wings__bottom">
                                                            <div class="cuboid cuboid--wings-bottom">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="wings__strobe wings__strobe--left">
                                                            <div class="cuboid cuboid--strobe">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                        <div class="wings__strobe wings__strobe--right">
                                                            <div class="cuboid cuboid--strobe">
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                                <div class="cuboid__side"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__tail">
                                                        <div class="cuboid cuboid--tail">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__stabilizer plane__stabilizer--horizontal">
                                                        <div class="cuboid cuboid--horizontal-stabilizer">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__stabilizer plane__stabilizer--vertical">
                                                        <div class="cuboid cuboid--vertical-stabilizer">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                    <div class="plane__beacon">
                                                        <div class="cuboid cuboid--beacon">
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                            <div class="cuboid__side"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar"></div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Home

