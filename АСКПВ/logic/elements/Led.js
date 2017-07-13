function Led(id) {
    this.wrapper = this.svg.g();
    var _code, _blink;

    // при создании всегда неактивны
    this.wrapper.add(
        this.svg.circle(0, 0, 11.893495).attr({fill: this.svg.gradient('l(0, 1, 1, 0) #fff-#333-#fff-#333-#fff-#333'), stroke: '#767676', strokeWidth: 0.5}),
        this.svg.circle(0, 0, 10.629382).attr({fill: this.svg.gradient('l(0, 0, 1, 1) #292929-#e6e6e6'),stroke: '#767676',strokeWidth: 0.5}),
        this.svg.circle(0, 0, 9.8840342).attr({fill: '#242424',stroke: '#767676',strokeWidth: 0.5}),
        this.svg.circle(0, 0, 9.7900877).attr({fill: this.svg.gradient('l(0, 0, 1, 1) #feffff-#aaa'),stroke: this.svg.gradient('l(0, 0, 1, 1) #feffff-#767676'),strokeWidth: 0.5}),
        this.svg.path('m 7.3728,5.945017 c -0.323174,0.787213 -3.909963,3.19949 -7.13589,3.308881 -2.686996,0.09112 -7.277631,-1.629509 -7.277631,-3.63961 0,-2.010101 3.322013,-2.285014 7.088643,-2.411187 8.120129,-0.272004 7.923477,1.283805 7.324878,2.741916 z').attr({opacity: 0.4,  fill: '#fff',  filter: this.svg.filter(Snap.filter.blur(5, 3))})
    );


    // измнение цвета
    this.change = function(code, blink) {
        if (_code !== code) {
            _code = code;

            // исчезновение
            for (var i = 1; i <= 3; i++) {
                this.wrapper[i].attr({opacity: this.wrapper[i].attr('opacity')});
                this.wrapper[i].toggleClass('hblink', false);
            }

            this.wrapper[1].animate({opacity: 0}, 100, mina.linear);
            this.wrapper[2].animate({opacity: 0}, 100, mina.linear);
            this.wrapper[3].animate({opacity: 0}, 100, mina.linear, function () {
                switch (code) {
                    case -1:
                        this.wrapper[1].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #280b0b-#e9afaf'),
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[2].attr({
                            fill: '#280b0b',
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[3].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #fe0000-#a00'),
                            stroke: this.svg.gradient('l(0, 0, 1, 1) #fe0000-#767676'),
                            strokeWidth: 0.5
                        });
                        break;
                    case 0:
                        this.wrapper[1].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #292929-#e6e6e6'),
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[2].attr({
                            fill: '#242424',
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[3].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #feffff-#aaa'),
                            stroke: this.svg.gradient('l(0, 0, 1, 1) #feffff-#767676'),
                            strokeWidth: 0.5
                        });
                        break;
                    case 1:
                        this.wrapper[1].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #0b280b-#afe9af'),
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[2].attr({
                            fill: '#0b280b',
                            stroke: '#767676',
                            strokeWidth: 0.5
                        });
                        this.wrapper[3].attr({
                            fill: this.svg.gradient('l(0, 0, 1, 1) #00fe00-#0a0'),
                            stroke: this.svg.gradient('l(0, 0, 1, 1) #00fe00-#767676'),
                            strokeWidth: 0.5
                        });
                        break;
                }

                // возвращение
                this.wrapper[1].animate({opacity: 1}, 100, mina.linear);
                this.wrapper[2].animate({opacity: 1}, 100, mina.linear);
                this.wrapper[3].animate({opacity: 1}, 100, mina.linear, blink && function() {
                        this.wrapper[1].toggleClass('hblink', true);
                        this.wrapper[2].toggleClass('hblink', true);
                        this.wrapper[3].toggleClass('hblink', true);
                    }.bind(this))
            }.bind(this));
        } else if (_blink !== blink) {
            _blink = blink;

            if (blink) {
                this.wrapper[1].toggleClass('hblink', true);
                this.wrapper[2].toggleClass('hblink', true);
                this.wrapper[3].toggleClass('hblink', true);
            } else {
                for (i = 1; i <= 3; i++) {
                    this.wrapper[i].attr({opacity: this.wrapper[i].attr('opacity')});
                    this.wrapper[i].toggleClass('hblink', false);
                    this.wrapper[i].animate({opacity: 1}, 100, mina.linear);
                }
            }
        }
        return this;
    };
}