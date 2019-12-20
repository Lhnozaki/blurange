// 1. GET DATA
const { name, about, favoriteColor } = data
// 2. CREATE TEMPLATE 
const template = `
    <div class="template">
        <h2>${name}</h2>
        <p>${about}</p>
        <h4>${favoriteColor}</h4>
    </div>
`

// 3. APPEND TO HTML
const root = document.querySelector('#root');
root.innerHTML = template;
