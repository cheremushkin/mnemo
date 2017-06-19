function Heat() {
    this.wrapper = this.svg.g().attr({opacity: 0});
    var _active = false;

    for (var i = 0; i < 5; i++) {
        this.wrapper.add(
            this.svg.path('m ' + (i * 12) + ',0 c 0.10213,0.0343 0.20642,0.0648 0.31266,0.0916 0.38652,-0.46006 0.65304,-1.01455 0.76983,-1.59663 0.12657,-0.63078 0.0765,-1.29031 -0.13825,-1.88704 -0.18002,-0.49243 -0.4705,-0.93757 -0.72052,-1.35877 -0.25406,-0.42797 -0.48587,-0.86644 -0.5694,-1.34017 -0.0796,-0.44566 -0.0227,-0.92061 0.1667,-1.34292 0.18926,-0.4221 0.51043,-0.79012 0.91316,-1.03763 -0.41875,0.21882 -0.77405,0.56857 -1.00163,0.99412 -0.22748,0.42536 -0.32609,0.92437 -0.27347,1.41403 0.0569,0.52021 0.27587,1.00341 0.50546,1.45507 0.23322,0.45883 0.47036,0.87921 0.60532,1.34017 0.16105,0.53901 0.17062,1.1181 0.032,1.65387 -0.12797,0.4944 -0.382,0.95225 -0.72663,1.31913 0.0451,0.0959 0.0868,0.19439 0.12482,0.29516 z').attr({
                fill: this.svg.gradient('l(0, 0, 0, 1) #f46868-#970b0b'),
                stroke: this.svg.gradient('l(0, 0, 0, 1) #ef1e1e-#7f0909'),
                strokeWidth: 0.1
            })
        );
    }

    // видимость
    this.work = function(bool) {
        if (_active === bool) return this;
        _active = bool;

        if (_active) {
            this.wrapper.animate({opacity: 1}, 500, mina.linear, function () {
                this.toggleClass('blink', true);
            });
        } else {
            this.wrapper.attr({opacity: this.wrapper.attr('opacity')});
            this.wrapper.toggleClass('blink', false);

            this.wrapper.animate({opacity: 0}, 500, mina.linear);
        }

        return this;
    };
}

function Conditioner() {
    this.wrapper = this.svg.g();
    var _fan = this.svg.g(), _elements = this.svg.g(),
        _active = false;

    _fan.add(
        this.svg.path('m 0,0 c 0,0 8.0825,-9.185066 5.45238,-13.125637 -2.01756,-3.0228 -8.88504,-3.022671 -10.90279,0 -2.63024,3.940193 5.45041,13.125637 5.45041,13.125637 z').attr({
            fill: this.svg.gradient('l(1, 0, 0, 1) #999-#111'),
            stroke: this.svg.gradient('l(1, 0, 0, 1) #222-#777'),
            strokeWidth: 0.2
        }),
        this.svg.path('m 0,0 c 0,0 8.0825,-9.185066 5.45238,-13.125637 -2.01756,-3.0228 -8.88504,-3.022671 -10.90279,0 -2.63024,3.940193 5.45041,13.125637 5.45041,13.125637 z').attr({
            fill: this.svg.gradient('l(1, 0, 0, 1) #999-#111'),
            stroke: this.svg.gradient('l(1, 0, 0, 1) #222-#777'),
            strokeWidth: 0.2,
            transform: 'rotate(90, 0, 0)'
        }),
        this.svg.path('m 0,0 c 0,0 8.0825,-9.185066 5.45238,-13.125637 -2.01756,-3.0228 -8.88504,-3.022671 -10.90279,0 -2.63024,3.940193 5.45041,13.125637 5.45041,13.125637 z').attr({
            fill: this.svg.gradient('l(1, 0, 0, 1) #999-#111'),
            stroke: this.svg.gradient('l(1, 0, 0, 1) #222-#777'),
            strokeWidth: 0.2,
            transform: 'rotate(180, 0, 0)'
        }),
        this.svg.path('m 0,0 c 0,0 8.0825,-9.185066 5.45238,-13.125637 -2.01756,-3.0228 -8.88504,-3.022671 -10.90279,0 -2.63024,3.940193 5.45041,13.125637 5.45041,13.125637 z').attr({
            fill: this.svg.gradient('l(1, 0, 0, 1) #999-#111'),
            stroke: this.svg.gradient('l(1, 0, 0, 1) #222-#777'),
            strokeWidth: 0.2,
            transform: 'rotate(270, 0, 0)'
        })
    );

    _elements.add(
        this.svg.circle(0, 0, 17).attr({
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1
        }),
        this.svg.circle(0, 0, 17).attr({
            fill: 'transparent',
            stroke: this.svg.gradient('l(0, 0, 1, 0) #b3b3b3-#f9f9f9'),
            strokeWidth: 0.7
        }),
        this.svg.circle(0, 0, 10).attr({
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1
        }),
        this.svg.circle(0, 0, 10).attr({
            fill: 'transparent',
            stroke: this.svg.gradient('l(0, 0, 1, 0) #b3b3b3-#f9f9f9'),
            strokeWidth: 0.7
        }),
        this.svg.circle(0, 0, 5).attr({
            fill: this.svg.gradient('l(0, 0, 1, 0) #b3b3b3-#f9f9f9'),
            stroke: 'black',
            strokeWidth: 0.1
        })
    );

    this.wrapper.add(_fan, _elements);

    // вращение
    this.rotate = function(bool) {
        if (_active === bool) return this;
        _active = bool;

        _fan.toggleClass('rotate');
        return this;
    };
}

