var navigatorMessageMap = {
  'mac': 'macos',
  'iphone': 'macos',
  'win': 'windows',
  'linux': 'linux',
  'android': 'android'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
  key = key.toLowerCase();
  var version = navigatorMessageMap[key];
  
  if (platform.indexOf(key) >= 0){
    var os_message = document.querySelector("div[data-version="+version+"]");
    os_message.style.display = "flex";
  }
}