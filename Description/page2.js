alert("Do you have Knowledge of Crypto Currencies or you wanted to know more just click OK to proceed");




  var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 220,
    delay: (el, i) => 10 * (i+1)
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 10000
  });

  var textWrapper = document.querySelector('.ml4');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml4 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 220,
      delay: (el, i) => 10 * (i+1)
    }).add({
      targets: '.ml4',
      opacity: 0,
      duration: 100,
      easing: "easeOutExpo",
      delay: 10000
    });

    
    var textWrapper = document.querySelector('.ml6');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml6 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 220,
        delay: (el, i) => 10 * (i+1)
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 10000
      });

      
      var textWrapper = document.querySelector('.ml8');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml8 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 220,
          delay: (el, i) => 10 * (i+1)
        }).add({
          targets: '.ml8',
          opacity: 0,
          duration: 100,
          easing: "easeOutExpo",
          delay: 10000
        });
      





  