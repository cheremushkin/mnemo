<?php
	header('Access-Control-Allow-Origin: *');
	session_start();

    function random($min, $max, $dev = 1) {
        return round(rand($min, $max))/$dev;
    };

	if (!isset($_SESSION['init'])) {
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
        'parameters' => array(
            0 => array(
                'name' => 'no',
                'min' => 20,
                'max' => 40,
                'value' => random(5, 55),
                'measure' => 'ppm'
            )
        ),
        // -1 - red, 0 - grey, 1 - green
        'codes' => array(
            0 => array('name'=> 'measure', 'value'=> 1),
            1 => array('name'=> 'calibr1', 'value'=> $_SESSION['calibr1']),
            2 => array('name'=> 'calibr2', 'value'=> $_SESSION['calibr2']),
            3 => array('name'=> 'calibr3', 'value'=> $_SESSION['calibr3']),
            4 => array('name'=> 'calibr4', 'value'=> $_SESSION['calibr4']),
            5 => array('name'=> 'fail', 'value'=> 0),
            6 => array('name'=> 'cond', 'value'=> random(0, 1) > 0.5 ? 1 : 0,),
            7 => array('name'=> 'power', 'value'=> 1),
            8 => array('name'=> 'door', 'value'=> 0),
            9 => array('name'=> 'fire', 'value'=> 0),
            10 => array('name'=> 'auto', 'value'=> 1),
            11 => array('name'=> 'powerFail', 'value'=> 0),
            12 => array('name'=> 'heat', 'value'=> random(0, 1) > 0.5 ? 1 : 0),
            13 => array('name'=> 'hHisto', 'value'=> 1),
            14 => array('name'=> 'h4', 'value'=> 1),
            15 => array('name'=> 'flow', 'value'=> 1),
            16 => array('name'=> 'nStatus', 'value'=> 1),
            17 => array('name'=> 'sStatus', 'value'=> 1),
            18 => array('name'=> 'cStatus', 'value'=> 1),
            19 => array('name'=> 'hStatus', 'value'=> 1),
            20 => array('name'=> 'histoStatus', 'value'=> 1)
        )
    );

    exit(json_encode($answer));
?>
