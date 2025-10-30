async function loadChecklist() {
  const res = await fetch('checklist.json');
  const data = await res.json();
  const list = document.getElementById('checklist');

  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.task;
    li.addEventListener('click', () => li.classList.toggle('checked'));
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', loadChecklist);
