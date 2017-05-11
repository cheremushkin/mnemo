function TextValue(id, coordinates, size) {
    var _text = [],
        _value = '-', _measure = '-', _color = 'black';

    _text[0] = this.svg.text(coordinates.space / 2, 0, _value).attr({
        'font-size': 5 * size + 'pt',
        'text-anchor': 'middle'
    });
    _text[1] = this.svg.text(coordinates.space, 0, _measure).attr({
        'font-size': 5 * size + 'pt',
        'text-anchor': 'start'
    });
    _text = this.svg.g(_text[0], _text[1]).attr({
        'id': id + '-text',
        'transform': 'translate(' + coordinates.x + ', ' + coordinates.y + ')',
        'style': 'animation: none;'
    });


    // изменение значения
    this.change = function(value, measure, blink) {
        _text[0].attr({opacity: _text[0].attr('opacity')});
        _text[0].toggleClass('blink', false);

        if (value !== _value) {
            _value = value;

            _text[0].animate({opacity: 0}, 250, mina.linear, function() {
                this.attr({text: _value});

                // цвет
                if (blink) this.toggleClass('text-red', true);
                else this.toggleClass('text-red', false);

                this.animate({opacity: 1}, 250, mina.linear, blink ? function() {this.toggleClass('blink', true)} : null)
            });
        } else if (blink) {
            _text[0].animate({opacity: 0}, 250, mina.linear, function() {
                this.animate({opacity: 1}, 250, mina.linear, function() {this.toggleClass('blink', true)})
            });
        } // для синхронизации анимации

        if (!measure.equals(_measure)) {
            _measure = measure;

            _text[1].animate({opacity: 0}, 250, mina.linear, function() {
                this.attr({text: _measure});
                this.animate({opacity: 1}, 250, mina.linear)
            });
        }
    };
}


function TextLabel(coordinates, text, size) {
    var _text = this.svg.g;

    _text = this.svg.text(coordinates.x, coordinates.y, text).attr({
        'font-size': 5 * size + 'pt'
    });
    _text.selectAll('tspan').forEach(function(tspan, i){
        if (i == 1) tspan.attr({
            'baseline-shift': 'sub',
            'font-size': '50%'
        });
    })
}