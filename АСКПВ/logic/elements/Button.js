function Button(id, state) {
    var _group,
        _wrapper, _slider,
        _state = state, _active;

    _wrapper = this.svg.rect(0, 0, 30, 10).attr({
        'class': 'button-wrapper'
    });
    _slider = this.svg.rect(_state ? 19 : 1, 1, 10, 8).attr({
        'class': _state ? 'button-green' :'button-red',
        'cursor': 'pointer'
    });

    _group = this.svg.g(_wrapper, _slider).attr({
        'id': id + '-button'
    });


    // перемещение
    this.translate = function(x, y) {
        _group.attr({
            'transform': 'translate(' + x + ', ' + y + ')'
        });

        return this;
    };

    // смена состояния (без отправки сигнала)
    this.state = function(value) {
        _state = value;

        _slider.animate({
            'x': _state ? 19 : 1
        }, 100);
        _slider.attr({
            'class': _state ? 'button-green button-to-green' :'button-red button-to-red'
        })
    };


    // нажатие
    _switch = function() {
        _state = !_state;

        // отправка запроса на сервер
        request(id + '=' + (_state ? 1 : 0));

        _slider.animate({'x': _state ? 19 : 1}, 100);
        _slider.attr({'class': _state ? 'button-to-green' :'button-to-red'
        })
    };

    // стандартно включен
    _slider.click(_switch); // событие нажатия
    _active = true;


    // отключение кнопки
    this.disable = function() {
        if (!_active) return this;
        _active = false;

        _slider.animate({
            'opacity': 0.5
        }, 100);
        _slider.unclick(_switch);

        return this;
    };

    // включение кнопки
    this.activate = function() {
        if (_active) return this;
        _active = true;

        _slider.animate({
            'opacity': 1
        }, 100);
        _slider.click(_switch);

        return this;
    };
}