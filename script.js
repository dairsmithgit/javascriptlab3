let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  });
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    const nameDelete = array.findIndex( (array) => array.name === name);
    array.splice(nameDelete, 1);
}

function editSubmission(array, index, score) {
    array[index].score = score;
    if (array[index].score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    }
}

function findSubmissionByName(array, name) {
    const subName = array.find( (array) => array.name === name);
    return subName;
}

function findLowestScore(array) {
    const lowScore = array.score[0];
    array.forEach((score) => {
        if (score < lowScore) {
            lowScore = this.score;
        }
    });
}

function findAverageScore(array) {
    let scoreSum = 0;
    for (let score of array) {
        scoreSum += score;
    }
    let scoreAvg = scoreSum / array.length;
    console.log(scoreAvg);
}

function filterPassing(array) {
    const filteredPass = array.filter( (array) => array.passed === true);
    return filteredPass;
}

function filter90AndAbove(array) {
    const highMarks = array.filter( (array) => array.score >= 90);
    return highMarks;
}
