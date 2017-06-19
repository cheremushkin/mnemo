function Layout(svg) {
    // прототипирование
    Led.prototype =
    Button.prototype =
    Tube.prototype =
    TubeSwitcher.prototype =
    TubeCorner.prototype =
    TextValue.prototype =
    TextLabel.prototype =
    Heat.prototype =
    Conditioner.prototype =
    Arrows.prototype =
    Compass.prototype = {
        svg: svg,
        transform: function(transformation) {
            var transform = (transformation.rotate !== 0) ? 'rotate(' + transformation.rotate + ', ' + transformation.x + ', ' + transformation.y + ') ' : '';
            transform += 'translate(' + transformation.x + ', ' + transformation.y + ')';
            transformation.mirror && (transform += ' scale(-1, 1)');
            transformation.size && (transform += ' scale(' + transformation.size + ')');
            this.wrapper.attr({
                transform: transform
            });

            return this;
        }
    };

    // фон
    svg.rect(80, 160, 200, 25).attr({'id': 'wrapper'});
    svg.rect(380, 230, 58, 75).attr({'id': 'wrapper'});

    this.flags = {
        measure: new Led('measure').transform({x: 90, y: 177, size: 0.35}),
        warm: new Led('warm').transform({x: 135, y: 177, size: 0.35}),
        calibr: new Led('calibr').transform({x: 180, y: 177, size: 0.35}),
        fail: new Led('fail').transform({x: 225, y: 177, size: 0.35}),
        cond: new Led('cond').transform({x: 390, y: 213, size: 0.35}),
        power: new Led('power').transform({x: 390, y: 237, size: 0.35}),
        door: new Led('door').transform({x: 390, y: 252, size: 0.35}),
        fire: new Led('fire').transform({x: 390, y: 267, size: 0.35}),
        auto: new Led('auto').transform({x: 390, y: 282, size: 0.35}),
        powerFail: new Led('powerFail').transform({x: 390, y: 297, size: 0.35}),
        heat: new Led('heat').transform({x: 390, y: 350, size: 0.35}),
        hHisto: new Led('hHisto').transform({x: 213, y: 360, size: 0.35}),
        h4: new Led('h4').transform({x: 264, y: 360, size: 0.35}),
        nStatus: new Led('nStatus').transform({x: 160, y: 203, size: 0.2}),
        sStatus: new Led('sStatus').transform({x: 160, y: 235, size: 0.2}),
        cStatus: new Led('cStatus').transform({x: 160, y: 266, size: 0.2}),
        hStatus: new Led('hStatus').transform({x: 160, y: 296, size: 0.2}),
        histoStatus: new Led('histoStatus').transform({x: 160, y: 333, size: 0.2})
    };

    this.tubes = {
        initial: new Tube('initial', 24.5, 'blue').transform({x: 62, y: 157.3, rotate: 90, size: 2.5}),
        nIn: new Tube('nIn', 22.3, 'blue').transform({x: 66.2, y: 200, size: 2.5}),
        nOut: new Tube('nOut', 14.2, 'blue').transform({x: 175.4, y: 200, size: 2.5}),
        nRateLeft: new Tube('nRateLeft', 15, 'blue').transform({x: 200.5, y: 200, size: 2.5}),
        nRateRight1: new Tube('nRateRight1', 21, 'blue').transform({x: 270.1, y: 200, size: 2.5, mirror: true}),
        nRateRightCorner: new TubeCorner('nRateRightCorner', 'blue').transform({x: 275, y: 200, size: 2.5, rotate: 90}),
        nRateRight2: new Tube('nRateRight2', 16.5, 'blue').transform({x: 272.5, y: 221.4, size: 2.5, rotate: -90}),
        sIn: new Tube('sIn', 22.3, 'blue').transform({x: 66.2, y: 228, size: 2.5}),
        sOut: new Tube('sOut', 14.2, 'blue').transform({x: 175.4, y: 228, size: 2.5}),
        sRateLeft: new Tube('sRateLeft', 15, 'blue').transform({x: 200.5, y: 228, size: 2.5}),
        sRateRight: new Tube('sRateRight', 12.5, 'blue').transform({x: 261.6, y: 228, size: 2.5, mirror: true}),
        cIn: new Tube('cIn', 22.3, 'blue').transform({x: 66.2, y: 260, size: 2.5}),
        cOut: new Tube('cOut', 14.2, 'blue').transform({x: 175.4, y: 260, size: 2.5}),
        cRateLeft: new Tube('cRateLeft', 15, 'blue').transform({x: 200.5, y: 260, size: 2.5}),
        cRateRight: new Tube('cRateRight', 12.5, 'blue').transform({x: 261.6, y: 260, size: 2.5, mirror: true}),
        hIn: new Tube('hIn', 22.3, 'blue').transform({x: 66.2, y: 295, size: 2.5}),
        hOut: new Tube('hOut', 14.2, 'blue').transform({x: 175.4, y: 290, size: 2.5}),
        hRateLeft: new Tube('hRateLeft', 15, 'blue').transform({x: 200.5, y: 290, size: 2.5}),
        hRateRight1: new Tube('hRateRight1', 21, 'blue').transform({x: 270.1, y: 290, size: 2.5, mirror: true}),
        hRateRightCorner: new TubeCorner('hRateRightCorner', 'blue').transform({x: 275, y: 292.5, size: 2.5, rotate: 180}),
        hRateRight2: new Tube('hRateRight2', 16.4, 'blue').transform({x: 275, y: 271.1, size: 2.5, rotate: 90}),
        hRateRightH1: new Tube('hRateRightH1', 85, 'blue').transform({x: 260.4, y: 306, size: 2.5, rotate: 180}),
        hRateRightHCorner: new TubeCorner('hRateRightHCorner', 'blue').transform({x: 265.3, y: 303.5, size: 2.5, rotate: 90}),
        hRateRightH2: new Tube('hRateRightH2', 26.3, 'blue').transform({x: 262.8, y: 334.7, size: 2.5, rotate: -90}),
        histogramLeft: new Tube('histogramLeft', 23, 'blue').transform({x: 66.2, y: 317, size: 2.5}),
        histogramRight: new Tube('histogramRight1', 17.9, 'blue').transform({x: 192.8, y: 341, size: 2.5, rotate: 180})
    };

    /* BUTTONS */
    this.buttons = {
        calibr1: new Button('calibr1').transform({x: 317, y: 222, size: 0.8}),
        calibr2: new Button('calibr2').transform({x: 317, y: 242, size: 0.8}),
        calibr3: new Button('calibr3').transform({x: 317, y: 262, size: 0.8}),
        calibr4: new Button('calibr4').transform({x: 317, y: 282, size: 0.8})
    };

    /* SWITCHERS */
    this.switchers = {
        calibr1: new TubeSwitcher('calibr1', 'blue').transform({x: 195, y: 204.7, size: 0.7}),
        calibr2: new TubeSwitcher('calibr2', 'blue').transform({x: 195, y: 232.7, size: 0.7}),
        calibr3: new TubeSwitcher('calibr3', 'blue').transform({x: 195, y: 264.7, size: 0.7}),
        calibr4: new TubeSwitcher('calibr4', 'blue').transform({x: 195, y: 294.7, size: 0.7})
    };

    /* VALUES */
    this.values = {
        tGas: new TextValue('tGas', 18).transform({x: 48, y: 343}),
        no: new TextValue('no', 20).transform({x: 107, y: 200, size: 0.7}),
        no2: new TextValue('no2', 20).transform({x: 107, y: 209, size: 0.7}),
        so: new TextValue('so', 20).transform({x: 107, y: 232, size: 0.7}),
        h2s: new TextValue('h2s', 20).transform({x: 107, y: 241, size: 0.7}),
        co: new TextValue('co', 20).transform({x: 107, y: 264, size: 0.7}),
        co2: new TextValue('co2', 20).transform({x: 107, y: 272, size: 0.7}),
        ch4: new TextValue('ch4', 20).transform({x: 107, y: 295, size: 0.7}),
        sch: new TextValue('sch', 20).transform({x: 107, y: 303, size: 0.7}),
        tIn: new TextValue('tIn', 20).transform({x: 312, y: 166, size: 0.7}),
        uIn: new TextValue('uIn', 20).transform({x: 312, y: 181, size: 0.7}),
        calibr1q: new TextValue('calibr1q', 15).transform({x: 225, y: 202, size: 0.6}),
        calibr1p: new TextValue('calibr1p', 15).transform({x: 225, y: 208, size: 0.6}),
        calibr2q: new TextValue('calibr2q', 15).transform({x: 225, y: 231, size: 0.6}),
        calibr2p: new TextValue('calibr2p', 15).transform({x: 225, y: 237, size: 0.6}),
        calibr3q: new TextValue('calibr3q', 15).transform({x: 225, y: 259, size: 0.6}),
        calibr3p: new TextValue('calibr3p', 15).transform({x: 225, y: 265, size: 0.6}),
        calibr4q: new TextValue('calibr4q', 15).transform({x: 225, y: 286, size: 0.6}),
        calibr4p: new TextValue('calibr4p', 15).transform({x: 225, y: 292, size: 0.6}),
        compass: new TextValue('compass', 12).transform({x: 303, y: 101, size: 0.8}),
        t: new TextValue('t', 12).transform({x: 320, y: 40, size: 1}),
        humidity: new TextValue('humidity', 12).transform({x: 400, y: 90, size: 0.8}),
        pressure: new TextValue('pressure', 20).transform({x: 397, y: 100, size: 0.8}),
        wind: new TextValue('wind', 12).transform({x: 413, y: 110, size: 0.8})
    };

    /* LABELS */
    {new TextLabel({x: 170, y: 168}, 'Режим', 0.9);
    new TextLabel({x: 97, y: 179}, 'Измерение', 0.7);
    new TextLabel({x: 142, y: 179}, 'Прогрев', 0.7);
    new TextLabel({x: 187, y: 179}, 'Калибровка', 0.7);
    new TextLabel({x: 232, y: 179}, 'Неисправность', 0.7);

    new TextLabel({x: 397, y: 214}, 'Кондиционер', 0.7);
    new TextLabel({x: 397, y: 239}, 'Вскрытие', 0.7);
    new TextLabel({x: 397, y: 254}, 'Пожар', 0.7);
    new TextLabel({x: 397, y: 269}, 'Отказ сети', 0.7);
    new TextLabel({x: 397, y: 284}, 'Автомат. режим', 0.7);
    new TextLabel({x: 397, y: 299}, 'Питание', 0.7);
    new TextLabel({x: 397, y: 352}, 'Отопление', 0.7);

    new TextLabel({x: 204, y: 350}, 'Водород', 0.7);
    new TextLabel({x: 255, y: 350}, 'Водород', 0.7);

    new TextLabel({x: 100, y: 200}, 'NO:', 0.7);
    new TextLabel({x: 100, y: 209}, 'NO2:', 0.7);
    new TextLabel({x: 100, y: 232}, 'SO:', 0.7);
    new TextLabel({x: 100, y: 241}, 'H2S:', 0.7);
    new TextLabel({x: 100, y: 264}, 'CO:', 0.7);
    new TextLabel({x: 100, y: 272}, 'CO2:', 0.7);
    new TextLabel({x: 100, y: 295}, 'CH4:', 0.7);
    new TextLabel({x: 100, y: 303}, 'ScH:', 0.6);

    new TextLabel({x: 220, y: 202}, 'Q:', 0.6);
    new TextLabel({x: 220, y: 208}, 'P:', 0.6);
    new TextLabel({x: 220, y: 231}, 'Q:', 0.6);
    new TextLabel({x: 220, y: 237}, 'P:', 0.6);
    new TextLabel({x: 220, y: 259}, 'Q:', 0.6);
    new TextLabel({x: 220, y: 265}, 'P:', 0.6);
    new TextLabel({x: 220, y: 286}, 'Q:', 0.6);
    new TextLabel({x: 220, y: 292}, 'P:', 0.6);

    new TextLabel({x: 307, y: 166}, 'T:', 0.8);
    new TextLabel({x: 307, y: 181}, 'U:', 0.8);

    new TextLabel({x: 370, y: 90}, 'Влажность:', 0.8);
    new TextLabel({x: 370, y: 100}, 'Давление:', 0.8);
    new TextLabel({x: 370, y: 110}, 'Скорость ветра:', 0.8);

    new TextLabel({x: 315, y: 210}, 'Калибровка', 0.8);
    new TextLabel({x: 327, y: 220}, 'К1', 0.6);
    new TextLabel({x: 327, y: 240}, 'К2', 0.6);
    new TextLabel({x: 327, y: 260}, 'К3', 0.6);
    new TextLabel({x: 327, y: 280}, 'К4', 0.6);
    new TextLabel({x: 305, y: 227.5}, 'Выкл', 0.6);
    new TextLabel({x: 343, y: 227.5}, 'Вкл', 0.6);
    new TextLabel({x: 305, y: 247.5}, 'Выкл', 0.6);
    new TextLabel({x: 343, y: 247.5}, 'Вкл', 0.6);
    new TextLabel({x: 305, y: 267.5}, 'Выкл', 0.6);
    new TextLabel({x: 343, y: 267.5}, 'Вкл', 0.6);
    new TextLabel({x: 305, y: 287.5}, 'Выкл', 0.6);
    new TextLabel({x: 343, y: 287.5}, 'Вкл', 0.6);}

    /* ELEMENTS */
    this.elements = {
        cond: new Conditioner().transform({x: 408.8, y: 186.3, size: 1.1}).rotate(true),
        heat: new Heat().transform({x: 385, y: 325}),
        arrows: new Arrows().transform({x: 89, y: 116}),
        compass: new Compass().transform({x: 308.5, y: 81, size: 4})
    };
}