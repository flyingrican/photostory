Template.image.helpers({
    'isOwn': function(imageId){
        var owner = ImageInfo.findOne({imageId:imageId}).userId;
        if(owner === Meteor.userId()){
            return true;
        }else{
            return false;
        }
    }
});

Template.image.events({
    'click .remove-image': function(event){
        event.preventDefault();
        if(confirm('Are you sure?')){
            Meteor.call('deleteImage', this._id);
            FlashMessages.sendSuccess('Image Removed');
        }
    }
});