function Arrows() {
    this.wrapper = this.svg.g().attr({opacity: 0});
    var _arrow = this.svg.g(),
        _active = false;

    _arrow.add(
        this.svg.path('m 0,0 c -0.927042,2.886354 -2.957424,5.403151 -5.582379,6.919743 -2.624956,1.516593 -5.81945,2.018515 -8.783019,1.379997 -3.787141,-0.815961 -7.117261,-3.522992 -8.689518,-7.063647').attr({
            fill: 'transparent',
            stroke: '#1245ed',
            strokeWidth: 0.5
        }),
        this.svg.path('m 0,0 c -0.516828,-0.469318 -0.435314,-2.346592 0,-2.815911 0.435314,-0.469318 -3.576018,1.51626 -3.576018,1.51626 0,0 4.092845,1.768969 3.576018,1.299651 z').attr({
            fill: '#1245ed',
            transform: 'translate(-23.8, 3) rotate(70)'
        })
    );

    this.wrapper.add(_arrow, _arrow.clone().attr({transform: 'scale(-1, 1) translate(57, 0)'}));

    // видимость
    this.show = function(bool) {
        if (_active === bool) return this;
        _active = bool;

        if (_active) {
            this.wrapper.animate({opacity: 1}, 500, mina.linear, function () {
                this.toggleClass('blink', true);
            });
        } else {
            this.wrapper.attr({opacity: this.wrapper.attr('opacity')});
            this.wrapper.toggleClass('blink', false);

            this.wrapper.animate({opacity: 0}, 500, mina.linear);
        }

        return this;
    };
}


function Compass() {
    this.wrapper = this.svg.g();
    var _pointer = this.svg.path('m 0,0 h 0.5 l -0.5,-1 l -0.5,1 z').attr({
            fill: '#e94839',
            stroke: '#000',
            strokeWidth: 0.05
        });

    this.wrapper.add(_pointer);

    // вращение
    this.rotate = function(angle) {
        _pointer.animate({opacity: 0}, 100, mina.linear, function() {
            _pointer.attr({
                transform: 'rotate(' + angle + ', 0, 4.3)'
            }, 500);
            _pointer.animate({opacity: 1}, 100, mina.linear);
        });

        return this;
    };
}