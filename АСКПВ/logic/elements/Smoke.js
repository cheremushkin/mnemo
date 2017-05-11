function Smoke(coordinates, size) {
    var _clouds = [],
        _blinkIntervals = [],
        _smoke, _state = false;

    _clouds[0] = svg.path('m 0,0 -35.12761,-92.61148 c -2.25061,-9.57706 -153.08644,-25.04414 -44.95774,-104.23421 -8.68189,-106.43911 66.33567,-128.65212 70.77961,-54.73741 43.29274,-97.32622 115.95083,-82.39513 145.74797,-3.67637 35.89077,19.53927 99.16132,32.97094 53.52175,102.98138 -30.15878,35.67437 -49.22838,31.74152 -91.48197,6.94185 -17.15588,59.39838 -17.73567,31.76398 -51.14831,36.97317 7.74981,25.05044 13.81563,94.64395 -15.26134,108.36307 z').attr({'opacity': 0});
    _clouds[1] = svg.path('m 0,0 -35.12761,-92.61148 c -2.25061,-9.57706 -150.43474,-49.16483 -42.30604,-128.3549 -8.68189,-106.43911 70.31322,-80.41074 74.75716,-6.49603 43.29274,-97.32622 123.90593,-126.6164 153.70307,-47.89764 35.89077,19.53927 85.90282,26.27075 40.26325,96.28119 -30.15878,35.67437 -51.88008,29.06144 -94.13367,4.26177 -17.15588,59.39838 7.45548,67.94502 -25.95716,73.15421 7.74981,25.05044 -10.04967,87.94376 -39.12664,101.66288 z').attr({'opacity': 0});
    _clouds[2] = svg.path('m 0,0 -35.12761,-92.61148 c -2.25061,-9.57706 -121.26604,-34.42441 -13.13734,-113.61448 -8.68189,-106.43911 107.43701,-119.27185 111.88095,-45.35714 43.29274,-97.32622 98.71478,-75.69494 128.51192,3.02382 35.89077,19.53927 81.92528,34.31098 36.28571,104.32142 -30.15878,35.67437 -43.92498,50.50206 -86.17857,25.70239 -17.15588,59.39838 -48.23022,37.12413 -81.64286,42.33332 7.74981,25.05044 0.55713,62.48303 -28.51984,76.20215 z').attr({'opacity': 0});

    _smoke = svg.g(_clouds[0], _clouds[1], _clouds[2]).attr({
        'id': 'smoke',
        'class': 'cloud',
        'fill': '#b3b3b3',
        'opacity': 0,
        'transform': 'translate(' + coordinates.x + ', ' + coordinates.y + ') scale(' + size + ')'
    });

    // изменение цвета
    this.changeColor = function (color) {
        _smoke.animate({
            'fill': color
        }, 1000)
    };


    // появление дыма
    this.show = function() {
        if (_state) return;
        _state = true;

        _smoke.animate({
            'opacity': 1
        }, 500);
    };
    // удаление дыма
    this.hide = function() {
        if (!_state) return;
        _state = false;

        _smoke.animate({
            'opacity': 0
        }, 500);
    };


    _clouds[0].animate({
        'opacity': 1
    }, 500, function () {
        _clouds[0].animate({
            'opacity': 0.3
        }, 500)
    });
    setTimeout(function() {
        _clouds[1].animate({
            'opacity': 1
        }, 500, function () {
            _clouds[1].animate({
                'opacity': 0.3
            }, 500)
        });
    }, 330);
    setTimeout(function() {
        _clouds[2].animate({
            'opacity': 1
        }, 500, function () {
            _clouds[2].animate({
                'opacity': 0.3
            }, 500)
        });
    }, 660);


    setInterval(function() {
        _clouds[0].animate({
            'opacity': 1
        }, 500, function () {
            _clouds[0].animate({
                'opacity': 0.3
            }, 500)
        });
    }, 1000);
    setTimeout(function() {
        setInterval(function() {
            _clouds[1].animate({
                'opacity': 1
            }, 500, function () {
                _clouds[1].animate({
                    'opacity': 0.3
                }, 500)
            });
        }, 1000);
    }, 330);
    setTimeout(function() {
        setInterval(function() {
            _clouds[2].animate({
                'opacity': 1
            }, 500, function () {
                _clouds[2].animate({
                    'opacity': 0.3
                }, 500)
            });
        }, 1000);
    }, 660)
}