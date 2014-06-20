$(document).ready(function() {
  var socket = new WebSocketRails('localhost:3000/websocket');
  var name = prompt("Please enter your name", 'foo');
  var myId = name + Math.random().toString();
  var game = {id: myId}
  socket.trigger('games.create', game)
  var nes;
  nes = new JSNES({ 'ui': $('#emulator').JSNESUI(['World Cup'])});
  // 88[A] = va// X
  // 89[B] = va// Y
  // 90[B] = va// Z
  // 17[SELECT]// Right Ctrl
  // 13[START] // Enter
  // 38[UP] = v// Up
  // 40[DOWN] =// Down
  // 37[LEFT] =// Left
  // 39[RIGHT] // Right

  function pushKey(keyCode) {
    nes.keyboard.setKey(keyCode, 0x41);
    setTimeout(function() { nes.keyboard.setKey(keyCode, 0x40) }, 500);
  }

  socket.bind('games.update', function(game) {
    if (game.name != myId) {

      keyCode = {88: 103, 89: 105, 90: 105, 17: 99, 13: 97, 38: 104, 40: 98,
        37: 100, 39: 102}[game.keyCode]
        if (nes.keyboard != undefined) {
          pushKey(keyCode);
          console.log('recd' + game.keyCode + game.name);
        }
    }
  });
  window.wcSend = function(keyCode) {
    socket.trigger('games.update', {name: myId, keyCode: keyCode});
  }

  setTimeout(function() {
  $.each([40,13], function(index, keyCode) { pushKey(keyCode) })}, 4800)

});
