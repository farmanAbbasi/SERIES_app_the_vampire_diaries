const main = document.getElementById("main");
const form = document.getElementById("form");
const season = document.getElementById("season");
const episode = document.getElementById("episode");
const submit = document.getElementById("submit");

// season 01 and episode 01
getLink("01","01");

async function getLink(seasonNumber,episodeNumber) {
    let BASE_URL='http://d9.o2tv.org/The%20Vampire%20Diaries/Season%20'+seasonNumber+'/The%20Vampire%20Diaries%20-%20S'+seasonNumber+'E'+episodeNumber+'%20(O2TvSeries.Com).mp4';
    console.log(BASE_URL)
    createLinkCard(BASE_URL,seasonNumber,episodeNumber)
    
}


async function createLinkCard(link,seasonNumber,episodeNumber) {
    const cardHTML = `
        <div class="card">
            <div>
                <a href="${link}" target="_blank">Link to Season-${seasonNumber} Episode-${episodeNumber}  </a>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
    console.log("sxsds")
    e.preventDefault();
    const seasonNumber = season.value;
    const episodeNumber = episode.value;

    if (seasonNumber && episodeNumber) {
        getLink(seasonNumber,episodeNumber);
        episode.value = "";
        season.value = "";
    }
});

