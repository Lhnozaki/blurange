// 1. GET DATA
const { name, about, favoriteColor } = data;
// 2. CREATE TEMPLATE
const template = `
    <div class="template3">
        <h2>${name}</h2>
        <p>${about}</p>
        <h4>${favoriteColor}</h4>
    </div>
`;

// 3. APPEND TO HTML
const template3 = document.querySelector('#template3');
template3.innerHTML = template;
