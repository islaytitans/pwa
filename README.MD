# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Next run npm watch to monitor changes in the typescript files

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.

# Progressive Web Apps

## PWA summary

1. Reliable - load fast and provide offline functionality
2. Fast - Responds quickly to user actions
3. Engaging - Feels like and animate like a native app on mobile devices

### What makes up a PWA

- Service workers
    - Caching / offline support
    - Enable other PWA features
- Background Sync
    - Sync user data in the background
- Web push
    - Mobile-like push notifications
- Application Manifest
    - Allows addition to homescreen
- Geolocation API
    - Access User Location
- Responsive Design
    - App / Layout should work and look good across devices
- Media Api
    - Access device camera, mic, biometic security

### Progressive Enhancement

- Existing legacy app
    - Info: Old tech, needs to support old browsers
    - Near Future: Add service worker and App Manifest now its a PWA
    - Future: Add multiple PWA features
- Existing modern app
    - Info: Modern tech, only needs to support modern browsers
    - Near future: Add service worker, app manifest and some core PWA fetures
    - Completely convert to PWA
- Upcoming project
    - Near future: Fully implement as PWA right from the start
    - Future: Complete PWA

### Mobile Web vs Native Apps

2015 report stated time spent 87% time in Native Apps / 13% Mobile web

- 80% of that time is spent in User's Top 3 Apps on Device
- Native Apps have smaller reach
    - Native 3.3. mill active users per month for top 1000 apps
    - Mobile 8.9 mill active users per month for top 1000 mobile sites

#### Naitive Apps pros 

- Push notifications bring users back
- Homescreen icons make access easy
- Access native features like camera
- Possibly work offline

#### Native Apps cons

- Learn two different languages
- Have to install the app
- Average user installs 0 apps per month

### PWAs vs Native Apps vs Traditional web pages

- Native Apps
    - Good Capability: Access device features, leverage OS
    - Poor Reach: Top 3 apps win, rest loses
- Traditional Web Apps
    - Poor Capability: Highly limited device feature access
    - Good Reach: High reach, no borders
- Progressive Web Apps
    - Good Capability: Access Device Features, leverage OS
    - Good Reach: High reach, no borders

### Good PWA examples

Can find good PWA score by Lighthouse in chrome
- Lighthouse has a checklist for what a PWA should do

1. app.ft.com

# App Manifest

Add a reference to the manifest.json file for the pages that are the PWA

- name : long name of the app e.g. splash screen
- short_name : short name of the ap e.g. below icon
- start_url : which page to load on start up
- scope : which pages are included in PWA experience
- display : should it look like a standalone app or look like its open in browser
- background_color : background colour while loading
- theme_color : Color of top bar etc
- description : description of app
- dir: read direct of the app
- lang : language of the app
- orientation : set (and enforce) default orientation
- icons : configure icons for homescreen for different devices
- related_applications : reference native apps allowing the device to inform the user

# Service workers

- Code that listens to specific events
- Runs in the background
- Only runs on https
- Lives on after pages, or browser, have been closed
- Run on separate thread to JS
- Decoupled from HTML pages
- Manages *all* pages of given scope (e.g. all pages of a domain). Scope can be defined
    - by the folder the service worker js file is in
    - an argument when you register the service worker


### Listenable Events

| Event | Source |
| -- | -- |
| Fetch | Browser or Page-related JavaScript initiates a Fetch (http request) |
| Push Notification | Service Worker recieves Web Push Notification (from Server) |
| Notification Interaction | User interacts with displayed notification (handled by Service Worker as your app may not be open) |
| Background Sync | Service Worker recieves Background Sync Event (e.g. Internet Connection was restored) |
| Service Worker Lifecycle | Service Worker Phase changes |