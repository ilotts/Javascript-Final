var username = document.getElementById('username')
var password = document.getElementById('password')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')
var nav = document.getElementById('nav')
var pgContent = document.getElementById('pgContent')
var gradeForm = document.getElementById('gradeForm')
var gradeButton = document.getElementById('gradeButton')
var gListDiv = document.getElementById('gListDiv')

nav.style.visibility = "hidden"
pgContent.style.visibility = "hidden"
gradeForm.style.visibility = "hidden"

function navPage()
{
  nav.style.visibility = "visible"
  pgContent.style.visibility = "visible"
  
  form.style.visibility = "hidden"
}

var list = []
function render()
{
  for(var i = 0; i < list.length; i++)
    {
      var ele = document.createElement('div')
      ele.innerHTML = list[i]
      document.body.querySelector(".gradeList").appendChild(ele)
    }
}

function gradeSubmit()
{
  var snInput = document.body.querySelector(".studentInput").value
  var gradeError = document.body.querySelector(".gradeError")
  var gradeList = document.body.querySelector(".gradeList")
  var gradeInput = document.body.querySelector(".gradeInput").value
  
  let gradeMsg = []
  
  if(snInput.length < 2)
    {
      gradeMsg.push("Name needs to be more than one letter long")
      gradeList.innerHTML = ""
    }
  if(isNaN(gradeInput) == true)
    {
      gradeMsg.push("Grade input must be a number between 1-100")
      gradeList.innerHTML = ""
    }
  if(gradeInput > 100 || gradeInput < 1)
    {
      gradeMsg.push("Grade input must be between 1-100")
      gradeList.innerHTML = ""
    }
  if(isNaN(snInput) == false)
    {
      gradeMsg.push("Input a valid student name")
      gradeList.innerHTML = ""
    }
  if(snInput.length > 1 && isNaN(gradeInput) == false && isNaN(snInput) == true && gradeInput <= 100 && gradeInput >= 1)
    {
      gradeError.innerHTML = ""
      gradeList.innerHTML = ""
      list.push("Student Name: " +snInput+ " | Grade: " +gradeInput)
      gradeView()
    }
  
  if (gradeMsg.length > 0)
    {
      gradeError.innerText = gradeMsg.join(', ')
    }
  render()
}

gradeButton.addEventListener("click", function()
                            {
  gradeSubmit()
})

function gradeView()
  {
    gradeForm.style.visibility = "hidden"
    gListDiv.style.visibility = "visible"
    pgContent.innerHTML = "Grades"
  }

function addGrade()
  {
    gradeForm.style.visibility = "visible"
    gListDiv.style.visibility = "hidden"
  }

var pages =
    [
      {
        name: "Grade View",
        content: "Student Grades"
      },
      {
        name: "Add Grade",
        content: "Enter Grades Here"
      }
    ]

for(var i = 0; i < pages.length; i++)
  {
    createPage(pages[i])
  }
function createPage(pg)
{
  var button = document.createElement("button")
  button.addEventListener("click", function()
  {
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML = pg.name
  nav.appendChild(button)
}

function contentWrite(wd, pg)
{
  pgContent.innerHTML = wd
  
  if (pg == "Grade View")
    {
      gradeView()
    }
  if (pg == "Add Grade")
    {
      addGrade()
    }
}

form.addEventListener('submit', (e) => 
  {
    let messages = []
    if (username.value !== "cool")
      {
        messages.push('Incorrect username. Please enter valid username')
      }
    if (password.value !== "password")
      {
        messages.push('Incorrect password. Please enter valid password')
      }
    if (username.value == "cool" && password.value == "password")
      {
        errorElement.innerText = ""
        username.value = ""
        password.value = ""
        navPage()
        e.preventDefault()
      }
  
  if (messages.length > 0)
      {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }
})