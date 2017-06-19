function Button(id) {
    this.wrapper = this.svg.g();
    var _background, _slider,
        _state, _active;

    _background = this.svg.rect(0, 0, 30, 10).attr({'class': 'button-wrapper'});
    _slider = this.svg.rect(_state ? 19 : 1, 1, 10, 8).attr({'cursor': 'pointer'});
    this.wrapper.add(_background, _slider).attr({'id': id + '-button'});

    // начальное состояние
    this.init = function(bool) {
        _state = bool;

        _slider.attr({
            'class': _state ? 'button-green' : 'button-red',
            'x': _state ? 19 : 1
        });

        return this;
    };

    // смена состояния
    this.change = function(bool) {
        if (_state === bool) return this;
        _state = bool;

        _slider.animate({'x': _state ? 19 : 1}, 100);
        _slider.attr({'class': _state ? 'button-to-green' : 'button-to-red'})

        return this;
    };


    // нажатие
    _switch = function() {
        this.change(!_state);

        // отправка запроса на сервер
        request(id + '=' + (_state ? 1 : 0));
    };

    _slider.click(_switch.bind(this)); // событие нажатия
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