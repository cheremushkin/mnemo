function Logic(layout) {
    var _data, _layout = layout;

    this.state = function(data) {
        var numericDict = 'tGas|no|no2|so|h2s|co|co2|ch4|sch|tIn|uIn|calibr1q|calibr1p|calibr2q|calibr2p|calibr3q|calibr3p|calibr4q|calibr4p|compass|wind|pressure|humidity|t'.split('|'),
            value, measure, min, max, error;

        data.parameters.forEach(function(param) {
            if (!numericDict.includes(param.name)) return;

            value = param.value !== 'null' ? param.value : null;
            max = param.max !== 'null' ? param.max : null;
            min = param.min !== 'null' ? param.min : null;
            measure = param.measure !== 'null' ? param.measure : null;

            // компасс
            if (param.name === 'compass') _layout.elements.compass.rotate(value !== null ? value : 0);

            layout.values[param.name].change(value, measure, value !== null && (max !== null && value > max) || (min !== null && value < min));
        });


        var codeDict = 'measure|warm|fail|cond|power|door|fire|auto|powerFail|heat|hHisto|h4|nStatus|sStatus|cStatus|hStatus|histoStatus'.split('|'),
            codes = {};

        data.codes.forEach(function (code) {codes[code.name] = code.value !== 'null' ? code.value : 0;}); // формирование удобной таблицы кодов
        console.log(codes);
        
        for (name in codes) {
            if (codeDict.includes(name)) _layout.flags[name].change(codes[name], codes[name] === -1);
        }

        // кондиционер
        _layout.elements.cond.rotate(codes['cond']);
        // отопитель
        _layout.elements.heat.work(codes['heat']);
        // водород
        _layout.tubes.histogramRight.show(codes['hHisto']);
        _layout.tubes.hRateRightH1.show(codes['h4']);
        _layout.tubes.hRateRightH2.show(codes['h4']);

        // наличие потока
        if (codes['flow']) {
            _layout.elements.arrows.show(true);
            _layout.tubes.initial.show(true);

            _layout.tubes.histogramLeft.show(codes['histoStatus']);
        } else {
            _layout.elements.arrows.show(false);
            _layout.tubes.initial.show(false);
        }

        if (!codes['fail']) {
            // прогрев
            _layout.flags.warm.change(!codes['nStatus'] || !codes['cStatus'] || !codes['sStatus'] || !codes['hStatus'] ? 1 : 0);
            // калибровки
            _layout.flags.calibr.change(codes['calibr1'] || codes['calibr2'] || codes['calibr3'] || codes['calibr4']);

            if (codes['calibr1']) {
                _layout.tubes.nIn.show(false);
                _layout.tubes.nOut.show(false);
                _layout.tubes.nRateLeft.show(false);
                _layout.tubes.nRateRight1.show(true);
                _layout.tubes.nRateRight2.show(true);

                _layout.switchers.calibr1.switch(false);
                _layout.buttons.calibr1.change(true);
            } else {
                _layout.tubes.nIn.show(codes['nStatus']);
                _layout.tubes.nOut.show(codes['nStatus']);
                _layout.tubes.nRateLeft.show(codes['nStatus']);
                _layout.tubes.nRateRight1.show(false);
                _layout.tubes.nRateRight2.show(false);

                _layout.switchers.calibr1.switch(true);
                _layout.buttons.calibr1.change(false);
            }

            if (codes['calibr2']) {
                _layout.tubes.sIn.show(false);
                _layout.tubes.sOut.show(false);
                _layout.tubes.sRateLeft.show(false);
                _layout.tubes.sRateRight.show(true);

                _layout.switchers.calibr2.switch(false);
                _layout.buttons.calibr2.change(true);
            } else {
                _layout.tubes.sIn.show(codes['sStatus']);
                _layout.tubes.sOut.show(codes['sStatus']);
                _layout.tubes.sRateLeft.show(codes['sStatus']);
                _layout.tubes.sRateRight.show(false);

                _layout.switchers.calibr2.switch(true);
                _layout.buttons.calibr2.change(false);
            }

            if (codes['calibr3']) {
                _layout.tubes.cIn.show(false);
                _layout.tubes.cOut.show(false);
                _layout.tubes.cRateLeft.show(false);
                _layout.tubes.cRateRight.show(true);

                _layout.switchers.calibr3.switch(false);
                _layout.buttons.calibr3.change(true);
            } else {
                _layout.tubes.cIn.show(codes['cStatus']);
                _layout.tubes.cOut.show(codes['cStatus']);
                _layout.tubes.cRateLeft.show(codes['cStatus']);
                _layout.tubes.cRateRight.show(false);

                _layout.switchers.calibr3.switch(true);
                _layout.buttons.calibr3.change(false);
            }

            if (codes['calibr4']) {
                _layout.tubes.hIn.show(false);
                _layout.tubes.hOut.show(false);
                _layout.tubes.hRateLeft.show(false);
                _layout.tubes.hRateRight1.show(true);
                _layout.tubes.hRateRight2.show(true);

                _layout.switchers.calibr4.switch(false);
                _layout.buttons.calibr4.change(true);
            } else {
                _layout.tubes.hIn.show(codes['hStatus']);
                _layout.tubes.hOut.show(codes['hStatus']);
                _layout.tubes.hRateLeft.show(codes['hStatus']);
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
        };
    };
}