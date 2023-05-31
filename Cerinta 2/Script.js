window.onload = function () {
    var addButton = document.getElementById("button");

    addButton.addEventListener("click", function () {
        var name = document.getElementById("name").value;
        var link = document.getElementById("link").value;

        var listItem = document.createElement("li");
        listItem.innerText = name;
        listItem.setAttribute("data-link", link);
        listItem.setAttribute("data-name", name);

        var buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.setAttribute("data-link", link);
        buttonDelete.setAttribute("data-name", name);
        buttonDelete.classList.add("delete-button");
        buttonDelete.style.display = "inline-block";
        
        var buttonGet = document.createElement("button");
        buttonGet.textContent = "Get";
        buttonGet.setAttribute("data-link", link);
        buttonGet.setAttribute("data-name", name);
        buttonGet.classList.add("get-button");
        buttonGet.style.display = "inline-block";

        var buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.setAttribute("data-link", link);
        buttonEdit.setAttribute("data-name", name);
        buttonEdit.classList.add("edit-button");
        buttonEdit.style.display = "inline-block";

        listItems = document.querySelectorAll("li");
        listItems.forEach((item, i) => {
            item.removeEventListener("click", function () {
            });
        });

        var list = document.querySelector("#lista");
        list.appendChild(listItem);
        listItem.appendChild(buttonDelete);
        listItem.appendChild(buttonGet);
        listItem.appendChild(buttonEdit);

        listItem.addEventListener("click", function () {
            listItem.querySelector(".delete-button").style.display = "inline-block";
            listItem.querySelector(".get-button").style.display = "inline-block";
            listItem.querySelector(".edit-button").style.display = "inline-block";

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                var name = listItem.getAttribute("data-name");
                var confirmation = confirm(`Are you sure you want to delete ${name}?`);
                if (confirmation === true) {
                    listItem.remove();
                }
            });

            listItem.querySelector(".get-button").addEventListener("click", function () {
                var link = listItem.getAttribute("data-link");
                window.open(link, "_blank");
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                var name = listItem.getAttribute("data-name");
                var link = listItem.getAttribute("data-link");
                var newName = prompt("Enter new name", name);
                var newLink = prompt("Enter new link", link);
                var children = listItem.innerHTML;
                listItem.setAttribute("data-name", newName);
                listItem.setAttribute("data-link", newLink);
                listItem.replaceChild(document.createTextNode(newName), listItem.childNodes[0]);
            })
        });
    });

    document.querySelector("#lista").addEventListener("click", function (event) {
        if (event.target.nodeName == "LI") {
            event.target.dispatchEvent(new Event("click"));
        }
    });
};
