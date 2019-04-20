var resText = "fin!";
var bgmFilePS = 'MP3/silentMajority.mp3';
var delayTime = 20800;

var melody_length_ary1 = [
0.121875,0.0578125,0.121354166666667,0.121354166666667,0.184895833333333,0.0791666666666667,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.311458333333333,0.2484375,
0.502083333333333,0.121354166666667,0.184895833333333,0.184895833333333,0.2484375,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.0682291666666667,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,
0.184895833333333,0.121354166666667,0.375520833333333,0.0583333333333333,0.375,1.009375,0.0578125,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.195833333333333,0.184895833333333,0.121354166666667,0.184895833333333,
0.121354166666667,0.184895833333333,0.184895833333333,0.385416666666667,0.2484375,0.697916666666667,1.009375,0.184895833333333,0.121354166666667,0.121354166666667,0.121354166666667,1.009375,0.184895833333333,0.121354166666667,0.184895833333333,0.121354166666667,
0.121354166666667,0.184895833333333,0.00520833333333333,0.121354166666667,0.502083333333333,0.184895833333333,0.121354166666667,0.0583333333333333,0.0583333333333333,0.6390625,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,
0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.121354166666667,0.121875,0.0578125,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.502083333333333,0.2484375,0.121354166666667,
0.2484375,0.375520833333333,0.121875,0.121354166666667,0.2484375,0.502083333333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.755729166666667,0.502083333333333,0.0583333333333333,
0.121354166666667,0.2484375,0.121354166666667,0.0578125,0.121354166666667,0.121354166666667,0.121354166666667,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,
0.0583333333333333,0.0583333333333333,0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.2484375,0.0583333333333333,0.121354166666667,0.121875,0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.502083333333333,0.121354166666667,
0.2484375,0.121354166666667,0.629166666666667,0.121354166666667,0.2484375,0.121875,0.121354166666667,0.2484375,0.121354166666667,1.009375,0.0578125,0.0578125,0.0583333333333333,0.628645833333333,0.0578125,0.0578125,
0.121875,0.121354166666667,0.121875,0.121354166666667,0.0578125,0.121875,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.2484375,0.121875,0.502083333333333,0.2484375,0.0583333333333333,0.121354166666667,
0.2484375,0.0583333333333333,0.0791666666666667,0.121354166666667,0.121354166666667,0.0578125,0.0578125,0.184895833333333,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,0.0583333333333333,0.0583333333333333,
0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.2484375,0.121354166666667,0.121875,0.121354166666667,0.121875,0.121354166666667,0.2484375,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.121875,
0.121354166666667,0.502083333333333,0.121354166666667,0.121875,0.121354166666667,0.0578125,0.2484375,0.121354166666667,0.375520833333333,0.0578125,0.0578125,0.0583333333333333,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,
1.009375,0.121354166666667,0.121875,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.184895833333333,0.184895833333333,0.628645833333333,0.184895833333333,0.0578125,0.0578125,0.0583333333333333,0.121354166666667,0.184895833333333,
0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.184895833333333,0.184895833333333,0.375,0.2484375,0.502083333333333,0.121354166666667,1.009375,0.184895833333333,0.121354166666667,
0.184895833333333,0.184895833333333,0.121354166666667,0.195833333333333,0.184895833333333,0.121354166666667,0.184895833333333,0.121354166666667,0.184895833333333,0.00520833333333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.0583333333333333,0.0583333333333333,
0.6390625,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.121875,0.121354166666667,0.121354166666667,0.184895833333333,0.184895833333333,
0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.502083333333333,0.2484375,0.121354166666667,0.2484375,0.311979166666667,0.121354166666667,0.121875,0.121354166666667,0.184895833333333,0.502083333333333,0.121354166666667,0.184895833333333,
0.184895833333333,0.121354166666667,0.184895833333333,0.184895833333333,0.121354166666667,0.755729166666667,0.502083333333333,0.0583333333333333,0.121354166666667,0.2484375,0.0583333333333333,0.0578125,0.121354166666667,0.121354166666667,0.0578125,0.0578125,
0.184895833333333,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,0.0583333333333333,0.0583333333333333,0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.2484375,0.121354166666667,0.121875,
0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.0583333333333333,0.121354166666667,0.0578125,0.0578125,0.2484375,0.121354166666667,0.502083333333333,0.121354166666667,0.2484375,0.121354166666667,0.121875,0.121354166666667,
0.2484375,0.121354166666667,1.009375,0.0578125,0.0578125,0.0583333333333333,0.628645833333333,0.0578125,0.0578125,0.121875,0.121354166666667,0.121875,0.121354166666667,0.0578125,0.121875,0.628645833333333,
0.121354166666667,0.121875,0.121354166666667,0.2484375,0.121875,0.502083333333333,0.2484375,0.0583333333333333,0.121354166666667,0.2484375,0.0583333333333333,0.0791666666666667,0.121354166666667,0.121354166666667,0.0578125,0.0578125,
0.184895833333333,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,0.0583333333333333,0.0583333333333333,0.121354166666667,0.2484375,0.121354166666667,0.2484375,0.2484375,0.0578125,0.0578125,
0.121875,0.121354166666667,1.009375,0.121354166666667,0.2484375,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.121875,0.121354166666667,0.502083333333333,0.121354166666667,0.121875,0.121354166666667,0.2484375,
0.121354166666667,0.375520833333333,0.0578125,0.0578125,0.0583333333333333,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,1.009375,0.121875,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.184895833333333,
0.184895833333333,0.628645833333333,0.184895833333333,0.0578125,0.121875,0.121354166666667,0.121875,0.0578125,0.184895833333333,0.0578125,0.0578125,0.121875,0.121354166666667,0.121875,0.375,0.2484375,
0.0578125,0.2484375,0.2484375,0.2484375,0.2484375,0.2484375,0.375,0.502083333333333,0.121354166666667,0.0578125,0.121875,0.375,0.184895833333333,0.0578125,0.06875,0.502083333333333,
0.2484375,0.121875,0.2484375,0.121354166666667,0.184895833333333,0.184895833333333,0.2484375,0.184895833333333,0.81875,0.0583333333333333,0.0583333333333333,0.121354166666667,0.0583333333333333,0.121354166666667,0.0791666666666667,0.121354166666667,
0.121354166666667,0.0578125,0.0791666666666667,0.0583333333333333,0.0578125,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,0.0583333333333333,0.0583333333333333,0.121354166666667,0.121875,0.121354166666667,
0.06875,0.184895833333333,0.0583333333333333,0.121354166666667,0.121875,0.121354166666667,0.121875,0.121354166666667,0.2484375,0.0583333333333333,0.121354166666667,0.121354166666667,0.121875,0.121354166666667,0.121875,0.121354166666667,
0.121875,0.121354166666667,0.121875,0.121354166666667,0.2484375,0.121354166666667,0.121875,0.0578125,0.0682291666666667,0.0583333333333333,0.121354166666667,0.0578125,0.0578125,0.121875,0.121354166666667,0.121875,
0.0578125,0.0578125,0.121875,0.121354166666667,0.121354166666667,0.121875,0.121354166666667,0.375520833333333,0.00520833333333333,0.438541666666667,0.0583333333333333,0.0583333333333333,0.121354166666667,0.2484375,0.0583333333333333,0.0791666666666667,
0.121354166666667,0.121354166666667,0.0578125,0.0578125,0.184895833333333,0.0578125,0.0583333333333333,0.121354166666667,0.0578125,0.121875,0.121354166666667,0.0583333333333333,0.0583333333333333,0.121354166666667,0.2484375,0.121354166666667,
0.755729166666667,0.2484375,0.121354166666667,0.121875,0.121354166666667,1.009375,0.121354166666667,0.2484375,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.121875,0.121354166666667,0.502083333333333,0.121354166666667,
0.121875,0.121354166666667,0.0578125,0.2484375,0.121354166666667,0.375520833333333,0.0578125,0.0578125,0.0583333333333333,0.628645833333333,0.121354166666667,0.121875,0.121354166666667,1.009375,0.121354166666667,0.121875,
0.628645833333333,0.121354166666667,0.121875,0.121354166666667,0.184895833333333,0.184895833333333,0.628645833333333
];
var melody_time_ary1 = [
0,244,366,731,974,1340,1705,1948,2314,2679,2922,3288,3896,4262,4627,5357,
5844,7549,7792,8158,8523,9010,9740,10106,10471,10714,11080,11445,11688,12054,12419,12662,
13028,13393,13636,13758,13880,15584,15828,15950,16315,16558,16924,17289,17532,17898,18263,18506,
18872,19480,19846,20211,20941,21428,23376,23742,24107,24472,25081,25324,25690,26055,26298,26664,
27029,27272,27638,28003,28246,28612,28977,29220,29342,29464,30925,31168,31534,31899,32142,32508,
32873,33116,33482,33847,34090,34456,35064,35308,35430,35795,36038,36404,36769,37012,38473,38717,
38960,39447,40421,40665,40908,41395,42613,42856,43222,43587,43830,44196,44561,44804,48213,48335,
48457,48700,48822,49066,49309,49553,49918,50040,50283,50405,50527,50648,50770,51014,51135,51379,
51622,51744,51866,52109,52353,52596,52840,53205,53327,53570,53814,54057,54301,54544,54788,55275,
55518,55762,56005,56249,56492,56979,57223,57466,57710,57953,58197,58319,58562,58684,59171,59293,
59414,59658,59901,60145,60267,60388,60632,61119,61362,61606,61849,62336,62580,63797,63919,64041,
64284,64406,64650,64893,65137,65502,65624,65867,66111,66232,66354,66598,66719,66963,67206,67328,
67450,67693,67937,68180,68424,68911,69154,69398,69641,69885,70128,70372,70859,71102,71346,71589,
71833,72076,72320,72563,72807,72929,73050,73294,73537,73781,73903,74146,74268,74755,74998,75242,
75485,75729,75972,76216,76703,76946,77190,77433,77799,78164,83277,83521,83643,83886,84008,84251,
84617,84982,85225,85591,85956,86199,86565,87173,87539,87904,88634,89121,90826,91069,91435,91800,
92043,92409,92774,93017,93383,93748,93991,94357,94965,95331,95696,95939,96305,96670,96913,97035,
97157,98618,98861,99227,99592,99835,100201,100566,100809,101175,101540,101783,102027,102514,102757,103123,
103488,103731,104097,104462,104705,106166,106410,106653,107140,107871,108114,108358,108601,109088,110306,110549,
110915,111280,111523,111889,112254,112497,115906,116028,116150,116393,116515,116759,117002,117246,117611,117733,
117976,118220,118341,118463,118707,118828,119072,119315,119437,119559,119802,120046,120289,120533,121020,121263,
121507,121750,121994,122237,122359,122481,122968,123090,123211,123455,123698,123942,124185,124429,124672,124916,
125159,125403,125646,125890,126012,126255,126377,126864,126986,127107,127351,127594,127838,127960,128081,128325,
128812,129055,129299,129542,130029,130273,131490,131612,131734,131977,132099,132343,132586,132830,133195,133317,
133560,133804,133925,134047,134291,134412,134656,134899,135021,135143,135386,135630,135873,136117,136604,136726,
136847,137091,137334,137578,137821,138065,138552,138795,139039,139282,139526,139769,140013,140256,140500,140743,
140987,141230,141474,141596,141839,141961,142448,142691,142935,143178,143665,143909,144396,144639,144883,145126,
145492,145857,162658,163024,163145,163389,163632,163876,163998,164363,164485,164606,164850,165093,165337,167041,
167407,167528,168015,168502,168746,169233,169720,170450,170572,170816,170937,171181,172398,172764,172885,173129,
174833,175320,175564,176051,176294,176660,177025,177268,177634,180190,180312,180434,180677,180799,181043,181286,
181530,181895,182017,182260,182382,182504,182625,182747,182991,183112,183356,183599,183721,183843,184086,184330,
184573,184817,185182,185304,185547,185791,186034,186278,186521,186643,186765,187252,187495,187739,187982,188226,
188469,188713,188956,189200,189443,189687,189930,190174,190296,190539,190661,191148,191270,191391,191635,191878,
192122,192244,192365,192609,193096,193339,193583,193826,194313,194557,195774,195896,196018,196261,196383,196627,
196870,197114,197479,197601,197844,198088,198209,198331,198575,198696,198940,199183,199305,199427,199670,199914,
200157,200401,200888,201131,201375,201618,201862,202105,202349,202836,203079,203323,203566,203810,204053,204297,
204540,204784,204906,205027,205271,205514,205758,205880,206123,206245,206732,206975,207219,207462,207706,207949,
208193,208680,208923,209167,209410,209776,210141
];
var melody_data1 = [
'G#4','A#4','B4','C#5','D#5','D#5','D#5','F#5','E5','D#5','D#5','C#5','D#5','C#5','B4','C#5',
'A#4','G#4','G#4','B4','C#5','D#5','F#5','E5','D#5','D#5','C#5','G#4','G#4','B4','D#5','C#5',
'B4','A#4','B4','A#4','G#4','G#4','B4','B4','C#5','D#5','D#5','D#5','F#5','E5','D#5','D#5',
'C#5','D#5','C#5','B4','C#5','A#4','G#4','B4','C#5','D#5','D#5','F#5','E5','D#5','D#5','C#5',
'G#4','G#4','B4','D#5','C#5','B4','A#4','B4','A#4','G#4','C#5','D#5','D#5','D#5','D#5','D#5',
'D#5','C#5','F#5','G#5','D#5','C#5','C#5','C#5','C#5','C#5','F#5','D#5','F#5','G#5','B4','A#4',
'G#4','D#5','C#5','C#5','C#5','F#5','C#5','F#5','F#5','F#5','F#5','E5','D#5','C#5','G#4','G4',
'G#4','G#4','A#4','C5','C#5','D#5','F5','D#5','D#5','D#5','D#5','D#5','F5','D#5','F5','F5',
'F5','D#5','G4','G#4','G4','G#4','C#5','C#5','C5','A#4','G#4','D#5','G4','G4','G#4','G#4',
'A#4','C5','C5','G#4','G#4','D#5','G#4','G#4','G#4','D#5','F5','D#5','C#5','D#5','D#5','D#5',
'F5','G5','G#5','G#5','G#5','G#5','D#5','D#5','C#6','C6','A#5','A#5','G#5','G#4','G4','G#4',
'G#4','A#4','C5','C#5','D#5','D#5','D#5','D#5','D#5','D#5','F5','D#5','F5','F5','F5','D#5',
'G4','G#4','G4','G#4','C#5','C5','A#4','G#4','D#5','G4','G4','G#4','G#4','A#4','C5','C5',
'G#4','G#4','G#4','D#5','G#4','G#4','G#4','G#4','D#5','F5','D#5','C#5','D#5','D#5','F5','G5',
'G#5','G#5','G#5','D#5','D#5','C#6','C6','A#5','A#5','G#5','G#4','G#4','B4','B4','C#5','D#5',
'D#5','D#5','F#5','E5','D#5','D#5','C#5','D#5','C#5','B4','C#5','A#4','G#4','G#4','B4','C#5',
'D#5','D#5','D#5','F#5','E5','D#5','D#5','C#5','G#4','B4','D#5','C#5','B4','A#4','B4','A#4',
'G#4','C#5','D#5','D#5','D#5','D#5','D#5','D#5','C#5','F#5','G#5','D#5','C#5','C#5','C#5','C#5',
'C#5','F#5','D#5','F#5','G#5','B4','A#4','G#4','D#5','C#5','C#5','C#5','C#5','F#5','C#5','F#5',
'F#5','F#5','F#5','E5','D#5','C#5','G#4','G4','G#4','G#4','A#4','C5','C#5','D#5','D#5','D#5',
'D#5','D#5','D#5','F5','D#5','F5','F5','F5','D#5','G4','G#4','G4','G#4','C#5','C5','A#4',
'G#4','D#5','G4','G4','G4','G#4','G#4','G#4','A#4','C5','C5','G#4','G#4','G#4','D#5','G#4',
'G#4','G#4','D#5','F5','D#5','C#5','D#5','D#5','D#5','F5','G5','G#5','G#5','G#5','G#5','D#5',
'D#5','C#6','C6','A#5','A#5','G#5','G#4','G4','G#4','G#4','A#4','C5','C#5','D#5','D#5','D#5',
'D#5','D#5','D#5','F5','D#5','F5','F5','F5','D#5','G4','G#4','G4','G#4','C#5','C5','C5',
'A#4','G#4','D#5','G4','G4','G#4','G#4','A#4','C5','C5','G#4','G#4','G#4','D#5','G#4','G#4',
'G#4','D#5','F5','D#5','C#5','D#5','D#5','F5','G5','G#5','G#5','D#5','D#5','C#6','C6','A#5',
'A#5','G#5','G#5','G5','D#5','C5','C#5','D#5','D#5','D#5','D#5','A#5','G#5','G5','G#5','G#5',
'G#5','G5','A#5','C6','A#5','G#5','G5','F5','F5','F5','F5','C6','G#5','G#5','A#5','G#5',
'C#5','C#5','G#5','G#5','G5','G#5','A#5','C6','A#5','G#4','G4','G#4','G#4','A#4','C5','C#5',
'D#5','F5','D#5','D#5','D#5','D#5','D#5','F5','D#5','F5','F5','F5','D#5','G4','G#4','G4',
'G#4','C#5','C#5','C5','A#4','G#4','D#5','G4','G4','G4','G#4','G#4','A#4','C5','C5','G#4',
'G#4','G#4','D#5','G#4','G#4','G#4','D#5','F5','D#5','C#5','D#5','D#5','D#5','F5','G5','G#5',
'G#5','G#5','G#5','D#5','D#5','C#6','C6','A#5','A#5','G#5','G#4','G4','G#4','G#4','A#4','C5',
'C#5','D#5','D#5','D#5','D#5','D#5','D#5','F5','D#5','F5','F5','F5','D#5','G4','G#4','G4',
'G#4','C#5','C5','A#4','G#4','D#5','G4','G4','G#4','G#4','A#4','C5','C5','G#4','G#4','G#4',
'D#5','G#4','G#4','G#4','G#4','D#5','F5','D#5','C#5','D#5','D#5','F5','G5','G#5','G#5','G#5',
'D#5','D#5','C#6','C6','A#5','A#5','G#5'
];
var melody_volume_ary1 = [
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
100,100,100,100,100,100,100
];
