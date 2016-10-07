var Scrape = function(){
    this.currentUrl = window.location.href; 
}

Scrape.prototype.kissanime = function(){
    var video = document.getElementById('my_video_1_html5_api');
    return video;
}

video.prototype.animewatchtv = function(url){

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