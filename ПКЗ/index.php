<?php
	header('Access-Control-Allow-Origin: *');
	session_start();

    function random($min, $max, $dev = 1) {
        return round(rand($min, $max))/$dev;
    };

	if (!isset($_SESSION['init'])) {
		echo 'hey';
		$_SESSION['init'] = true;
		$_SESSION['calibr1'] = 0;
		$_SESSION['calibr2'] = 0;
		$_SESSION['calibr3'] = 0;
		$_SESSION['calibr4'] = 0;
	}

    if (isset($_GET['calibr1'])) $_SESSION['calibr1'] = intval($_GET['calibr1']);
    if (isset($_GET['calibr2'])) $_SESSION['calibr2'] = intval($_GET['calibr2']);
    if (isset($_GET['calibr3'])) $_SESSION['calibr3'] = intval($_GET['calibr3']);
    if (isset($_GET['calibr4'])) $_SESSION['calibr4'] = intval($_GET['calibr4']);

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
        'tIn' => array(
            'min' => 100,
            'max' => 150,
            'value' => random(80, 160),
            'measure' => '°C'
        ),
        'uIn' => array(
            'min' => 180,
            'max' => 250,
            'value' => random(170, 260),
            'measure' => 'V'
        ),
        'calibr1q' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 30),
            'measure' => 'l/min'
        ),
        'calibr1p' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 8),
            'measure' => 'atm'
        ),
        'calibr2q' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 30),
            'measure' => 'l/min'
        ),
        'calibr2p' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 8),
            'measure' => 'atm'
        ),
        'calibr3q' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 30),
            'measure' => 'l/min'
        ),
        'calibr3p' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 8),
            'measure' => 'atm'
        ),
        'calibr4q' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 30),
            'measure' => 'l/min'
        ),
        'calibr4p' => array(
            'min' => 8,
            'max' => 25,
            'value' => random(5, 8),
            'measure' => 'atm'
        ),
        'compass' => array(
            'min' => 0,
            'max' => 359,
            'value' => random(0, 359),
            'measure' => '°'
        ),
        'wind' => array(
            'value' => random(1, 20),
            'measure' => 'm/s'
        ),
        'humidity' => array(
            'value' => random(0, 100),
            'measure' => '%'
        ),
        'pressure' => array(
            'value' => random(100, 1500),
            'measure' => 'mm Hg'
        ),
        't' => array(
            'value' => random(-20, 50),
            'measure' => '°C'
        ),
        // -1 - red, 0 - grey, 1 - green
        'codes' => array(
            'measure' => 1,
            'calibr1' => $_SESSION['calibr1'],
            'calibr2' => $_SESSION['calibr2'],
            'calibr3' => $_SESSION['calibr3'],
            'calibr4' => $_SESSION['calibr4'],
            'fail' => 0,
            'cond' => random(0, 1) > 0.5 ? 1 : 0,
            'power' => 1,
            'door' => 0,
            'fire' => 0,
            'auto' => 1,
            'powerFail' => 0,
            'heat' => random(0, 1) > 0.5 ? 1 : 0,
            'hHisto' => 1,
            'h4' => 1,
            'flow' => 1,
            'nStatus' => 1,//random(0, 1) > 0.5 ? 1 : 0,
            'sStatus' => 1,//random(0, 1) > 0.5 ? 1 : 0,
            'cStatus' => 1,//random(0, 1) > 0.5 ? 1 : 0,
            'hStatus' => 1,//random(0, 1) > 0.5 ? 1 : 0,
            'histoStatus' => 1,
        )
    );

    exit(json_encode($answer));
?>
