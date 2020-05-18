var msg_cliHieghts = [];

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

function dropMenuNav() {
    document.getElementById("dropDownMenu").classList.toggle("show");
}

/*var sideNavOpen = false;
function navSide(){
    var event = document.getElementById("sideNav");
    
    if (sideNavOpen) {
        event.classList.remove("nav-open");
        event.classList.add("nav-closed");

        sideNavOpen = false;
    } else {
        event.classList.remove("nav-closed");
        event.classList.add("nav-open");

        sideNavOpen = true;
    }
    console.log(sideNavOpen);
}*/

function rmContainers(){
    let window_w = window.innerWidth | document.documentElement.clientWidth;
    if (window_w < 601){
        var containers = document.querySelectorAll('.container');
            [].forEach.call(containers, function(m){
                m.classList.remove("container");
        });
    }
}

function viewMore(c){
    c.classList.add('view-more');
};

function viewLess(c){
    c.classList.add('view-less');
};

function rmViewMore(event){
    var event = event.target;
    if (event.nodeName !== 'P'){
        event.setAttribute('style', '');
        event.setAttribute('onclick', 'rmViewLess(event);');
        event.classList.remove('view-more');

        viewLess(event);
    }
}

function rmViewLess(event){
    var event = event.target;
    if (event.nodeName !== 'P'){
        event.setAttribute('style', `max-height: ${msg_cliHieghts[0]}px`);
        event.setAttribute('onclick', 'rmViewMore(event);')
        event.classList.remove('view-less');
        
        viewMore(event);
    }
}

function a(){
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.triple-bar')) {
            var m = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < m.length; i++) {
                var openDropdown = m[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    });

    let window_w = window.innerWidth | document.documentElement.clientWidth;
    if (window_w < 601){
        try {
            document.querySelector('#header').remove();
        } catch { console.error() }

        var oldParent = document.getElementById('headings');
        var newParent = document.getElementById('overflow-headings');

        while (oldParent.childNodes.length > 0) {
            newParent.appendChild(oldParent.childNodes[0]);
        }

        rmContainers();
    }

    var target = document.querySelectorAll('.announce-message');
    [].forEach.call(target, function(element) {
        msg_cliHieghts.push(element.clientHeight);
    });

    msg_cliHieghts.sort();
    for (var i=0; i < target.length; i++){
        if (target[i].clientHeight > msg_cliHieghts[0]) {
            target[i].setAttribute('onclick', 'rmViewMore(event);');
            target[i].setAttribute('style', `max-height: ${msg_cliHieghts[0]}px`);

            viewMore(target[i])
        }
    }
};