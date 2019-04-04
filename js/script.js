function adSetter(){
    //alert(navigator.userAgent);
    var admobid = {};
    //select the right Ad Id according to platform
    if( /(android)/i.test(navigator.userAgent) ) {
        //alert("HI");
        admobid = { // for Android
            banner: 'ca-app-pub-6933709139102052/5355052747',
            //alert("WHY SO");
           interstitial: 'ca-app-pub-6933709139102052/6797440004'
        }
    } 
    else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: 'ca-app-pub-6933709139102052/5355052747',
            interstitial: 'ca-app-pub-6933709139102052/6797440004'
        };
    } 
    else {
        admobid = { // for Windows Phone
            banner: 'ca-app-pub-6933709139102052/5355052747',
            interstitial: 'ca-app-pub-6933709139102052/6797440004'
        };
    }
    if(window.AdMob) AdMob.createBanner( {
        //isTesting:true, //Remove this Before publishing your app
        adId:admobid.banner, 
        position:AdMob.AD_POSITION.CENTER, 
        autoShow:true} );

        if(window.AdMob) AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:false});

    }
    function onDeviceReady()
    {
      //alert("device ready");
        adSetter();
    }
    function domLoaded()
    {
        document.addEventListener("deviceready", onDeviceReady, false);
    }