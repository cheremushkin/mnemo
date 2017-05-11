function Tube(id, size, color) {
    var _tube, _flow, _border,
        _arrows = this.svg.g(),
        _color = color, _active = false;

    // поток трубы
    _flow = this.svg.rect(0, 0, size.width, size.height).attr({
        class: 'tube-' + _color
    });

    // границы трубы
    _border = this.svg.g(this.svg.line(0, 0, size.width, 0), this.svg.line(0, size.height, size.width, size.height)).attr({
        stroke: '#000',
        strokeWidth: 0.3
    });

    // стрелки
    var _count = Math.floor(size.width / 12); // размер стрелкки = 8, промежуток = 4
    for (var i = 0; i < _count; i++) {
        _arrows.add(this.svg.path('m ' + ((size.width - 12 * _count + 5) / 2 + 12 * i) + ',1.5 h 5 v -0.75 l 3,1.25 l -3,1.25 v -0.75 h -5 z'))
    }
    _arrows.attr({
        id: id + '-arrows',
        class: 'arrow',
        opacity: 0
    });

    // общая группа
    _tube = this.svg.g(_flow, _border, _arrows).attr({id: id + '-tube'});


    // преобразования
    this.transform = function(transformation) {
        var transform = (transformation.rotate !== 0) ? 'rotate(' + transformation.rotate + ', ' + transformation.x + ', ' + transformation.y + ') ' : '';
        transform += 'translate(' + transformation.x + ', ' + transformation.y + ')';
        transform += transformation.mirror && ' scale(-1, 1)';
        _tube.attr({
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


    // видимость стрелок
    this.show = function() {
        if (_active) this.hide();
        _active = true;

        _arrows.animate({opacity: 1}, 500, mina.linear, function() {
            this.toggleClass('blink', true);
        });
    };

    this.hide = function() {
        if (!_active) return this;
        _active = false;

        _arrows.attr({opacity: _arrows.attr('opacity')});
        _arrows.toggleClass('blink', false);

        _arrows.animate({opacity: 0}, 500, mina.linear);
    };
}


function TubeSwitcher(id, coordinates, transformation, color, state) {
    var _overlay,
        _flows, _flow,
        _borders, _border,
        _switcher,
        _color = color,
        _state = state;

    _overlay = this.svg.path('m 0,0 a 5.5949185,5.8589628 0 0 0 -4.49895,2.38715 l -2.90994,-1.17249 -1.84211,0 1.6e-4,9.28195 1.74177,0 2.98119,-1.20848 a 5.5949185,5.8589628 0 0 0 1.2329,1.29825 l -1.20194,3.27111 0,1.70552 8.92057,-3.1e-4 0,-1.89174 -1.138,-3.07855 a 5.5949185,5.8589628 0 0 0 1.23476,-1.29108 l 2.94853,1.19529 1.74177,0 1.6e-4,-9.28193 -1.84211,0 -2.87852,1.15978 a 5.5949185,5.8589628 0 0 0 -4.49023,-2.37444 z').attr({
        'class': 'switch-overlay'
    });

    if (state) {
        _flows = [
            this.svg.rect(-2, 3.5, 4, 12.2), // нижняя
            this.svg.rect(1.9, 3.5, 7.3, 4) // верхняя
        ];
        _flow = this.svg.g(_flows[0], _flows[1]).attr({
            'class': 'tube-' + _color
        });

        _borders = [
            this.svg.path('M 9.5,3.5 H -2 V 15.7'),
            this.svg.path('M 9.5,7.5 H 2 V 15.7')
        ];
        _border = this.svg.g(_borders[0], _borders[1]).attr({
            'stroke': '#000',
            'stroke-width': 0.3,
            'fill': 'none'
        });
    } else {
        _flows = [
            this.svg.rect(-9.3, 3.5, 11.3, 4), // левая
            this.svg.rect(1.9, 3.5, 7.3, 4) // правая
        ];
        _flow = this.svg.g(_flows[0], _flows[1]).attr({
            'class': 'tube-' + _color
        });

        _borders = [
            this.svg.path('M 9.5,3.5 H -9.5'), // верхняя
            this.svg.path('M 9.5,7.5 H -9.5') // нижняя
        ];
        _border = this.svg.g(_borders[0], _borders[1]).attr({
            'stroke': '#000',
            'stroke-width': 0.3,
            'fill': 'none'
        });
    }

    // преобразования
    var transform = (transformation.rotate !== 0) ? 'rotate(' + transformation.rotate + ', ' + coordinates.x + ', ' + coordinates.y + ') ' : '';
    transform += 'translate(' + coordinates.x + ', ' + coordinates.y + ')';
    transform += transformation.mirror && ' scale(-1, 1)';
    _switcher = this.svg.g(_flow, _border, _overlay).attr({
        'id': id + '-switcher',
        'transform': transform
    });


    // переключание
    this.switch = function(value) {
        if (value === _state) return;
        _state = value;

        if (_state) {
            _flows[0].animate({
                'x': -2,
                'width': 4
            }, 100, mina.linear, function() {
                _flows[0].animate({
                    'height': 12.2
                }, 100);
            });
            _borders[0].animate({
                'd': 'M 9.5,3.5 H -2'
            }, 100, mina.linear, function() {
                _borders[0].animate({
                    'd': 'M 9.5,3.5 H -2 V 15.7'
                }, 100);
            });
            _borders[1].animate({
                'd': 'M 9.5,7.5 H 2'
            }, 100, mina.linear, function() {
                _borders[1].animate({
                    'd': 'M 9.5,7.5 H 2 V 15.7'
                }, 100);
            });
        } else {
            _flows[0].animate({
                'height': 4
            }, 100, mina.linear, function() {
                _flows[0].animate({
                    'x': -9.3,
                    'width': 11.3
                }, 100);
            });
            _borders[0].animate({
                'd': 'M 9.5,3.5 H -2 V 3.5'
            }, 100, mina.linear, function() {
                _borders[0].animate({
                    'd': 'M 9.5,3.5 H -9.5'
                }, 100);
            });
            _borders[1].animate({
                'd': 'M 9.5,7.5 H 2 V 7.5'
            }, 100, mina.linear, function() {
                _borders[1].animate({
                    'd': 'M 9.5,7.5 H -9.5'
                }, 100);
            });
        };
    };


    // изменение цвета
    this.change = function(value) {
        if (value === _color) return;
        _color = value;

        _flow.attr({'class': 'tube-to-' + _color});
    };
}