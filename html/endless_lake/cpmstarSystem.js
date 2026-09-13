var tiempoExtra = 45;
var adsUsados = false;
var continuePanel;
var classCallBack;
var _menu;
var poolID = 83649;
var overlay = '#overlay';
var videoAdListo = false;
var _callBack = [];
var tipo = null;
var adCompleto = false;
var enAds = false;
var conExit = false;
var testMode = false;
var NOADS = false;
var AD_object = null;
var comprarFakeFunction;
var hiloTimerAds = null;
var limiteTiempo = 75* 1000;
var mostrarAds = false;
var botonNoAdsApretado = false;
var adsDiv = null;
var enHuawei = false;
var soundBeforeAds = 0;
var musicBeforeAds = 0;
var gameName = "EndlessLake_";


var enGoogle = true;
var volumeMaster = true;

var rewardAd = null;
var rewardType = null;
var rewardCallback = null;
var hiloReward = null;

function adsTimer()
{
    mostrarAds = false;
    clearInterval(hiloTimerAds);
    hiloTimerAds = setInterval(adsTimer_metodo,limiteTiempo);
}
function adsTimer_metodo()
{
    clearInterval(hiloTimerAds);
    mostrarAds = true;
}



function GamesnackInit()
{
    _callBack = [];   
        if (enGoogle) {
        console.log("SE llamara a gamesnack READY");
        GameSnacks.game.ready();
        GameSnacks.audio.subscribe((isAudioEnabled) => {
            console.log("dentro del subcribe audio de google tenemos el audio enabled?? " + isAudioEnabled + " y minimizado " + minimizado);
            if(minimizado && isAudioEnabled)
            {
                console.log("minimizado es true y audioEnabled tambien, hacemos minimizado false");
                minimizado = false;          
                if(game.system.rutaGame != null)
                    console.log("Y EL INDEX MUTE " + game.system.rutaGame.muteSound);
                if(game.system.rutaGame.muteSound == 1)
                    return;                
            }
            var audioON = isAudioEnabled;
            if (audioON) {                   
                                
                desMutear();
                if(game.system.rutaGame.menu != null)
                {
                     game.system.rutaGame.menu.UISonidoBoton(true);
                }                    
                if(game.system.rutaGame.GameOver != null)
                {
                    game.system.rutaGame.GameOver.UISonidoBoton(true);
                }
                game.system.rutaGame.muteSound = 0;
            }
            else {
               mutear();
                 if(game.system.rutaGame.menu != null)
                {
                    game.system.rutaGame.menu.UISonidoBoton(false);
                }                    
                if(game.system.rutaGame.GameOver != null)
                {
                    game.system.rutaGame.GameOver.UISonidoBoton(false);
                }
            }
        });
        PrepareRewards();
        
    }   
    checkAudioGoogle();      
}

function checkAudioGoogle(){
    
    var audioON = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
            if (audioON) {                   
                                
                desMutear();
                if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                     game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(false);
                     game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(false);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                    game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(false);
                    game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(false);
                }
            }
            else {
               mutear();
                 if(game.system.rutaGame.menu_class != null && game.system.rutaGame.menu_class.pausePanel != null)
                {
                     game.system.rutaGame.menu_class.pausePanel.UISonidoBoton(true);
                     game.system.rutaGame.menu_class.pausePanel.UIMusicaBoton(true);
                }                    
                if(game.system.rutaGame.hud_class != null && game.system.rutaGame.hud_class.pauseClass != null)
                {
                    game.system.rutaGame.hud_class.pauseClass.UISonidoBoton(true);
                    game.system.rutaGame.hud_class.pauseClass.UIMusicaBoton(true);
                }
            }    
            console.log("El audio Init de gamesnack es " + audioON);
            game.system.rutaGame.muteSound = audioON ? 0 : 1;
}

function PrepareRewards() {

    PrepareRewardAd("continue");
    setTimeout(() => {
        PrepareRewardAd("booster");
    }, 200);
    setTimeout(() => {
        PrepareRewardAd("coins");
    }, 400);
}



function mutear()
{
    game.system.rutaGame.sonido = false;
   game.audio.muteSound();
   game.audio.muteMusic();
}
function desMutear(s1)
{
    game.system.rutaGame.sonido = true;
    game.audio.unmuteMusic();
    game.audio.unmuteSound();
   
}
function estadoSound()
{
    if(game.system.rutaGame.sonido)
        return(0);
    
    return(1);
}
function estadoMusic()
{
    return(0);
    //return(muteMusic);
}
function sonidoDeClick()
{
   game.audio.playSound("botonLowS");
}

