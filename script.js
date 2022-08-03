
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


email.addEventListener('keydown', function(event){
    const key = event.key;
    if(key=== "Backspace" || key ==="Delete")
    {
        checkEmail(email);
    }
    else
    {
        checkEmail(email);
    }
});

function checkEmail(input)
{
    const emailControl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailControl.test(input.value))
    {
        success(input);
    }

    else
    {
        error(input, 'gecersiz bir email adresi');
    }
}

document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

function checkLength(input,min,max)
{
    if(input.value.length <min)
    {
        error(input, `${input.id} en az ${min} karakter olmalidir `)
    }

    else if(input.value.length >max)
    {
        error(input, `${input.id} en fazla ${max} karakter olmalidir `)
    }

    else
    {
        success(input);
    }
}

// username.addEventListener('keydown', function(event){
//     const key = event.key;
//     if(key=== "Backspace" || key ==="Delete")
//     {
//         checkLength(username);
//     }
//     else
//     {
//         checkLength(username);
//     }
// });

function checkPhone(input)
{
  var phoneControl =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(!phoneControl.test(input.value))
  {
    error(input,'Telefon 10 karakterli olmalıdır');
  }  

  else
  {
    success(input);
  }
}

function validatePhone(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

function checkPasswords(input1,input2)
{
    if(input1.value !== input2.value)
    {
        error(input2, 'Parolalar eslesmiyor');
    }
}

function error(input, message)
{
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input)
{
    input.className = 'form-control is-valid';
}

function checkRequired(inputs)
{
    inputs.forEach(function(input){
        if(input.value == '')
        {
            error(input, `${input.id} bir deger giriniz`);
        }

        else
        {
            success(input);
        }
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,email,phone,password,repassword]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkLength(repassword,7,12);
    checkPhone(phone);
    checkPasswords(password,repassword);
    
});