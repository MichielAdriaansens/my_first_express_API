function ctrlRenderRootPage(req, res) {

    //'__dirname' is reference to root folder (absolute path)
    //res.sendFile(path.join(__dirname, 'public', 'images', 'American_Gothic.jpg'));

    res.render('index', {
        title: "Howdi folks!",
        caption: 'Cattle List!!',
    })
}

module.exports = ctrlRenderRootPage;