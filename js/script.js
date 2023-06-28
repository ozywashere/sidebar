const sidebar = document.querySelector('.sidebar')

const toggler = document.querySelector('.sidebar-toggle')

toggler.addEventListener('click', function () {
  sidebar.classList.toggle('close')
})
