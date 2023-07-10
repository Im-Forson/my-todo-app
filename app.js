const theme = document.querySelector(".theme");
const background = document.querySelector(".background");
const bodyBackground = document.querySelector(".body-bg");
const inputBar = document.querySelector(".input-bar");
const input = document.querySelector(".input");
const items = document.getElementsByClassName("item");
const controls = document.querySelector(".controls");
const mobileGroup = document.querySelector(".mobile-group");
const dragDropTxt = document.querySelector(".drag-drop-txt");
const attribution = document.querySelector(".attribution");
const checkIcons = document.getElementsByClassName("check-con");
const inputCheck = document.querySelector(".input-check-icon");
const list = document.querySelector("ul");
const todoLeft = document.getElementById("count-left");
const displayAll = document.querySelector(".all");
const displayActive = document.querySelector(".active");
const displayCompleted = document.querySelector(".completed");
const clearCompleted = document.querySelector(".clear-completed");
const mobileAll = document.querySelector(".all-mobile");
const mobileActive = document.querySelector(".active-mobile");
const mobileCompleted = document.querySelector(".completed-mobile");
const paragraphs = document.querySelectorAll(".todo-text");
const tabs = document.querySelectorAll(".tab");
const mobileTabs = document.querySelectorAll(".mobile-tab");
const storedItems = JSON.parse(localStorage.getItem("todoList")); 
const storedMode = JSON.parse(localStorage.getItem("displayMode"));
const scrollStyle = document.querySelector(".sortable-list");

var isAll = true;
var totalList = 0;
var totalChecked = 0;
var totalLeft = 0;
var completedArr = [0, 1, 2, 4];
var textArray = [['Complete online javaScript course', 'checked'], ['Jog around the park 3x', 'uncheck'], ['10 minutes meditation', 'uncheck'], ['Read for 1 hour', 'uncheck'], ['Pick up groceries', 'uncheck'], ['Complete Todo App on Frontend Mentor', 'uncheck']];

if (storedItems !== null) 
{
    textArray = storedItems;
}

var isLight;
if (storedMode !== null) {
    isLight = storedMode;
}
else {
    isLight = true;
}


function initialize() {

    if (isLight) 
    {
        // Displaying the content in light mode
        for (let i = 0; i < textArray.length; i++) {

            const li = document.createElement("li");
            const checkContainer = document.createElement("div");
            const checkContainerChild = document.createElement("div");
            const paragraph = document.createElement("p");
            const crossContainer = document.createElement("div");
            const crossContainerChild = document.createElement("div");
            li.classList.add("item");
            li.classList.add("item-light");
            li.classList.add(textArray[i][1]);
            li.draggable = "true";

            checkContainer.classList.add("check-con");
            checkContainer.classList.add("check-con-bg");
            checkContainer.classList.add("check-light");
            checkContainerChild.classList.add("check-icon-con");
            checkContainerChild.classList.add("check-icon");

            paragraph.classList.add("todo-text");

            crossContainer.classList.add("icon-cross-con");
            crossContainerChild.classList.add("icon-cross");
            checkContainer.append(checkContainerChild);
            paragraph.append(textArray[i][0]);
            crossContainer.append(crossContainerChild);
            li.append(checkContainer);
            li.append(paragraph);
            li.append(crossContainer);
            document.querySelector(".sortable-list").appendChild(li);
        }
    }

    // Displaying the content in dark mode
    else if (!isLight)
    {
        theme.classList.remove("light-mode");
        theme.classList.add("dark-mode");
        background.classList.remove("bg-img-light");
        background.classList.add("bg-img-dark");
        bodyBackground.classList.remove("body-bg-light");
        bodyBackground.classList.add("body-bg-dark");
        inputBar.classList.remove("input-light");
        inputBar.classList.add("input-dark");
        input.classList.remove("input-light");
        input.classList.add("input-dark");

        inputCheck.classList.remove("input-check-light");
        inputCheck.classList.add("input-check-dark");
        controls.classList.remove("control-light");
        controls.classList.add("control-dark");
        mobileGroup.classList.remove("group-light");
        mobileGroup.classList.add("group-dark");
        dragDropTxt.classList.remove("drag-drop-light");
        dragDropTxt.classList.add("drag-drop-dark");
        attribution.classList.add("att-dark");

        for (let i = 0; i < textArray.length; i++)
        {
            const li = document.createElement("li");
            const checkContainer = document.createElement("div");
            const checkContainerChild = document.createElement("div");
            const paragraph = document.createElement("p");
            const crossContainer = document.createElement("div");
            const crossContainerChild = document.createElement("div");
            li.classList.add("item");
            li.classList.add("item-dark");
            li.classList.add(textArray[i][1]);
            li.draggable = "true";

            checkContainer.classList.add("check-con");
            checkContainer.classList.add("check-con-bg");
            checkContainer.classList.add("check-dark");
            checkContainerChild.classList.add("check-icon-con");
            checkContainerChild.classList.add("check-icon");

            paragraph.classList.add("todo-text");

            crossContainer.classList.add("icon-cross-con");
            crossContainerChild.classList.add("icon-cross");

            checkContainer.append(checkContainerChild);
            paragraph.append(textArray[i][0]);
            crossContainer.append(crossContainerChild);
            li.append(checkContainer);
            li.append(paragraph);
            li.append(crossContainer);
            document.querySelector(".sortable-list").appendChild(li);
        }
    }

    totalList = items.length;
    for (let i = 0; i <totalList; i++) {
        if (items[i].classList.contains("checked"))
            totalChecked += 1;
    }

    totalLeft = totalList - totalChecked;
    todoLeft.innerHTML = totalLeft;

}


