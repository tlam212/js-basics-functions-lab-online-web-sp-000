
function distanceFromHqInBlocks(num){
  let result;

  if(num < 42){
    result = 42 - num
  }else {
    result = num - 42
  }
  return result
}

function distanceFromHqInFeet(num2){
  let calc = distanceFromHqInBlocks(num2)
  let result = calc * 264
  return result

}

function distanceTravelledInFeet(begBlock, endBlock){
  let distance;

  if (endBlock > begBlock){
    distance = (endBlock - begBlock) * 264
  }else {
    distance = (begBlock - endBlock) * 264
  }
  return distance
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  let rate;
  if (distance <= 400){
    rate = 0
  } else if (distance > 400 && distance <= 2000){
    rate = (distance - 400) * .02
  } else if (distance > 2000 && distance < 2500){
    rate = 25
  } else {
     rate = 'cannot travel that far'
  }

  return rate
}
