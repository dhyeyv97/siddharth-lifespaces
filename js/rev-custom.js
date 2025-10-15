/*
Template: Recrutix - Human Resources & Recruiting HTML Template
Author: peacefulqode.co.in
Version: 1.0
Design and Developed by: Peacefulqode

*/
/*================================================
[  Table of contents  ]
================================================
==> home page 1
==> home page 3
======================================
[ End table content ]
======================================*/



/*================================================
home page 1
================================================*/

var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined, init: function () {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) { window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1; if (window.revapi1initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["revslider11"].init() }); return; }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) { revslider_showDoubleJqueryError("rev_slider_1_1"); return; }
        revapi1.revolutionInit({
            revapi: "revapi1",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,778,480",
            gridheight: "900,700,650,670",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "900,700,650,670",
            responsiveLevels: "1240,1024,778,480",
            progressBar: { disableProgressBar: true },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-title\">{{title}}</span>",
                    style: "ares",
                    hide_onmobile: true,
                    hide_under: "1099px",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 45,
                    v_offset: 0,
                    direction: "vertical",
                    space: 10
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal(); };



/*================================================
home page 3
================================================*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider31"] = {
    once: RS_MODULES.modules["revslider31"] !== undefined ? RS_MODULES.modules["revslider31"].once : undefined, init: function () {
        window.revapi3 = window.revapi3 === undefined || window.revapi3 === null || window.revapi3.length === 0 ? document.getElementById("rev_slider_3_1") : window.revapi3;
        if (window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length == 0) { window.revapi3initTry = window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1; if (window.revapi3initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["revslider31"].init() }); return; }
        window.revapi3 = jQuery(window.revapi3);
        if (window.revapi3.revolution == undefined) { revslider_showDoubleJqueryError("rev_slider_3_1"); return; }
        revapi3.revolutionInit({
            revapi: "revapi3",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,778,480",
            gridheight: "780,650,600,500",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "780,650,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: { disableProgressBar: true },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "uranus",
                    hide_onmobile: true,
                    hide_under: "1099px",
                    left: {
                        h_offset: 45
                    },
                    right: {
                        h_offset: 45
                    }
                },
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-inner\"></span>",
                    style: "uranus",
                    hide_over: "1099px"
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal(); };