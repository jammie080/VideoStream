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