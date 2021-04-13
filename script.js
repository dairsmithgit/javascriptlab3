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
}

function findLowestScore(array) {
    const lowScore = array[0];
    array.forEach(function(score) {
        if (score < lowScore) {
            lowScore = score;
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

let testArray = [1, 2, 3, 4, 5];
findAverageScore(testArray);