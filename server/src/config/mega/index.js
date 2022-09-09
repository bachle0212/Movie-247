const {Storage} = require('megajs')
const fs = require('fs')
const path = require('path');
const { store } = require('../../controllers/movieController');

var storage;
function storeLogin(){
  storage = new Storage({
      email: 'bachle.0212@gmail.com',
      password: 'Lebach123',
      userAgent:'ExampleClient/1.0',
  });
  storage.once("error", (err) => {
    console.log(err);
  });
}

var storageReady;

//is empty of mega folder
function isEmpty(meg) {
  try {
    if(meg.children === undefined);
    return true;
  } catch {
    return false;
  }
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

function checkVideoExistsAndUpload(filePath,fileName){
    storeLogin();
    return new Promise((res,req) =>{
      storage.once('ready',()=>{
        console.log('aa');
        const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
        const videoFolder = Movie247Folder.children.find(files => files.name === "video");
      console.log('go into promise')
    if(isEmpty(videoFolder)){
      (async()=>{
        console.log('aa')
        const embedCode = await uploadVideo(filePath,fileName,videoFolder);
        res(embedCode);
      })();
        
    }else{
      if(videoFolder.children.find(file => file.name === fileName)){
        console.log('already exits movie');
        return;
      }else{
      (async()=>{ 
        console.log('aa')
        const embedCode = await uploadVideo(filePath,fileName,videoFolder);
        res(embedCode);
      })()};
    }})})   
}


async function uploadVideo(filePath,fileName,meg) {
  return new Promise((res,req) =>{
    (async()=>{
      console.log('upload')
      var embedCode;
      async function upload(){
        const m = fs.createReadStream(filePath);
        const file = await meg.upload({
          name:fileName,
          size: fs.statSync(filePath).size
        },m).complete;
        console.log("The file was uploaded!",file.name);
        const link = await file.link();
        embedCode = returnEmbedCodeVideo(link);
      }
      await upload();
      res(embedCode);
    })();
})}

async function checkImageExistsAndUpload(filePath,fileName){
    storeLogin();
    return new Promise((res,req) =>{
      storage.once('ready',()=>{
        console.log('aa');
        const Movie247Folder = storage.root.children.find(file => file.name === "Movie-247");
        const imageFolder = Movie247Folder.children.find(files => files.name === "image");
      console.log('go into promise')
    if(isEmpty(imageFolder)){
      (async()=>{
        console.log('aa')
        const embedCode = await uploadImage(filePath,fileName,imageFolder);
        res(embedCode);
      })();
        
    }else{
      if(imageFolder.children.find(file => file.name === fileName)){
        console.log('already exits image');
        return;
      }
      (async()=>{ 
        console.log('aa')
        const embedCode = await uploadImage(filePath,fileName,imageFolder);
        res(embedCode);
      })();
    }})})   
}
function returnEmbedCodeVideo(link){
  const embedCode = link.replace('file','embed');
  return embedCode;
}
async function uploadImage(filePath,fileName,meg) {
  return new Promise((res,req) =>{
    (async()=>{
      console.log('upload')
      var embedCode;
      async function upload(){
        const m = fs.createReadStream(filePath);
        const file = await meg.upload({
          name:fileName,
          size: fs.statSync(filePath).size
        },m).complete;
        console.log("The file was uploaded!",file.name);
        const link = await file.link();
        embedCode = link;
      }
      await upload();
      closeMega();
      res(embedCode);
    })();
})}

function closeMega(){
  storage.once('ready',()=>{
    storage.close();
  })
}
// deleteVideo('KjIURDJC');
// deleteImage('KjIURDJC');
// checkImageExistsAndUpload(path.join(__dirname,'abc.jpg'),'abc.jpg');
// checkVideoExistsAndUpload(path.join(__dirname,'testvideo.mp4'),'testvideo.mp4');


module.exports = {checkImageExistsAndUpload,checkVideoExistsAndUpload,deleteImage,deleteVideo}