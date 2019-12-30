window.onload = function() {
  var resultsRegion = document.getElementById('error-results');
  if (resultsRegion) {
    getSearchData();
  }
  transformImages();
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
      resultsRegion.insertAdjacentHTML('beforebegin', "<p>This page's URL has changed. Redirecting in 5 seconds...</p>");
      var resultHTML = '<a class="search-result" href="' + results[0]["url"] + '"><div class="search-result-title">' + results[0]["title"] + '<span class="search-result-rel-url"><span class="version">' + results[0]["version"] + '</span><span>' + results[0]["parent"] + '</span></span></div></a>';
      resultsRegion.insertAdjacentHTML('afterend', resultHTML);
      setTimeout(function(){
        window.location.href = results[0]["url"];
      }, 5000);
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

    console.log("Processing:" + elements.length);

    if (elements[i].parentNode.nodeName == 'P') {
      elements[i].parentNode.parentNode.insertBefore(elements[i], elements[i].parentNode);
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