document.addEventListener("DOMContentLoaded", function(){
    var synth = new Tone.PolySynth(16).toMaster();

    MidiConvert.load("./MIDI/forelise_01.mid", function(midi) {

        // .midファイルと同じBPMに設定
        Tone.Transport.bpm.value = midi.header.bpm;

        // 必要なパート分をループ
        for(var i=0; i<midi.tracks.length; i++) {
            new Tone.Part(function(time, note) {

                // .midファイルの通りに発音させる
                synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);

            }, midi.tracks[i].notes).start();
        }
    
        // 全体のパートを同期させて演奏
        Tone.Transport.start();
    });
}, false);
