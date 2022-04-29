function getAppStore() {

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
    return window.location.href = "https://apps.apple.com/br/app/leiturinha/id1510033515";
  } else if( userAgent.match( /Android/i ) ) {
    return window.location.href = "https://play.google.com/store/apps/details?id=com.movile.leiturinha&hl=pt_BR&gl=US";
  } else {
    return console.log('Erro ao abrir a loja de aplicativos');
  }
}