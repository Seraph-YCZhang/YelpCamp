var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment =   require("./models/comment");

// var data=[
//     {   name:"Person camping",
//         image:"https://images.unsplash.com/photo-1494112142672-801c71472ba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//     },{
//         name:"camping fire",
//         image:"https://images.unsplash.com/photo-1471017204627-b28469ba98cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//     }]

function seedDB(){
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("remove campgrounds!");
    }
    // Comment.remove({}, function(err) {
    //         if(err){
    //             console.log(err);
    //         }
    //     data.forEach(function(seed){
    //         Campground.create(seed,function(err,campground){
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 console.log("add one camp");
    //                 Comment.create(
    //                 {
    //                     text:"This palce is great",
    //                     author:"Homer"
    //                 },function(err,comment){
    //                     if(err){
    //                         console.log(err);
    //                     }else{
    //                         campground.comments.push(comment);
    //                         campground.save();
    //                         console.log("add one comment");
    //                     }
    //                 })
    //             }
            
    //         })
    //     })
    
    //     })
    // })
    //add campgrounds
    
    
    //add comments
})}

module.exports = seedDB;