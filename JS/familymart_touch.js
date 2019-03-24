var ToneBPM = 140;
var music_scale;
var BPNConvertMSEC = 60 / ToneBPM * 1000;
Tone.Transport.bpm.value = ToneBPM;
console.log(BPNConvertMSEC);

var count = 0;
var melody_time_ary = [
    0,333,667,1000,1333,1667,2000,2333,2667,3333,3667,4000,4333,4667,5333,5667,6000,6333,6667,7333,7667,8000,8333,8667,9000,9333,9667,10000,10333,10667,11333,11667,12000,12333,12667,13333,13667,14000,14333,14667,16000,16333,16667,17000,17333,17667,18000,18333,18667,19333,19667,20000,20333,20667,21333,21667,22000,22333,22667,23333,23667,24000,24333,24667,25000,25333,25667,26000,26333,26667,27333,27667,28000,28333,28667,29333,29667,30000,30333,30667,31667,32000,32333,32667,33000,33333,33667,34000,34333,34667,35000,35333,35667,36000,36333,36667,37000,37333,37667,38000,38333,38667,39333,39667,40000,40667,41000,41333,41667,42000,42333,42667,43000,43333,43667,44000,44333,44667,45000,45333,45667,46000,46333,46667,47333,47667,48000,48333,48667,49333,49667,50000,50333,50667,51333,51667,52000,52333,52667,53000,53333,53667,54000,54333,54667,55333,55667,56000,56333,56667,57333,57667,58000,58333,58667
];
var melody_data = [
    'E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','E4','G#4','B4','C5','E3','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','E4','C5','B4','A4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','E4','G#4','B4','C5','E3','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','E4','C5','B4','A4','B4','C5','D5','E5','G3','C4','G4','F5','E5','D5','G3','B3','F4','E5','D5','C5','A3','C4','E4','D5','C5','B4','E4','E4','E5','E5','E5','E6','D#5','E5','D#5','E5','D#5','E5','D#5','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','E4','G#4','B4','C5','E3','E4','E5','D#5','E5','D#5','E5','B4','D5','C5','A4','E3','C4','E4','A4','B4','E3','D4','C5','B4','A4'
];


Tone.Transport.loop = false;

var bass_synth = new Tone.Synth().toMaster();
var bass_data = [
    'C3', null, null, 'C3', 'G2', 'G2', null, null,
    'G2', 'G2', null, 'G2', 'C3', null, null, null
  ];

function addBass(time, note) {
    bass_synth.triggerAttackRelease(note, '4n', time);
}
var bass   = new Tone.Sequence(addBass, bass_data).start();
var startTime = new Date(), atTime = new Date(), diffTime = new Date();

document.addEventListener("DOMContentLoaded", function(){

    var btn = document.getElementById("familymart");
    var ripple_wood = document.getElementById("ripple_div");

    ripple_wood.addEventListener("click", function () { 
        var synth = new Tone.Synth().toMaster();

        if(count == 0){
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
            if((melody_time_ary[i] - 1) <= diffTime){
                music_scale = melody_data[i];
            }
        }

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


