window.onload = function() {
  var resultsRegion = document.getElementById('error-results');
  if (resultsRegion) {
    getSearchData();
  }
  transformImages();
  loadAnalytics();
}

function getSearchData() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var searchData = JSON.parse(this.responseText);
      processSearchData(searchData);
    }
  };
  var requestURL = document.location.origin + '/openshift-origin-design/assets/js/search-data.json';
  request.open('GET', requestURL, true);
  request.send();
}

function processSearchData(searchData) {

  let currentSlug = window.location.href.split('/').pop();

  console.log("Current slug is: " + currentSlug);

  //console.log(Object.keys(searchData).length);

  results = [];
  for (var i = 0; i < Object.keys(searchData).length; i++) {
    //console.log(searchData[i]["slug"]);
    if (searchData[i]["slug"].includes(currentSlug)) {
      results.push(searchData[i]);
    }
  }

  console.log("Results are:");
  console.log(results);

  insertResults(results);
}

function insertResults(results) {
  let currentSlug = window.location.href.split('/').pop();

  var resultsRegion = document.getElementById('error-results');
  console.log(Object.keys(results).length);
  
  if (Object.keys(results).length == 0) {
    resultsRegion.insertAdjacentHTML('afterend', '<p>The page could not be found.</p>');
  } else if (Object.keys(results).length == 1) {
    if (results[0]["slug"] == currentSlug) {
      resultsRegion.insertAdjacentHTML('beforebegin', "<p>This page's URL has changed. Redirecting in 3 seconds...</p>");
      var resultHTML = '<a class="search-result" href="' + results[0]["url"] + '"><div class="search-result-title">' + results[0]["title"] + '<span class="search-result-rel-url"><span class="version">' + results[0]["version"] + '</span><span>' + results[0]["parent"] + '</span></span></div></a>';
      resultsRegion.insertAdjacentHTML('afterend', resultHTML);
      setTimeout(function(){
        window.location.href = results[0]["url"];
      }, 3000);
    } else {
      resultsRegion.insertAdjacentHTML('beforebegin', '<p>Were you looking for this page?</p>');
      var resultHTML = '<a class="search-result" href="' + results[0]["url"] + '"><div class="search-result-title">' + results[0]["title"] + '<span class="search-result-rel-url"><span class="version">' + results[0]["version"] + '</span><span>' + results[0]["parent"] + '</span></span></div></a>';
      resultsRegion.insertAdjacentHTML('afterend', resultHTML);
    }
  } else {
    resultsRegion.insertAdjacentHTML('beforebegin', '<p>Were you looking for one of these pages?</p>');
    for (var i = 0; i < Object.keys(results).length; i++) {
      var resultHTML = '<a class="search-result" href="' + results[i]["url"] + '"><div class="search-result-title">' + results[i]["title"] + '<span class="search-result-rel-url"><span class="version">' + results[i]["version"] + '</span><span>' + results[i]["parent"] + '</span></span></div></a>';
      resultsRegion.insertAdjacentHTML('afterend', resultHTML);
    }
  }
}

transformImages();
function transformImages() {

  // Move all images up out of P's
  var elements = document.querySelectorAll('#main-content img');
  for (var i = 0; i < elements.length; i++) {

    // console.log("Processing:" + elements.length);

    if (elements[i].parentNode.nodeName == 'P') {
      elements[i].parentNode.parentNode.insertBefore(elements[i], elements[i].parentNode.nextSibling);
    }
  }

  // Wrap all images in figure tags
  var elements = document.querySelectorAll('#main-content img');
  for (var i = 0; i < elements.length; i++) {
    
    // Define what they'll be wrapped by for PhotoSwipe
    var wrapper = document.createElement('figure');
    wrapper.innerHTML = '<a href="' + elements[i].src + '" data-size="' + elements[i].naturalWidth + 'x' + elements[i].naturalHeight + '"></a>';
    //wrapper.innerHTML = '<a data-size="' + elements[i].naturalWidth + 'x' + elements[i].naturalHeight + '"></a>';

    // Insert the wrapper before each element
    elements[i].parentNode.insertBefore(wrapper, elements[i]);

    // Wrap the element
    wrapper.firstChild.appendChild(elements[i]);
    
  }

  initPhotoSwipeFromDOM('#main-content');
}

function loadAnalytics() {
  if (location.hostname == "openshift.github.io"){
    // https://minimalanalytics.com
    (function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
    h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
    l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
    r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
    n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
    A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
    sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
    void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
    (f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
    sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
    a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
    ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
    !1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
    y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
    d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
    a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
    trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
    (window,"UA-155990329-1",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});
  }
}