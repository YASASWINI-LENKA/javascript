function formvalidator() {
var emailaddress = document.getElementById('emailaddress');
var password = document.getElementById('pass');
if(notempty(emailaddress,"cannot be null")) {
if(emailvalidator(emailaddress,"eneter correct email address")){
if(lenrestriction(password,7)){
if(isalphanum(password,"enter alphabets and numbers only")){
return true;
}}}}
return false;
}
function notempty(elem,helpermsg)
{
if(elem.value.length == 0)
{
alert(helpermsg);
return false;
elem.focus();
}
else
{
return true;
}
}
function emailvalidator(elem,helpermsg)
{
var ev = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if(elem.value.match(ev))
{
return true;
}
else {
alert(helpermsg);
elem.focus();
return false;
}
}
function lenrestriction(elem,min)
{
var uinput = elem.value;
if(uinput.length >= min)
{return true;}
else {
alert("please enter" +min+  "characters");
elem.focus();
return false;
}
}
function isalphanum(elem,helpermsg)
{
var ian  = /^[0-9a-zA-Z]+$/;
if(elem.value.match(ian))
{
return true;
}
else {
alert(helpermsg);
elem.focus();
return false; 
}
}