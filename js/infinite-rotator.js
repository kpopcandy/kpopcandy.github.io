$(window).load(function() {
  var InfiniteRotator;
  InfiniteRotator = {
    init: function() {
      var currentItem, fadeTime, infiniteLoop, initialFadeIn, itemInterval, numberOfItems;
      initialFadeIn = 1000;
      itemInterval = 5000;
      fadeTime = 2500;
      numberOfItems = $(".rotating-item").length;
      currentItem = 0;
      $(".rotating-item").eq(currentItem).fadeIn(initialFadeIn);
      infiniteLoop = setInterval(function() {
        $(".rotating-item").eq(currentItem).fadeOut(fadeTime);
        if (currentItem === numberOfItems - 1) {
          currentItem = 0;
        } else {
          currentItem++;
        }
        $(".rotating-item").eq(currentItem).fadeIn(fadeTime);
      }, itemInterval);
    }
  };
  InfiniteRotator.init();
});

/*
//@ sourceMappingURL=infinite-rotator.js.map
*/