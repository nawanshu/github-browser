# Github Browser App

Prepared by: Nawanshu Choudhary

23 January

# Task summary

## Objective

Design and implement a Single-page application (SPA) that will let us display and visualise data for any given Github user. To get the data, you&#39;ll need to use the public Github API: [https://developer.github.com/v3](https://developer.github.com/v3).

The application should consist of at least:

  -      Logging screen
  -      Home screen
  -      Profile screen

## Front-end Technologies

I have decided to program the solution on Front-end framework Angular 5.2.0 along with Angular Material 5.1.0.

Why Angular 5 and Material 5?

Angular 5 is a structural framework for dynamic web apps, build with the CRUD application in mind. Angular is not good for applications with intensive and tricky DOM manipulation. Here, in task, we need to build a solution where there is no tricky DOM manipulation, rather, there are read and update operations as a major task.

Additionally, we are displaying and visualising data, so data should be presentable with well formed UI, which is integrate seamlessly with Angular 5, so I have decided to chosen Angular Material 5 over other frameworks.

## Supporting tools and technologies used:

  - Integrated development environment: VS Code 1.19.2
  - Build tool: Angular CLI 1.6.5
  - Application Monitoring tool: Google Analytics (angulartics2: 4.6.3)
  - Deployment Server: AWS (Amazon Web Server)
  - Application Package Container: Docker
  - Package Manager: NPM (Node Package Manager)

# Application planning and design

## Application Raw Design

Application divided into modules and components. It contains following components:

  - Signin: This component consist of authentication related stuff in application.
  - Alert: It show alert messages if service fails.
  - Header: It shows header bar.

••Home: It consist of Basic Information and Search

 - Search: Searching area
  - Profile: It consist of Basic Information, Repositories and Bar Chart
    - Bar Chart: It show bar chart.
  - Shared: It contains components which are shared across the major components.
    - Basic Info: It show Basic Information of GitHub user.
  - Footer: It shows foot bar.

## Application Flow Design

Any GitHub user can login to Github Browser App. There are two ways to authenticate GitHub user:

  - Username and Password
  - [Personal Token Authentication](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

Once user is authenticated, it will redirect you to home page where you can see basic information and search box. In search, enter any profile name available at Github, you can find all the possible matches with that profile name keyword.

After getting your desired search list, you can click on it and then, it will redirect to Profile page. Here you can see basic information about the user and bar chart showing commit per day (Last seven days data). Above the bar chart there is a drop down, where you can choose repositories.

Additionally, on profile page, you can see list of repositories with basic information, you can click on any repository, it will redirect you to particular GitHub repository page.