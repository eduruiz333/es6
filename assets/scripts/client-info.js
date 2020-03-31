(function operatingSytem() {

    var browser = navigator.appVersion;

    var OSName="Sistema Operacional desconhecido";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";


    document.querySelector('.sys-info').innerHTML = OSName;

    document.querySelector('.browser').innerHTML = browser;

})();