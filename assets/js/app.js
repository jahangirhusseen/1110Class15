
// ***************checkbox********************
let skills = document.querySelectorAll('.skill');
let skillall = document.querySelector('.skillall');

//  console.log(skills); // skills value =  NodeList(5)


skills.forEach( skill => {
    // console.log(skill);
    
    skill.addEventListener('change', function(){
    
    let alldata = document.querySelectorAll('.skill:checked');
    
    let skillsarr = [];

    alldata.forEach( data => {
        skillsarr.push(data.value);
    });
    // console.log(skillsarr);

    let list = '';

    skillsarr.map( data => {
        list += `<li class="list-group-item">${data}</li>`;
    })
    
    skillall.innerHTML = list;

    });
});


// ***************analog clock********************

let hour = document.querySelector('.h');
let min = document.querySelector('.m');
let sec = document.querySelector('.s');


setInterval(() => {
    let time = new Date();
    
    let current_sec = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();

    sec.style.transform =`rotate(${clock_arrow(60, current_sec)}deg)`;
    min.style.transform =`rotate(${clock_arrow(60, current_min)}deg)`;
    hour.style.transform =`rotate(${clock_arrow(12, current_hour)}deg)`;


}, 1000);



function clock_arrow(time, current){
    return (360*current)/time;
}



// ***************Calculator********************

let cal_data = [];

let valGet = (val) => {

    cal_data.push(val);
    // console.log(cal_data.join(''));


    document.querySelector('.history').innerHTML = cal_data.join('');
    document.querySelector('.result').innerHTML = 0;
}


let finnalres = () => {

    let caltotal  = cal_data.join('');
    document.querySelector('.result').innerHTML = eval(caltotal);
    
}