function themeFunction() {

    if (isLight) {
        isLight = false; 
        localStorage.setItem("displayMode", isLight);

        theme.classList.remove("light-mode");
        theme.classList.add("dark-mode");
        background.classList.remove("bg-img-light");
        background.classList.add("bg-img-dark");
        bodyBackground.classList.remove("body-bg-light");
        bodyBackground.classList.add("body-bg-dark");
        inputBar.classList.remove("input-light");
        inputBar.classList.add("input-dark");
        input.classList.remove("input-light");
        input.classList.add("input-dark");

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("item-light");
            items[i].classList.add("item-dark");
        }

        for (let i = 0; i < checkIcons.length; i++) {
            checkIcons[i].classList.remove("check-light");
            checkIcons[i].classList.add("check-dark");
        }

        tabs.forEach(tab => {
            tab.classList.remove("tab-light");
            tab.classList.add("tab-dark");
        });

        mobileTabs.forEach(tab => {
            tab.classList.remove("tab-light");
            tab.classList.add("tab-dark");
        });

        inputCheck.classList.remove("input-check-light");
        inputCheck.classList.add("input-check-dark");
        controls.classList.remove("control-light");
        controls.classList.add("control-dark");
        mobileGroup.classList.remove("group-light");
        mobileGroup.classList.add("group-dark");
        dragDropTxt.classList.remove("drag-drop-light");
        dragDropTxt.classList.add("drag-drop-dark");
        attribution.classList.add("att-dark");
        scrollStyle.classList.remove("light-scroll");
        scrollStyle.classList.add("dark-scroll");
        
    }

    else {
        isLight = true;
        localStorage.setItem("displayMode", isLight);

        theme.classList.remove("dark-mode");
        theme.classList.add("light-mode");
        background.classList.remove("bg-img-dark");
        background.classList.add("bg-img-light");
        bodyBackground.classList.remove("body-bg-dark");
        bodyBackground.classList.add("body-bg-light");
        inputBar.classList.remove("input-dark");
        inputBar.classList.add("input-light");
        input.classList.remove("input-dark");
        input.classList.add("input-light");

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("item-dark");
            items[i].classList.add("item-light");
        }

        for (let i = 0; i < checkIcons.length; i++) {
            checkIcons[i].classList.remove("check-dark");
            checkIcons[i].classList.add("check-light");
        }

        tabs.forEach(tab => {
            tab.classList.remove("tab-dark");
            tab.classList.add("tab-light");
        });

        mobileTabs.forEach(tab => {
            tab.classList.remove("tab-dark");
            tab.classList.add("tab-light");
        });

        inputCheck.classList.remove("input-check-dark");
        inputCheck.classList.add("input-check-light");
        controls.classList.remove("control-dark");
        controls.classList.add("control-light");
        mobileGroup.classList.remove("group-dark");
        mobileGroup.classList.add("group-light");
        dragDropTxt.classList.remove("drag-drop-dark");
        dragDropTxt.classList.add("drag-drop-light");
        attribution.classList.remove("att-dark");
        scrollStyle.classList.remove("dark-scroll");
        scrollStyle.classList.add("light-scroll");
    }
}

/* Adding new todo to the list by enter key */
const inputValue = document.getElementById("input-value");
var inputText;

