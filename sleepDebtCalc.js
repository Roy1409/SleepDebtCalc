function getSleepHours(day){
  day=day.toLowerCase();
  if (day==='monday') {
    return 8;
  }else if(day==='tuesday') {
    return 7;
  } else if(day==='wednesday') {
    return 7;
  } else if(day==='thursday') {
    return 7;
  } else if (day==='friday') {
    return 6;
  } else if(day==='saturday') {
    return 6;
  } else if(day==='sunday') {
    return 7;
  }
}

function getActualSleepHours(){
  sum = 8+7+7+7+6+6+7;
  return sum;
}

function getIdealSleepHours(idealHours){
  return idealHours*7;
}

function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours == idealSleepHours) {
    console.log('Perfect amount of sleep!')
  } else if(actualSleepHours > idealSleepHours) {
    console.log('The user got '+(actualSleepHours-idealSleepHours)+ ' more hours of sleep than needed.')
  }else{
    console.log('The user should get ' +(idealSleepHours - actualSleepHours) +' more hours of rest.')
  }
}

calculateSleepDebt();