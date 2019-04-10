function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    const now = new Date().getTime();
    const dayOfBirthday = new Date(birthday);
    const dayOfBirthdayUT = dayOfBirthday.getTime();
    const diff = now - dayOfBirthdayUT;
    const secondInYear = ((3 * 31536000000) + 31622400000) / 4;
    const age = Math.round(diff / secondInYear);

    return age >= 18;
};




function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  const sound = animal.sound;

if (typeof animal === underfined) {
   return null;
}
else {
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }

    const average = sum / marks.length;
    const roundedAverage = Math.round(average);

    return roundedAverage
}