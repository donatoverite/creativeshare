function update (){   var ref = new Firebase('https://creative-media.firebaseio.com/userdata');   ref.on ("value",function (snapshot){  document.getElementById('items').innerHTML = "";  for ( var i in snapshot.val() ) { items[i] = snapshot.val()[i]; document.getElementById('items').innerHTML += "<OPTION>" + i + "</OPTION>";  }  });  }

