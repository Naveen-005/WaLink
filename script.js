function load_link() {
    
    var phone_number=document.getElementById("number").value;
    document.getElementById("link").href="http://wa.me/"+phone_number
    document.getElementById("link").innerText="http://wa.me/"+phone_number
}