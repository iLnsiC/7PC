/*** Carousel ***/

$( document ).ready(function(){
  // recuperer les ID next et prev pour les utiliser pour le onClick
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');

  // creer une NodeListe avec les differents div
  let carousel = document.querySelectorAll('.bonbon');
  
  // on pose les fonction pour chaque bouton
  next.onclick = carouselNext;
  prev.onclick = carouselPrev;
  
  // on cree les fonction pour chaque bouton 
  function carouselNext() {
    carouselAction('next')
  }
  function carouselPrev() {
    carouselAction('prev')
  }

  // fonction pour recuperer les postions actuelles 
  function getPosition() {
    let divArray = [];
    let divClass = [];
    carousel.forEach(e => divArray.push(e));
    divArray.forEach(e => {
      let obj = {
        id: e.getAttribute('id'),
        left: Math.round(100 * parseFloat($('#'+e.getAttribute('id')).css('left')) / parseFloat($('#'+e.getAttribute('id')).parent().css('width')))
      };
      divClass.push(obj)
    })
    // console.log(divClass)
    return divClass;
  }
  function carouselAction(action){
    let divPosition = getPosition()
    let newPosition = []

    // deuxieme boucle pour atribuer les nouvelles positions 
    divPosition.map(e =>{
      let newLeft
      if(action === 'next'){
        zIndexVal = 5
        newLeft = (e.left + 35  > 75 ) ? 5 : e.left + 35
      }
      if(action === 'prev'){
        zIndexVal = 75
        newLeft = (e.left - 35 < 5 ) ? 75 : e.left - 35
      }
      let obj = {
        id : e.id,
        left : newLeft
      }
      newPosition.push(obj)
    })

    newPosition.map(e => {
      // 
      if (e.left === zIndexVal){
          document.querySelector('#' + e.id ).style.zIndex = '0'
      }else{
          document.querySelector('#' + e.id ).style.zIndex = '1'
      }

      let agrandissement = (e.left === 40 ) ? '100%' : '50%'
      $('button').prop("disabled",true)

      let animation  = $('#' + e.id ).animate({
          left:  e.left+ '%',
          backgroundSize: agrandissement
      },1000);

      animation.promise().done(function () {
          $('button').prop("disabled",false)
      })

    });
  }
})


// /*** Carousel ***/

// $( document ).ready(function(){
//   // recuperer les ID next et prev pour les utiliser pour le onClick
//   let next = document.getElementById('next');
//   let prev = document.getElementById('prev');

//   // creer une NodeListe avec les differents div
//   let carousel = document.querySelectorAll('.bonbon');
  
//   // on pose les fonction pour chaque bouton
//   next.onclick = carouselNext;
//   prev.onclick = carouselPrev;
  
//   // on cree les fonction pour chaque bouton 
//   function carouselNext() {
//     carouselAction('next')
//   }
//   function carouselPrev() {
//     carouselAction('prev')
//   }

//   // fonction pour recuperer les postions actuelles 
//   function getPosition() {
//     let divArray = [];
//     let divClass = [];
//     carousel.forEach(e => divArray.push(e));
//     divArray.forEach(e => {
//       let obj = {
//         id: e.getAttribute('id'),
//         position: Math.round(100 * parseFloat($('#'+e.getAttribute('id')).css('left')) / parseFloat($('#'+e.getAttribute('id')).parent().css('width')))
//       };
//       divClass.push(obj)
//     })
//     // console.log( divClass )
//     return divClass;
//   }
  
//   function carouselAction(action){
//     let divPosition = getPosition()
//     let newPosition = []

//     console.log( divPosition )
//     // deuxieme boucle pour atribuer les nouvelles positions 
//     divPosition.map(e =>{
//       let nextPosition
//       if(action === 'next'){
//         zIndexVal = 0;
//         nextPosition = (e.position + 33  > 67) ? 0 : e.position + 33;
//       }
//       if(action === 'prev'){
//         zIndexVal = 66;
//         nextPosition = (e.position - 33 < -1 ) ? 66 : e.position - 33;
//       }
//       let obj = {
//         id : e.id,
//         position : nextPosition
//       }
//       newPosition.push(obj);
//     })
//     // console.log( newPosition );

//     newPosition.map(e => {
//       // 
//       if (e.position === zIndexVal){
//           document.querySelector('#' + e.id ).style.zIndex = '0'
//       }else{
//           document.querySelector('#' + e.id ).style.zIndex = '1'
//       }

//       let agrandissement = (e.position === 33 ) ? '70%' : '40%'
//       $('button').prop("disabled",true)
      
//       let animation  = $('#' + e.id ).animate({
//           left: e.position+ '%',
//           backgroundSize: agrandissement
//       },1000);

//       animation.promise().done(function () {
//           $('button').prop("disabled",false)
//       })
//     });
//   }
// })
