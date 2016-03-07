Template.dropzone.events({
    'dropped #dropzone': function(event){
        event.preventDefault();
        FS.Utility.eachFile(event, function(file){
            var newFile = new FS.File(file);
            Images.insert(newFile, function(err, result){
                if (err) {
                    FlashMessages.sendError('There was an error with the upload');
                } else {
                    Session.set('imageId', result._id);
                    FlashMessages.sendSuccess('Image uploaded!');
                    Modal.show('addInfo');
                }
            });
        });
    }
});
