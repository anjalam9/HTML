function onSubmit() {
  
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("emailId");
  var password = document.getElementById("formpassword");
  var year = document.getElementById("birthYear");
  var letters = /^[A-Za-z\s]+$/;
  var email1=/.+@yahoo.com/;
  var email2=/.+@myyahoo.com/;
  var err

  if (firstName.value.trim() == "" || !firstName.value.trim().match(letters)) {
    if(firstName.value.trim() == "")
    err="First Name should not be empty";
    else
    err="First Name should contain only Letters"
    firstName.focus();
    document.getElementById("nameError").innerText=err;
  }
  else if(lastName.value.trim() == "" || !lastName.value.trim().match(letters)){
    if(lastName.value.trim() == "")
      err="Last Name should not be empty";
    else
      err="Last Name should contain only Letters";
      lastName.focus();
      document.getElementById("nameError").innerText=err;
  }
  else if (email.value.trim() == ""||(!email.value.trim().match(email1)&&!email.value.trim().match(email2))){
    if(email.value.trim()=="")
    err="Email should not be empty";
    else
    err="Email should ends with either @yahoo.com or @myyahoo.com";
    email.focus();
    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText=err;
  }
  else if (password.value == "" || password.value.length < 6){
    password.focus();
    document.getElementById("passwordError").innerText="Password must be minimum of 6 letters";
  }
  else if (year.value.trim() == "" ||!(year.value.trim() < 2023 && year.value.trim() > 1900)){
    if(year.value.trim() == "")
    err="Year should not be empty";
    else
    err="Year should be range of 1900 and 2022";
    year.focus();
    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("yearError").innerText=err;
  } 
  else  {
    var res=`Name : ${firstName.value}  ${lastName.value}
    Email : ${email.value}
    Password : ${password.value.replaceAll(/./g,'*')}
    Year : ${year.value}`
    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("yearError").innerText="";
    document.getElementById("display").innerText = res;
  }
}
