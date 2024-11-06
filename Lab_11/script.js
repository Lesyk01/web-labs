document.addEventListener("DOMContentLoaded", function () {
    
    const tanksData = {
        "object140": {
            name: "OBJECT 140 (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:15.jpg",
            damage: 420,
            breoning: 264,
            attackSpeed: 9.09,
            timeOfTargeting: 2.1,
            ammunition: 50
        },
        "e100": {
            name: "E 100 (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:20.jpg",
            damage: 530,
            breoning: 275,
            attackSpeed: 8.5,
            timeOfTargeting: 2.3,
            ammunition: 48
        },
        "maus": {
            name: "MAUS (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:18.jpg",
            damage: 460,
            breoning: 290,
            attackSpeed: 8.0,
            timeOfTargeting: 2.5,
            ammunition: 42
        },
        "t110e5": {
            name: "T110E5 (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:28.jpg",
            damage: 400,
            breoning: 258,
            attackSpeed: 9.5,
            timeOfTargeting: 2.0,
            ammunition: 52
        },
        "t57heavy": {
            name: "T57 HEAVY TANK (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:26.jpg",
            damage: 420,
            breoning: 250,
            attackSpeed: 8.9,
            timeOfTargeting: 2.2,
            ammunition: 47
        },
        "fv215b": {
            name: "FV215B (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:24.jpg",
            damage: 440,
            breoning: 263,
            attackSpeed: 9.0,
            timeOfTargeting: 2.1,
            ammunition: 49
        },
        "conqueror": {
            name: "CONQUEROR (Level 10)",
            image: "img/IMAGE 2024-10-28 10:46:12.jpg",
            damage: 410,
            breoning: 255,
            attackSpeed: 9.2,
            timeOfTargeting: 2.4,
            ammunition: 50
        }
    };

    const modal = document.getElementById("tankModal");
    const closeModal = document.getElementById("closeModal");

   
    function showTankData(tankId) {
        const data = tanksData[tankId];
        tankName.textContent = data.name;
        tankImage.src = data.image;
        tankDamage.textContent = data.damage;
        tankBreoning.textContent = data.breoning;
        tankAttackSpeed.textContent = data.attackSpeed;
        tankTimeOfTargeting.textContent = data.timeOfTargeting;
        tankAmmunition.textContent = data.ammunition;

     
        modal.style.display = "block";
    }

    
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

   
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            showTankData(button.id);
        });
    });
});
