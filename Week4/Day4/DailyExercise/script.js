let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

planets.forEach(planet => {

    let eachPlanetDiv = document.createElement("div")

    let planetClassName = planet

    eachPlanetDiv.classList.add(planetClassName, "planet")
    eachPlanetDiv.textContent = planet;

    document.body.appendChild(eachPlanetDiv);
});