function showAds(callBack)
{
   pause = true;
   soundBeforeAds = estadoSound();
   musicBeforeAds = estadoMusic();
   mutear();
   tipo = "ad";
   _callBack[0] = callBack;
   if(!testMode)
   {
      adsDiv.style.visibility = "visible";
      if(enHuawei)
            system.postMessage("inAds");
   }
   AD_object.showAd();
   enAds = true;
   
}
function showReward()
{
    pause = true;
    soundBeforeAds = estadoSound();
    musicBeforeAds = estadoMusic();
    mutear();
    tipo = "reward";   
    AD_object.showAd();
    if(!testMode)
    {
        adsDiv.style.visibility = 'visible';
        if(enHuawei)
            system.postMessage("inAds");
    }
    enAds = true;    
}
function finAds()
{
    if(tipo == "ad")
    {     
            
       _callBack[0]();       
    }
    else if(tipo == "reward")
    {
        adsUsados = true;
        if(adCompleto)
            _callBack[0]();
        else
            _callBack[1]();
    }
    if(soundBeforeAds == 0 && musicBeforeAds == 0)      
       desMutear(1,1);    
    else if(soundBeforeAds == 0)
        desMutear(1,0);
    else if(musicBeforeAds == 0)
        desMutear(0,1);
    pause = false;
    _callBack = [];
    adCompleto = false;
    enAds = false;
    if(!testMode)
    {
        adsDiv.style.visibility = 'hidden';
        if(enHuawei)
            system.postMessage("menu");        
    }
    
}  


function poneContinue(panel,callBackExito,callBackFallo)
{   
    
    continuePanel = panel;
    continuePanel.visible = true;  
    game.system.rutaGame.assets.alphaTimer.visible = true;
    
    console.log(_callBack);
    
    _callBack[0] = callBackExito;
    _callBack[1] = callBackFallo;    
    
    var continuePanel_fill = continuePanel.fill;
    var continuePanel_botonYES = continuePanel.botonYES;
    var continuePanel_botonNO = continuePanel.botonNO;
       
    continuePanel_fill.play("anim");
    continuePanel_fill.anims["anim"].onComplete = finTiempoContinue.bind(window);
    continuePanel_botonYES.interactive = true;
    continuePanel_botonNO.interactive = true;
    continuePanel_botonYES.mousedown =  continuePanel_botonYES.touchstart = clickRewardVideo.bind(window,true);
    continuePanel_botonNO.mousedown =  continuePanel_botonNO.touchstart = clickRewardVideo.bind(window,false);
        
    if(adsUsados || (enGoogle && rewardAd == null))
        detenerContinue(false,false);  
       
}
function finTiempoContinue()
{
   setTimeout(()=>{
        detenerContinue(false,true);    
   },60);

}
function clickRewardVideo(resp)
{    
    console.log("aprete esta cantidad de veces con respuesta " + resp);
   sonidoDeClick();
   detenerContinue(resp,true);    

}
function detenerContinue(resp,contadorEnMarcha)
{  
   
   var continuePanel_fill = continuePanel.fill;
    var continuePanel_botonYES = continuePanel.botonYES;
    var continuePanel_botonNO = continuePanel.botonNO;
    
   
   continuePanel_fill.stop("anim");
   continuePanel_fill.stop();
   continuePanel_botonYES.interactive = false;
   continuePanel_botonNO.interactive = false;
   continuePanel_botonYES.mousedown =  continuePanel_botonYES.touchstart =null;
   continuePanel_botonNO.mousedown =  continuePanel_botonYES.touchstart = null;
    console.log("continue resp quedo en " + resp);
    console.log(_callBack);
   if(!resp)
   {       
      _callBack[1]();
   }
   else
   {  
       adsUsados = true;
       var callBack = (resp)=>{
           
           if(resp)
           {
                _callBack[0]();
           }
           else
           {
               _callBack[1]();
           }
       };
       ShowRewardVideo("continue", callBack);
   }   
   continuePanel.visible = false;
   game.system.rutaGame.assets.alphaTimer.visible = false;

}
function publicidad(callBack,forzar)
{
    if(NOADS && !forzar)
    {     
        callBack();
        return;
    }
    
    if(mostrarAds || forzar)
    {
        if(videoAdListo)
        {
            showAds(callBack);
            adsTimer();
        }
        else
            callBack();
    }
    else
        callBack();
    
}
function clickNoAds(boton,contact)
{
   botonNoAdsApretado = true;
   sonidoDeClick();
    if(testMode)
    {
        comprarFakeFunction();
         boton.enabled = false;
    }
    else
        comprarIAP("removeAds",boton,contact);
   
};


