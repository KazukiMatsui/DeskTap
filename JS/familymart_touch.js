var count = 0;
var melody_data = [
    'E5', 'C5', 'G4', 'C5', 'D5', 'G5', 'G4',
    'D5', 'E5', 'D5', 'G4', 'C5'
];

Tone.Transport.bpm.value = 140
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


document.addEventListener("DOMContentLoaded", function(){

    var btn = document.getElementById("familymart");
    var ripple_wood = document.getElementById("ripple_div");

    ripple_wood.addEventListener("click", function () { 
        var synth = new Tone.Synth().toMaster();

        var music_scale = melody_data[count];
        synth.triggerAttackRelease(music_scale, "8n"); 

        if(count == 0){
            Tone.Transport.start();
        }
        else if(count == melody_data.length - 1){
            Tone.Transport.stop();
        }
        
        if(count < melody_data.length - 1){
            count++;
        }else{
            count = 0;
        }

    }, false);

}, false);


