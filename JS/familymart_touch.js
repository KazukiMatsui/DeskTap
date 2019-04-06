var ToneBPM = 140;
var music_scale;
var BPNConvertMSEC = 60 / ToneBPM * 1000;
Tone.Transport.bpm.value = ToneBPM;
console.log(BPNConvertMSEC);

var count = 0;
var melody_time_ary = [
    3335,3668,4001,4334,4667,5000,5333,5666,
    5999,6999,7332,7665,7998,8998,9331,9664,
    9997,10997,11330,11663,11996,12329,12662,12995,
    13328,13661,13994,14994,15327,15660,15993,16993,
    17326,17659,17992,19325,19658,19991,20324,20657,
    20990,21323,21656,21989,22989,23322,23655,23988,
    24988,25321,25654,25987,26987,27320,27653,27986,
    28319,28652,28985,29318,29651,29984,30984,31317,
    31650,31983,32983,33316,33649,33982,34982,35315,
    35648,35981,36980,37313,37646,37979,38978,39311,
    39644,39977,40976,41309,41642,41975,42642,42975,
    43308,43975,44308,44641,44974,45307,45640,45973,
    46306,46639,46972,47305,47638,47971,48304,48637,
    48970,49303,49636,49969,50969,51302,51635,51968,
    52968,53301,53634,53967,54967,55300,55633,55966,
    56299,56632,56965,57298,57631,57964,58964,59297,
    59630,59963,60963,61296,61629,61962,61962
    ];
var melody_data = [
    'E5','D#5','E5','D#5','E5','B4','D5','C5',
    'A4','C4','E4','A4','B4','E4','G#4','B4',
    'C5','E4','E5','D#5','E5','D#5','E5','B4',
    'D5','C5','A4','C4','E4','A4','B4','E4',
    'C5','B4','A4','E5','D#5','E5','D#5','E5',
    'B4','D5','C5','A4','C4','E4','A4','B4',
    'E4','G#4','B4','C5','E4','E5','D#5','E5',
    'D#5','E5','B4','D5','C5','A4','C4','E4',
    'A4','B4','E4','C5','B4','A4','B4','C5',
    'D5','E5','G4','F5','E5','D5','F4','E5',
    'D5','C5','E4','D5','C5','B4','E4','E4',
    'E5','E5','E5','E6','D#5','E5','D#5','E5',
    'D#5','E5','D#5','E5','D#5','E5','D#5','E5',
    'B4','D5','C5','A4','C4','E4','A4','B4',
    'E4','G#4','B4','C5','E4','E5','D#5','E5',
    'D#5','E5','B4','D5','C5','A4','C4','E4',
    'A4','B4','D4','C5','B4','A4','C4'
];

var bass_synth = new Tone.Synth().toMaster();
var bass_data = [
    'C3', null, null, 'C3', 'G2', 'G2', null, null,
    'G2', 'G2', null, 'G2', 'C3', null, null, null
  ];

function addBass(time, note) {
   // bass_synth.triggerAttackRelease(note, '4n', time);
}
var bass   = new Tone.Sequence(addBass, bass_data).start();


var accompaniment_time_ary = [
    5999,6666,7998,8665,9997,10664,13994,14661,
    15993,16660,17992,21989,22656,23988,24655,25987,
    26654,29984,30651,31983,32650,33982,36314,36647,
    38312,38645,40310,40643,41975,41975,49969,50636,
    51968,52635,53967,54634,57964,58631,59963,60630,
    61962,61962
    ];
var accompaniment_data = [
    'A3','E3','G#3','E3','A3','E3','A3','E3',
    'G#3','E3','A3','A3','E3','G#3','E3','A3',
    'E3','A3','E3','G#3','E3','A3','G3','C4',
    'G3','B3','A3','C4','E3','G#3','A3','E3',
    'G#3','E3','A3','E3','A3','E3','G#3','E3',
    'A2','E3'
];
var startAccompTime = new Date(), diffAccompTime = new Date();
var countAccomp = 0;
var nextTime = 0;
var accompaniment_scale;


var countUp = 0;
var startTime = new Date(), atTime = new Date(), diffTime = new Date();

document.addEventListener("DOMContentLoaded", function(){
    var ripple_wood = document.getElementById("ripple_div");

    ripple_wood.addEventListener("click", function () { 
        var synth = new Tone.Synth().toMaster();

        if(count == 0){
            startAccompaniment();
            startMelody();
            Tone.Transport.start();
            startTime = new Date();
            atTime = new Date();
        }
        else{
            atTime = new Date();
        }
        diffTime = atTime.getTime() - startTime.getTime();
        console.log(diffTime);

        
        for(var i=0; i<melody_time_ary.length; i++){
           // console.log(melody_time_ary[i] * BPNConvertMSEC);
            if((melody_time_ary[i]-1) <= diffTime + melody_time_ary[0]){
                music_scale = melody_data[i];
            }
        }
        

        //music_scale = melody_data[countUp];
        countUp++;
        synth.triggerAttackRelease(music_scale, "8n"); 

        if((melody_time_ary[melody_time_ary.length]) < diffTime){
            Tone.Transport.stop();
            count = 0;
        }
        else{
            count++;
        }
    }, false);

}, false);

function waitNote(msec, count){
    var objDef = new $.Deferred;
    setTimeout(function(){
        objDef.resolve(count);
    }, msec);
    return objDef.promise(count);
}

function startAccompaniment(){
    var synth = new Tone.Synth().toMaster();
    for(var i=0; i<accompaniment_time_ary.length; i++){
        nextTime = accompaniment_time_ary[i] - melody_time_ary[0];

        waitNote(nextTime, i).done(function(count){
            accompaniment_scale = accompaniment_data[count];
            synth.triggerAttackRelease(accompaniment_scale, "8n"); 
            console.log(count);
        });
    }
}

function waitNote_melody(msec, count){
    var objDef = new $.Deferred;
    setTimeout(function(){
        objDef.resolve(count);
    }, msec);
    return objDef.promise(count);
}

function startMelody(){
    var synth = new Tone.Synth().toMaster();
    for(var i=0; i<melody_time_ary.length; i++){
        nextTime_melody = melody_time_ary[i] - melody_time_ary[0];

        waitNote_melody(nextTime_melody, i).done(function(count){
            music_scale = melody_data[count];
            synth.triggerAttackRelease(music_scale, "8n"); 
            console.log(count);
        });
    }
}
