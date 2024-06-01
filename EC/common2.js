const notes = document.querySelectorAll(".notes");
const syllabus = document.querySelectorAll(".syllabus");
const yt = document.querySelectorAll(".yt");
const nextBtn = document.querySelector(".fa-arrow-right");
const prevBtn = document.querySelector(".fa-arrow-left"); 
const subject = document.querySelectorAll(".subject");


var swiper = new Swiper(".semesterParent",{
    slidesPerView:8,
    breakpoints:{
        1150:{
            slidesPerView:8,
        },
        850:{
            slidesPerView:6,
        },
        650:{
            slidesPerView:5,
        },
        250:{
            slidesPerView:4,
        }
    },
})

var swiper2 = new Swiper(".subjectParent",{
    slidesPerView:5,
})

var counter =0;
var counter2 =0;
var counter3 =0;



nextBtn.addEventListener("click",function(){
    slideNext(); slideNext2(); slideNext3();
})

function slideNext(){
    notes[counter].style.animation = "next1 0.5s ease-in forwards";
    if(counter>=notes.length-1){
        counter=0;
    }
    else{
        counter++;
    }
    notes[counter].style.animation = "next2 0.5s ease-in forwards";
    indicators();
}
function slideNext2(){
    syllabus[counter2].style.animation = "next1 0.5s ease-in forwards";
    if(counter2>=syllabus.length-1){
        counter2=0;
    }
    else{
        counter2++;
    }
    syllabus[counter2].style.animation = "next2 0.5s ease-in forwards";
    indicators2();
}
function slideNext3(){
    yt[counter3].style.animation = "next1 0.5s ease-in forwards";
    if(counter3>=yt.length-1){
        counter3=0;
    }
    else{
        counter3++;
    }
    yt[counter3].style.animation = "next2 0.5s ease-in forwards";
    indicators3();
}


prevBtn.addEventListener("click",function(){
    slidePrev(); slidePrev2(); slidePrev3();
});
function slidePrev(){
    notes[counter].style.animation = "prev1 0.5s ease-in forwards";
    if(counter==0){
        counter=notes.length-1;
    }
    else{
        counter--;
    }
    notes[counter].style.animation = "prev2 0.5s ease-in forwards";
    indicators();
}
function slidePrev2(){
    syllabus[counter2].style.animation = "prev1 0.5s ease-in forwards";
    if(counter2==0){
        counter2=syllabus.length-1;
    }
    else{
        counter2--;
    }
    syllabus[counter2].style.animation = "prev2 0.5s ease-in forwards";
    indicators2();
}
function slidePrev3(){
    yt[counter3].style.animation = "prev1 0.5s ease-in forwards";
    if(counter3==0){
        counter3=yt.length-1;
    }
    else{
        counter3--;
    }
    yt[counter3].style.animation = "prev2 0.5s ease-in forwards";
    indicators3();
}



function indicators(){
    for(i=0;i<subject.length;i++){
        subject[i].className=subject[i].className.replace(" active"," ");
    }
    subject[counter].className+=" active";
}

function indicators2(){
    for(j=0;j<syllabus.length;j++){
        syllabus[j].className=syllabus[j].className.replace(" active"," ");
    }
    syllabus[counter2].className+=" active";
}
function indicators3(){
    for(k=0;k<yt.length;k++){
        yt[k].className=yt[k].className.replace(" active"," ");
    }
    yt[counter3].className+=" active";
}

function switchNote(currentNote){
    currentNote.classList.add("active");
    var noteId = currentNote.getAttribute("attr");
    if(noteId>counter){
    notes[counter].style.animation = "next1 0.5s ease-in forwards";
    counter=noteId;
    notes[counter].style.animation = "next2 0.5s ease-in forwards";
    }
    else if(noteId==counter){
        return;
    }
    else{
    notes[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter=noteId;
    notes[counter].style.animation = "prev2 0.5s ease-in forwards";
    }
    indicators();
}

function switchNote2(currentNote2){
    currentNote2.classList.add("active");
    var noteId = currentNote2.getAttribute("attr");
    if(noteId>counter2){
    syllabus[counter2].style.animation = "next1 0.5s ease-in forwards";
    counter2=noteId;
    syllabus[counter2].style.animation = "next2 0.5s ease-in forwards";
    }
    else if(noteId==counter2){
        return;
    }
    else{
    syllabus[counter2].style.animation = "prev1 0.5s ease-in forwards";
    counter2=noteId;
    syllabus[counter2].style.animation = "prev2 0.5s ease-in forwards";
    }
    indicators2();
}

function switchNote3(currentNote3){
    currentNote3.classList.add("active");
    var noteId = currentNote3.getAttribute("attr");
    if(noteId>counter3){
    yt[counter3].style.animation = "next1 0.5s ease-in forwards";
    counter3=noteId;
    yt[counter3].style.animation = "next2 0.5s ease-in forwards";
    }
    else if(noteId==counter3){
        return;
    }
    else{
    yt[counter3].style.animation = "prev1 0.5s ease-in forwards";
    counter3=noteId;
    yt[counter3].style.animation = "prev2 0.5s ease-in forwards";
    }
    indicators3();
}
