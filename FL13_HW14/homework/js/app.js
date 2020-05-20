function Student(name, email) {
    let homeworkResults = [];
    let addHomeworkResult = function (topic, success) {
        let result = {
            topic: topic,
            success: success
        }
        homeworkResults.push(result);
    }
    return {
        getName: () => name,
        getEmail: () => email,
        addHomeworkResult,
        getHomeworkResult: () => homeworkResults
    }
}

function FrontendLab(students, failedLimit) {
    let studentsList = students,
        failedHomeworkLimit = failedLimit,
        homeworkResults = [];
    let printStudentList = function () {
        studentsList.forEach(student => {
            let results = [];
            console.log(`name: ${student.name}, email: ${student.email}`);
            homeworkResults.forEach(homework => {
                homework.results.forEach(result => {
                    if (result.email === student.email) {
                        results.push({
                            topic: homework.topic,
                            success: result.success
                        })
                    }
                })
            })
            console.log(results);
        });
    }
    let addHomeworkResult = function (homework) {
        if (homework) {
            homeworkResults.push(homework)
        }
    }

    let printStudentEligibleForTest = function () {
        studentsList.forEach(student => {
            let failedHomeworks = 0;
            homeworkResults.forEach(homework => {
                homework.results.forEach(result => {
                    if (result.email === student.email) {
                        if (result.success === false) {
                            failedHomeworks++;
                        }
                    }
                })
            })
            if (failedHomeworks <= failedHomeworkLimit) {
                console.log(`name: ${student.name}, email: ${student.email}`);
            }
        })
    }
    return {
        printStudentList,
        addHomeworkResult,
        printStudentEligibleForTest
    }
}