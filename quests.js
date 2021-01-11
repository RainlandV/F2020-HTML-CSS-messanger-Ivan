let a = [7,5,9,12];

function max (arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
        result = arr[i];
    }
  }

    return result;
}   //max(a)




let a = [7,5,9,12,[5,90,[125,53890,[4252, 1341],934]]]; //массивы в массивах

function max (arr) {
  let result= 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {    //(typeof arr[i] === 'array')
        let b = max(arr[i]);
        if (b > result) {
            result = b;
        }
    } else {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
  }

    return result;
}


//Узнать квадраты на полях (макс площадью)
function ololo (x,y) {

  if (x > y) {  
    let ost = x % y;
    if (ost !== 0) {
      return ololo (y, ost);
    } else {
      return y;
    }
  } else {
    let ost = y % x;
    if (ost !== 0) {
      return ololo (x, ost);
    } else {
      return x;
    }
  }
}

//вызов: ololo(число x, число y)


