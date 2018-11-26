# Github Browser App using Angular 5 with Material Design

(DEMO) Deployed on AWS : [http://github-browser-deployment.s3-website.ap-south-1.amazonaws.com](http://github-browser-deployment.s3-website.ap-south-1.amazonaws.com)

This Application will let us display and visualize data for any given Github user. It consists of Authentication, Home and Profile Screen.

## Get Started

This project was generated with Angular CLI version 1.6.5. There is no need to install dependencies and extra software to run this code on your machine.
Here, we are using docker container to containarised application. DockerFile is available in code along with nginix. Please follow below steps to run the appliction:

### Build the image

docker build -t githubbrowser .

### Run the container

docker run -i -t -p 8080:80 githubbrowser:latest   (-i, -t and latest are optional parameters)

And done, your dockerized app will be accessible at http://localhost:8080

## Development server
Run npm install to install dependecies from Node Package Manager (NPM).
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|module.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.
Use the --aot flag for Ahead of Time compilation.

## Running unit tests
Run ng test to execute the unit tests via Karma.

## Application Monitoring
Using Google Analytics for monitoring this application. You can login to [Google Analytics](https://analytics.google.com/analytics/web/). <br/>
Admin Email Address: githubbrowseradm@gmail.com <br/>
Admin Password: admingithub@123

## Architecture Design Document
Additional architecture document available at [https://gitlab.com/nawanshu/githubbrowser/tree/master/Documentation](https://gitlab.com/nawanshu/githubbrowser/tree/master/Documentation)

## Further help
To get more help on the Angular CLI use ng help or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).