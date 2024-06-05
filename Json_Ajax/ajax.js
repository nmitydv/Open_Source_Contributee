const Request = new XMLHttpRequest();
Request.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
Request.onload = function(){
    console.log(Request.responseText);
    console.log(Request.XMLHttpRequest);
}
Request.send();