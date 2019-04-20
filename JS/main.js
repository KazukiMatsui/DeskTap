var music_scale;
var ToneBPM = 90;
var BPNConvertMSEC = 60 / ToneBPM * 1000;
Tone.Transport.bpm.value = ToneBPM;
console.log(BPNConvertMSEC);

var count = 0;
/*
var melody_length_ary1 = [
    0.182291666666667,0.172916666666667,0.195833333333333,0.189583333333333,0.2,0.161979166666667,0.172916666666667,0.190104166666667,0.352083333333333,0.182291666666667,0.1609375,0.208854166666667,0.31875,0.1859375,0.190104166666667,0.189583333333333,
    0.347395833333333,0.141666666666667,0.175,0.178645833333333,0.179166666666667,0.184375,0.180729166666667,0.182291666666667,0.172916666666667,0.1953125,0.344791666666667,0.1671875,0.172916666666667,0.191666666666667,0.328645833333333,0.184375,
    0.165625,0.179166666666667,0.578645833333333,0.1453125,0.178645833333333,0.188541666666667,0.168229166666667,0.197395833333333,0.178645833333333,0.169270833333333,0.1859375,0.3453125,0.190104166666667,0.160416666666667,0.1953125,0.335416666666667,
    0.178645833333333,0.202083333333333,0.189583333333333,0.335416666666667,0.138541666666667,0.172916666666667,0.178645833333333,0.175,0.2015625,0.2203125,0.183333333333333,0.161979166666667,0.202604166666667,0.3375,0.15625,0.168229166666667,
    0.184895833333333,0.321354166666667,0.190625,0.178645833333333,0.178645833333333,0.4140625,0.205729166666667,0.201041666666667,0.195833333333333,0.375,0.171875,0.199479166666667,0.188020833333333,0.352083333333333,0.172916666666667,0.207291666666667,
    0.2125,0.324479166666667,0.189583333333333,0.211979166666667,0.21875,0.36875,0.0744791666666667,0.1515625,0.279166666666667,0.100520833333333,0.1625,0.279166666666667,0.2015625,0.1609375,0.245833333333333,0.1953125,
    0.178645833333333,0.1625,0.168229166666667,0.190625,0.179166666666667,0.172916666666667,0.1859375,0.211979166666667,0.160416666666667,0.161979166666667,0.205729166666667,0.31875,0.172916666666667,0.178645833333333,0.1828125,0.341145833333333,
    0.184895833333333,0.190625,0.2015625,0.314583333333333,0.1359375,0.172916666666667,0.168229166666667,0.178645833333333,0.178645833333333,0.199479166666667,0.1828125,0.179166666666667,0.184375,0.334375,0.1953125,0.160416666666667,
    0.191666666666667,0.3390625,0.1671875,0.179166666666667,0.229166666666667,2.03802083333333,2.025
];
var melody_time_ary1 = [
    3330,3663,3996,4329,4662,4995,5328,5661,5994,6993,7326,7659,7992,8991,9324,9657,
    9990,10989,11322,11655,11988,12321,12654,12987,13320,13653,13986,14985,15318,15651,15984,16983,
    17316,17649,17982,19314,19647,19980,20313,20646,20979,21312,21645,21978,22977,23310,23643,23976,
    24975,25308,25641,25974,26973,27306,27639,27972,28305,28638,28971,29304,29637,29970,30969,31302,
    31635,31968,32967,33300,33633,33966,34965,35298,35631,35964,36963,37296,37629,37962,38961,39294,
    39627,39960,40959,41292,41625,41958,42624,42957,43290,43956,44289,44622,44955,45288,45621,45954,
    46287,46620,46953,47286,47619,47952,48285,48618,48951,49284,49617,49950,50949,51282,51615,51948,
    52947,53280,53613,53946,54945,55278,55611,55944,56277,56610,56943,57276,57609,57942,58941,59274,
    59607,59940,60939,61272,61605,61938,61938
];
var melody_data1 = [
    'E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4','A4','B4','E4','G#4','B4',
    'C5','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4','A4','B4','E4',
    'C5','B4','A4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4','A4','B4',
    'E4','G#4','B4','C5','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4',
    'A4','B4','E4','C5','B4','A4','B4','C5','D5','E5','G4','F5','E5','D5','F4','E5',
    'D5','C5','E4','D5','C5','B4','E4','E4','E5','E5','E5','E6','D#5','E5','D#5','E5',
    'D#5','E5','D#5','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4','A4','B4',
    'E4','G#4','B4','C5','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','C4','E4',
    'A4','B4','D4','C5','B4','A4','C4'
];
var melody_length_ary2 = [
    0.369791666666667,0.643229166666667,0.370833333333333,0.669791666666667,0.341145833333333,0.659895833333333,0.328645833333333,0.6640625,0.353125,0.667708333333333,0.656770833333333,0.385416666666667,0.659895833333333,0.375,0.671875,0.335416666666667,
    0.660416666666667,0.3359375,0.665625,0.352083333333333,0.688020833333333,0.698958333333333,0.172916666666667,0.717708333333333,0.175,0.772395833333333,0.177083333333333,0.689583333333333,1.034375,1.07291666666667,0.351041666666667,0.653125,
    0.367708333333333,0.665625,0.3296875,0.647395833333333,0.3453125,0.666145833333333,0.36875,0.408333333333333,2.03802083333333,2.025
];
var melody_time_ary2 = [
    5999,6666,7998,8665,9997,10664,13994,14661,
    15993,16660,17992,21989,22656,23988,24655,25987,
    26654,29984,30651,31983,32650,33982,36314,36647,
    38312,38645,40310,40643,41975,41975,49969,50636,
    51968,52635,53967,54634,57964,58631,59963,60630,
    61962,61962
];
var melody_data2 = [
    'A3','E3','G#3','E3','A3','E3','A3','E3','G#3','E3','A3','A3','E3','G#3','E3','A3',
    'E3','A3','E3','G#3','E3','A3','G3','C4','G3','B3','A3','C4','E3','G#3','A3','E3',
    'G#3','E3','A3','E3','A3','E3','G#3','E3','A2','E3'
];
*/
//channel:1
//inst:76
//channel:1
//inst:72
//channel:1
//inst:72
var melody_length_ary1 = [
    0.119791666666667,0.0598958333333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.179166666666667,0.1046875,0.254166666666667,0.172395833333333,0.717708333333333,0.119791666666667,
    0.0526041666666667,0.3515625,0.171875,0.1125,0.0526041666666667,0.3515625,0.171875,0.1125,0.0526041666666667,0.291666666666667,0.0526041666666667,0.171875,0.1125,0.0526041666666667,0.3515625,0.1125,
    0.0526041666666667,0.171875,0.172395833333333,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1046875,0.254166666666667,0.172395833333333,0.710416666666667,0.1125,0.0526041666666667,
    0.3515625,0.171875,0.1125,0.0526041666666667,0.710416666666667,0.172395833333333,0.171875,0.172395833333333,0.3515625,0.0526041666666667,0.3515625,0.0526041666666667,0.3515625,0.119791666666667,0.0598958333333333,0.171875,
    0.172395833333333,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.3515625,0.1125,0.0526041666666667,0.3515625,0.171875,
    0.1125,0.0526041666666667,0.3515625,0.171875,0.1125,0.0526041666666667,0.3515625,0.3515625,0.1125,0.0526041666666667,0.3515625,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.231770833333333,
    0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.710416666666667,0.1125,0.0526041666666667,0.710416666666667,0.171875,0.1125,0.0526041666666667,
    0.710416666666667,0.172395833333333,0.171875,0.172395833333333,0.3515625,0.231770833333333,0.111979166666667,0.171875,0.0526041666666667,0.710416666666667,0.171875,0.0526041666666667,0.3515625,0.1125,0.0526041666666667,0.171875,
    0.172395833333333,0.3515625,0.291666666666667,0.0526041666666667,0.171875,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.171875,0.710416666666667,0.0526041666666667,0.171875,0.1125,0.0526041666666667,0.171875,
    0.172395833333333,0.3515625,0.172395833333333,0.3515625,0.171875,0.172395833333333,0.3515625,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.171875,
    0.156770833333333,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.590625,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,
    0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.530729166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.171875,0.111979166666667,0.0520833333333333,0.172395833333333,0.0526041666666667,
    0.710416666666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.179166666666667,0.2390625,0.111979166666667,0.231770833333333,0.710416666666667,0.1125,
    0.0526041666666667,0.171875,0.172395833333333,0.171875,0.172395833333333,0.171875,0.172395833333333,0.111979166666667,0.231770833333333,0.3515625,0.231770833333333,0.3515625,0.231770833333333,0.710416666666667,0.1125,0.0526041666666667,
    0.710416666666667,0.172395833333333,0.171875,0.172395833333333,0.710416666666667,0.172395833333333,0.3515625,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.3515625,0.1125,0.0526041666666667,0.171875,
    0.172395833333333,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.127083333333333,0.3515625,0.1125,0.0526041666666667,0.3515625,0.171875,
    0.1125,0.0526041666666667,0.3515625,0.171875,0.1125,0.0526041666666667,0.3515625,0.3515625,0.1125,0.0526041666666667,0.3515625,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.231770833333333,
    0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.171875,0.1125,0.231770833333333,0.172395833333333,0.710416666666667,0.1125,0.0526041666666667,0.710416666666667,0.171875,0.1125,0.0526041666666667,
    0.710416666666667,0.172395833333333,0.171875,0.172395833333333,0.3515625,0.231770833333333,0.111979166666667,0.231770833333333,0.3515625,0.291666666666667,0.0526041666666667,0.3515625,0.1125,0.0526041666666667,0.171875,0.172395833333333,
    0.261458333333333,0.291666666666667,0.0526041666666667,0.171875,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.3515625,0.710416666666667,0.0526041666666667,0.171875,0.1125,0.0526041666666667,0.171875,0.172395833333333,
    0.3515625,0.172395833333333,0.3515625,0.171875,0.172395833333333,0.3515625,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.0520833333333333,
    0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.590625,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,
    0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.530729166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.231770833333333,0.111979166666667,0.0520833333333333,0.172395833333333,0.0526041666666667,0.710416666666667,
    0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.171875,0.1125,0.0526041666666667,0.179166666666667,0.2390625,0.111979166666667,0.231770833333333,0.710416666666667,0.1125,0.0526041666666667,0.171875,
    0.172395833333333,0.171875,0.172395833333333,0.710416666666667,0.172395833333333,0.111979166666667,0.171875,0.0526041666666667,0.3515625,0.231770833333333,0.3515625,0.231770833333333,0.710416666666667,0.1125,0.0526041666666667,0.171875,
    0.172395833333333,0.171875,0.172395833333333,0.3515625,0.172395833333333,0.3515625,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.710416666666667,0.3515625,0.3515625,0.3515625,0.3515625,
    0.3515625,0.171875,0.172395833333333,0.3515625,0.3515625,0.291666666666667,0.0526041666666667,0.3515625,0.3515625,0.261458333333333,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,
    0.3515625,0.171875,0.172395833333333,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.171875,0.0526041666666667,0.3515625,0.3515625,0.3515625,
    0.171875,0.172395833333333,0.3515625,0.171875,0.172395833333333,0.3515625,0.3515625,0.3515625,0.3515625,0.3515625,0.710416666666667,0.3515625,0.710416666666667,0.1125,0.0526041666666667,1.06927083333333,
    0.3515625,0.3515625,0.3515625,0.710416666666667,0.171875,0.172395833333333,0.710416666666667,0.710416666666667,0.3515625,0.3515625,0.3515625,0.710416666666667,0.3515625,0.3515625,0.3515625,0.111979166666667,
    0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.0520833333333333,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,
    0.231770833333333,0.111979166666667,0.590625,0.111979166666667,0.0520833333333333,0.1125,0.0526041666666667,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.530729166666667,
    0.231770833333333,0.111979166666667,0.231770833333333,0.216666666666667,0.111979166666667,0.0520833333333333,0.172395833333333,0.0526041666666667,0.710416666666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.111979166666667,0.0520833333333333,
    0.1125,0.0526041666666667,0.111979166666667,0.2390625,0.119791666666667,0.231770833333333,0.710416666666667,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.171875,0.172395833333333,0.3515625,0.172395833333333,0.111979166666667,
    0.231770833333333,0.3515625,0.231770833333333,0.3515625,0.231770833333333,0.470833333333333,0.1125,0.0526041666666667,0.710416666666667,0.172395833333333,0.171875,0.172395833333333,0.171875,0.172395833333333,0.111979166666667,0.0520833333333333,
    0.3515625,0.231770833333333,0.111979166666667,0.171875,0.0526041666666667,0.3515625,0.1125,0.0526041666666667,0.171875,0.172395833333333,0.171875,0.172395833333333,0.171875,0.172395833333333,0.111979166666667,0.231770833333333,
    0.111979166666667,0.231770833333333,0.111979166666667,0.231770833333333,0.710416666666667
    ];
    var melody_time_ary1 = [
    0,230,345,689,919,1378,1723,2067,2297,2756,3101,3445,3646,4134,4479,5512,
    5742,5857,6546,6890,7120,7235,7924,8268,8498,8613,9187,9302,9646,9876,9991,11024,
    11254,11369,11713,11943,12402,12747,13091,13321,13780,14125,14469,14670,15158,15503,16536,16766,
    16881,17570,17914,18144,18259,18603,18948,19292,19637,20211,20326,20900,21015,24804,25034,25149,
    25493,25723,26182,26527,26871,27101,27560,27905,28249,28479,28938,29283,30316,30546,30661,31350,
    31694,31924,32039,32728,33072,33302,33417,34106,34450,34680,34795,35828,36058,36173,36517,36747,
    37206,37551,37895,38125,38584,38929,39273,39503,39962,40307,41340,41570,41685,42374,42718,42948,
    43063,43407,43752,44096,44441,44671,45130,45360,45704,45819,47197,47771,47886,48230,48460,48575,
    48919,49264,49953,50527,50642,50986,51216,51331,51675,52020,52709,53283,53398,53742,53972,54087,
    54431,54776,55120,55465,56154,56498,56843,57532,57762,57876,58106,58221,58451,58910,59140,59599,
    59829,60288,60518,60632,60862,60977,61207,61666,61896,62355,62585,63044,63274,63388,63618,63733,
    63963,64422,64652,65111,65341,65800,66030,66489,66719,67178,67408,67867,68556,68786,68900,69130,
    69245,69475,69934,70164,70623,70853,71312,71542,71656,71886,72001,72231,72690,72920,73379,74412,
    74642,74757,75101,75446,75790,76135,76479,76824,77054,77513,77743,78202,78432,78891,79924,80154,
    80269,80613,80958,81302,81647,81991,82336,82566,83025,83255,83714,83944,84403,96460,96690,96805,
    97149,97379,97838,98183,98527,98757,99216,99561,99905,100135,100594,100939,101972,102202,102317,103006,
    103350,103580,103695,104384,104728,104958,105073,105762,106106,106336,106451,107484,107714,107829,108173,108403,
    108862,109207,109551,109781,110240,110585,110929,111159,111618,111963,112996,113226,113341,114030,114374,114604,
    114719,115063,115408,115752,116097,116327,116786,117016,117475,118853,119427,119542,119886,120116,120231,120575,
    120920,121609,122183,122298,122642,122872,122987,123331,123676,124365,124939,125054,125398,125628,125743,126087,
    126432,126776,127121,127810,128154,128499,129188,129418,129532,129762,129877,130107,130566,130796,131255,131485,
    131944,132174,132288,132518,132633,132863,133322,133552,134011,134241,134700,134930,135044,135274,135389,135619,
    136078,136308,136767,136997,137456,137686,138145,138375,138834,139064,139523,140212,140442,140556,140786,140901,
    141131,141590,141820,142279,142509,142968,143312,143542,143657,143887,144346,144576,145035,146068,146298,146413,
    146757,147102,147446,147791,148135,148480,148710,149054,149169,149399,149858,150088,150547,151580,151810,151925,
    152269,152614,152958,153303,153647,153992,154222,154681,154911,155370,155600,156059,160193,160882,161571,162260,
    162949,163638,163982,164327,165705,166394,166968,167083,167772,168461,169150,169839,171217,171906,172595,173284,
    173973,174662,175006,175351,176729,177418,178107,178796,179485,180174,180863,181782,182126,182241,182930,183619,
    184308,184652,184997,185686,186030,186375,187753,188442,189131,189820,190509,191198,191887,192920,193150,193265,
    193954,194643,195332,196021,196710,197054,197399,198777,199466,200155,200844,201533,202222,202911,203600,209112,
    209342,209456,209686,209801,210031,210490,210720,211179,211409,211868,212098,212212,212442,212557,212787,213246,
    213476,213935,214165,214624,214854,214968,215198,215313,215543,216002,216232,216691,216921,217380,217610,218069,
    218299,218758,218988,219447,220136,220366,220480,220710,220825,221055,221514,221744,222203,222433,222892,223122,
    223236,223466,223581,223811,224270,224500,224959,225992,226222,226337,226681,227026,227370,227715,228059,228404,
    228634,229093,229323,229782,230012,230471,231504,231734,231849,232193,232538,232882,233227,233571,233916,234146,
    234605,234835,235294,235524,235868,235983,237016,237246,237361,237705,238050,238394,238739,239083,239428,239658,
    240117,240347,240806,241036,241495
    ];
    var melody_data1 = [
    'B4','C#5','D#5','B4','G#4','C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4',
    'D#4','E4','B4','A#4','B4','F#4','E4','D#4','E4','F4','F4','B4','A#4','G#4','G4','B4',
    'C#5','D#5','B4','G#4','C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4','D#4',
    'E4','F#4','E4','F#4','D#4','F#4','B4','D#5','C#5','C#5','B4','B4','B4','B4','C#5','D#5',
    'B4','G#4','C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4','D#4','E4','B4',
    'A#4','B4','F#4','E4','D#4','E4','F4','B4','A#4','G#4','G4','B4','C#5','D#5','B4','G#4',
    'C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4','D#4','E4','F#4','E4','F#4',
    'D#4','F#4','B4','D#5','C#5','C#5','C#5','B4','B4','B4','G#4','A#4','B4','A#4','G#4','F#4',
    'D#5','D#5','C#5','D#5','E5','D#5','C#5','B4','C#5','F#4','E4','F#4','G#4','F#4','E4','D#4',
    'B4','B4','B4','A#4','G#4','A#4','B4','C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','C#5',
    'B4','C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','C#5','B4','C#5','D#5','C#5','B4','G#4',
    'B4','D#5','F#5','G#5','F#5','F#5','B5','A#5','F#5','D#5','F#5','C#5','C#5','D#5','C#5','B4',
    'G#4','B4','D#5','F#5','C#5','B4','B4','B4','C#5','D#5','E5','D#5','C#5','A#4','B4','B4',
    'A#4','G#4','A#4','B4','C#5','B4','F#4','D#4','F#4','G#4','C#5','A#4','B4','B4','B4','A#4',
    'G#4','A#4','B4','C#5','B4','F#4','B4','C#5','D#5','E5','C#5','B4','B4','B4','C#5','D#5',
    'B4','G#4','C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4','D#4','E4','B4',
    'A#4','B4','F#4','E4','D#4','E4','F4','B4','A#4','G#4','G4','B4','C#5','D#5','B4','G#4',
    'C#5','A#4','F#4','D#4','A#4','G#4','F#4','B3','F#4','D#4','C#4','D#4','E4','F#4','E4','F#4',
    'D#4','F#4','B4','D#5','C#5','D#5','C#5','B4','B4','G#4','A#4','B4','A#4','G#4','F#4','D#5',
    'D#5','C#5','D#5','E5','D#5','C#5','B4','C#5','F#4','E4','F#4','G#4','F#4','E4','D#4','B4',
    'B4','B4','A#4','G#4','A#4','B4','C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','C#5','B4',
    'C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','C#5','B4','C#5','D#5','C#5','B4','G#4','B4',
    'D#5','F#5','G#5','F#5','F#5','B5','A#5','F#5','D#5','F#5','C#5','C#5','D#5','C#5','B4','G#4',
    'B4','D#5','F#5','C#5','B4','B4','C#5','D#5','E5','D#5','C#5','A#4','B4','B4','A#4','G#4',
    'A#4','B4','C#5','B4','F#4','D#4','F#4','F#4','G#4','C#5','A#4','B4','B4','B4','A#4','G#4',
    'A#4','B4','C#5','B4','F#4','B4','C#5','D#5','E5','C#5','B4','B4','G#4','D#5','F5','D#5',
    'A#4','C#5','C5','C5','G#4','C5','C5','C#5','C5','A#4','G4','G#4','G#4','D#5','F5','D#5',
    'A#4','C#5','C5','C5','G#4','C5','C#5','C5','A#4','G4','G#4','F4','G4','G#4','D#5','F5',
    'D#5','A#4','A#4','C#5','C5','C5','G#4','C5','C#5','C5','A#4','G4','G#4','F4','G4','G#4',
    'D#5','F5','D#5','G5','G5','G#5','G#5','G#5','D#5','C#5','C5','A#4','B4','A#4','G#4','C#5',
    'D#5','C#5','B4','G#4','B4','D#5','F#5','C#5','B4','C#5','D#5','C#5','B4','G#4','B4','D#5',
    'F#5','C#5','B4','C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','G#5','F#5','F#5','B5','A#5',
    'F#5','D#5','F#5','C#5','C#5','D#5','C#5','B4','G#4','B4','D#5','F#5','C#5','B4','B4','B4',
    'C#5','D#5','G#5','D#5','C#5','A#4','B4','B4','A#4','G#4','A#4','B4','C#5','B4','F#4','D#4',
    'F#4','G#4','C#5','A#4','B4','B4','B4','A#4','G#4','A#4','B4','C#5','B4','F#4','E4','D#4',
    'E4','B4','B4','F#5','D#5','D#5','D#5','C#5','B4','C#5','D#5','E5','D#5','B4','F#4','B4',
    'C#5','D#5','C#5','B4','B4'
    ];
    var melody_volume_ary1 = [
    100,103,100,99,103,99,101,101,102,102,101,97,98,101,100,102,
    97,98,99,98,99,102,103,102,99,97,100,99,103,98,100,103,
    98,98,101,99,102,103,102,103,100,103,97,102,98,102,97,101,
    98,99,103,101,98,97,97,103,103,103,101,98,98,98,103,103,
    103,100,97,98,97,98,97,100,98,102,97,98,98,102,99,98,
    102,98,99,97,102,97,98,97,100,101,99,97,101,101,97,99,
    99,102,102,101,97,102,102,101,101,98,102,99,103,97,102,101,
    101,100,103,102,98,97,99,97,99,100,102,99,97,102,97,101,
    100,97,98,101,97,100,103,98,97,103,103,102,102,99,100,102,
    99,102,97,103,100,101,97,99,103,98,102,100,99,103,100,99,
    103,102,98,103,102,102,97,101,98,97,102,97,103,103,100,100,
    99,102,102,100,97,102,99,103,97,102,102,102,103,100,98,100,
    97,103,100,100,100,103,100,103,100,99,99,99,99,99,98,99,
    97,97,101,103,99,97,101,99,99,97,99,97,97,98,97,97,
    100,98,100,100,100,99,103,103,103,100,98,103,99,99,98,97,
    100,97,98,100,101,103,97,98,99,100,98,100,98,99,100,97,
    100,99,103,98,102,97,101,98,100,98,97,97,99,102,99,99,
    101,99,97,99,99,97,99,103,101,98,100,99,98,98,97,99,
    99,101,98,98,102,98,102,101,102,103,99,103,100,99,100,103,
    102,102,102,103,98,98,100,98,103,98,102,97,101,97,100,102,
    102,103,97,99,102,99,99,102,103,100,97,97,99,97,103,97,
    102,98,98,99,103,103,97,103,97,102,101,102,97,101,97,99,
    99,103,99,100,101,102,101,102,98,103,98,98,101,101,101,100,
    99,97,99,102,102,97,98,97,102,102,100,99,100,103,99,98,
    100,101,98,99,98,98,100,103,99,100,99,99,103,100,98,100,
    101,100,100,101,101,98,97,102,102,98,100,103,97,101,100,97,
    99,99,103,103,99,103,98,99,99,99,103,101,97,100,97,103,
    99,101,102,101,97,103,101,98,99,102,97,101,99,99,98,103,
    103,98,103,97,101,102,98,99,100,101,102,101,103,103,103,103,
    103,99,103,101,103,101,103,101,99,100,103,98,99,99,97,101,
    100,102,101,98,102,97,99,103,103,103,101,103,100,98,102,102,
    101,97,98,103,98,103,98,100,102,100,101,97,97,102,101,97,
    102,101,100,99,99,97,100,99,101,101,97,99,99,99,97,98,
    98,100,102,98,97,100,98,101,98,103,102,98,102,99,101,101,
    98,100,101,100,99,98,102,100,98,102,99,101,98,98,102,103,
    97,102,98,102,98,103,97,102,98,103,100,100,103,101,97,102,
    103,98,102,101,99
    ];
    
    
    
    var timeScale = 1.5;
    for(var i=0; i<melody_time_ary1.length; i++){
        melody_time_ary1[i] = melody_time_ary1[i] + 5100;
        //melody_time_ary1[i] = melody_time_ary1[i];
    }

    

