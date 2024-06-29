// Attributs



// Events



// Calls Functions
titleDynamic();


// Functions
function titleDynamic(){
    let title = ''
    window.addEventListener('blur', _ => {
      if(document.querySelector('title')){
        title = document.querySelector('title').textContent;
        document.querySelector('title').textContent = 'Come back dude!';
      }
    });
    window.addEventListener('focus', _ => {
      if(document.querySelector('title')){
        document.querySelector('title').textContent = title;
      }
    });
};