# Javascript/Emberjs Engineer Candidate Interview Project
This Emberjs app is a basic app that allows a listing of rentals. It uses Mirage to provide a mock api to provide the data layer for it

## You need to accomplish the following tasks
* Add a user model/mock api
* Add in authentication for users which authenicates against a mirage mock api
* Create an authenicated route for a user to be able to add rentals into ember data. New listings should show up on the rentals page
* An authenicated user should be able to see this authenicated new rental link from the top navigation
* Authenication should be handled as a service object
* Unauthenicated users should not be able to see the new rental link from the navigation
* Unauthenicated users who try to go to an authenicated route should see an access denied page
* Add in the approciate unit, integration, acceptance tests

## To-Do list
* Remove newly added rental when logged off
* Form validation for Login and Add Rental page

## Login Credentials
* Username - dhawal
* Password - kalpavruksh

## Installation

* `git clone <repository-url>` this repository
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

## Submitting your project

Check project into github and make sure you are properly commiting code when reasonable as a real project.
