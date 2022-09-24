var birthday=document.querySelector('#birthday');
var check=document.querySelector('#check');
var output=document.querySelector('#answer');
var outputBirthDay=document.querySelector('#birthdayAnswer');
var date={
    day:'',
    month:'',
    year:''
}
check.addEventListener('click',stringToObj);
// Excercise 1
function reverseString(str){
let arrayStr=str.split('');
let reverseArray=arrayStr.reverse();
return reverseArray.join('');
}
// Excercise 2
function isPlaindrome(str){
   let reversed=reverseString(str);
   return str===reversed;
}
// Excercise 3
function dateToString (date){

    let dateStr={
        day:'',
        month:'',
        year:''};

    if(date.day<10){
        dateStr.day='0'+date.day;
    }
    else{
        dateStr.day=date.day.toString();
    }
    if(date.month<10){
        dateStr.month='0'+date.month;
    }
    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;
}
// Excercise 4
function allDateVariant(date){
    let dateStr=dateToString(date);
    var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy=dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var yymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;
    return ([ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd])
}
// Excercise 5
function checkPlaindrome(date){
    let dateVariants=allDateVariant(date);
    flag=false;
    for(let i=0;i<dateVariants.length;i++)
    {
        if(isPlaindrome(dateVariants[i]))
        {
            flag=true;
            break;
        }
    
    }
    return flag;
}
// Helping functions
function isLeapYear(year){
    return (year%4===0);
}
function getNextDate(date){
    let day=date.day+1;
    let month=date.month;
    let year=date.year;
    let allDaysInMonth=[31,28,31,30,31,31,30,31,30,31,30,31];
    if(isLeapYear(year))
        allDaysInMonth[1]=29;
    if(day>allDaysInMonth[month-1]){
        day=1;
        month++;
    }
    if(month>12){
        month=1;
        year++;
    }
    return {
        day:day,
        month:month,
        year:year
    };  
}
function getpreviousDate(date){
    let day=date.day-1;
    let month=date.month;
    let year=date.year;
    let allDaysInMonth=[31,28,31,30,31,31,30,31,30,31,30,31];
    if(isLeapYear(year))
        allDaysInMonth[1]=29;
    if(day<1){
        day=allDaysInMonth[month-2];
        month--;
    }
    if(month<1){
        month=12;
        year--;
    }
    return {
        day:day,
        month:month,
        year:year
    };  
}
function stringToObj(){
    if(birthday.value==="")
    alert("Please enter your birthday.");
    else{
    date.day=parseInt(birthday.value.slice(8,10));
    date.month=parseInt(birthday.value.slice(5,7));
    date.year=parseInt(birthday.value.slice(0,4));
    let nextPalindrome=getNextPlaindromeDate(date);
    let prevPalindrome=previousPalindromeDate(date);
    console.log(date);
    if(checkPlaindrome(date)){
        outputBirthDay.style.color="green";
        outputBirthDay.innerHTML="Wow😃... your birthday is palindrome";
    }
    else{
        outputBirthDay.style.color="red";
        outputBirthDay.innerHTML="Sorry 😑 .... your birthday is not palindrome";
    }   
    if(prevPalindrome[0]>nextPalindrome[0])
    {output.innerHTML=nextPalindrome[0]+" days remaining in next palindrome date"+"\nDate:"+nextPalindrome[1].day+"-"+nextPalindrome[1].month+"-"+nextPalindrome[1].year;
    }
    else{
        {output.innerHTML=prevPalindrome[0]+" days missed in last palindrome date"+"\nDate:"+prevPalindrome[1].day+"-"+prevPalindrome[1].month+"-"+prevPalindrome[1].year;}
    }
    }
}
// Excercise 6
function getNextPlaindromeDate(date){
    var nextDate=getNextDate(date);
    ctr=0;
    while(1){
        ctr++;
        if(checkPlaindrome(nextDate))
        {
            break;
        }
        else
        {
        nextDate=getNextDate(nextDate);
        }
    }
    return [ctr,nextDate];
}
// HomeWork
function previousPalindromeDate(date){
    var prevDate=getpreviousDate(date);
    ctr=0;
    while(1){
        ctr++;
        if(checkPlaindrome(prevDate))
        {
            break;
        }
        else{
            prevDate=getpreviousDate(prevDate);
        }
    }
    return[ctr,prevDate];
}
