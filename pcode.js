var config = {
  apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"
};
firebase.initializeApp(config);

//////////////Ip Tricker///////////
$.ajax({
    url: 'https://api.ipify.org/?format=json',
    dataType: 'json',
    success: function( data ) {
	  
	  
	  
	   $.getJSON("https://api.ipify.org/?format=json", function(data) {
        
	document.getElementById("ip").innerHTML = (data.ip);
		Update();
		
		});
	  
    },
    error: function( data ) {
      console.log(data)
	  alert(0)
    }
  });
	
  
  ///Make Guest & Pcode Update Firebase///
  function Update(){
  var ip = document.getElementById("ip").innerHTML;
  var Guest = ip.replace(/\./g, "-");
  var Fguest = "Topexpertbd/Guest-User/"+Guest;
  var pcode = "68687465";     
      
firebase.database().ref(Fguest).update({ 
    Pcode : pcode,
	});
}
 
