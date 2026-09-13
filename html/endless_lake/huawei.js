var logueado = false;
var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        

	// huawei api //
	

	var botonAds = null;
	var contactboton = null;
	var merchantID = "2640056000000611590";
	var applicationID = "102354185";	
	var publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsR3IiGEZ6Io+n3tU4/0gElDNpUxCQ7l4BFEmD4vIA1PfGXCfM04v5psSgCMflS4GwPSFEGwJ4aI0UP6QG3HjW3JBh9nv35vW8yJVGsnh4WUfS5WVxEmp4eWUWTDcz5qDwDG9+mMtXr5umoyfUIDN51MlXiiamxJMxCIME0QtVXgdgPyRWFhpObiSPaKiiyIvDGpWne5th1keVzLAexxGG5IYPIGUaV4Q58Ighrcuuf0IuJbkKAlWw8q0f+5pwRH1DvmDieDMLD/OpSMlOwXG8caC8a/ArUS9vEXxpyN4Pvm6LT/QrKydWoqH8QaypQAYb+MbJKajjrm7klPyAm9d0wIDAQAB";
	var privateKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxHciIYRnoij6fe1Tj/SASUM2lTEJDuXgEUSYPi8gDU98ZcJ8zTi/mmxKAIx+VLgbA9IUQbAnhojRQ/pAbceNbckGH2e/fm9bzIlUayeHhZR9LlZXESanh5ZRZMNzPmoPAMb36Yy1evm6ajJ9QgM3nUyVeKJqbEkzEIgwTRC1VeB2A/JFYWGk5uJI9oqKLIi8Malad7m2HWR5XMsB7HEYbkhg8gZRpXhDnwiCGty65/Qi4luQoCVbDyrR/7mnBEfUO+YOJ4MwsP86lIyU7BcbxxoLxr8CtRL28RfGnI3g++botP9CsrJ1aiofxBrKlABhv4xskpqOOubuSU/ICb13TAgMBAAECggEACJxjaUGLuj9leyGuGRsMAQKfWVNPzlFT1qVydLVBQeu22QVWeBlrssLoL1qiPgGWZupDiIsUka7RlhkmrqfKX0WQHLXUN6337cd+3J7/mT1DkZNjvfe8MjUiSpIEP5HYb7ne7b3h+CKQPSQy2OFU6H4zsKmO7Hh1EhlejAhbLaed3JvIxvF92j6xHcG2gTdUInCvFZRMc+fV3BDi/9uLV4HhnZywQnss5uu8/7rc9V7AfkFefERytkJ+cwGWig3NO4Z/EkC1/wmG9ezRzDoflXncgQBQox402w8kRbaApz5GMfcmQetnxv9vpzalvfTb+RNPG8BOYyV5OOzapCmpwQKBgQDpe2mM3JYbvBj/5D/fR4kethba2yx/nMvz9lhbJ7pYK+bGwuAavg9HA49ljHDemJ2oMRFZ8M6HfzrGBs9toaLiXqlh11HlGsuOe3CCvjlWJ3rXJ7wEbQflYyV2kCpjtX2eYlmb50bnu9hcwmqdoYX5XdygRzSVsPOZ8Z9WdLyCSwKBgQDCMrivxqxieSbRhMJxU2mj9c88jVCIKfvUZfQAx6lytUsZPOsZrYgLZHNDdzJnQFHxiQzj24G9KO737DWJPTAjnY08YjGuavG3J5KpVL01OTxDm+2tDHHpR6Eo0XlWIzplHseMtWik5La0fFexg8AHKxRbKMSMpIHlnzeo7ykdmQKBgBMz0TSCl93kFHJHRXGJop9h/nM1f21naebApfepRswloC9Mq73HT95ZTpvddxL3nk/M6U5qXbILJrxOpxSvLIRNoMSpPtUG5SLsyA4YswKA8LttSytaBEI7a0NbDAFzVceG8zO9S7mXW24Vl0srk6c0rwaHlK2TBhXtJ1um8jINAoGBAIVMfZsiO0eos22TvEg/oj7KRoLg2Uttzg9gIBm882HqcW8UcqgAhmaTf87qba2T5+tsUG3DSY3HICkLeUAHwRhhWAX/vOxlOh+nSTN0GCAFdolN6dojtbkT0tqK1se6jKXGd+Ds0LSGzaabxzHxJomFF4bvN+L2NLeiD3mlGErZAoGBALlZNv9OdCjzJuk+1z5asHy3QWu9CqX7lj28fnw4iM64KoTpD40otV9XeddBtojpNTMxdDQZr1THdk+OljCDES66/nr3DpZRu/A6drMAlsOuTHSOHSPPGyWYvXOipTos+VIA3U4jci8rA2thwDpX7fIdXHRaPWaFNeYuE4hzO5gl";
	var SDKCHANNEL = 3;
	var requestID = "999";
	var sign = "OcdGMY3tTKGQ6TWVzbIDpM0+OCxXEokcxT2oyBsceXT0rZOAAX0BsFoQAkJxLhAXJo4nR+YHgR04yuYzcly19dh9WKRCROh+2vkJu6m/ch2/hM8jjWR502NiA/TJhxNQFk3/KaD90IfGNy/cF3q50s7J1+813rSriyYJAysIGqXLwcIeZDN356Ih4w5o/lcIqiGwg4ny3LDvwpcqAAtUQuh1ENAYQAWhvfW8GtNBOl+vNoInvRnEhJKNLHfuXdjWIMShbO/azaIXvy3HFRK0mEodBIn32Th73XQ4pCHgXP7j+PytCGPbwUmIUb1isRkPICK2rLba4lnkZEmm46VLUw==";
	var gameN = "EndlessLake/";
	var url = "https://bekho.io/proyectos/huawei/RPK/";
	var  _productID;
	var  _productNAME;
	var _callBack = null;	
	var botonApretado = false;
		
  function productPay (productID,productNAME){

	   _productID = productID;
	   _productNAME = productNAME;	
	  
	   getNewRequestID();
	   this.conexionHttp(url+"sign.php",["merchantId",merchantID,"applicationID",applicationID,"requestId",requestID,"productNo",productID,"sdkChannel",SDKCHANNEL],"POST",readyForPay);
	  
   
    }
	 function getProductDetails (productNAME){
			console.log("voy a ejecutar el product detail con el producto " + productNAME);
        var params = {
            "merchantId": merchantID,
            "applicationID": applicationID,
            "requestId": requestID,
            "productNos": productNAME}//"grtyrtyr|yuFan|hello|yull|aa"}
            HwFastappObject.getProductDetails(JSON.stringify(params));
    }
