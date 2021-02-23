# Sculpture

A small application for searching, sorting and filtering images of sculptures which can be selected and stored in Local Storage. It also explores deployment to Google Cloud Run setting up a CI/CD pipeline. Making requests to a Google Cloud serverless function that fetches data from an Artsy's API. The frontend is built with React Hooks and the Context API. URL to finished project: https://sculpture-304310-uzyaeprlzq-lz.a.run.app/  

## Screenshots
<img src="" width="auto" height="400">

## Technologies
* React
* Google Cloud Run

## Features
* Search images of sculptures
* Sort and filter fetched images
* Add images to a collection stored in your browsers Local Storage

## API
* All requests are sent to a Google Cloud Function with an Artsy API

## Setup
Before you can run the application you have to set up a CI/CD pipeline, I suggest following this tutorial: 
https://medium.com/swlh/deploying-a-react-app-to-google-cloud-run-with-github-actions-ae24ac6cb85a

When the pipeline is up and running sign up to Artsy's developer account and follow there guidelines for using their API: 
https://developers.artsy.net/v2/start

Set up a Google Cloud function endpoint with the Artsy API:
https://console.cloud.google.com/functions/

1. Clone repo and run in optional IDE
2. cd into folder sculpture
3. yarn install - wait until all dependencies are installed
4. yarn start
5. Application opens at localhost:3000

## Status
Project is: _ongoing_

## Contact
Created by Patrik Aarnivaara