function saveVars(variable,nombre)
{  
   if(!supports_html5_storage())
        return(false);
    
    nombre = gameName + nombre;
    if(!enGoogle)
        localStorage.setItem(nombre,variable+"");
    else
        GameSnacks.storage.setItem(nombre, variable);
}
function loadVars(nombre)
{        
        
    if(!supports_html5_storage())
        return(0);
    
    nombre = gameName + nombre;
    if(!enGoogle)
        return(localStorage.getItem(nombre));             
    else
      return (GameSnacks.storage.getItem(nombre));  
    
}
function supports_html5_storage(){
     if (!enGoogle) {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch(e) {
            return false;
        }
    }
    else
    {
        return(true);
    }
}

function PrepareRewardAd(nameBooster) {
    if (enGoogle) {
        console.log("Se llama al ad break! " + nameBooster);
        if (rewardAd == null) {
            console.log("Reward ad no existe!! se crea evento reward ad");
            GameSnacks.ad.break({
                type: 'reward',  // ad shows at start of next level
                name: "button" + "_" + nameBooster,
                beforeAd: () => { BeforeVideoAd() },
                beforeReward: (showAdFn) => {
                    console.log("funcion before Reward q pasa ?? " + nameBooster);
                    console.log(showAdFn);
                    rewardAd = showAdFn;
                },
                adDismissed: () => { console.log("AD WAS CLOSED NOT VIEWED"); },
                adViewed: () => { console.log("AD WAS VIEWED and CLOSED"); },
                adBreakDone: (placementInfo) => { AfterVideoAd(placementInfo); },    // resume the game flow.
            });
        }
        else {
            console.log("Reward ad ya existe, solo se arregla el boton");
        }
    }
}
var desmutearDespuesDeAd = false;

function BeforeVideoAd() {
    console.log("ANTES DE VER EL AD!!! ");
    var _volumeMaster = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
    if (_volumeMaster) {
        if (game.system.rutaGame.sonido) {                      
            mutear();
            desmutearDespuesDeAd = true;            
        }       
    }

}
function AfterVideoAd(placementInfo) {
    rewardAd = null;
    console.log("DESPUES  DE VER EL AD!!! " + rewardType + " placement: " + placementInfo);
    console.log(placementInfo);
    if (desmutearDespuesDeAd) {
        var _volumeMaster = enGoogle ? GameSnacks.audio.isEnabled() : volumeMaster;
        if (_volumeMaster) {
                if (!game.system.rutaGame.sonido) {                      
                    desMutear();
                    desmutearDespuesDeAd = false;                
                }       
        }
    }
    var type = rewardType;
    rewardType = null;
    if (placementInfo.breakStatus == "viewed") {
        console.log("DESPUES  DE VER EL AD!!! PERO SI VI EL AD " + type);
        AfterAd(true, type, placementInfo.breakStatus);
    }
    else {
        AfterAd(false, type, placementInfo.breakStatus);
    }
}

function ShowRewardVideo(type, callBack) {
  
    rewardType = type;
    rewardCallback = callBack;
    if(enGoogle)
        rewardAd();
    else
    {
        rewardCallback(true);
        rewardCallback = null;
        rewardType = null;        
    }
}

function AfterAd(visto, type, breakStatus) {

    //rewardPanelAd.enabled = false;    
    console.log("Ejecutaremos callback del tipo " + type + " y el status " + breakStatus + " y fue visto? " + visto);
    if (visto) {
        rewardCallback(true);
        rewardCallback = null;
        clearTimeout(hiloReward);
        hiloReward = setTimeout(() => {
            PrepareRewards();
        }, 1000);
    }
    else {
        if (rewardCallback != null)
            rewardCallback(false);
        rewardCallback = null;
        clearTimeout(hiloReward);
        var time = breakStatus == "dismissed" ? 1000 : 6000;
        hiloReward = setTimeout(() => {
            PrepareRewards();
        }, time);
    }

}

