document.addEventListener("DOMContentLoaded", function(){

$.getJSON('JSON/forelise.json') // json読み込み開始
  .done(function(json){ // jsonの読み込みに成功した時
    console.log('成功');
    console.log(JSON.stringify(json));
  })
  .fail(function(){ // jsonの読み込みに失敗した時
    console.log('失敗');
  })
  .always(function(){ // 成功/失敗に関わらず実行
    console.log('必ず実行される');
  });
}, false);