function readyForPay(xmlhttp)
{	
	console.log("[HMS callback ejecutado");
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		console.log("[HMS ahora recien voy a pagar!!");
		var resp = xmlhttp.responseText;
		console.log("[HMS ESTO ME LLEGO " + resp);
		sign = resp;
		var params = {
			"merchantId":merchantID,
			"applicationID": applicationID,
			"requestId": requestID,
			"productNo": _productID,
			"serviceCatalog":"X6",
			"merchantName":_productNAME,
			"sdkChannel":SDKCHANNEL,
					   "publicKey":publicKey,
					   "sign": sign
			}
		HwFastappObject.productPay(JSON.stringify(params));
	}
	else   if (xmlhttp.readyState==4 && xmlhttp.status !=200)
	{
		botonApretado = false;
		system.postMessage("Server error, please try again later");
	}
}	

function GamesignIn(){
	 
	 	if(logueado)
			return;
            console.log("me voy a loguear CTM! " + applicationID);
                    var params = {"appid":applicationID,"forceLogin":1}
                    HwFastappObject.gameLogin(JSON.stringify(params));
            }
	
if (window.isMobile.any() && enHuawei)			
{
		HwFastappObject.onGameLoginResult = function onGameLoginResult(str){
			
					
			//document.getElementById("resultnew").innerHTML= str.code;
			//document.getElementById("result").innerHTML= str.data
			var reusultcode=str.code;
			console.log("EL CODIGO RESULTADO DEL LOGUEO" + reusultcode);
			if(reusultcode == 0)
			{
				//console.log(JSON.stringify(str));
				//console.log("Q WEA ?!?!?  " + str.isAuth);
				if(str.gameUserData.isAuth == 1)
				{
						logueado = true;
						console.log(JSON.stringify(str));
						console.log("ESTOY LOGUEADO MIERDA");
						//system.postMessage(currentMenu);
						console.log("ejecutare el product detail de removeAds");
						system.postMessage("Hello "+ str.gameUserData.displayName);
					    //getProductDetails("removeAds");						
						//getAds();
						
						//productPay("removeAds","Remove Ads");
					
				}
			}
			// Cancel sign-in.
			if(reusultcode==7004 || reusultcode==2012){
					console.info("onGameLoginResult cancel");
			 // Exit the quick game.
			 System.postMessage("exitapp");
			}
	}	
	 HwFastappObject.onProductPayResult  = function onProductPayResult (str){
		 
		// console.log("test "+ str.data['errMsg']);
		 console.log(str.data);
		
		if(str.data == "productPay fail!")		 
		{
			system.postMessage("Error, please try again later");
			botonApretado = false;		
		}
		else if(str.data.includes("success"))
			compraOK("Congratulations!\nno more ads in your game!");
		 
        //console.log("Payment result:sign:"+JSON.stringify(str));
        //console.log("HwFastappObject","productPay ="+JSON.stringify(str));

    }
	
	   
    HwFastappObject.onGetProductDetailsResult  = function onGetProductDetailsResult (str){
		console.log("el resultado del product detail");
        console.log("Query result:sign:"+JSON.stringify(str));
        //system.postMessage("web call quickapp");		
	
		
        console.log("HwFastappObject","onGetProductDetailsResult ="+JSON.stringify(str));
    }
	
	HwFastappObject.onGetPurchaseInfoResult  = function onGetPurchaseInfoResult (str){
		console.log("Query result NEW5:sign:"+JSON.stringify(str));
		var resp = JSON.parse(JSON.stringify(str));
		var data = JSON.parse(JSON.stringify(resp.data));
		var data =  JSON.parse(data);
		var purchaseInfo = data.purchaseInfoList;
		console.log(purchaseInfo.length);	
		var pID = null;
		if(purchaseInfo.length > 0)
			pID = purchaseInfo[0].productId;
		if(pID == "removeAds")			
			compraOK("Purchase Restored!\nNo more ads!")	
		else
			_callBack();
		
		//console.log("HwFastappObject","onGetPurchaseInfoResult ="+JSON.stringify(str));
		
	}
	
	GamesignIn();
}

