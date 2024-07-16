let links = document.getElementsByClassName('link')
for(let i = 0; i < links.length; i++) {
  // if(links[0].classList.value.includes('search') == true || links[0].classList.value.includes('shop') == true)
  //   continue;

  links[i].addEventListener('mouseover', function() {
    links[i].parentElement.children[1].classList.add('underlined');
  })
  links[i].addEventListener('mouseout', function () {
    links[i].parentElement.children[1].classList.remove('underlined');
  });
}