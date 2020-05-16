function adjustBg(){
    let window_w = window.innerWidth | document.documentElement.clientWidth;
    if (window_w > 600){
        var footer = document.querySelector('footer');
        var boundingBox = footer.getBoundingClientRect();
        var body = document.getElementsByTagName('body')[0];

        /*console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
        console.log(boundingBox.height);
        console.log(boundingBox.top, boundingBox.left, boundingBox.right, boundingBox.bottom)*/
        if (
            boundingBox.top >= 0 &&
            boundingBox.left >= 0 &&
            boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            boundingBox.bottom <= (window.innerHeight + boundingBox.height || document.documentElement.clientHeight +
            boundingBox.height)
        ) {
            /*console.log(((window.innerHeight | document.documentElement.clientHeight) - boundingBox.bottom) + boundingBox.height);*/
            body.style.backgroundPositionY = `-${((window.innerHeight | document.documentElement.clientHeight) - boundingBox.bottom) + boundingBox.height}px`;
        } else {
            body.style.backgroundPositionY = `0`;
        }
    }
}