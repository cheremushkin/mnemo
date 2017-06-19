function Logic(layout) {
    var _data, _layout = layout;

    this.state = function(data) {
        _data = data;

        var numericDict = 'tGas|no|no2|so|h2s|co|co2|ch4|sch|tIn|uIn|calibr1q|calibr1p|calibr2q|calibr2p|calibr3q|calibr3p|calibr4q|calibr4p|compass|wind|pressure|humidity|t'.split('|'),
            value, measure, min, max, error;
        for (parameter in _data) {
            if (!numericDict.includes(parameter)) continue;

            value = _data[parameter].value ? _data[parameter].value : '-';
            max = _data[parameter].max ? _data[parameter].max : null;
            min = _data[parameter].min ? _data[parameter].min : null;
            error = false;
            measure = _data[parameter].measure.split('|');

            // мигать или не мигать
            if ((max && _data[parameter].value > max) || (min && _data[parameter].value < min)) error = true;

            // компасс
            if (parameter === 'compass' && !error) _layout.elements.compass.rotate(_data['compass'].value);

            layout.values[parameter].change(value, measure, error);
        }

        var ledDict = 'measure|warm|fail|cond|power|door|fire|auto|powerFail|heat|hHisto|h4|nStatus|sStatus|cStatus|hStatus|histoStatus'.split('|');
        for (parameter in _data.codes) {
            if (!ledDict.includes(parameter)) continue;

            _layout.flags[parameter].change(_data.codes[parameter], _data.codes[parameter] === -1 ? true : false);
        }

        // кондиционер
        _layout.elements.cond.rotate(!!_data.codes['cond']);
        // отопитель
        _layout.elements.heat.work(!!_data.codes['heat']);
        // водород
        _layout.tubes.histogramRight.show(!!_data.codes['hHisto']);
        _layout.tubes.hRateRightH1.show(!!_data.codes['h4']);
        _layout.tubes.hRateRightH2.show(!!_data.codes['h4']);

        // наличие потока
        if (_data.codes['flow']) {
            _layout.elements.arrows.show(true);
            _layout.tubes.initial.show(true);

            _layout.tubes.histogramLeft.show(!!_data.codes['histoStatus']);
        } else {
            _layout.elements.arrows.show(false);
            _layout.tubes.initial.show(false);
        }

        if (!_data.codes['fail']) {
            // прогрев
            _layout.flags.warm.change(_data.codes['nStatus'] === 0 || _data.codes['cStatus'] === 0 || _data.codes['sStatus'] === 0 || _data.codes['hStatus'] === 0 ? 1 : 0);
            // калибровки
            _layout.flags.calibr.change(_data.codes['calibr1'] || _data.codes['calibr2'] || _data.codes['calibr3'] || _data.codes['calibr4']);

            if (_data.codes['calibr1']) {
                _layout.tubes.nIn.show(false);
                _layout.tubes.nOut.show(false);
                _layout.tubes.nRateLeft.show(false);
                _layout.tubes.nRateRight1.show(true);
                _layout.tubes.nRateRight2.show(true);

                _layout.switchers.calibr1.switch(false);
                _layout.buttons.calibr1.change(true);
            } else {
                _layout.tubes.nIn.show(_data.codes['nStatus'] === 1 ? 1 : 0);
                _layout.tubes.nOut.show(_data.codes['nStatus'] === 1 ? 1 : 0);
                _layout.tubes.nRateLeft.show(_data.codes['nStatus'] === 1 ? 1 : 0);
                _layout.tubes.nRateRight1.show(false);
                _layout.tubes.nRateRight2.show(false);

                _layout.switchers.calibr1.switch(true);
                _layout.buttons.calibr1.change(false);
            }

            if (_data.codes['calibr2']) {
                _layout.tubes.sIn.show(false);
                _layout.tubes.sOut.show(false);
                _layout.tubes.sRateLeft.show(false);
                _layout.tubes.sRateRight.show(true);

                _layout.switchers.calibr2.switch(false);
                _layout.buttons.calibr2.change(true);
            } else {
                _layout.tubes.sIn.show(_data.codes['sStatus'] === 1 ? 1 : 0);
                _layout.tubes.sOut.show(_data.codes['sStatus'] === 1 ? 1 : 0);
                _layout.tubes.sRateLeft.show(_data.codes['sStatus'] === 1 ? 1 : 0);
                _layout.tubes.sRateRight.show(false);

                _layout.switchers.calibr2.switch(true);
                _layout.buttons.calibr2.change(false);
            }

            if (_data.codes['calibr3']) {
                _layout.tubes.cIn.show(false);
                _layout.tubes.cOut.show(false);
                _layout.tubes.cRateLeft.show(false);
                _layout.tubes.cRateRight.show(true);

                _layout.switchers.calibr3.switch(false);
                _layout.buttons.calibr3.change(true);
            } else {
                _layout.tubes.cIn.show(_data.codes['cStatus'] === 1 ? 1 : 0);
                _layout.tubes.cOut.show(_data.codes['cStatus'] === 1 ? 1 : 0);
                _layout.tubes.cRateLeft.show(_data.codes['cStatus'] === 1 ? 1 : 0);
                _layout.tubes.cRateRight.show(false);

                _layout.switchers.calibr3.switch(true);
                _layout.buttons.calibr3.change(false);
            }

            if (_data.codes['calibr4']) {
                _layout.tubes.hIn.show(false);
                _layout.tubes.hOut.show(false);
                _layout.tubes.hRateLeft.show(false);
                _layout.tubes.hRateRight1.show(true);
                _layout.tubes.hRateRight2.show(true);

                _layout.switchers.calibr4.switch(false);
                _layout.buttons.calibr4.change(true);
            } else {
                _layout.tubes.hIn.show(_data.codes['hStatus'] === 1 ? 1 : 0);
                _layout.tubes.hOut.show(_data.codes['hStatus'] === 1 ? 1 : 0);
                _layout.tubes.hRateLeft.show(_data.codes['hStatus'] === 1 ? 1 : 0);
                _layout.tubes.hRateRight1.show(false);
                _layout.tubes.hRateRight2.show(false);

                _layout.switchers.calibr4.switch(true);
                _layout.buttons.calibr4.change(false);
            }
        } else {
            _layout.flags.warm.change(0);
            _layout.flags.calibr.change(0);

            _layout.tubes.nIn.show(false);
            _layout.tubes.nOut.show(false);
            _layout.tubes.nRateLeft.show(false);
            _layout.tubes.nRateRight1.show(false);
            _layout.tubes.nRateRight2.show(false);
            _layout.tubes.sIn.show(false);
            _layout.tubes.sOut.show(false);
            _layout.tubes.sRateLeft.show(false);
            _layout.tubes.sRateRight.show(false);
            _layout.tubes.cIn.show(false);
            _layout.tubes.cOut.show(false);
            _layout.tubes.cRateLeft.show(false);
            _layout.tubes.cRateRight.show(false);
            _layout.tubes.hIn.show(false);
            _layout.tubes.hOut.show(false);
            _layout.tubes.hRateLeft.show(false);
            _layout.tubes.hRateRight1.show(false);
            _layout.tubes.hRateRight2.show(false);

            _layout.switchers.calibr1.switch(false);
            _layout.switchers.calibr2.switch(false);
            _layout.switchers.calibr3.switch(false);
            _layout.switchers.calibr4.switch(false);
        }
    };
}