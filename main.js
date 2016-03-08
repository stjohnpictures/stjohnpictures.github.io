function clicked(){
  
  var user = document.getElementById('username');
  var pass = document.getElementById('password');
  
  var coruser = "test";
  var corpass = "123";
   var coruser1 = "test1";
  var corpass1 = "1234";
  if(user.value == coruser){
    if(pass.value == corpass){
      window.alert("You are logged in as " + user.value);
      
    } else{
      window.alert("Incorrect Username or Password!");
    }
  } else{
    window.alert("Incorrect Username or Password!");
  }
    if(user.value == coruser1){
    if(pass.value == corpass1){
      window.alert("You are logged in as " + user.value);
      
    } else{
      window.alert("Incorrect Username or Password!");
    }
  } else{
    window.alert("Incorrect Username or Password!");
  }
  
  
  
}