inputValue.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (inputValue.value === "") {
            alert("The input field cannot be empty");
        }

        else {
            // Creating elements
            const li = document.createElement("li");
            const checkContainer = document.createElement("div");
            const checkContainerChild = document.createElement("div");
            const paragraph = document.createElement("p");
            const crossContainer = document.createElement("div");
            const crossContainerChild = document.createElement("div");
            inputText = inputValue.value;
            textArray.push([inputText, 'uncheck']);

            if (isLight) {
                li.classList.add("item");
                li.classList.add("item-light");
                li.classList.add("uncheck");
                li.draggable = "true";

                checkContainer.classList.add("check-con");
                checkContainer.classList.add("check-con-bg");
                checkContainer.classList.add("check-light");
                checkContainerChild.classList.add("check-icon-con");
                checkContainerChild.classList.add("check-icon");

                paragraph.classList.add("todo-text");

                crossContainer.classList.add("icon-cross-con");
                crossContainerChild.classList.add("icon-cross");


                checkContainer.append(checkContainerChild);
                paragraph.append(inputValue.value);
                crossContainer.append(crossContainerChild);
                li.append(checkContainer);
                li.append(paragraph);
                li.append(crossContainer);

                if (!isAll) {
                    li.classList.add("no-display")
                    
                }

                document.querySelector(".sortable-list").appendChild(li);
                
            }

            else if (!isLight) {
                li.classList.add("item");
                li.classList.add("item-dark");

                checkContainer.classList.add("check-con");
                checkContainer.classList.add("check-con-bg");
                checkContainer.classList.add("check-dark");
                checkContainerChild.classList.add("check-icon-con");
                checkContainerChild.classList.add("check-icon");

                paragraph.classList.add("todo-text");

                crossContainer.classList.add("icon-cross-con");
                crossContainerChild.classList.add("icon-cross");

                checkContainer.append(checkContainerChild);
                paragraph.append(inputValue.value);
                crossContainer.append(crossContainerChild);
                li.append(checkContainer);
                li.append(paragraph);
                li.append(crossContainer);
                
                
                if (!isAll) {
                    li.classList.add("no-display")
                    
                }
                document.querySelector(".sortable-list").appendChild(li);

                
            }

            inputValue.value = "";
            totalList += 1;
            totalLeft += 1;
            todoLeft.innerHTML = totalLeft;
            
        }
        localStorage.setItem("todoList", JSON.stringify(textArray));
        
    }
    
});

// Adding new todo by clicking the add button
inputCheck.addEventListener("click", function() {
    if (inputValue.value === "") {
        alert("The input field cannot be empty");
    }

    else {
        // Creating elements
        const li = document.createElement("li");
        const checkContainer = document.createElement("div");
        const checkContainerChild = document.createElement("div");
        const paragraph = document.createElement("p");
        const crossContainer = document.createElement("div");
        const crossContainerChild = document.createElement("div");
        inputText = inputValue.value;
        textArray.push([inputText, 'uncheck']);

        if (isLight) {
            
            li.classList.add("item");
            li.classList.add("item-light");
            li.classList.add("uncheck");
            li.draggable = "true";

            checkContainer.classList.add("check-con");
            checkContainer.classList.add("check-con-bg");
            checkContainer.classList.add("check-light");
            checkContainerChild.classList.add("check-icon-con");
            checkContainerChild.classList.add("check-icon");

            paragraph.classList.add("todo-text");

            crossContainer.classList.add("icon-cross-con");
            crossContainerChild.classList.add("icon-cross");


            checkContainer.append(checkContainerChild);
            paragraph.append(inputValue.value);
            crossContainer.append(crossContainerChild);
            li.append(checkContainer);
            li.append(paragraph);
            li.append(crossContainer);
            
            if (!isAll) {
                li.classList.add("no-display")
            }
            
            document.querySelector(".sortable-list").appendChild(li);
            
        }

        else if (!isLight) {
            
            li.classList.add("item");
            li.classList.add("item-dark");

            checkContainer.classList.add("check-con");
            checkContainer.classList.add("check-con-bg");
            checkContainer.classList.add("check-dark");
            checkContainerChild.classList.add("check-icon-con");
            checkContainerChild.classList.add("check-icon");

            paragraph.classList.add("todo-text");

            crossContainer.classList.add("icon-cross-con");
            crossContainerChild.classList.add("icon-cross");

            checkContainer.append(checkContainerChild);
            paragraph.append(inputValue.value);
            crossContainer.append(crossContainerChild);
            li.append(checkContainer);
            li.append(paragraph);
            li.append(crossContainer);
            
            if (!isAll) {
                li.classList.add("no-display")
            }

            document.querySelector(".sortable-list").appendChild(li);
            
        }

        inputValue.value = "";
        totalList += 1;
        totalLeft += 1;
        todoLeft.innerHTML = totalLeft;
        
    }
    localStorage.setItem("todoList", JSON.stringify(textArray));

});


