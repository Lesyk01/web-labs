document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('weapon');

    if (key) {
        showDetails(key);
    }
});

function showDetails(key) {
    const weapon = weapons[key];
    const weaponContent = `
        <h1>${weapon.name}</h1>
        <img src="${weapon.image}" alt="${weapon.name}" class="details-image">
        <div class="info">
            ${Object.entries(weapon.details)
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('')}
        </div>
    `;
    document.getElementById("Content").innerHTML = weaponContent;
}
