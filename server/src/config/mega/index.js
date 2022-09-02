const {Storage} = require('megajs')
const fs = require('fs')
const path = require('path')

const storage = new Storage({
    email: 'bachle.0212@gmail.com',
    password: 'Lebach123',
    userAgent:'ExampleClient/1.0'
});

var fi;
var contentLength = 0;
var uploads = 0;

//is empty of mega folder
function isEmpty(meg) {
  try {
    const m = meg.children[0].name;
    return false;
  } catch {
    return true;
  }
}



storage.once("error", (err) => {
  console.log(err);
});


async function uploadVideo(filePath,fileName,meg) {
  // console.log(files);
  async function upload(){
    const m = fs.createReadStream(filePath);
        //console.log("new");
        const filess = await meg.upload(
          {
            name: fileName,
            size: fs.statSync(filePath).size
          },
          m
        ).complete;
        console.log("The file was uploaded!",filess.nodeId);
        const link = await filess.link();
        console.log(returnEmbedCodeVideo(link))
        // checkFileAndReturnEmbedCode(filess.nodeId)
        console.log('xong')
  }
  await upload();
}

// Upload Video
async function checkVideoExistsAndUpload(filePath,fileName){
  var fi;
  storage.once("ready", () =>{
    try{
      const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
      const videoFolder = Movie247Folder.children.find(files => files.name === "video");
      //check if empty videoFolder
      if(videoFolder.children === undefined){
        uploadVideo(filePath,fileName,videoFolder);
        return true;
      }
      // check exists video name
      const video = videoFolder.children.find(file => file.name === fileName);
      if(video){
        console.log('exists video name');
        return false;
      }
      else{
        uploadVideo(filePath,fileName,videoFolder);
        return true;
      }
    }catch(error){
      console.log(error.message)
    }
  })
}
function returnEmbedCodeVideo(link){
  const embedCode = link.replace('file','embed');
  return embedCode;
}

async function uploadImage(filePath,fileName,meg){
    async function upload(){
      const m = fs.createReadStream(filePath);
      const file = await meg.upload({
        name:fileName,
        size: fs.statSync(filePath).size
      },m).complete;
      console.log("The file was uploaded!",file.name);
      const link = await file.link();
      console.log(link)
      console.log('xong')
    }
    await upload();
}

function checkImageExistsAndUpload(filePath,fileName){
  storage.once("ready", ()=>{
    const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
    const imageFolder = Movie247Folder.children.find(files => files.name === "image");
    //check if empty image folder
    if(imageFolder.children === undefined){
      console.log('aaaa')
      uploadImage(filePath,fileName,imageFolder);
      return true;
    }
    // check exists image name
    const image = imageFolder.children.find(file => file.name === fileName);
    if(image)
    {
      console.log("exists image name");
      return false;
    }
    else{
      uploadImage(filePath,fileName,imageFolder);
      return true;
    }
  })

}

async function deleteVideo(noteId){
    storage.once("ready", ()=>{
      try{
        const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
        const videoFolder = Movie247Folder.children.find(files => files.name === "video");
        const video = videoFolder.children.find(files => files.noteId = noteId);
        if(video){
          async function deleteVideo(){
            await video.delete(true);
          }
          deleteVideo();
          console.log('Video has been deleted');
          return true;
        }else{
          console.log('Video not found');
          return false;
        }

      }catch(error){
        console.log(error.message);
      }
    })
}
async function deleteImage(noteId){
  storage.once("ready", ()=>{
    try{
      const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
      const imageFolder = Movie247Folder.children.find(files => files.name === "image");
      const image = imageFolder.children.find(files => files.noteId = noteId);
      if(image){
        async function deleteImage(){
          await image.delete(true);
        }
        deleteImage();
        console.log('Image has been deleted');
        return true;
      }else{
        console.log("image not found");
        return false;
      }
      
    }catch(error){
      console.log(error.message);
    }
  })
}
// deleteVideo('KjIURDJC');
// deleteImage('KjIURDJC');
// uploadVideo();
// checkImageExistsAndUpload(path.join(__dirname,'abc.jpg'),'abc.jpg');
// checkVideoExistsAndUpload(path.join(__dirname,'testvideo.mp4'),'testvideo.mp4');

module.exports = {checkImageExistsAndUpload,checkVideoExistsAndUpload,deleteImage,deleteVideo}