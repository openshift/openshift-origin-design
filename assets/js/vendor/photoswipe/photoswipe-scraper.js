// Photoswipe Scraper
// by Andy Braren
// Modified version of: http://photoswipe.com/documentation/getting-started.html
// Modified a long time ago no judgment please

var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, caption, size ...) from DOM elements 
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    //console.log("Thing that was clicked:");
    //console.log(el);
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;

    console.log("Number of child elements: " + numNodes);
    console.log(thumbElements);

    for(var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // go through every element, including all <figure> elements

      // include only element nodes 
      if(figureEl.nodeType !== 1) {
        continue;
      }
      
      linkEl = figureEl.children[0]; // get every child, including the <a> element of each <figure>
      
      if(figureEl.tagName == "FIGURE" && linkEl.getAttribute('data-size') !== null) { // latch on to only the elements we want, since data-size is only added to images that need it for the gallery
        console.log("IDENTIFIED AS FIGURE");
        console.log(i);

        // target only the images that link directly to their larger version
        // http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring
        if (linkEl.getAttribute('href').indexOf(window.location.hostname) != -1) {
          
          if(linkEl.getAttribute('data-size') !== null) {
            size = linkEl.getAttribute('data-size').split('x');
            //console.log(size);
          } else {
            console.log("A figure element is missing a data-size attribute");
          }
      
          // create slide object
          item = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          };

          // create the caption, and add a title from the image's title attribute
          if(linkEl.children[0].getAttribute('title') !== null) {
            item.title1 = '<div class="pswp_title">' + linkEl.children[0].getAttribute('title') + '</div>';
            //console.log(item.title);
            item.title = item.title1;
          }
          if(figureEl.children.length > 1) {
            // <figcaption> content
            item.title2 = figureEl.children[1].innerHTML; 
            item.title = item.title2;
          }
          if(linkEl.children[0].getAttribute('title') !== null && figureEl.children.length > 1) {
            item.title = item.title1 + item.title2;
          }
    
          if(linkEl.children.length > 0) {
            // <img> thumbnail element, retrieving thumbnail url
            item.msrc = linkEl.children[0].getAttribute('src');
          }
                    
          linkExtension = linkEl.getAttribute('href');
          linkExtension = linkExtension.substr((linkExtension.lastIndexOf('.') + 1)).toLowerCase(); // Grab the extension of the link, if there is one
          //console.log(linkExtension);
          
          if(linkExtension == 'jpg' || linkExtension == 'png' || linkExtension == 'gif' || linkExtension == 'jpeg'){
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
          }  
        }
      }
    }
    
    //console.log("Number of images detected:");
    //console.log(items);
    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
      return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    // e.preventDefault ? e.preventDefault() : e.returnValue = false;
    // The above prevents the default click, which messes up links in the article
    
    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
      return;
    }

    // GALLERY LOGIC
    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    console.log(childNodes);
    console.log("Number of children found:" + numChildNodes);

    for (var i = 0; i < numChildNodes; i++) {
      figureEl = childNodes[i];  // Grabs every element and puts it through this
      if(childNodes[i].nodeType !== 1) { 
        continue; 
      }
      if(childNodes[i] === clickedListItem) {
        
        if(figureEl.children[0].getAttribute('href').indexOf(window.location.hostname) == -1) { // If the clicked link is an external link
          location.href = figureEl.children[0].getAttribute('href');               // Then just go to it, and break
          break;
        }
        
        linkExtension = figureEl.children[0].getAttribute('href');
        linkExtension = linkExtension.substr((linkExtension.lastIndexOf('.') + 1)).toLowerCase();
        //console.log(linkExtension);
        //if(linkExtension != 'jpg' || linkExtension != 'png' || linkExtension != 'gif' || linkExtension != 'jpeg') { // If the clicked link doesn't end with these file extensions
        if(linkExtension != 'jpg' && linkExtension != 'png' && linkExtension != 'gif' && linkExtension != 'jpeg') {
          location.href = figureEl.children[0].getAttribute('href');                                                // Then just go to it, and break
          break;
        }
        
        index = nodeIndex;
        break;
      }
      if(figureEl.tagName == "FIGURE" && figureEl.children[0].getAttribute('data-size') !== null) {
        nodeIndex++;
      }
    }

    if(index >= 0) {
      //console.log(index); // It's opening the 4th node, but it should be opening up the second...
      // open PhotoSwipe if valid index found
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
    params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');  
      if(pair.length < 2) {
        continue;
      }           
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    
    if(!params.hasOwnProperty('pid')) {
      return params;
    }
    params.pid = parseInt(params.pid, 10);
    
    return params;
  };

  // Gallery Logic
  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      index: index,
      preload: [1,1],
      history: false,
      bgOpacity: 0.9,
      shareEl: true,
      showHideOpacity: true,
      preload: [1,1],

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect(); 
        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }
    };

    // PhotoSwipe opened from URL
    if(fromURL) {
      if(options.galleryPIDs) {
        // parse real index when custom PIDs are used 
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for(var j = 0; j < items.length; j++) {
          if(items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  // Refers to the main gallery element, just one in this case
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i+1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid > 0 && hashData.gid > 0) {
    openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
  }
};

// execute above function
// initPhotoSwipeFromDOM('#main-content');