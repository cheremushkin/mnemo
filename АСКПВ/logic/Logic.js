function Logic(layout) {
    var _data, _layout = layout;

    this.state = function(data) {
        _data = data;

        // проверка на превышение нормы численных параметров
        var ledDict = 'measure|warm|calibr|blow|probestatus|nostatus|costatus|cond|heat|fire|power|powerfail|door|auto|conden|fail'.split('|');
        for (parameter in _data.codes) {
            if (!ledDict.includes(parameter)) continue;

            layout.flags[parameter].change(_data.codes[parameter]);
        }

        var numericDict = 'no|no2|co|co2|tgas|qgas|tmagis|tzond|tprobe|ratein|rateex|qcalibr|pcalibr|tin|uin'.split('|'),
            value, measure, min, max, error;
        for (parameter in _data) {
            if (!numericDict.includes(parameter)) continue;

            value = _data[parameter].value ? _data[parameter].value : '-';
            max = _data[parameter].max ? _data[parameter].max : null;
            min = _data[parameter].min ? _data[parameter].min : null;
            error = false;
            measure = _data[parameter].measure.split('|');

            // мигать или не мигать
            if ((max && _data[parameter].value - error > max) || (min && _data[parameter].value + error < min)) {
                error = true;
            }

            layout.values[parameter].change(value, measure, error);
        }

        if (_data.codes['measure'] === 1) {
            layout.switchers['blow'].switch(false);
            layout.switchers['blow'].change('red');
            layout.switchers['calibr'].switch(false);

            layout.tubes['main1'].color('red');
            layout.tubes['main2'].color('red');
            layout.tubes['main3'].color('red');
            layout.tubes['rateexIn'].color('red');
            layout.tubes['rateexOut'].color('red');

            layout.tubes['initial'].show();
            layout.tubes['main1'].show();
            layout.tubes['main2'].show();
            layout.tubes['main3'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['tprobeOut'].show();
            layout.tubes['noIn'].show();
            layout.tubes['coIn'].show();
            layout.tubes['coOut'].show();
            layout.tubes['rateinOut'].show();

            layout.tubes['blow'].hide();
            layout.tubes['calibrIn'].hide();
            layout.tubes['calibrOut'].hide();
        }

        if (_data.codes['blow'] === 1) {
            layout.switchers['blow'].switch(true);
            layout.switchers['blow'].change('blue');

            layout.tubes['main1'].color('blue');
            layout.tubes['main2'].color('blue');
            layout.tubes['main3'].color('blue');
            layout.tubes['rateexIn'].color('blue');
            layout.tubes['rateexOut'].color('blue');

            layout.tubes['blow'].show();
            layout.tubes['main1'].show();
            layout.tubes['main2'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['noIn'].show();
            layout.tubes['coIn'].show();
            layout.tubes['coOut'].show();
            layout.tubes['rateinOut'].show();

            layout.tubes['initial'].hide();

            if (_data.codes['calibr'] === 1) {
                layout.switchers['calibr'].switch(true);

                layout.tubes['main3'].hide();
                layout.tubes['tprobeOut'].hide();

                layout.tubes['calibrIn'].show();
                layout.tubes['calibrOut'].show();
            } else {
                layout.switchers['blow'].change('blue');
                layout.switchers['calibr'].switch(false);

                layout.tubes['main3'].show();
                layout.tubes['tprobeOut'].show();

                layout.tubes['calibrIn'].hide();
                layout.tubes['calibrOut'].hide();
            }
        }

        if (_data.codes['warm'] === 1) {
            layout.switchers['blow'].switch(true);
            layout.switchers['blow'].change('blue');
            layout.switchers['calibr'].switch(false);

            layout.tubes['main1'].color('blue');
            layout.tubes['main2'].color('blue');
            layout.tubes['main3'].color('blue');
            layout.tubes['rateexIn'].color('blue');
            layout.tubes['rateexOut'].color('blue');

            layout.tubes['blow'].show();
            layout.tubes['main1'].show();
            layout.tubes['main2'].show();
            layout.tubes['main3'].show();
            layout.tubes['tprobeOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['noIn'].show();
            layout.tubes['coIn'].show();
            layout.tubes['coOut'].show();
            layout.tubes['rateinOut'].show();

            layout.tubes['initial'].hide();
            layout.tubes['calibrIn'].hide();
            layout.tubes['calibrOut'].hide();
        }

        if (_data.codes['calibr'] === 1 && _data.codes['blow'] !== 1) {
            layout.switchers['blow'].switch(false);
            layout.switchers['blow'].change('red');
            layout.switchers['calibr'].switch(true);

            layout.tubes['main1'].color('red');
            layout.tubes['main2'].color('red');
            layout.tubes['main3'].color('blue');
            layout.tubes['rateexIn'].color('red');
            layout.tubes['rateexOut'].color('red');

            layout.tubes['initial'].show();
            layout.tubes['main1'].show();
            layout.tubes['main2'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['calibrIn'].show();
            layout.tubes['calibrOut'].show();
            layout.tubes['noIn'].show();
            layout.tubes['coIn'].show();
            layout.tubes['coOut'].show();
            layout.tubes['rateinOut'].show();

            layout.tubes['blow'].hide();
            layout.tubes['main3'].hide();
            layout.tubes['tprobeOut'].hide();
        }

        if (_data.codes['fail'] === -1) {
            layout.switchers['blow'].switch(true);
            layout.switchers['blow'].change('blue');
            layout.switchers['calibr'].switch(false);

            layout.tubes['main1'].color('blue');
            layout.tubes['main2'].color('blue');
            layout.tubes['main3'].color('blue');
            layout.tubes['rateexIn'].color('blue');
            layout.tubes['rateexOut'].color('blue');

            layout.tubes['blow'].show();
            layout.tubes['main1'].show();
            layout.tubes['main2'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();
            layout.tubes['rateexIn'].show();
            layout.tubes['rateexOut'].show();

            layout.tubes['initial'].hide();
            layout.tubes['main3'].hide();
            layout.tubes['tprobeOut'].hide();
            layout.tubes['calibrIn'].hide();
            layout.tubes['calibrOut'].hide();
            layout.tubes['noIn'].hide();
            layout.tubes['coIn'].hide();
            layout.tubes['coOut'].hide();
            layout.tubes['rateinOut'].hide();
        }

        // кнопки
        if (_data.codes['warm'] === 1 || _data.codes['fail'] === -1) {
            layout.buttons['blow'].disable();
            layout.buttons['calibr'].disable();
        } else {
            layout.buttons['blow'].activate();
            layout.buttons['calibr'].activate();
        }

        if (_data.codes['calibr'] === 1) layout.buttons['calibr'].state(true); else layout.buttons['calibr'].state(false);
        if (_data.codes['blow'] === 1) layout.buttons['blow'].state(true); else layout.buttons['blow'].state(false);

        // дым
        var _total = _data['no'].value / _data['no'].max + _data['no2'].value / _data['no2'].max + _data['co'].value / _data['co'].max + _data['co2'].value / _data['co2'].max,
            _color, _rgb;
        if (_total > 4) _total = 4;
        _color = 225 - 225 / 4 * _total;
        _rgb = 'rgb(' + _color + ', ' + _color + ', ' + _color + ')';
        layout.smoke.changeColor(_rgb);
        layout.smoke.show();
    };
}