function Led(id, coordinates, size) {
    var _nodes = [], _group, _color;

    // при создании всегда неактивны
    _nodes[0] = this.svg.circle(54.013397, 35.369156, 5.9999995);
    _nodes[1] = this.svg.circle(54.013397, 35.369156, 5.3620138);
    _nodes[2] = this.svg.circle(54.013397, 35.369156, 4.9109964);
    _nodes[3] = this.svg.circle(54.013397, 35.369156, 4.8747215);
    _nodes[4] = this.svg.path('m 54.01324,30.62932 c -1.498615,0.002 -3.399578,0.960439 -3.647881,2.08411 -0.26466,1.197692 2.149266,0.481274 3.647881,0.483287 1.498617,-0.002 4.098632,0.657475 3.647883,-0.483287 -0.533667,-1.350613 -2.149267,-2.082099 -3.647883,-2.08411 z');
    _group = this.svg.g(_nodes[0], _nodes[1], _nodes[2], _nodes[3], _nodes[4]).attr({
        'id': id + '-led',
        'class': 'led',
        'transform': 'matrix(' + size + ', 0, 0, ' + size + ', ' + coordinates['x'] + ', ' + coordinates['y'] + ')'
    });


    // измнение цвета
    this.change = function(code) {
        switch(code) {
            case -1:
                _color = 'red';
                break;
            case 0:
                _color = 'black';
                break;
            case 1:
                _color = 'green';
                break;
        }

        for (var i = 0; i <= 4; i++) {
            _nodes[i].attr({'class': 'led-' + _color + '-' + i})
        }

        // сброс мигания
        if (_blinkInterval) {
            clearInterval(_blinkInterval);
            _blinkInterval = false;
        }
    };


    // мигание
    var _blinkInterval = false;
    this.blinkOn = function() {
        if (_blinkInterval) return;

        _blink = function() {
            _nodes[3].animate({
                'fill-opacity': 1
            }, 500, mina.linear, function () {
                _nodes[3].animate({
                    'fill-opacity': 0.5
                }, 500, mina.linear)
            })
        };

        _blink();
        _blinkInterval = setInterval(_blink, 1000);
    };
    this.blinkOff = function() {
        if (!_blinkInterval) return;

        clearInterval(_blinkInterval);
        _blinkInterval = false;

        _nodes[3].animate({
            'fill-opacity': 1
        }, 500, mina.linear);
    };
}