function comprarIAP(iap,boton,contact)
{
		
		if(botonApretado)
			return;
	    botonApretado = true;
		botonAds = boton;
		contactboton = contact;
		callBack = productPay.bind(window,iap,"Remove Ads");
		_callBack = callBack;
		var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
		timeStampInMs = Math.round(timeStampInMs);						
		productoYaComprado(iap,timeStampInMs,callBack);
	
		
}
function compraOK(msg)
{
	console.log("COMPRADO!");
	NOADS = true;  
	botonAds.visible = false;
	system.postMessage(msg);
	saveVars("yes","noMoreAds");	
	contactboton.position.set(botonAds.x,botonAds.y);
	botonApretado = false;		
	
}
 function conexionHttp(url,params,TIPO,funcion)
{
                var xmlhttp;
                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp=new XMLHttpRequest();
                }
                else
                {// code for IE6, IE5
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange= funcion.bind(this,xmlhttp);
				if(TIPO == "GET")
				{
					if(params.length > 0)
					{
						for(var i = 0; i < params.length; i++)
						{
							if(i == 0)
								url = url + "?"+params[i]+"="+params[i+1];
							else
								url = url + "&"+params[i]+"="+params[i+1];
							i = i + 1;
						}
					}
					xmlhttp.open("GET",url,true); //Calls the php update file
					xmlhttp.send();
				}
				else if(TIPO == "POST")
				{
					var formData = new FormData();
					
					if(params.length > 0)
					{
						for(var i = 0; i < params.length; i++)
						{
							formData.append(params[i], params[i+1]);
							i = i + 1;
						}
					}
					xmlhttp.open("POST",url);
				   xmlhttp.send(formData);
				}
               
                console.log("llame al more games data");
}

function getNewRequestID()
{
	var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
	timeStampInMs = Math.round(timeStampInMs);
	console.log("[HMS MI TIMESTAMP!!! " + timeStampInMs);
	var randomNumber = Math.ceil(Math.random()*999);
	requestID = randomNumber +""+ timeStampInMs;
	console.log("HMS mi ranbdo fbnal " + requestID);
}
function productoYaComprado(productID,timeStamp)
{
	 _productID = productID;	
	_timeStamp = timeStamp;

	//para obtener firma
	this.conexionHttp(url+"sign.php",["merchantId",merchantID,"appId",applicationID,"priceType","3","productId",_productID,"pageNo","1","ts",_timeStamp],"POST",resp_productoYaComprado);	

}
function resp_productoYaComprado(xmlhttp)
{	
	console.log("[HMS callback ejecutado resp check producto");
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		console.log("[HMS ahora recien voy a CHECKEAR!!");
		var resp = xmlhttp.responseText;
		sign = resp;	
		console.log("esta wea llego " + resp);
		var params = {
			"merchantId": merchantID,
			"appId": applicationID,
			"requestId": requestID,
			"priceType": "3",
			"productId":_productID,
			"pageNo":1,
			"ts": _timeStamp,
			"publicKey":publicKey,
			"sign": sign
			}
		HwFastappObject.getPurchaseInfo(JSON.stringify(params));						
			
	}
	else   if (xmlhttp.readyState==4 && xmlhttp.status !=200)
	{
		botonApretado = false;
		system.postMessage("Server error, please try again later");
	}
}

