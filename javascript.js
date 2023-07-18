var time,hour, minute,second;

function time_fn(){
    time = new Date;
    hour =document.getElementById('hour').innerHTML =time.getHours();
    minute = document.getElementById('minute').innerHTML =time.getMinutes();
    second = document.getElementById('second').innerHTML =time.getSeconds();
    

    // condition
    if(hour==0){
        hour == 12;
        document.getElementById('hour').innerHTML = hour-12;
    }else 
    if(hour >= 12 ){
        
        document.getElementById('dn').innerHTML ='PM';
    }
    if (hour < 10){
        document.getElementById('hour').innerHTML ='0'+ hour;
    }
    if (minute < 10){
       document.getElementById('minute').innerHTML ='0'+ minute;
    }
    if (second < 10){
        document.getElementById('second').innerHTML ='0'+ second 
    }
    setInterval(time_fn,1000);
 }

time_fn()

// @@@@@@@@@@@@ 2nd function @@@@@@@@@@@@

let selectElementsZero = document.querySelectorAll('select')
let wakeup = document.querySelectorAll ('.wakeup')

function setAlarm(){
    let selectItemzero = selectElementsZero[0].selectedIndex;
    let selectItemone = selectElementsZero[1].selectedIndex;
    let selectItemtwo = selectElementsZero[2].selectedIndex;
    let selectItemthree = selectElementsZero[3].selectedIndex;

    let itemzero = selectElementsZero[0].options[selectItemzero]
    let itemone = selectElementsZero[1].options[selectItemone]
    let itemtwo = selectElementsZero[2].options[selectItemtwo]
    let itemthree = selectElementsZero[3].options[selectItemthree]

    // console.log(itemzero.innerHTML)
    // console.log(itemone.innerHTML)
    // console.log(itemtwo.innerHTML)
    // console.log(itemthree.innerHTML)

    wakeup[0].innerHTML = `Wake Up Time - ${itemzero.innerHTML}`
    wakeup[1].innerHTML = `Lunch Time   - ${itemone.innerHTML}`
    wakeup[2].innerHTML = `Nap Time     - ${itemtwo.innerHTML}`
    wakeup[3].innerHTML = `Night Time   - ${itemthree.innerHTML}`

    let date = new Date;
    let hrs = date.getHours()

    if(parseInt(selectElementsZero[0].value) === hrs){
        changeElement.innerText = 'Good Morning !! Wake Up !!'
        changeContent.innerHTML = 'GRAB SOME HEALTHY BREAKFAST!!'
        img.src = 'image.png'
    } 
    else if(parseInt(selectElementsZero[1].value) === hrs){
        changeContent.innerHTML = 'LETS HAVE SOME LUNCH!!'
        changeElement.innerHTML ="GOOD AFTERNONO !!"
        img.src = 'lunchBreak.png'
    } 
    else if(parseInt(selectElementsZero[2].value) === hrs){
        changeContent.innerHTML = 'STOP YAWNING, GET SOME TEAITS JUST EVENING!'
        changeElement.innerHTML ="GOOD EVENING !!"
        img.src = 'Good-Evening.png'
    } 
    else if(parseInt(selectElementsZero[3].value) === hrs){
        changeContent.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP'
        changeElement.innerHTML ="GOOD NIGHT !!"
        img.src ='good-night.png'
    }   
  
}

setAlarm()
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ End @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






var changeContent= document.getElementById('changeContent')
var changeElement = document.getElementById('changeElement')
var img = document.getElementById('image')

function setmorning(){
    if(hour <= 12){
//         changeContent.innerHTML = 'GRAB SOME HEALTHY BREAKFAST!!'
        // changeElement.innerHTML ="GOOD MORNING!!! WAKE UP !!"
        img.src = 'image.png'
    }
    if(hour >= 12 && hour <= 18){
//         changeContent.innerHTML = 'LETS HAVE SOME LUNCH!!'
        // changeElement.innerHTML ="GOOD AFTERNONO !! TAKE SOME SLEEP"
        img.src = 'image.png'
//        img.src = 'lunchBreak.png'
     }
    if(hour >= 18 && hour <= 21){
//     changeContent.innerHTML = 'STOP YAWNING, GET SOME TEAITS JUST EVENING!'
        // changeElement.innerHTML ="GOOD EVENING !!"
        img.src = 'image.png'
//     img.src = 'Good-Evening.png'
}
if(hour >= 21 && hour <= 24){
//     changeContent.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP'
        // changeElement.innerHTML ="GOOD NIGHT !!"
        img.src = 'image.png'
//     img.src ='good-night.png'
}
}
setmorning()











// // const small = inputValue[0].option[inputValue[0].value]
// //     const small1 = inputValue[1].options[inputValue[1].value]
// //     const small2 = inputValue[2].options[inputValue[2].value]
// //     const small3 = inputValue[3].options[inputValue[3].value]

// //     wakeup.innerHTML = `Wake Up time :${small}`
// //     wakeup1.innerHTML = `Lunch Time :${small1}`
// //     wakeup2.innerHTML = `Nap Time:${small2}`
// //     wakeup3.innerHTML = `Night Time:${small3}`

































// // // #######################

// // // var select1 = document.querySelector("#select1")
// // var alarm = document.querySelector(".alarm");
// // var wakeup = document.querySelector('wakeup');

// // function setAlarm(){
// //     // alarm.innerHTML = "Set Party";
    
// //     // let t = new Date();
// //     // let hours = t.getHours()

// //     // if(parseInt(select1.value) === hours){
// //     //     changeElement.innerText ="GOOD MORNING"
// //     //     changeContent.innerText = 'GRAB SOME HEALTHY BREAKFAST!!'
// //     //     img.src = 'image.png'
// //     // }else
// //     // if((parseInt(select1.value) === hours) && (hours >= 12 && hours <= 18)) {
// //     //    changeContent.innerHTML = 'LETS HAVE SOME LUNCH!!'
// //     //    changeElement.innerHTML ="GOOD AFTERNONO !! TAKE SOME SLEEP"
// //     // }

// //     // let select1 = document.querySelector('#select1')

// //     if(select1.value <= 12){
// //         changeElement.innerText ="GOOD MORNING"
// //         changeContent.innerText = 'GRAB SOME HEALTHY BREAKFAST!!'
// //         img.src = 'image.png'
// //     }else
// //     if(select1.value >= 12 && select1.value <= 18){
// //         changeContent.innerHTML = "LETS HAVE SOME LUNCH!!"
// //         changeElement.innerHTML ="GOOD AFTERNONO !! TAKE SOME SLEEP"
// //         img.src = 'lunchBreak.png'
// //     }else
// //     if(select1.value >= 18 && select1.value <= 21){
// //     changeContent.innerHTML = 'STOP YAWNING, GET SOME TEAITS JUST EVENING!'
// //     changeElement.innerHTML ="GOOD EVENING !!"
// //     img.src = 'Good-Evening.png'
// //     }
// //     if(select1.value >= 21 && select1.value <= 24){
// //     changeContent.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP'
// //     changeElement.innerHTML ="GOOD NIGHT !!"
// //     img.src ='./good-night.png'
    
// // }
// // }

// // setAlarm()
