var ToneBPM = 140;
var music_scale;
var BPNConvertMSEC = 60 / ToneBPM * 1000;
Tone.Transport.bpm.value = ToneBPM;
console.log(BPNConvertMSEC);

var count = 0;
var melody_time_ary = [
    1,2,3,4,5,6,8,9,10,11,12,13
];
var melody_data = [
    'E5', 'C5', 'G4', 'C5', 'D5', 'G5', 'G4',
    'D5', 'E5', 'D5', 'G4', 'C5'
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
            if((melody_time_ary[i] - 1) * BPNConvertMSEC <= diffTime){
                music_scale = melody_data[i];
            }
        }

        synth.triggerAttackRelease(music_scale, "8n"); 

        if(((melody_time_ary.length) * BPNConvertMSEC) < diffTime){
            Tone.Transport.stop();
            count = 0;
        }
        else{
            count++;
        }
    }, false);

}, false);