/* Checking, unchecking, and deleting todo */
list.addEventListener("click", function(ev) {

    if (ev.target.classList.contains("icon-cross-con") || ev.target.classList.contains("icon-cross")) {

        /* Deleting todo */
        if (ev.target.classList.contains("icon-cross-con")) {

            if (ev.target.parentElement.classList.contains("uncheck")) {
                totalLeft -= 1;
                todoLeft.innerHTML = totalLeft;
            }
            var parent = ev.target.parentElement;
            var grandParent = parent.parentElement;
            var children = grandParent.children;
            var todoContent = children[1];
            var index;

            textArray.forEach(text => {
                if (text[0] == todoContent.textContent)
                {
                    index = textArray.indexOf(text);
                }
            });

            textArray.splice(index, 1);
            ev.target.parentElement.remove();
            localStorage.setItem("todoList", JSON.stringify(textArray));
            totalList -= 1;
            
        }

        else if (ev.target.classList.contains("icon-cross")) {

            if (ev.target.parentElement.parentElement.classList.contains("uncheck")) {
                totalLeft -= 1;
                todoLeft.innerHTML = totalLeft;
            }
            var parent = ev.target.parentElement;
            var grandParent = parent.parentElement;
            var children = grandParent.children;
            var todoContent = children[1];
            var index;

            textArray.forEach(text => {
                if (text[0] == todoContent.textContent)
                {
                    index = textArray.indexOf(text);
                }
            });
            textArray.splice(index, 1);
            ev.target.parentElement.parentElement.remove();
            localStorage.setItem("todoList", JSON.stringify(textArray));
            totalList -= 1;
            
        }
        
    }
    
    /* Checking and unchecking todo*/
    else if (ev.target.parentElement.classList.contains("checked") || ev.target.parentElement.parentElement.classList.contains("checked")) {

        if (ev.target.classList.contains("check-con")) {
            ev.target.parentElement.classList.remove("checked");
            ev.target.parentElement.classList.add("uncheck");
            totalChecked -= 1;
            totalLeft += 1;
            todoLeft.innerHTML = totalLeft;

            // Updating check status in the list array
            var parent = ev.target.parentElement;
            var children = parent.children;
            var textContent = children[1].textContent;
            var indexOfTodo;
            var checkStatus = 'uncheck';
            
            for(let i = 0; i < textArray.length; i++)
            {
                if(textArray[i][0] == textContent)
                {
                    indexOfTodo = textArray.indexOf(textArray[i]);
                }
            }
            textArray[indexOfTodo][1] = checkStatus;
            console.log(textArray[indexOfTodo]);
            
        }
        
        else if (ev.target.classList.contains("check-icon")) {
            ev.target.parentElement.parentElement.classList.remove("checked");
            ev.target.parentElement.parentElement.classList.add("uncheck");
            totalChecked -= 1;
            totalLeft += 1;
            todoLeft.innerHTML = totalLeft;

            // Updating check status in the list array
            var parent = ev.target.parentElement.parentElement;
            var children = parent.children;
            var textContent = children[1].textContent;
            var indexOfTodo;
            var checkStatus = 'uncheck';
            
            for(let i = 0; i < textArray.length; i++)
            {
                if(textArray[i][0] == textContent)
                {
                    indexOfTodo = textArray.indexOf(textArray[i]);
                }
            }
            textArray[indexOfTodo][1] = checkStatus;
        }
        localStorage.setItem("todoList", JSON.stringify(textArray));
    }

    else if (ev.target.parentElement.classList.contains("uncheck") || ev.target.parentElement.parentElement.classList.contains("uncheck")) {

        if (ev.target.classList.contains("check-con")) {
            ev.target.parentElement.classList.remove("uncheck");
            ev.target.parentElement.classList.add("checked");
            totalChecked += 1;
            totalLeft -= 1;
            todoLeft.innerHTML = totalLeft;

            // Updating check status in the list array
            var parent = ev.target.parentElement;
            var children = parent.children;
            var textContent = children[1].textContent;
            var indexOfTodo;
            var checkStatus = 'checked';
            
            for(let i = 0; i < textArray.length; i++)
            {
                if(textArray[i][0] == textContent)
                {
                    indexOfTodo = textArray.indexOf(textArray[i]);
                }
            }
            textArray[indexOfTodo][1] = checkStatus;
        }
        
        else if (ev.target.classList.contains("check-icon")) {
            ev.target.parentElement.parentElement.classList.remove("uncheck");
            ev.target.parentElement.parentElement.classList.add("checked");
            totalChecked += 1;
            totalLeft -= 1;
            todoLeft.innerHTML = totalLeft;

            // Updating check status in the list array
            var parent = ev.target.parentElement.parentElement;
            var children = parent.children;
            var textContent = children[1].textContent;
            var indexOfTodo;
            var checkStatus = 'checked';

            for(let i = 0; i < textArray.length; i++)
            {
                if(textArray[i][0] == textContent)
                {
                    indexOfTodo = textArray.indexOf(textArray[i]);
                }
            }
            textArray[indexOfTodo][1] = checkStatus;
        }
        localStorage.setItem("todoList", JSON.stringify(textArray));
    }
    
});

