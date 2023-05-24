# PhotoGalaxy

This is a community-driven photo sharing platform to upload or download beautiful photos of your need. Users can come here to surf a huge library of images and download the ones that meet their requirements.Also they can upload their images on the platform for others to use.It uses a CNN model trained on nearly 2200 images to classify images into two classes : NSFW & SFW. The model showed a training accuracy of 92% and a test accuracy of about 90%. Moreover, there is also a feature of generating the tags for the images.

There are 3 servers- one for client, one for express backend server and another is a flask server that uses the models to create APIs for validating photos and/or generating tags.

The flask_server is not hosted yet. Only the frontend and express server are hosted on [vercel](vercel.com). So, currently you can view photos but not upload them because they cannot be validated by the flask server which is not yet hosted.

<!-- change this -->
<!-- This is done with the help of a pre-trained model on several million images by google named inceptionv3. -->

## Running the app on your device locally

- To clone the repository to your device:
  `git clone https://github.com/SandeshGC/PhotoGalaxy.git`

- To install packages and dependencies:

  For server:
  `cd server`
  `npm install`
  `cd flask_server && pip install -r requirements.txt`

  For client:
  `cd client`
  `npm install`

- Start the server:
  `cd server`
  `node index`

- Start the frontend:
  `cd client`
  `npm run dev`

- Start the flask server:
  `cd flask_server`
  `python app.py`

## Tech Stack

- ###### Front End

  - React.js
  - Tailwind CSS

- ###### Back End

  - Node.js
  - Express.js
  - MongoDB
  - Flask

- ###### Design
  - Figma

## Authors

- [Sandesh GC](https://www.gcsandesh.com.np)
- [Subek Sharma](https://www.linkedin.com/in/subek-sharma/)

<!-- pip install requests -->
<!-- pip install DeepImageSearch -->
