class ColorTheme {
    constructor(tema) {
        this.theme = tema;
    }

    background_change() {
        if (this.theme == "dark") {
            document.getElementById('main-page').style.backgroundColor = '#4F4F4F';
            document.getElementById('footer').style.color = "white";
            document.getElementById('tec').style.webkitTextFillColor = "#fff";
            document.getElementById('blog').style.webkitTextFillColor = "#000";
            for (let i = 1; i <= 3; i++) {
                document.getElementById('post-' + i).style.backgroundColor = '#585858';
                document.getElementById('post-' + i).style.color = '#fff';
            }
        } else {
            document.getElementById('tec').style.webkitTextFillColor = "#000";
            document.getElementById('blog').style.webkitTextFillColor = "#fff";
            document.getElementById('main-page').style.backgroundColor = '#e6e6e6';
            document.getElementById('footer').style.color = '#e6e6e6';
            for (let i = 1; i <= 3; i++) {
                document.getElementById('post-' + i).style.backgroundColor = '#fff';
                document.getElementById('post-' + i).style.color = '#000';
            }
        }
    }
}