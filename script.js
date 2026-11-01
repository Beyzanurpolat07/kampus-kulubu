const searchInput = document.getElementById("eventSearch");
const eventList = document.getElementById("eventList");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const clearButton = document.getElementById("clearSearch");

if (searchInput && eventList && resultCount && noResults && clearButton) {
const events = Array.from(eventList.querySelectorAll(".event-card"));

function filterEvents() {
    const searchText = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    events.forEach(function (event) {
        const eventText = event.textContent.toLocaleLowerCase("tr-TR");
        const matches = eventText.includes(searchText);

        event.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    resultCount.textContent = visibleCount + " etkinlik gösteriliyor.";
    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterEvents);

clearButton.addEventListener("click", function () {
    searchInput.value = "";
    filterEvents();
    searchInput.focus();
});

filterEvents();

}
