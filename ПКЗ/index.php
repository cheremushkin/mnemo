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
        'so' => array(
            'min' => 70,
            'max' => 170,
            'value' => random(0, 270),
            'measure' => 'ppm'
        ),
        'h2s' => array(
            'min' => 70,
            'max' => 170,
            'value' => random(0, 270),
            'measure' => 'ppm'
        ),
        'ch4' => array(
            'min' => 70,
            'max' => 170,
            'value' => random(0, 270),
            'measure' => 'ppm'
        ),
        'sch' => array(
            'min' => 70,
            'max' => 170,
            'value' => random(0, 270),
            'measure' => 'ppm'
        ),
        'tGas' => array(
            'min' => 235,
            'max' => 265,
            'value' => random(205, 295),
            'measure' => '°C'
        ),
        // -1 - red, 0 - grey, 1 - green
        'codes' => array(
            'measure' => $_SESSION['calibr'] || $_SESSION['blow'] ? 0 : 1,
            'calibr' => $_SESSION['calibr'],
            'blow' => $_SESSION['blow'],
            'histoStatus' => 1,
            'water4' => 1,
            'waterHisto' => 1,
            'noStatus' => 1,
            'coStatus' => 1,
            'chStatus' => 1,
            'soStatus' => 1,
            'cond' => 1,
            'heat' => 0,
            'power' => 1,
            'powerFail' => 0,
            'door' => 0,
            'fire' => 0,
            'auto' => 1,
            'fail' => 0
        )
    );

    exit(json_encode($answer));
?>