var melody_length_ary = melody_length_ary1;
var melody_time_ary = melody_time_ary1;
var melody_data = melody_data1;
var melodyFlagAry = createBrankAry(melody_time_ary);

var countUp = 0;
var atCount = 0;
var startTime = new Date(), atTime = new Date(), diffTime = new Date();

var beforeX = 0, beforeY = 0;
var norm_threshold = -1;
var beforeRange = 100;
var afterRange = 100;

document.addEventListener("DOMContentLoaded", function(){
    var ripple_wood = document.getElementById("ripple_div");
    
    ripple_wood.addEventListener("click", function (event) { 

        var norm = Math.sqrt( Math.pow(event.pageX - beforeX,2) + Math.pow(event.pageY - beforeY, 2));
        //console.log(norm);
        beforeX = event.pageX;
        beforeY = event.pageY;

        var synth = new Tone.Synth().toMaster();
        //synth.volume.value = 1;
        if(count == 0){
            //startAccompaniment(accompaniment_time_ary, accompaniment_data);
           // startAccompaniment(melody_time_ary1, melody_data1, melody_length_ary1, melody_volume_ary1, melodyFlagAry, false);
            startAccompaniment(melody_time_ary1, melody_data1, melody_length_ary1, melody_volume_ary1, melodyFlagAry, false);
/*            startAccompaniment(melody_time_ary2, melody_data2, melody_length_ary2, melody_volume_ary2, melodyFlagAry, false);
            startAccompaniment(melody_time_ary3, melody_data3, melody_length_ary3, melody_volume_ary3, melodyFlagAry, false);
            startAccompaniment(melody_time_ary4, melody_data4, melody_length_ary4, melody_volume_ary4, melodyFlagAry, false);
            startAccompaniment(melody_time_ary5, melody_data5, melody_length_ary5, melody_volume_ary5, melodyFlagAry, false);
            startAccompaniment(melody_time_ary6, melody_data6, melody_length_ary6, melody_volume_ary6, melodyFlagAry, false);
            startAccompaniment(melody_time_ary7, melody_data7, melody_length_ary7, melody_volume_ary7, melodyFlagAry, false);
            startAccompaniment(melody_time_ary8, melody_data8, melody_length_ary8, melody_volume_ary8, melodyFlagAry, false);
            startAccompaniment(melody_time_ary9, melody_data9, melody_length_ary9, melody_volume_ary9, melodyFlagAry, false);
            startAccompaniment(melody_time_ary10, melody_data10, melody_length_ary10, melody_volume_ary10, melodyFlagAry, false);
            startAccompaniment(melody_time_ary11, melody_data11, melody_length_ary11, melody_volume_ary11, melodyFlagAry, false);
            startAccompaniment(melody_time_ary12, melody_data12, melody_length_ary12, melody_volume_ary12, melodyFlagAry, false);
            startAccompaniment(melody_time_ary13, melody_data13, melody_length_ary13, melody_volume_ary13, melodyFlagAry, false);
            startAccompaniment(melody_time_ary14, melody_data14, melody_length_ary14, melody_volume_ary14, melodyFlagAry, false);
            startAccompaniment(melody_time_ary15, melody_data15, melody_length_ary15, melody_volume_ary15, melodyFlagAry, false);
            startAccompaniment(melody_time_ary16, melody_data16, melody_length_ary16, melody_volume_ary16, melodyFlagAry, false);
*/
            Tone.Transport.start();
            startTime = new Date();
            atTime = new Date();
            countUp = 0;
            atCount = 0;
            new Audio('MP3/LEMON_without1.mp3').play();  
        }else{
            atTime = new Date();
        }
        diffTime = atTime.getTime() - startTime.getTime();
        //console.log(diffTime);
        
        var clickSuccessFlag = false;
        for(var i=atCount; i<melody_time_ary.length; i++){
           // music_scale = melody_data[countUp];
           // console.log(melody_time_ary[i] * BPNConvertMSEC);
            //if((melody_time_ary[i] - beforeRange) <= diffTime + melody_time_ary[0] && (melody_time_ary[i] + afterRange) >= diffTime + melody_time_ary[0] ){
            if((melody_time_ary[i] - beforeRange) <= diffTime && (melody_time_ary[i] + afterRange) >= diffTime){
                atCount = i;
                clickSuccessFlag = true;
                console.log("Success!" + atCount);
                break;
            }
        }

        var rand = Math.round(Math.random() * melody_data.length);
        
        if(clickSuccessFlag){
            for(var i=atCount; i<atCount+10; i++){
                if(melody_time_ary[atCount] == melody_time_ary[i]){
                    //if(melodyFlagAry[i] == 0){
                        if(norm > norm_threshold){
                            console.log("OK!");
                            music_scale = melody_data[i];
                            melodyFlagAry[i] = 1;
                        }else{
                            music_scale = music_scale;
                            console.log("Same Miss!");
                        }
/*
                   // }else{
                        if(norm > norm_threshold){
                            console.log("Miss1!");
                            music_scale = melody_data[rand];
                        }
                        //music_scale = 0;
                }*/
                    synth.triggerAttackRelease(music_scale, melody_length_ary[i]);
                }
            }
        }else{
            if(norm > norm_threshold){
                console.log("Miss2!");
                music_scale = melody_data[rand];
            }else{
                console.log("Miss3!");
            }
            synth.triggerAttackRelease(music_scale, "8n");
        }
 
        //music_scale = melody_data[countUp];
        countUp++;
        

        if((melody_time_ary[melody_time_ary.length-1]) < diffTime){
            //Tone.Transport.stop();
            console.log("Over!");
            count = 0;
            melodyFlagAry = createBrankAry(melody_time_ary);
        }
        else{
            count++;
        }
    }, false);

}, false);

