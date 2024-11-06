let submissionBtn;

var all = $(".page").map(function() {
    return $(this);
}).get();

var errors = $(".error").map(function(){
  return $(this);
}).get()

errors.forEach(error => {
  error.hide()
})

let i=0;
all.forEach(page => {
  console.log(page)
  if (!i == 0) {
  $(page).hide()
  } 
  
  page.on("submit",function(e){
    e.preventDefault()
  })
  
  i += 1
}) 
 


const firstForm = document.querySelectorAll('.login-container.page')[0]
const emailInput = firstForm.querySelector('input[type="email"]')
emailInput.addEventListener('input', function(e){
 const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,18}$/g;

 if (emailRegex.test(emailInput.value) == false) {
   $('.er-emailformat').show()
 } else {
    $('.er-emailformat').hide()
 }
  
   if (emailInput.value.trim() == "") {
    $('.er-emailformat').hide()
 }
})

const loginPage = document.querySelector('.login')

loginPage.addEventListener('submit', function(e){
  e.preventDefault();
  if (submissionBtn == "google") {
    return nextPage(loginPage)
  }
  doubleNextPage(loginPage)
})

const googlePage = document.querySelector('.google-pg')

googlePage.addEventListener('submit', function(e){
  e.preventDefault();
  nextPage(googlePage)
})

function nextPage(page) {
  const nextPage = $(page).next();
      $(page).slideUp( 400, function() {
       $(page).hide()
         $(nextPage).slideToggle(400)
  });
}

function prevPage(page) {
  const nextPage = $(page).prev();
      $(page).slideUp( 400, function() {
       $(page).hide()
         $(nextPage).slideToggle(400)
  });
}

function doubleNextPage(page) {
  const nextPage = $(page).next().next();
      $(page).slideUp( 400, function() {
       $(page).hide()
         $(nextPage).slideToggle(400)
  });
}
