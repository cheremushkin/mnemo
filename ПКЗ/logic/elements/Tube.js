function Tube(id, width, color) {
    this.wrapper = this.svg.g();
    var _flow, _border,
        _arrows = this.svg.g(),
        _color = color, _active = false;

    // поток трубы
    _flow = this.svg.rect(0, 0, width, 1).attr({ class: 'tube-' + _color});
    _border = this.svg.g(this.svg.line(0, 0, width, 0), this.svg.line(0, 1, width, 1)).attr({stroke: '#000', strokeWidth: 0.1});

    // стрелки
    var _count = Math.floor(width / 12); // размер стрелкки = 8, промежуток = 4
    for (var i = 0; i < _count; i++) {
        _arrows.add(this.svg.path('m ' + ((width - 12 * _count + 5) / 2 + 12 * i) + ',0.35 h 5 v -0.2 l 3,0.35 l -3,0.35 v -0.2 h -5 z'))
    }
    _arrows.attr({id: id + '-arrows', class: 'arrow', opacity: 0});

    this.wrapper.add(_flow, _border, _arrows).attr({id: id + '-tube'});

    // трансформация
    this.transform = function(transformation) {
        var transform = (transformation.rotate !== 0) ? 'rotate(' + transformation.rotate + ', ' + transformation.x + ', ' + transformation.y + ') ' : '';
        transform += 'translate(' + transformation.x + ', ' + transformation.y + ')';
        transformation.mirror && (transform += ' scale(-1, 1)');
        transformation.size && (transform += ' scale(1, ' + transformation.size + ')');
        this.wrapper.attr({
            transform: transform
        });

        return this;
    };


    // изменение цвета
    this.color = function(color) {
        if (_color === color) return;

        _color = color;
        _flow.attr({'class': 'tube-to-' + _color});
    };


    // видимость
    this.show = function(bool) {
        if (_active === bool) return this;
        _active = bool;

        if (_active) {
            _arrows.animate({opacity: 1}, 500, mina.linear, function () {
                this.toggleClass('blink', true);
            });
        } else {
            _arrows.attr({opacity: _arrows.attr('opacity')});
            _arrows.toggleClass('blink', false);

            _arrows.animate({opacity: 0}, 500, mina.linear);
        }

        return this;
    };
}

function TubeSwitcher(id, color) {
    this.wrapper = this.svg.g();
    var _overlay,
        _flow,
        _borders, _border,
        _color = color, _state = false;

    _overlay = this.svg.path('m 0,0 c 1.46184,-0.0018 2.83537,-0.717343 3.70117,-1.925741 l 2.39481,0.944324 1.51572,-5.03e-4 -0.003,-7.482812 -1.43313,4.68e-4 -2.45284,0.975086 c -1.25298,-2.26553 -6.31966,-2.279214 -7.445095,-0.0094 l -2.426494,-0.962768 -1.433183,4.49e-4 0.0019,7.482867 1.515726,-5.03e-4 2.368201,-0.935829 c 0.867239,1.201816 2.237955,1.911344 3.695455,1.912872 z').attr({
        class: 'switch-overlay',
        fill: this.svg.gradient('l(0.5, 0, 0.5, 1) #1a1a1a-#f9f9f9-#333333')
    });

    _flow = this.svg.rect(-7.6, -6.7, 0, 4).attr({ class: 'tube-' + _color});

    _borders = [
        this.svg.path('m -7.6,-6.7'),
        this.svg.path('m -7.6,-2.7')
    ];
    _border = this.svg.g(_borders[0], _borders[1]).attr({
        stroke: '#000',
        strokeWidth: 0.3,
        fill: 'none'
    });

    this.wrapper.add(_flow, _border, _overlay);


    // переключание
    this.switch = function(value) {
        if (value === _state) return this;
        _state = value;

        if (_state) {
            _flow.animate({
                'width': 15.2
            }, 100);
            _borders[0].animate({
                'd': 'm -7.6,-6.7 h 15.2'
            }, 100);
            _borders[1].animate({
                'd': 'm -7.6,-2.7 h 15.2'
            }, 100);
        } else {
            _flow.animate({
                'width': 0
            }, 100);
            _borders[0].animate({
                'd': 'm -7.6,-6.7'
            }, 100);
            _borders[1].animate({
                'd': 'm -7.6,-2.7'
            }, 100);
        };

        return this;
    };


    // изменение цвета
    this.color = function(value) {
        if (value === _color) return;
        _color = value;

        _flow.attr({'class': 'tube-to-' + _color});

        return this;
    };
}

function TubeCorner(id, color) {
    this.wrapper = this.svg.g();
    var _flow = this.svg.g(), _border = this.svg.g(),
        _color = color;

    _flow = this.svg.g(
        this.svg.path('m 0,2 v -2 h 2 v 1 h -1 v 1 z')
    ).attr({
        'class': 'tube-' + _color
    });

    _border.add(
        this.svg.path('m 0,2 v -2 h 2'),
        this.svg.path('m 1,2 v -1 h 1')
    ).attr({
        stroke: '#000',
        strokeWidth: 0.1,
        fill: 'none'
    });

    this.wrapper.add(_flow, _border);


    // изменение цвета
    this.color = function(value) {
        if (value === _color) return this;

        _color = value;
        _flow.attr({'class': 'tube-to-' + _color});

        return this;
    };
}