function Layout(svg) {
    // прототипирование
    Led.prototype.svg = svg;
    Button.prototype.svg = svg;
    Tube.prototype.svg = svg;
    TubeSwitcher.prototype.svg = svg;
    TextValue.prototype.svg = svg;
    TextLabel.prototype.svg = svg;

    // фон
    svg.rect(80, 160, 200, 25).attr({'id': 'wrapper'});
    svg.rect(380, 230, 58, 75).attr({'id': 'wrapper'});

    this.flags = {
        measure: new Led('measure').transform({x: 90, y: 177, size: 0.35}).change(0),
        blow: new Led('blow').transform({x: 135, y: 177, size: 0.35}).change(0),
        calibr: new Led('calibr').transform({x: 180, y: 177, size: 0.35}).change(1),
        fail: new Led('fail').transform({x: 225, y: 177, size: 0.35}).change(0),
        cond: new Led('cond').transform({x: 390, y: 213, size: 0.35}).change(1),
        power: new Led('power').transform({x: 390, y: 237, size: 0.35}).change(0),
        door: new Led('door').transform({x: 390, y: 252, size: 0.35}).change(1),
        fire: new Led('fire').transform({x: 390, y: 267, size: 0.35}).change(0),
        auto: new Led('auto').transform({x: 390, y: 282, size: 0.35}).change(1),
        powerFail: new Led('powerFail').transform({x: 390, y: 297, size: 0.35}).change(0),
        heat: new Led('heat').transform({x: 390, y: 350, size: 0.35}).change(0),
        waterHisto: new Led('heat').transform({x: 207, y: 330, size: 0.35}).change(1),
        water4: new Led('water4').transform({x: 252, y: 330, size: 0.35}).change(1)
    };

    this.tubes = {
        initial: new Tube('initial', {width: 34.8, height: 4}, 'blue').transform({x: 62, y: 157.5, rotate: 90, size: 0.7}).show(),
        nIn: new Tube('nIn', {width: 32, height: 4}, 'blue').transform({x: 66.2, y: 200, size: 0.7}),
        nOut: new Tube('nOut', {width: 20, height: 4}, 'blue').transform({x: 175.5, y: 200, size: 0.7}),
        nRateLeft: new Tube('nRateLeft', {width: 21.5, height: 4}, 'blue').transform({x: 200.5, y: 200, size: 0.7}),
        nRateRight: new Tube('nIn', {width: 24.5, height: 4}, 'blue').transform({x: 249.1, y: 200, size: 0.7}),
        sIn: new Tube('sIn', {width: 32, height: 4}, 'blue').transform({x: 66.2, y: 228, size: 0.7}),
        sOut: new Tube('sOut', {width: 20, height: 4}, 'blue').transform({x: 175.5, y: 228, size: 0.7}),
        sRateLeft: new Tube('sRateLeft', {width: 21.5, height: 4}, 'blue').transform({x: 200.5, y: 228, size: 0.7}),
        sRateRight: new Tube('sRateRight', {width: 24.5, height: 4}, 'blue').transform({x: 249.1, y: 228, size: 0.7}),
        cIn: new Tube('cIn', {width: 32, height: 4}, 'blue').transform({x: 66.2, y: 256, size: 0.7}),
        cOut: new Tube('cOut', {width: 20, height: 4}, 'blue').transform({x: 175.5, y: 256, size: 0.7}),
        cRateLeft: new Tube('cRateLeft', {width: 21.5, height: 4}, 'blue').transform({x: 200.5, y: 256, size: 0.7}),
        cRateRight: new Tube('cRateRight', {width: 24.5, height: 4}, 'blue').transform({x: 249.1, y: 256, size: 0.7}),
        hIn: new Tube('hIn', {width: 32, height: 4}, 'blue').transform({x: 66.2, y: 284, size: 0.7}),
        hOut: new Tube('hOut', {width: 20, height: 4}, 'blue').transform({x: 175.5, y: 284, size: 0.7}),
        hRateLeft: new Tube('hRateLeft', {width: 21.5, height: 4}, 'blue').transform({x: 200.5, y: 284, size: 0.7}),
        hRateRight: new Tube('hRateRight', {width: 24.5, height: 4}, 'blue').transform({x: 249.1, y: 284, size: 0.7}),
        hRateRightH: new Tube('hRateRightH', {width: 81.2, height: 4}, 'blue').transform({x: 232.3, y: 298.5, size: 0.7, rotate: 180}),
        histogramLeft: new Tube('histogramLeft', {width: 32, height: 4}, 'blue').transform({x: 66.2, y: 315, size: 0.7}),
        histogramRight: new Tube('histogramRight', {width: 17.5, height: 4}, 'blue').transform({x: 187.2, y: 330, size: 0.7, rotate: 180})
    };

    /*this.buttons = {
        blow: new Button('blow', 0).translate(530, 90),
        calibr: new Button('calibr', 0).translate(530, 127)
    };*/

    this.switchers = {
        calibr1: new TubeSwitcher('calibr1').transform({x: 195, y: 204.7, size: 0.7}).switch(true).change('blue'),
        calibr2: new TubeSwitcher('calibr2').transform({x: 195, y: 232.7, size: 0.7}).switch(false).change('blue'),
        calibr3: new TubeSwitcher('calibr3').transform({x: 195, y: 260.7, size: 0.7}).switch(false).change('blue'),
        calibr4: new TubeSwitcher('calibr4').transform({x: 195, y: 288.7, size: 0.7}).switch(false).change('blue')
    };

    this.values = {
        tGas: new TextValue('tGas', 18).transform({x: 48, y: 343}),
        no: new TextValue('no', 20).transform({x: 105, y: 200, size: 0.8}),
        no2: new TextValue('no2', 20).transform({x: 105, y: 209, size: 0.8}),
        so: new TextValue('so', 20).transform({x: 105, y: 229, size: 0.8}),
        h2s: new TextValue('h2s', 20).transform({x: 105, y: 238, size: 0.8}),
        co: new TextValue('co', 20).transform({x: 105, y: 258, size: 0.8}),
        co2: new TextValue('co2', 20).transform({x: 105, y: 267, size: 0.8}),
        ch4: new TextValue('ch4', 20).transform({x: 105, y: 287, size: 0.8}),
        sch: new TextValue('sch', 20).transform({x: 105, y: 296, size: 0.8}),
        calibr1q: new TextValue('calibr1q', 20).transform({x: 224, y: 200, size: 0.7}),
        calibr1p: new TextValue('calibr1p', 20).transform({x: 224, y: 207, size: 0.7}),
        calibr2q: new TextValue('calibr2q', 20).transform({x: 224, y: 228, size: 0.7}),
        calibr2p: new TextValue('calibr2p', 20).transform({x: 224, y: 234, size: 0.7}),
        calibr3q: new TextValue('calibr3q', 20).transform({x: 224, y: 253, size: 0.7}),
        calibr3p: new TextValue('calibr3p', 20).transform({x: 224, y: 259, size: 0.7}),
        calibr4q: new TextValue('calibr4q', 20).transform({x: 224, y: 280, size: 0.7}),
        calibr4p: new TextValue('calibr4p', 20).transform({x: 224, y: 286, size: 0.7})
    };

    // названия полей
    //new TextLabel({x: 60, y: 75}, ['Q', 'газ', ':'], 1);
    //new TextLabel({x: 60, y: 65}, ['T', 'газ', ':'], 1);
    //new TextLabel({x: 130, y: 130}, ['T', 'н', ':'], 1);
    //new TextLabel({x: 78, y: 92}, 'ЗОНД', 1);
    //new TextLabel({x: 68, y: 105}, ['T', 'зонд', ':'], 1);

    //new TextLabel({x: 360, y: 20}, 'АСКПВ 1', 1.5);
    new TextLabel({x: 170, y: 168}, 'Режим', 0.9);
    new TextLabel({x: 97, y: 179}, 'Измерение', 0.7);
    new TextLabel({x: 142, y: 179}, 'Продувка', 0.7);
    new TextLabel({x: 187, y: 179}, 'Калибровка', 0.7);
    new TextLabel({x: 232, y: 179}, 'Неисправность', 0.7);

    new TextLabel({x: 397, y: 214}, 'Кондиционер', 0.7);
    new TextLabel({x: 397, y: 239}, 'Вскрытие', 0.7);
    new TextLabel({x: 397, y: 254}, 'Пожар', 0.7);
    new TextLabel({x: 397, y: 269}, 'Отказ сети', 0.7);
    new TextLabel({x: 397, y: 284}, 'Автомат. режим', 0.7);
    new TextLabel({x: 397, y: 299}, 'Питание', 0.7);
    new TextLabel({x: 397, y: 352}, 'Отопление', 0.7);

    new TextLabel({x: 195, y: 320}, 'Калибровка', 0.7);
    new TextLabel({x: 236, y: 320}, 'Неисправность', 0.7);

    //new TextLabel({x: 528, y: 83}, 'Продувка', 1);
    //new TextLabel({x: 507, y: 97}, 'Выкл.', 1);
    //new TextLabel({x: 565, y: 97}, 'Вкл.', 1);
    //new TextLabel({x: 524, y: 120}, 'Калибровка', 1);
    //new TextLabel({x: 507, y: 134}, 'Выкл.', 1);
    //new TextLabel({x: 565, y: 134}, 'Вкл.', 1);

    //new TextLabel({x: 305, y: 115}, 'T:', 1);

    //new TextLabel({x: 365, y: 159}, 'Q:', 1);
    //new TextLabel({x: 365, y: 173}, 'P:', 1);

    //new TextLabel({x: 300, y: 208}, 'NO:', 1);
    //new TextLabel({x: 300, y: 223}, ['NO', '2', ':'], 1);

    //new TextLabel({x: 300, y: 263}, 'CO:', 1);
    //new TextLabel({x: 300, y: 278}, ['CO', '2', ':'], 1);
}