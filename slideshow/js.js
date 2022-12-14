var slideShow=function(container){
    this.img=[];
    this.curlImg=0;
    for(var i=0;i < container.childElementCount;i++){
        this.img.push(container.children[i])
        this.img[i].style.display="none";
    }

    var nextSlide=function(){
        for(var i=0;i < this.img.length; i++){
            this.img[i].style.display="none";
        }
        this.img[this.curlImg].style.display="block";
        this.curlImg++;
        if (this.curlImg>=this.img.length){
            this.curlImg=0;
        }
        window.setTimeout(nextSlide.bind(this),1000);
    };

    nextSlide.call(this);
} ;
    
    slideShow(document.getElementById('slideshow'))
    