function embedSWF(url, cont) {
  let ruffle = window.RufflePlayer.newest();
  let player = Object.assign(
    document.getElementById(cont).appendChild(ruffle.createPlayer()),
    {
      style: "width: 100%; height: 100%; position: absolute; top: 0; left: 0; border: 0;"
    }
  );
  player.load({ url: url, allowScriptAccess: true });
}
