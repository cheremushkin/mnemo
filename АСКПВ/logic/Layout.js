function Layout(svg) {
    // прототипирование
    Led.prototype.svg = svg;
    Button.prototype.svg = svg;
    Tube.prototype.svg = svg;
    TubeSwitcher.prototype.svg = svg;
    TextValue.prototype.svg = svg;
    TextLabel.prototype.svg = svg;

    // остальные элементы - фон
    svg.rect(60, 82, 55, 50).attr({'id': 'wrapper'});
    svg.rect(176, 5, 420, 290).attr({'id': 'wrapper'});
    svg.rect(505, 144, 80, 143).attr({'id': 'wrapper'});
    svg.rect(185, 30, 325, 40).attr({'id': 'wrapper'});

    this.flags = {
        measure: new Led('measure', {x: 149, y: 21}, 1),
        warm: new Led('warm', {x: 213, y: 21}, 1),
        calibr: new Led('calibr', {x: 268, y: 21}, 1),
        blow: new Led('blow', {x: 333, y: 21}, 1),
        cond: new Led('cond', {x: 475, y: 128}, 0.75),
        heat: new Led('heat', {x: 475, y: 146}, 0.75),
        power: new Led('devicon', {x: 475, y: 163}, 0.75),
        door: new Led('door', {x: 475, y: 180}, 0.75),
        fire: new Led('fire', {x: 475, y: 198}, 0.75),
        auto: new Led('auto', {x: 475, y: 216}, 0.75),
        powerfail: new Led('powerfail', {x: 475, y: 234}, 0.75),
        conden: new Led('conden', {x: 475, y: 250}, 0.75),
        probestatus: new Led('probestatus', {x: 366, y: 92}, 0.5),
        nostatus: new Led('nostatus', {x: 366, y: 190}, 0.5),
        costatus: new Led('costatus', {x: 366, y: 245}, 0.5),
        fail: new Led('error', {x: 389, y: 21}, 1)
    };
    this.buttons = {
        blow: new Button('blow', 0).translate(530, 90),
        calibr: new Button('calibr', 0).translate(530, 127)
    };
    this.tubes = {
        initial: new Tube('initial', {width: 29.5, height: 4}, 'red').transform({x: 48, y: 113.2}),
        blow: new Tube('blow', {width: 30, height: 4}, 'blue').transform({x: 85, y: 155.4, rotate: -90}),
        main1: new Tube('main1', {width: 89, height: 4}, 'red').transform({x: 96.2, y: 113.2}),
        main2: new Tube('main2', {width: 14, height: 4}, 'red').transform({x: 204.5, y: 113.2}),
        main3: new Tube('main3', {width: 42, height: 4}, 'red').transform({x: 238, y: 113.2}),
        rateexIn: new Tube('rateexIn', {width: 79.8, height: 4}, 'red').transform({x: 230, y: 123.6, rotate: 90}),
        rateexOut: new Tube('rateexOut', {width: 25, height: 4}, 'red').transform({x: 183, y: 215, mirror: true}),
        tprobeOut: new Tube('tprobeOut', {width: 18.2, height: 4}, 'blue').transform({x: 304, y: 133.8, rotate: 90}),
        noIn: new Tube('noIn', {width: 22.1, height: 4}, 'blue').transform({x: 304, y: 170.9, rotate: 90}),
        coIn: new Tube('coIn', {width: 14.9, height: 4}, 'blue').transform({x: 304, y: 233, rotate: 90}),
        coOut: new Tube('coOut', {width: 44.5, height: 4}, 'blue').transform({x: 279.8, y: 270, mirror: true}),
        rateinOut: new Tube('rateinOut', {width: 25, height: 4}, 'blue').transform({x: 183, y: 270, mirror: true}),
        calibrIn: new Tube('calibrIn', {width: 44.5, height: 4}, 'blue').transform({x: 356.5, y: 159.5, mirror: true}),
        calibrOut: new Tube('calibrOut', {width: 16.5, height: 4}, 'blue').transform({x: 437.2, y: 159.5, mirror: true})
    };
    this.switchers = {
        blow: new TubeSwitcher('blow', {x: 87, y: 109.7}, false, 'red', false),
        calibr: new TubeSwitcher('calibr', {x: 296.5, y: 161.5}, {rotate: -90, mirror: true}, 'blue', false)
    };
    this.values = {
        tgas: new TextValue('TGAS', {x: 72, y: 65, space: 18}, 1),
        qgas: new TextValue('QGAS', {x: 71, y: 75, space: 28}, 1),
        tzond: new TextValue('TZOND', {x: 83, y: 105, space: 12}, 1),
        tmagis: new TextValue('TMAGIS', {x: 139, y: 130, space: 12}, 1),
        tprobe: new TextValue('TPROBE', {x: 312, y: 115, space: 12}, 1),
        qcalibr: new TextValue('QCALIBR', {x: 375, y: 159, space: 18}, 1),
        pcalibr: new TextValue('PCALIBR', {x: 375, y: 173, space: 18}, 1),
        no: new TextValue('NO', {x: 310, y: 208, space: 20}, 1),
        no2: new TextValue('NO2', {x: 310, y: 223, space: 20}, 1),
        co: new TextValue('CO', {x: 310, y: 263, space: 20}, 1),
        co2: new TextValue('CO2', {x: 310, y: 278, space: 20}, 1),
        ratein: new TextValue('RATEIN', {x: 187, y: 274, space: 20}, 1),
        rateex: new TextValue('RATEEX', {x: 187, y: 218, space: 20}, 1),
        tin: new TextValue('TIN', {x: 540, y: 41, space: 20}, 1),
        uin: new TextValue('UIN', {x: 540, y: 60, space: 25}, 1)
    };
    this.smoke = new Smoke({x: 30, y: 75}, 0.2);

    // названия полей
    {new TextLabel({x: 60, y: 75}, ['Q', 'газ', ':'], 1);
    new TextLabel({x: 60, y: 65}, ['T', 'газ', ':'], 1);
    new TextLabel({x: 130, y: 130}, ['T', 'н', ':'], 1);
    new TextLabel({x: 78, y: 92}, 'ЗОНД', 1);
    new TextLabel({x: 68, y: 105}, ['T', 'зонд', ':'], 1);

    new TextLabel({x: 360, y: 20}, 'АСКПВ 1', 1.5);
    new TextLabel({x: 340, y: 43}, 'Режим', 1.2);
    new TextLabel({x: 211, y: 58}, 'Измерение', 1);
    new TextLabel({x: 275, y: 58}, ['Прогрев'], 1);
    new TextLabel({x: 330, y: 58}, ['Калибровка'], 1);
    new TextLabel({x: 395, y: 58}, ['Продувка'], 1);
    new TextLabel({x: 451, y: 58}, ['Неисправность'], 1);

    new TextLabel({x: 522, y: 156}, 'Кондиционер', 0.8);
    new TextLabel({x: 522, y: 174}, 'Отопитель', 0.8);
    new TextLabel({x: 522, y: 191}, 'Питание приборов', 0.8);
    new TextLabel({x: 522, y: 208}, 'Вскрытие', 0.8);
    new TextLabel({x: 522, y: 226}, 'Пожар', 0.8);
    new TextLabel({x: 522, y: 244}, 'Автомат. режим', 0.8);
    new TextLabel({x: 522, y: 262}, 'Отказ сети', 0.8);
    new TextLabel({x: 522, y: 279}, 'Конденсат', 0.8);

    new TextLabel({x: 528, y: 83}, 'Продувка', 1);
    new TextLabel({x: 507, y: 97}, 'Выкл.', 1);
    new TextLabel({x: 565, y: 97}, 'Вкл.', 1);
    new TextLabel({x: 524, y: 120}, 'Калибровка', 1);
    new TextLabel({x: 507, y: 134}, 'Выкл.', 1);
    new TextLabel({x: 565, y: 134}, 'Вкл.', 1);

    new TextLabel({x: 305, y: 115}, 'T:', 1);

    new TextLabel({x: 365, y: 159}, 'Q:', 1);
    new TextLabel({x: 365, y: 173}, 'P:', 1);

    new TextLabel({x: 300, y: 208}, 'NO:', 1);
    new TextLabel({x: 300, y: 223}, ['NO', '2', ':'], 1);

    new TextLabel({x: 300, y: 263}, 'CO:', 1);
    new TextLabel({x: 300, y: 278}, ['CO', '2', ':'], 1);


    // остальные элементы - нить
    svg.path('m 119,126.2 c 0,0 -1.31275,-15.92616 5.87027,-15.49978 2.14202,0.12714 3.49637,1.08902 4.10648,2.33524 m -0.42868,4.14395 c -0.34103,0.48819 -0.78881,0.93349 -1.34079,1.30312 -0.67728,0.45358 -2.78892,0.50659 -3.34461,0 -3.05909,-2.7886 1.61804,-8.27176 7.23684,-7.78231 2.05752,0.17925 3.46353,1.09372 4.19166,2.27291 m -0.15214,4.31228 c -0.31294,0.44506 -0.72659,0.85254 -1.24237,1.19712 -0.67824,0.45315 -2.78979,0.50692 -3.34465,0 -3.05717,-2.79293 1.1547,-8.27927 6.77682,-7.78231 2.01155,0.17781 3.47149,1.05781 4.29884,2.20008 m 0.16625,4.39697 c -0.29464,0.44054 -0.69581,0.84385 -1.20805,1.18526 -0.67913,0.45268 -2.79065,0.50723 -3.34465,0 -3.05528,-2.79718 0.69139,-8.28678 6.3168,-7.78231 2.03422,0.18242 3.57722,1.08239 4.48683,2.24462 m 0.39236,4.38387 c -0.27604,0.42837 -0.66099,0.82063 -1.16205,1.15382 -0.68003,0.45219 -2.79148,0.50755 -3.34465,0 -3.05341,-2.80152 0.22807,-8.29428 5.85677,-7.78231 2.06315,0.18764 3.69625,1.11284 4.68965,2.30027 m 0.64262,4.29821 c -0.25995,0.44018 -0.64133,0.84301 -1.15511,1.18383 -0.68094,0.45175 -2.79233,0.50785 -3.34462,0 -3.05148,-2.80582 -0.23526,-8.3018 5.39672,-7.78231 2.05857,0.18989 3.76406,1.11343 4.84713,2.29829 m 0.93914,4.26297 c -0.24186,0.45478 -0.61975,0.87075 -1.14908,1.22105 -0.68185,0.45126 -2.79317,0.50817 -3.34463,0 -3.04962,-2.81013 -0.69857,-8.30933 4.93664,-7.78231 2.0328,0.1901 3.79462,1.09501 4.96723,2.25963 m 1.21226,4.37807 c -0.2262,0.42506 -0.58166,0.81412 -1.0822,1.14461 -0.68279,0.45081 -2.79402,0.50846 -3.34465,0 -3.04772,-2.81446 -1.14439,-8.37605 4.47663,-7.78231 6.71759,0.70957 3.16745,15.49978 3.16745,15.49978').attr({
        'id': 'magis'
    });

    // остальные элементы -  кружок
    svg.g(svg.circle(0, 0, 10).attr({'id': 'circle-circle'}), svg.path('m 10,0 l -5,-3 v 6 z').attr({'id': 'circe-triangle'})).attr({
        'id': 'circle',
        'transform': 'translate(195, 115)'
    });

    // остальные элементы -  развилка
    svg.path('m 0,0 h 20 v 6 h -7 v 6 h -6 v -6 h -7 z').attr({
        'id': 'fork',
        'transform': 'translate(218, 112.2)'
    })}
}