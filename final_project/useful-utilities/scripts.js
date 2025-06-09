function toggleLyrics(id) {
    const allLyrics = document.querySelectorAll('div[id^="lyrics"]');
    allLyrics.forEach((lyrics) => {
        if (lyrics.id !== id) {
            lyrics.style.display = 'none';
        }
    });

    const selectedLyrics = document.getElementById(id);
    selectedLyrics.style.display = selectedLyrics.style.display === 'block' ? 'none' : 'block';
}
