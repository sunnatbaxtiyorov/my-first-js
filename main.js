
// function myFunction(){
//     document.getElementById('demo').innerHTML = 5*5;
// }

// function sendAge(){
//     var myAge = 17;
//     var votingAge = 18;
//     if(myAge>=votingAge){
//         window.alert('You can vote');
//         document.write('You can vote')
//     }else{
//         document.write('Come back later');
//     }
// }



// var x = 5;
// document.write(typeof x);

// var y = 'Sunnat';
// document.write(typeof y);


// let carName = 'BMW';
// carName = 'Tico';
// carName = 'Damas';
// document.getElementById('carName').innerHTML = carName;


// const carLacetti = {type:'Lacetti',model :'sedan',color:'white', owner:'Sunnat'};
// carLacetti.number='005';
// console.log(carLacetti);

//  carMalibu = {
//     type:'Malibu',
//     color:'black',
//     number:'005',

// }

// carMalibu.type = 'Malibu_2'
// console.log(carMalibu);

// let admins = "25";
// let users = "12";
// console.log(+admins + + users);


// var myHeight = 1.8;
// var myWeight = 70;
// var myBMI = myWeight/(myHeight*myHeight);
// document.write(myBMI);

// //BMI


// console.log(10>11);
// console.log(22==22);

// let result = 11>10;
// console.log(result);

// let itemA = 0;
// let itemB = "0";
// console.log(Boolean(itemA));
// console.log(Boolean(itemB));
// console.log(itemA == itemB);


// let length = 16;                               // Number
// let lastName = "Johnson";                      // String
// let x = {firstName:"John", lastName:"Doe"};    // Object


// if(14>12){
//     console.log('Togri');
//     document.write('Togri');
// }else{
//     console.log('Notogri');
//     document.write('Notogri');
// }


// var x = 6;
// var y = 5;
// var z = x + y;
// if (z>10){
//     // console.log('Soningiz 10dan katta!');
//     // document.write('z>10');
//     alert('Soningiz 10 dan katta');
// }else{
//     //console.log('Soningiz 10dan kichik!');
//     //document.write('z<10');
//     alert('Soningiz 10 dan kichik');
// }

// if ( '33' == 33){
//     console.log('33 33 ga teng!');
// }else if (32 == 33){
//     console.log('32 33 ga teng emas!');
// }else{
//     console.log('Salom');
// }

// var myScore = 55;
// if( myScore < 28){
//     console.log('4');
// }else if ( myScore > 60){
//     console.log('5');
// }else{
//     console.log('3');
// }


// let myScore = 98;
// myScore = 77;
// if (myScore >= 90){
//     console.log('You Got A');
// }
// else if (myScore < 90 && myScore >= 80){
//     console.log('You Got B');
// }
// else{
//     console.log('You Got C');
// }

// // const p = document.getElementById("p1");
// // console.log(p);

// const h1 = document.getElementById("p1");
// console.log(h1);


// const p = document.getElementById('heading');

// p.innerHTML = "<h3>Salom</h3>";
// console.log(p);

// const button = document.querySelector("mybutton");
// p.className = "Salom";


// const input = document.querySelector("myinput");
// console.log(input);
// console.log(button);


// let myScore = 91;

// if (myScore>90){
//     console.log('A');
// }else if ( myScore < 90 && myScore >80){
//     console.log('B');
// }else if (myScore<80 && myScore>70){
//     console.log('C');
// }else {
//     console.log('F');
// }




function sendBtn(){
    const name = document.getElementById('name');
    const weightVal = document.getElementById('weight');
    const heightVal = document.getElementById('height');
    const result = document.querySelector('#result');
    const status = document.querySelector('#status');

    

    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight / (height * height)).toFixed(3);
    result.innerHTML = `${name.value} 's BMI is ${bmi} You is ${status}`;
    if (bmi < 15){
        result.innerHTML = `${name.value} 's BMI is ${bmi} You are underweight`;
    }else if (bmi>15 && bmi<25){
        result.innerHTML = `${name.value} 's BMI is ${bmi} You are normal`;
    }else{
        result.innerHTML = `${name.value} 's BMI is ${bmi} You are overweight`;
    }
}








// function sendBtn(name,weight,height){ 
//     let bmi = weight/(height * height);
//     console.log(name + "'s BMI is" + bmi );
// }

// sendBtn("Sunnat",70,1.7);
// sendBtn("Shaxboz",80,1.8);
// sendBtn("Sarvar ",60,1.6);
