function time(){
    var clock=new Date();
    hr=clock.getHours();
    min=clock.getMinutes();
    sec=clock.getSeconds();
    let startPM;
    let greet;
    const options = {weekday: "long", year:"numeric", month:"long",day: "numeric"};
    let date=clock.toLocaleDateString(undefined, options);  // gives date;
    let time= hr +":"+ min + ":" + sec;


    // PM or AM
    startPM=(hr>=12)?"PM":"AM"


   //Changing Date and Time
    document.getElementById('time').innerHTML = time + " " + startPM + "<br>" + date;


    // Changing Greet message with background images
    if (hr<12){
         greet = "Good Morning"
         document.body.style.backgroundImage='url("morning.jpg")'
    }
    else if(hr>=12 && hr<=18){
         greet= "Good Afternoon"
         document.body.style.backgroundImage='url("afternoon.jpg")'
 
    }
    else{
         greet= "Good Evening"
         document.body.style.backgroundImage='url("evening2.jpg")'
    }

    document.getElementById('greeting').innerHTML=greet
    

}

setInterval(time,1000)   //To loop time function
