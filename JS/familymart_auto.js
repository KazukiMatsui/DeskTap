var melody_synth = new Tone.Synth().toMaster();
var bass_synth = new Tone.Synth().toMaster();
var melody_data = [
  'E5', 'C5', 'G4', 'C5', 'D5', 'G5', null, 'G4',
  'D5', 'E5', 'D5', 'G4', 'C5', null, null, null
];
var bass_data = [
  'C3', null, null, 'C3', 'G2', 'G2', null, null,
  'G2', 'G2', null, 'G2', 'C3', null, null, null
];
function addMelody(time, note) {
  melody_synth.triggerAttackRelease(note, '4n', time);
}
function addBass(time, note) {
  bass_synth.triggerAttackRelease(note, '4n', time);
}

var melody = new Tone.Sequence(addMelody, melody_data).start();
var bass   = new Tone.Sequence(addBass, bass_data).start();
Tone.Transport.bpm.value = 140

function play_music() {
  Tone.Transport.start();
}

function stop_music() {
  Tone.Transport.stop();
}
