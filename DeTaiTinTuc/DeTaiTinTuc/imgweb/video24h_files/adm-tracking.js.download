function admTracking(data){
  return;
  if(Object.size(data) > 0){

    var _lstData = data;

    for(var i in _lstData){
      if(document.domain == i) {
        for(var j in _lstData[i]){
          var bannerId = j;

          var banData = _lstData[i][j];

          var loc = banData.l.split(',');

          var age = banData.age.split(',');

          var gender = banData.gender.split(',');

          var product = banData.product;

          var cid = banData.cid;

          var seed = banData.seed;

          var zones = banData.zones;

          var ctr = banData.ctr;

          var linkClick = banData.linkclick;

          var url = function() {
            var strlocation = document.URL + '';
            var hostname = document.domain + '';
            if (hostname == '') {
              return strlocation;
            } else {
              return strlocation.substring(strlocation.indexOf(hostname) + hostname.length, strlocation.length);
            }
          }

          if(ADS_CHECKER.in_array(ADS_CHECKER.getStorage('__R'), loc) && ( age == 0|| ADS_CHECKER.in_array(ADS_CHECKER.Age, age)) && ( gender == 0|| ADS_CHECKER.in_array(ADS_Gender, gender))){
            if(product == 'hookeye_kingsize'){

              if(Math.random() < seed){
                var _trackingImp = '//lg1.logging.admicro.vn/atvc?p='+encodeURIComponent(cid+';'+bannerId+';'+zones[Math.floor(Math.random() * zones.length)]+';-1;-1;9;0;0;'+document.domain)+'&tpn=5&path='+encodeURIComponent(url())+'&cov=0'+__AdmsendRandom;

                __admTracki3Rd(_trackingImp);

                if(Math.random() < ctr){
                  var _trackingClick = '//lg1.logging.admicro.vn/atvc?p='+encodeURIComponent(cid+';'+bannerId+';'+zones[Math.floor(Math.random() * zones.length)]+';-1;-1;9;0;0;'+document.domain)+'&tpn=5&path='+encodeURIComponent(url())+'&cov=1'+__AdmsendRandom+'&re=';

                  __admTracki3Rd(_trackingClick);

                  var a = document.createElement('iframe');
                  a.style.width = '0';
                  a.style.height = '0';
                  a.src = linkClick;

                  document.body.appendChild(a);

                  a.onload = function(){
                    window.setTimeout(function(){
                      a.remove();
                    }, 15000);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
