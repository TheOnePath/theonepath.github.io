(function animateCards(){
        var obj1 = document.getElementById("card1");
        var obj2 = document.getElementById("card2");
        var obj3 = document.getElementById("card3");
        obj1.animate([
            {// from
                opacity: 0.25,
                transform: 'translateY(-150%)'
            },
            {// to
                opacity: 1,
                transform: 'translateY(0)'
            }
        ], {duration: 1000});
        obj2.animate([
            {// from
                opacity: 0.25,
                transform: 'translateY(-150%)'
            },
            {// to
                opacity: 1,
                transform: 'translateY(0)'
            }
        ], {duration: 800});
        obj3.animate([
            {// from
                opacity: 0.25,
                transform: 'translateY(-150%)'
            },
            {// to
                opacity: 1,
                transform: 'translateY(0)'
            }
        ], {duration: 600});
    })();