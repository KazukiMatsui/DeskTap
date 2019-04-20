var music_scale;
var music_length;
var ToneBPM = 90;
var BPNConvertMSEC = 60 / ToneBPM * 1000;
Tone.Transport.bpm.value = ToneBPM;
console.log(BPNConvertMSEC);

var count = 0;

var melody_length_ary, melody_time_ary, melody_data, melody_volume_ary, melodyFlagAry, bgmFile;
var countUp = 0;
var atCount = 0;
var startTime = new Date(), atTime = new Date(), diffTime = new Date();

var beforeX = 0, beforeY = 0;
var norm_threshold = -1;
var beforeRange = 100;
var afterRange = 100;


document.addEventListener("DOMContentLoaded", function(){
    var ripple_wood = document.getElementById("ripple_div");
    var musicTitle = document.getElementById('musictitle').title;
    var getScriptName = "JS/" + musicTitle + ".js";

    $.getScript(getScriptName, function(){
        melody_length_ary = melody_length_ary1;
        melody_time_ary = melody_time_ary1;
        melody_data = melody_data1;
        melody_volume_ary = melody_volume_ary1;
        melodyFlagAry = createBrankAry(melody_time_ary);
        bgmFile = bgmFilePS;

        for(var i=0; i<melody_time_ary.length; i++){
            melody_time_ary[i] = melody_time_ary[i] + delayTime;
        }

        console.log(resText);
    });
    
    ripple_wood.addEventListener("mousedown", function (event) { 
        var norm = Math.sqrt( Math.pow(event.pageX - beforeX,2) + Math.pow(event.pageY - beforeY, 2));
        //console.log(norm);
        beforeX = event.pageX;
        beforeY = event.pageY;

        var synth = new Tone.Synth().toMaster();
        //synth.volume.value = 1;
        if(count == 0){
            //startAccompaniment(accompaniment_time_ary, accompaniment_data);
           // startAccompaniment(melody_time_ary1, melody_data1, melody_length_ary1, melody_volume_ary1, melodyFlagAry, false);
            startAccompaniment(melody_time_ary, melody_data, melody_length_ary, melody_volume_ary, melodyFlagAry, false);
            Tone.Transport.start();
            startTime = new Date();
            atTime = new Date();
            countUp = 0;
            atCount = 0;
            new Audio(bgmFilePS).play();  
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
                            music_length = melody_length_ary[i];
                            melodyFlagAry[i] = 1;
                        }else{
                            music_scale = music_scale;
                            music_length = music_length;
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
                    synth.volume.value = -20;
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

