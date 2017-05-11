<?php
	header('Access-Control-Allow-Origin: *');
	session_start();

    function random($min, $max, $dev = 1) {
        return round(rand($min, $max))/$dev;
    };

	if (!isset($_SESSION['calibr'])) $_SESSION['calibr'] = 0;
    if (!isset($_SESSION['blow'])) $_SESSION['blow'] = 0;

    if (isset($_GET['calibr'])) $_SESSION['calibr'] = intval($_GET['calibr']);
    if (isset($_GET['blow'])) $_SESSION['blow'] = intval($_GET['blow']);


    $answer = array(
        'no' => array(
            'min' => 20,
            'max' => 40,
            'value' => random(5, 55),
            'measure' => 'ppm'
        ),
        'no2' => array(
            'min' => 10,
            'max' => 20,
            'value' => random(0, 30),
            'measure' => 'ppm'
        ),
        'co' => array(
            'min' => 250,
            'max' => 350,
            'value' => random(150, 450),
            'measure' => 'ppm'
        ),
        'co2' => array(
            'min' => 70,
            'max' => 170,
            'value' => random(0, 270),
            'measure' => 'ppm'
        ),
        'qcalibr' => array(
            'value' => 1.5,
            'measure' => 'л/мин'
        ),
        'pcalibr' => array(
            'value' => 70,
            'measure' => 'атм'
        ),
        'tgas' => array(
            'min' => 235,
            'max' => 265,
            'value' => random(205, 295),
            'measure' => '°C'
        ),
        'qgas' => array(
            'min' => 19850,
            'max' => 20150,
            'value' => random(19700, 20300),
            'measure' => 'нм^3/час'
        ),
        'tzond' => array(
            'min' => 62,
            'max' => 68,
            'value' => random(59, 71),
            'measure' => '°C'
        ),
        'tmagis' => array(
            'min' => 62,
            'max' => 68,
            'value' => random(59, 71),
            'measure' => '°C'
        ),
        'tprobe' => array(
            'value' => 8,
            'measure' => '°C',
        ),
        'rateex' => array(
            'min' => 1.8,
            'max' => 2.2,
            'value' => random(14, 26, 10),
            'measure' => 'л/мин'
        ),
        'ratein' => array(
            'min' => 0.8,
            'max' => 1.2,
            'value' => random(4, 16, 10),
            'measure' => 'л/мин'
        ),
        'tin' => array(
            'min' => 17,
            'max' => 23,
            'value' => random(11, 29),
            'measure' => '°C'
        ),
        'uin' => array(
            'min' => 210,
            'max' => 230,
            'value' => random(190, 250),
            'measure' => 'В'
        ),
        // -1 - red, 0 - grey, 1 - green
        'codes' => array(
            'measure' => $_SESSION['calibr'] || $_SESSION['blow'] ? 0 : 1,
            'warm' => 0,
            'calibr' => $_SESSION['calibr'],
            'blow' => $_SESSION['blow'],
            'probestatus' => 1,
            'nostatus' => 1,
            'costatus' => 1,
            'cond' => 1,
            'heat' => 0,
            'power' => 1,
            'powerfail' => 0,
            'door' => 0,
            'fire' => 0,
            'auto' => 1,
            'conden' => 1,
            'fail' => 0
        )
    );

    exit(json_encode($answer));
?>
