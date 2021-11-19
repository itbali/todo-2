let tasksDiv = document.querySelector(".tasks");

const tasks = {
    task: {
        "задача 1": {
            name: "название задачи 1",
            deadline: "21.12.2021",
        },
        "задача 2": {
            name: "название задачи 2",
            deadline: "23.12.2021",
        },
        "задача 3": {
            name: "название задачи 3",
            deadline: "25.12.2021",
        },
    },
};

const cars = {
    name: "bmw",
    class: "busines",
    wheels: 4,
};

for (key in tasks.task) {
    let taskSingle = document.createElement("div"); // создаем див хранилище для задачи
    let taskHeader = document.createElement("h2"); //сохздаем заголовок задачи
    let deleteButton = document.createElement("button"); // создаем кнопку удаления

    tasksDiv.append(taskSingle); // суем хранилище в общий блок
    taskSingle.classList.add(`tasks-single`); //даем класс для оформления хранилища
    taskSingle.append(taskHeader); // пихаем заголовок в хранилище
    taskHeader.classList.add(`tasks-single-header`); //даем класс для оформления заголовка
    taskHeader.innerText = key; // даем имя зголовку

    for (elemen in tasks.task[key]) {
        if (elemen == "name") {
            let taskName = document.createElement("div"); // создаем див для хранения содержимого задачи
            taskName.classList.add("taskName"); // даем класс для содержимого задачи
            taskName.innerText = tasks.task[key][elemen]; // вставляем содержимое задачи в див
            taskSingle.append(taskName); // готовый элемент вставляем в хранилище
        } else {
            let taskDate = document.createElement("div"); // создаем див для хранения дедлайн задачи
            taskDate.classList.add("taskDate"); // даем класс для дедлайна задачи
            taskDate.innerText = "до " + tasks.task[key][elemen]; // вставляем дедлайн в див
            taskSingle.append(taskDate); // готовый элемент вставляем в хранилище
        }
    }

    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "レ";
    taskSingle.append(deleteButton); // пихаем кнопку удалить в конец блока
}
