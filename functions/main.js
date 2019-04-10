function getSolutions (a,b,c) {
    let D = (b * b) - 4 * a * c;
    if (D < 0) {
        return {D: D}
    }
    else if (D === 0) {
        let x1 = -b / 2 * a;
       return {roots: [x1], D: D}
    }
    else {
      let x1 = (-b + Math.sqrt(D)) / 2 * a;
      let x2 = (-b - Math.sqrt(D)) / 2 * a;
      return {
         roots: [x1, x2], D: D
      }
    }
}

function showSolutionsMessage (a,b,c) {
  let result = getSolutions (a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.roots === undefined) {
    console.log(`Уравнение не имеет вещественных корней`)}
  else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)}
  else if (result.roots.length === 2) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }   
}
//тест
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(9, 22, -5);
showSolutionsMessage(1, 6, 9);

//№2

function getPersonData(secretData) {
  let lastName = sayName(secretData.aaa)
  let firstName = sayName(secretData.bbb)
  
  function sayName(name) {
  if (name === 0) {
         name = "Эмильо"
         } 
    else if (name === 1){
        name = "Родриго";
    }
    return name
 }    
    return {
      firstName,
      lastName}
    }
  
  //тест
  console.log(getPersonData({
    aaa: 0,
    bbb: 0
  }));
  console.log(getPersonData({
    aaa: 1,
    bbb: 0
  }));
  console.log(getPersonData({
    aaa: 0,
    bbb: 1
  }));
  console.log(getPersonData({
    aaa: 1,
    bbb: 1
  }));
  
//3

function getAverageScore(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
      sum += data[i];

  }
  sum = sum / data.length;
  return sum;
}
function getTotalAverage(result) {
  let average = []
  for (key in result) {
      average.push(result[key]);
  }
  average = getAverageScore(average);
  return average;
}

function digitalJournal() {
  let marks = {
      algebra: [2, 4, 5, 2, 3, 4],
      geometry: [2, 4, 5],
      russian: [3, 3, 4, 5],
      phycics: [5, 5],
      music: [2, 2, 6],
      english: [4, 4, 6],
      poetry: [5, 3, 4],
      chemestry: [2],
      french: [4, 4]
  };
  let result = {}
  for (key in marks) {
      result[key] = getAverageScore(marks[key]);
  }
  result.average = getTotalAverage(result);
  console.log(result);
}

digitalJournal();
console.log(getAverageScore({ algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  phycics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 6],
  poetry: [5, 3, 4],
  chemestry: [2],
  french: [4, 4]}));
  