const formidable = require('formidable');

exports.upload = (req, res) => {

    const form = new formidable.IncomingForm();

    form.parse(req);
    form.on('fileBegin', function (name, file) {
        file.path = __dirname + '/uploads/' + file.name;
        console.log(file)
    });

    form.on('file', function (name, file) {
        res.send({
            name: file.name,
            type: file.type,
            size: file.size
        })
    });



}