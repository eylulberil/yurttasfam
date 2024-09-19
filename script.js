/*
 * Dependencies *
 this function requires the following snippets:
 JavaScript/images/switchImage

 BODY Example:
 <body onLoad="mySlideShow1.play(); mySlideShow2.play();">
 <img src="originalImage1.gif" name="slide1">
 <img src="originalImage2.gif" name="slide2">

 SCRIPT Example:
 var mySlideList1 = ['image1.gif', 'image2.gif', 'image3.gif'];
 var mySlideShow1 = new SlideShow(mySlideList1, 'slide1', 3000, "mySlideShow1");
 var mySlideList2 = ['image4.gif', 'image5.gif', 'image6.gif'];
 var mySlideShow2 = new SlideShow(mySlideList2, 'slide2', 1000, "mySlideShow2");
*/

function switchImage(imgName, imgSrc) {

  if (document.images) {

    if (imgSrc !== "none") {
      document.images[imgName].src = imgSrc;
    }
  }
}

function SlideShow(slideList, image, speed, name) {

    this.slideList = slideList;
    this.image = image;
    this.speed = speed;
    this.name = name;
    this.current = 0;
    this.timer = 0;

}

SlideShow.prototype.play = SlideShow_play;

function SlideShow_play() {

 if (this.current++ === this.slideList.length - 1) {
  this.current = 0;
 }
 
 switchImage(this.image, this.slideList[this.current]);
 clearTimeout(this.timer);
 this.timer = setTimeout(this.name + '.play()', this.speed);
}

