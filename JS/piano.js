document.addEventListener("DOMContentLoaded", function(){
    //DOM
    var Key = document.querySelectorAll('#piano li');

    //シンセ生成
    var synth = new Tone.Synth().toMaster();

    //鍵盤数分ループ
    for (var i = 0; i < Key.length; i++) {
        Key[i].addEventListener("click", function () { 
            //ID名取得
            var idName = this.id;
            //音階を代入
            synth.triggerAttackRelease(idName, "8n"); 
        }, false);
    }
}, false);
