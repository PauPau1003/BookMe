# BookMe

To run the app on local host:
- npm install
- npm run dev

For payment:
- cd server
- node server

Stripe limit products to 20, but all 9 service providers has at least one product


To run on deployed server:

- cd to file contains wad.pem

- Command this to access ubuntu 
- chmod 400 wad.pem

- ssh -i "wad.pem" ubuntu@34.237.246.156

- Run Npm
- npm run dev

- in case you want to re-install
- Remove BookMe Folder
- rm -rf BookMe

Cloning Github:
- git clone https://github.com/PauPau1003/BookMe.git

- Install Npm
- npm install

- Due to JS memory have to run build in this format
- NODE_OPTIONS=--max_old_space_size=4096 npm run build

- lastly, npm run dev again

34.237.246.156


 
