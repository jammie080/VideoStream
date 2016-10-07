var Skip = function(){

};

Skip.prototype.skipKissAnime = function(start, finish){
    this.start = start
   this.finish = finish

   var video = document.getElementById('my_video_1_html5_api');

    //handler should be bound first
    video.addEventListener("timeupdate", function() {
       if (this.currentTime >= finish) {
            this.pause();
        }
    }, false);

    //suppose that video src has been already set properly
    video.load();
    video.play();   
    try {
        video.currentTime = start;
    } catch (ex) {
        //handle exceptions here
    }

}