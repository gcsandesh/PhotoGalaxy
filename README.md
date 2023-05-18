# PhotoGalaxy

A stock photo platform to find and download beautiful photos of your need. 
It uses a CNN model trained on nearly 2200 images to classify images into two classes : NSFW & SFW. The model showed a training accuracy of 92% and a test accuracy of about 90%. 

## Running the app on your device locally

- To clone the repository to your device:
  `git clone https://github.com/SandeshGC/PhotoGalaxy.git`

- To install packages and dependencies:

  For server:
  `cd server`
  `npm install`
  `cd server && pip install -r requirements.txt`

  For client:
  `cd client`
  `npm install`

- Start the server:
  `cd server`
  `node index`

- Start the frontend:
  `cd client`
  `npm run dev`

## Tech Stack

- ###### Front End

  - React.js
  - Tailwind CSS

- ###### Back End

  - Node.js
  - Express.js
  - MongoDB

- ###### Design
  - Figma

## Authors

- [Sandesh GC](https://www.gcsandesh.com.np)
- [Subek Sharma](https://www.linkedin.com/in/subek-sharma/)

<!-- pip install requests -->
<!-- pip install DeepImageSearch -->
