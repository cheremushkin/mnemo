function Led(id) {
    var _nodes = [],
        _wrapper = this.svg.g(),
        _color;

    // при создании всегда неактивны
    _wrapper.add(
        this.svg.circle(0, 0, 11.893495).attr({fill: this.svg.gradient('l(0, 1, 1, 0) #fff-#333-#fff-#333-#fff-#333'), stroke: '#767676', strokeWidth: 0.5}),
        this.svg.circle(0, 0, 10.629382),
        this.svg.circle(0, 0, 9.8840342),
        this.svg.circle(0, 0, 9.7900877),
        this.svg.path('m 7.3728,5.945017 c -0.323174,0.787213 -3.909963,3.19949 -7.13589,3.308881 -2.686996,0.09112 -7.277631,-1.629509 -7.277631,-3.63961 0,-2.010101 3.322013,-2.285014 7.088643,-2.411187 8.120129,-0.272004 7.923477,1.283805 7.324878,2.741916 z').attr({opacity: 0.4,  fill: '#fff',  filter: this.svg.filter(Snap.filter.blur(5, 3))})
    );

    // преобразования
    this.transform = function(transformation) {
        var transform = (transformation.rotate !== 0) ? 'rotate(' + transformation.rotate + ', ' + transformation.x + ', ' + transformation.y + ') ' : '';
        transform += 'translate(' + transformation.x + ', ' + transformation.y + ')';
        transformation.mirror && (transform += ' scale(-1, 1)');
        transformation.size && (transform += ' scale(' + transformation.size + ')');
        _wrapper.attr({
            transform: transform
        });

        return this;
    };


    // измнение цвета
    this.change = function(code) {
        switch(code) {
            case -1:
                _wrapper[1].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #280b0b-#e9afaf'),
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[2].attr({
                    fill: '#280b0b',
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[3].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #fe0000-#a00'),
                    stroke: this.svg.gradient('l(0, 0, 1, 1) #fe0000-#767676'),
                    strokeWidth: 0.5
                });

                _color = 'red';
                break;
            case 0:
                _wrapper[1].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #292929-#e6e6e6'),
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[2].attr({
                    fill: '#242424',
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[3].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #feffff-#aaa'),
                    stroke: this.svg.gradient('l(0, 0, 1, 1) #feffff-#767676'),
                    strokeWidth: 0.5
                });

                _color = 'grey';
                break;
            case 1:
                _wrapper[1].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #0b280b-#afe9af'),
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[2].attr({
                    fill: '#0b280b',
                    stroke: '#767676',
                    strokeWidth: 0.5
                });
                _wrapper[3].attr({
                    fill: this.svg.gradient('l(0, 0, 1, 1) #00fe00-#0a0'),
                    stroke: this.svg.gradient('l(0, 0, 1, 1) #00fe00-#767676'),
                    strokeWidth: 0.5
                });

                _color = 'green';
                break;
        }

        // сброс мигания
        if (_blinkInterval) {
            clearInterval(_blinkInterval);
            _blinkInterval = false;
        }

        return this;
    };


    // мигание
    var _blinkInterval = false;
    this.blinkOn = function() {
        if (_blinkInterval) return this;

        _blink = function() {
            _wrapper[3].animate({
                'fill-opacity': 1
            }, 500, mina.linear, function () {
                _wrapper[3].animate({
                    'fill-opacity': 0.7
                }, 500, mina.linear)
            })
        };

        _blink();
        _blinkInterval = setInterval(_blink, 1000);

        return this;
    };
    this.blinkOff = function() {
        if (!_blinkInterval) return this;

        clearInterval(_blinkInterval);
        _blinkInterval = false;

        _wrapper[3].animate({
            'fill-opacity': 1
        }, 500, mina.linear);

        return this;
    };
}