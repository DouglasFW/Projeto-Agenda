document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form")
  const taskInput = document.getElementById("taskInput")
  const dateTimeInput = document.getElementById("dateTimeInput")
  const taskList = document.getElementById("taskList")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    const taskText = taskInput.value.trim()
    const taskDateTime = dateTimeInput.value.trim()

    if (taskText !== "") {
      addTask(taskText, taskDateTime)
      taskInput.value = ""
      dateTimeInput.value = "" // Limpar o valor do input de data/hora
    }
  })

  function addTask(taskText, taskDateTime) {
    const li = document.createElement("li")
    let formattedDate = ""
    let formattedTime = ""

    if (taskDateTime) {
      const date = new Date(taskDateTime)
      formattedDate = formatDate(date)
      formattedTime = formatTime(date)
    }

    li.innerHTML = `<span>${taskText}</span>
                        ${
                          formattedDate
                            ? `<span>Data: ${formattedDate}</span>`
                            : ""
                        }
                        ${
                          formattedTime
                            ? `<span>Hora: ${formattedTime}</span>`
                            : ""
                        }
                        <button class="delete">Excluir</button>`

    taskList.appendChild(li)

    const deleteButton = li.querySelector(".delete")
    deleteButton.addEventListener("click", function () {
      li.remove()
    })
  }

  function formatDate(date) {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return date.toLocaleDateString("pt-BR", options)
  }

  function formatTime(date) {
    const options = { hour: "numeric", minute: "numeric", hour12: false }
    return date.toLocaleTimeString("pt-BR", options)
  }
})
