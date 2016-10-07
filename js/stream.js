var Scrape = function(){
    this.currentUrl = window.location.href; 
}

Scrape.prototype.kissanime = function(){
    var anime = new Kissanime();
    return anime;
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
    this.video = document.getElementById('my_video_1_html5_api');
}

Kissanime.prototype.currentStreamPlace = function(){
    console.log(parseFloat(this.video.currentTime));
}

Kissanime.prototype.changeStreamPlace = function(change){
    this.video.currentTime = 5;
    console.log("Stream changed");
}

Kissanime.prototype.changeStreamSource = function(url){
    this.video.src = url
}

var anime = new Scrape();
anime.method().changeStreamSource("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");