function updateUserInfo(event) {
    event.preventDefault();

    let name = document.getElementById("input-name").value;
    let age = document.getElementById("input-age").value;
    let work = document.getElementById("input-work").value;
    let experience = document.getElementById("input-experience").value;

    document.getElementById("user-name").innerText = name;
    document.getElementById("user-age").innerText = "Age: " + age;
    document.getElementById("user-work").innerText = "Work: " + work;
    document.getElementById("user-experience").innerText = "Experience: " + experience;

    document.getElementById("progress-ai").style.width = document.getElementById("input-ai").value + "%";
    document.getElementById("progress-software").style.width = document.getElementById("input-software").value + "%";
    document.getElementById("progress-data").style.width = document.getElementById("input-data").value + "%";

    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);
    localStorage.setItem("userWork", work);
    localStorage.setItem("userExperience", experience);

    loadUserInfo();
}


function loadUserInfo() {
    let savedName = localStorage.getItem("userName");
    let savedAge = localStorage.getItem("userAge");
    let savedWork = localStorage.getItem("userWork");
    let savedExperience = localStorage.getItem("userExperience");

    if (savedName) {
        document.getElementById("user-name").innerText = savedName;
    }
    if (savedAge) {
        document.getElementById("user-age").innerText = "Age: " + savedAge;
    }
    if (savedWork) {
        document.getElementById("user-work").innerText = "Work: " + savedWork;
    }
    if (savedExperience) {
        document.getElementById("user-experience").innerText = "Experience: " + savedExperience;
    }
}

document.addEventListener('DOMContentLoaded', function() {
   
    const updateForm = document.getElementById("update-form");
    if (updateForm) { 
        updateForm.addEventListener("submit", updateUserInfo);
    } else {
        console.error("Form with ID 'update-form' not found.");
    }

    window.onload = loadUserInfo; 
});


function toggleGoal(goalId) {
    if (selectedGoals.has(goalId)) {
        selectedGoals.delete(goalId);
    } else {
        selectedGoals.add(goalId);
    }
    renderSelectedGoals();
    renderGoals();
}

function renderGoals() {
    goalContainer.innerHTML = '';
    sdgGoals.forEach(goal => {
        const img = document.createElement('img');
        img.src = goal.img;
        img.alt = `Goal ${goal.id}`;
        img.className = `goal ${selectedGoals.has(goal.id) ? 'selected' : ''}`;
        img.onclick = () => toggleGoal(goal.id);
        goalContainer.appendChild(img);
    });
}

function renderSelectedGoals() {
    selectedGoalsContainer.innerHTML = '<h3>Selected Goals</h3>';
    if (selectedGoals.size > 0) {
        selectedGoals.forEach(goalId => {
            const goal = sdgGoals.find(g => g.id === goalId);
            const img = document.createElement('img');
            img.src = goal.img;
            img.alt = `Goal ${goal.id}`;
            img.className = 'goal selected';
            selectedGoalsContainer.appendChild(img);
        });
    }
}

renderGoals();