function waitNote(msec, count, mainFlag, flagAry){
    var objDef = new $.Deferred;
    setTimeout(function(){
        objDef.resolve(count, mainFlag, flagAry);
    }, msec);
    return objDef.promise(count, mainFlag, flagAry);
}

function startAccompaniment(timeAry, dataAry, lengthAry, volumeAry, flagAry, mainFlag){
    var synth = new Tone.Synth().toMaster();
    for(var i=0; i<timeAry.length; i++){
        //var nextTime = timeAry[i] - melody_time_ary[0];
        var nextTime = timeAry[i];
        //nextTime = nextTime * 2.5;

        waitNote(nextTime, i, mainFlag, flagAry).done(function(count, mainFlag){
            if(mainFlag){
                if(flagAry[count] == 0){
                    synth.volume.value = -0.1*(255 - volumeAry[count]);
                    synth.volume.value = -40;
                    var scale = dataAry[count];
                    synth.triggerAttackRelease(scale, lengthAry[count]);
                }
            }
            else{
                synth.volume.value = -0.1*(255 - volumeAry[count])/2;
                var scale = dataAry[count];
                synth.triggerAttackRelease(scale, lengthAry[count]); 
            }
        });
    }
}

function createBrankAry(ary){
    var tempAry = {};
    for(var i=0; i<ary.length; i++){
        tempAry[i] = 0;
    }
    return tempAry;
}

