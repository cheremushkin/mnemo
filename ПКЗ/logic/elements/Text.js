function TextValue(id, space) {
    this.wrapper = this.svg.g();
    var _value = '-', _measure = '-', _color = 'black';

    this.wrapper.add(
        this.svg.text(space / 2, 0, _value).attr({
            'font-size': 5 + 'pt',
            'text-anchor': 'middle'
        }),
        this.svg.text(space, 0, _measure).attr({
            'font-size': 5 + 'pt',
            'text-anchor': 'start'
        })
    ).attr({id: id + '-value'});

    // изменение значения
    this.change = function(value, measure, blink) {
        this.wrapper[0].attr({opacity: this.wrapper[0].attr('opacity')});
        this.wrapper[0].toggleClass('blink', false);

        if (value !== _value) {
            _value = value;

            this.wrapper[0].animate({opacity: 0}, 250, mina.linear, function() {
                this.attr({text: _value});

                // цвет
                if (blink) this.toggleClass('text-red', true);
                else this.toggleClass('text-red', false);

                this.animate({opacity: 1}, 250, mina.linear, blink ? function() {this.toggleClass('blink', true)} : null)
            });
        } else if (blink) {
            this.wrapper[0].animate({opacity: 0}, 250, mina.linear, function() {
                this.animate({opacity: 1}, 250, mina.linear, function() {this.toggleClass('blink', true)})
            });
        } // для синхронизации анимации

        if (measure !== _measure) {
            _measure = measure;

            this.wrapper[1].animate({opacity: 0}, 250, mina.linear, function() {
                this.attr({text: _measure});
                this.animate({opacity: 1}, 250, mina.linear)
            });
        }
    };
}


function TextLabel(coordinates, text, size) {
    var _str = text.split(/(\d+)/),
        _text = svg.text(coordinates.x, coordinates.y, _str).attr({
            'font-size': 5 * size + 'pt'
        });

    // обработка чисел в заголовках (индексы)
    _str.forEach(function(e, i) {
        if (/[0-9]/.test(e))
            _text.selectAll('tspan')[i].attr({
                fontSize: '50%',
                baselineShift: 'sub'
            });
    });

    // удаление трансформера
    this.transform = function() {}
}