// Display all todos on desktop
displayAll.addEventListener("click", function() {

    isAll = true;
    displayAll.classList.add("active-tab");
    displayActive.classList.remove("active-tab");
    displayCompleted.classList.remove("active-tab");

    for (let i = 0; i < totalList; i++) {
        items[i].style.display = "flex";
    }
});

// Display active todos only on desktop
displayActive.addEventListener("click", function() {

    isAll = true;

    if (totalChecked == items.length) {
        alert("No active todo");
    }

    else {
        displayAll.classList.remove("active-tab");
        displayActive.classList.add("active-tab");
        displayCompleted.classList.remove("active-tab");

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("checked")) {
                items[i].style.display = "none";
            }
        }
    }
});

// Display Completed todos only on desktop
displayCompleted.addEventListener("click", function() {

    isAll = false;

    if (totalChecked < 1) {
        alert("None has been completed");
    }

    else {
        displayAll.classList.remove("active-tab");
    displayActive.classList.remove("active-tab");
    displayCompleted.classList.add("active-tab");

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }
    
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("uncheck")) {
                items[i].style.display = "none";
            }
        
        }
    }
    
});


// Display all todos on mobile
mobileAll.addEventListener("click", function() {

    isAll = true;
    mobileAll.classList.add("active-tab");
    mobileActive.classList.remove("active-tab");
    mobileCompleted.classList.remove("active-tab");

    for (let i = 0; i < totalList; i++) {
        items[i].style.display = "flex";
    }
});

// Display active todos only on mobile
mobileActive.addEventListener("click", function() {

    isAll = true;
    if (totalChecked == items.length) {
        alert("No active todo");
    }

    else {
        mobileAll.classList.remove("active-tab");
        mobileActive.classList.add("active-tab");
        mobileCompleted.classList.remove("active-tab");

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("checked")) {
                items[i].style.display = "none";
            }
        }
    }
});

// Display Completed todos only on mobile
mobileCompleted.addEventListener("click", function() {

    isAll = false;
    if (totalChecked < 1) {
        alert("None has been completed");
    }

    else {
        mobileAll.classList.remove("active-tab");
        mobileActive.classList.remove("active-tab");
        mobileCompleted.classList.add("active-tab");

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }
    
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("uncheck")) {
                items[i].style.display = "none";
            }
        
        }
    }
    
});



// Clearing completed todos from the list
clearCompleted.addEventListener("click", function() {
    
    if (totalChecked < 1) {
        alert("None has been completed to clear");
    }

    else {

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < textArray.length; j++) {
                if (textArray[j][1] == 'checked') {
                    textArray.splice(j, 1);
                    //console.log(textArray[i]);
                }
            }
        }

        for (let i = 0; i < 6; i++) {
            for(let j = 0; j < items.length; j++) {
                if (items[j].classList.contains("checked")) {
                    items[j].remove();
                    totalList -= 1;
                    totalChecked -= 1;
                }
            }
            
        }
        localStorage.setItem("todoList", JSON.stringify(textArray));
        location.reload();
    }
    
});

// Dragging and dropping items
list.addEventListener("dragstart", function(ev) {
    setTimeout(() => ev.target.classList.add("dragging"), 0);

    ev.target.addEventListener("dragend", () => ev.target.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = list.querySelector(".dragging");

    const siblings = [...list.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    list.insertBefore(draggingItem, nextSibling);
    reArrangeList();
}

list.addEventListener("dragover", initSortableList);
list.addEventListener("dragenter", e => e.preventDefault());



function reArrangeList() {
    
    var outer = [];
    var content;
    var status;
    for (let i = 0; i < items.length; i++) {
        var inner = [];
        content = items[i].children[1].textContent;
        if (items[i].classList.contains("checked")) {
            status = 'checked';
        }
        else if (items[i].classList.contains("uncheck")) {
            status = 'uncheck';
        }
        inner.push(content);
        inner.push(status);
        outer.push(inner);
    }
    
    textArray = outer;
    localStorage.setItem("todoList", JSON.stringify(textArray));
}
