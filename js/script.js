document.querySelector("#cdForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const author = e.target.txtAuthor.value
    const title = e.target.txtTitle.value
    const year = e.target.txtYear.value

    const tableEntry = document.createElement("tr")

    tableEntry.innerHTML = `
        <td>${author}</td>
        <td>${title}</td>
        <td>${year}</td>
        <td><button class="removeCD">x</button></td>
    `;

    tableEntry.querySelector(".removeCD").addEventListener("click", () => {
        tableEntry.remove()
    })

    document.querySelector("#cdList").append(tableEntry)
})