const tasksDiv = document.querySelector(".tasks");
const add = document.querySelector(".add");

const tasks = {
    task: {
        // "задача 1": {
        //     deadline: "21.12.2021",
        // },
        // "задача 2": {
        //     deadline: "23.12.2021",
        // },
        // "задача 3": {
        //     deadline: "25.12.2021",
        // },
    },
};

function build() {
    tasksDiv.innerHTML = "";
    document.querySelector(".input-text").value = "";
    document.querySelector(".input-datetime").value = "";

    for (key in tasks.task) {
        let taskSingle = document.createElement("div"); // создаем див хранилище для задачи
        taskSingle.classList.add(`tasks-single`); //даем класс для оформления хранилища
        let taskHeader = document.createElement("h2"); //сохздаем заголовок задачи
        let deleteButton = document.createElement("button"); // создаем кнопку удаления

        taskSingle.innerHTML = `<span class="tasks-single-header">${key}</span><p  class="taskDate">сделать до ${tasks.task[key].deadline}</p> <button class="deleteButton">レ</button>`;

        tasksDiv.append(taskSingle); // суем хранилище в общий блок

        // taskSingle.append(taskHeader); // пихаем заголовок в хранилище
        // taskHeader.classList.add(`tasks-single-header`); //даем класс для оформления заголовка
        // taskHeader.innerText = key; // даем имя зголовку

        // for (elemen in tasks.task[key]) {
        //     if (elemen == "name") {
        //         let taskName = document.createElement("div"); // создаем див для хранения содержимого задачи
        //         taskName.classList.add("taskName"); // даем класс для содержимого задачи
        //         taskName.innerText = tasks.task[key][elemen]; // вставляем содержимое задачи в див
        //         taskSingle.append(taskName); // готовый элемент вставляем в хранилище
        //     } else {
        //         let taskDate = document.createElement("div"); // создаем див для хранения дедлайн задачи
        //         taskDate.classList.add("taskDate"); // даем класс для дедлайна задачи
        //         taskDate.innerText = "до " + tasks.task[key][elemen]; // вставляем дедлайн в див
        //         taskSingle.append(taskDate); // готовый элемент вставляем в хранилище
        //     }
        // }

        // deleteButton.classList.add("deleteButton");
        // deleteButton.innerText = "レ";
        // taskSingle.append(deleteButton); // пихаем кнопку удалить в конец блока
    }
}

build();

add.addEventListener("click", () => {
    let taskName = document.querySelector(".input-text").value;
    let taskDate = document.querySelector(".input-datetime").value;
    if (taskDate == "" || taskName == "") {
    } else {
        tasks.task[taskName] = taskName = {
            deadline: taskDate,
        };
    }
    build();
});

tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteButton")) {
        delete tasks.task[e.target.parentElement.firstElementChild.innerText];
        build();
    } else {
    }
});
