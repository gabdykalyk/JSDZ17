// TASK1
let first = ['a', 'b', 'c', 'd', 'e']
for (i = 0; i < first.length; i++) {
    document.write(first[i], '<br>')
}

// TASK2
let second = [1, 2, 3, 4, 5]
for (i = 0; i < second.length; i++) {
    if (second[i] % 2 !== 0) {
        document.write(second[i], '<br>')
    }
}

// TASK3
function multiple() {
    let third = [1, 2, 3, 4, 5]
    let multiple = 1;
    for (i = 0; i < third.length; i++) {
        multiple = multiple * third[i]
    }
    document.write(multiple)
    document.write("<br>")
}
multiple()

// TASK4
let fourth = [2, 5, 9, 15, 1, 4]
for (i = 0; i < fourth.length; i++) {
    if ((fourth[i] > 3) && (fourth[i] < 10)) {
        document.write(fourth[i])
        document.write('<br>')
    }
}

// TASK5
function average() {
    let arr = [2, 6, 12, 20, 50]
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    let average = sum / arr.length
    document.write(average)
    document.write("<br>")
}
average()

// TASK6
let sixth = [10, 20, 30, 50, 235, 3000]
for (i = 0; i < sixth.length; i++) {
    if (String(sixth[i])[0] === '1' || String(sixth[i])[0] === '2' || String(sixth[i])[0] === '5') {
        document.write(sixth[i])
        document.write("<br>")
    }
}

// TASK7
let seventh = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
for (i = 0; i < seventh.length; i++) {
    if (i >= 5) {
        document.write(`<b> ${seventh[i]}<b>`)
        document.write("<br>")
    } else {
        document.write(seventh[i])
        document.write("<br>")
    }
}



