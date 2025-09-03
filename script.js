async function loadTranslations() {
  const response = await fetch("data/translations.json");
  const data = await response.json();
  const list = document.getElementById("translations");
  const search = document.getElementById("search");

  function renderList(filter = "") {
    list.innerHTML = "";
    data
      .filter(item =>
        item.language.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.language}:</strong> ${item.text} <span>${item.native}</span>`;
        list.appendChild(li);
      });
  }

  search.addEventListener("input", (e) => {
    renderList(e.target.value);
  });

  renderList();
}

loadTranslations();
