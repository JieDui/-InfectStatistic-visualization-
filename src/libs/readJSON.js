function f() {
    let fs = require('fs');
    fs.readFile('assets/articles.json', function(err, data) {
        {
            if (err) {
                console.log(err);
            }
            let art = data.toString();
            art = JSON.parse(art);
            console.log(art);
        }
    });
}
