var Scrape = function(){
    this.currentUrl = window.location.href; 
}

Scrape.prototype.kissanime = function(){
    var video = document.getElementById('my_video_1_html5_api');
    return video;
}

Scrape.prototype.mp4upload = function(){

}

Scrape.prototype.videonest = function(){

}

Scrape.prototype.streammoe = function(){

}

Scrape.prototype.filterurl = function(){
    var hostname = window.location.hostname;
    return hostname;

}

Scrape.prototype.method = function(){
    if (this.filterurl() == "kissanime.to"){
        console.log('Kiss anime method used')
        return this.kissanime()
    }
}

var Kissanime = function(){
    this.scrape = new Scrape();
    this.video = this.scrape.kissanime()
}

Kissanime.prototype.currentStreamTime = function(){
    console.log(parseInt(this.video.currentTime));
}

Kissanime.prototype.changeStreamPlace = function(change){
    this.video.currentTime = 5;
    console.log("Stream changed");
}

Kissanime.prototype.currentStreamPlace = function() {
    var video_source = this.video.src;
    console.log("Video Source : " + video_source)
}

Kissanime.prototype.changeStreamSource = function(url){
    this.video.src = url
    console.log("Stream Source changed")
    console.log("Stream Source : " + url)
}

Kissanime.prototype.play = function(){
    this.video.play();
    console.log("Stream Playing");
}

Kissanime.prototype.pause = function(){
    this.video.pause();
    console.log("Stream Paused");
}

Kissanime.prototype.setStreamTime = function(time){
    this.video.currentTime = time;
}

var Skip = function(){
  this.anime = new Kissanime();

};

Skip.prototype.skipKissAnime = function(start, finish){
    this.anime.setStreamTime = start;
    var finish_time = finish;
    this.anime.play();
    var i = 0;
    while (i < finish_time){
        i++;
    }
    this.anime.setStreamTime = finish_time;
    //this.anime.pause();
};

var skip = new Skip()
skip.skipKissAnime(10,50);
var Scrape = function(){
    this.currentUrl = window.location.href; 
}

Scrape.prototype.kissanime = function(){
    var video = document.getElementById('my_video_1_html5_api');

    return video;
}

Scrape.prototype.mp4upload = function(){

}

Scrape.prototype.videonest = function(){

}

Scrape.prototype.streammoe = function(){

}

Scrape.prototype.filterurl = function(){
    var hostname = window.location.hostname;
    return hostname;

}

Scrape.prototype.method = function(){
    if (this.filterurl() == "kissanime.to"){
        console.log('Kiss anime method used')
        return this.kissanime()
    }
}

var Kissanime = function(){
    this.scrape = new Scrape();
    this.video = this.scrape.kissanime()
   
}

Kissanime.prototype.currentStreamTime = function(){
    var current_stream_time = parseInt(this.video.currentTime);
    console.log(current_stream_time);
    return current_stream_time;
}

Kissanime.prototype.currentStreamPlace = function() {
    var video_source = this.video.src;
    console.log("Video Source : " + video_source)
}

Kissanime.prototype.changeStreamSource = function(url){
    this.video.src = url
    console.log("Stream Source changed")
    console.log("Stream Source : " + url)
}

Kissanime.prototype.play = function(){
    this.video.play();
    console.log("Stream Playing");
}

Kissanime.prototype.pause = function(){
    this.video.pause();
    console.log("Stream Paused");
}

Kissanime.prototype.setStreamTime = function(time){
    this.video.currentTime = time;
    console.log("Time Changed");
}

Kissanime.prototype.returnVideo = function(){
    return this.video;
}

var Skip = function(){
  this.anime = new Kissanime();

};

Skip.prototype.skipKissAnime = function(start, finish){
    this.start = start
   this.finish = finish

   var video = document.getElementById('my_video_1_html5_api');

    //handler should be bound first
    video.addEventListener("timeupdate", function() {
       if (this.currentTime >= finish) {
            this.pause();
            console.log("Stream Paused")
        }
    }, false);

    //suppose that video src has been already set properly
    video.load();
    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
    try {
        video.currentTime = start;
    } catch (ex) {
        //handle exceptions here
    }

}

//anime = new Kissanime();
//anime.currentStreamPlace();
var skip = new Skip();
skip.skipKissAnime(10,15);
