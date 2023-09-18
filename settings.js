const settings = document.querySelector('.settings')
  let click=0
  document.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    settings.classList.add('rightclick')
    settings.style.left=e.clientX+'px';
    settings.style.top=e.clientY+'px';
  })
  document.addEventListener('click',(e)=>{
    settings.classList.remove('rightclick')
  })

  function action(yourAction) {
    switch (yourAction) {
      case 'back':
        window.history.back();
        break;
      case 'forward':
        window.history.forward()
        break;
      case 'reload':
        location.reload()
        break;
      case 'save':
        window.save()
        break;
      case 'print':
        window.print()
        break;
      case 'cast':
        console.log('Cast button clicked');
        break;
      case 'search':
        console.log('Search images with Google button clicked');
        break;
      case 'send':
        console.log('Send to your devices button clicked');
        break;
      case 'createQR':
        console.log('Create QR Code for this page button clicked');
        break;
      case 'translate':
        console.log('Translate to English button clicked');
        break;
      case 'font':
        console.log('Font Details button clicked');
        break;
      case 'viewSource':
        console.log('View page source button clicked');
        break;
      case 'inspect':
        console.log('Inspect button clicked');
        break;
      default:
        break;
    }
  }
