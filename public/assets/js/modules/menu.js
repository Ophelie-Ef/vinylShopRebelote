const createEntry = (datas, parent) => {

    datas.forEach((data) => {

        const li = document.createElement("li");

        li.textContent = data.text;
        parent.append(li);

        if (data.icon !== null) {

            const icon = document.createElement("i");
            data.icon.forEach(element => {
                icon.classList.add(element);
            });
            li.prepend(icon);
        }

        if (data.url !== null) {
            const a = document.createElement("a");
            a.href = data.url;
            //a.prepend(li);
        }

        if (data.submenu !== null) {
            li.addEventListener("click", () => {
                ul.classList.toggle("hideSubMenu");
                ul.classList.toggle("showSubMenu")
            })
            const ul = document.createElement("ul");
            ul.classList.add("subMenu", "hideSubMenu");
            li.append(ul);
            createEntry(data.submenu, ul);
        }
    })

}

export { createEntry };