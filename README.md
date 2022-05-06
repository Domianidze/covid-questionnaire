![Logo](https://redberry.international/wp-content/uploads/2022/01/redberrylogo.svg)

# Redberry Covid Questionnaire
 
A covid questionnaire for Redberry.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Resources](#resources)
* [Getting Started](#getting-started)
* [Testing](#testing)
* [Project Structure](#project-structure)
* [Deployment](#deployment)

## Prerequisites

* <img src="./readme/assets/img/nodejs.png" height="15px" style='padding-right: 5px'> *Node JS @16.14.2*
* <img src="./readme/assets/img/npm.png" height="15px" style='padding-right: 5px'/> *npm 8.5.0*

## Tech Stack

* <img src="./readme/assets/img/react.png" height="15"  style='padding-right: 5px'> [React @18.0.0](https://reactjs.org) - front-end framework
* <img src="./readme/assets/img/react-router.png" height="15"  style='padding-right: 5px'> [React Router @6.3.0](https://reactrouter.com/) - routing library
* <img src="./readme/assets/img/react-hook-form.png" height="15"  style='padding-right: 5px'> [React Hook Form @7.30.0](https://react-hook-form.com/) - form validation library
* <img src="./readme/assets/img/gsap.png" height="15"  style='padding-right: 5px'> [GSAP @3.10.4](https://greensock.com/gsap/) - animation library
* <img src="./readme/assets/img/framer-motion.png" height="15"  style='padding-right: 5px'> [Framer Motion @6.3.3](https://www.framer.com/motion/) - animation library
* <img src="./readme/assets/img/framer-motion.png" height="15"  style='padding-right: 5px'> [Framer Motion @6.3.3](https://www.framer.com/motion/) - animation library
* <img src="./readme/assets/img/cypress.png" height="15"  style='padding-right: 5px'> [Cypress  @9.6.0](https://www.cypress.io/) - end-to-end testing framework

## Resources

*  [Application Design (Figma)](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3)
*  [Application Design Prototype](https://www.figma.com/proto/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&starting-point-node-id=1%3A2&scaling=contain)
*  [API Specification](https://covid19.devtest.ge/api-specs)
*  [Font [BPG Arial]](https://fonts.ge/ka/font/13/BPG-Arial)
*  [Git Commit Rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)

## Getting Started

1\. First of all clone the repository from github:
```sh
git clone https://github.com/RedberryInternship/covid19-Domianidze
```

2\. Then install all the dependencies:
```sh
npm install
```

## Testing
Redberry Covid Questionnaire uses ``` @cypress ```  for testing.

you can run and view tests in the Cypress GUI. You can open the Cypress GUI  using the following commands:

1\. First of all start the dev server:
```sh
npm start
```

2\. Then open the Cypress GUI:
```sh
npx cypress open
```

## Project Structure

```bash
├─── readme # readme assets
├─── src # project source codes
│   ├─── assets # project images and fonts
│   ├─── components # project reusable components
│   ├───├─── component-folder #  component folder
│   ├───├───├─── component-name.jsx # component
│   ├───├───├─── index.js # export default component
│   ├───├─── component-name.jsx # component
│   ├───├─── index.js # export all components
│   ├─── config.js # project configuration files
│   ├───├─── config-name.js # configuration file
│   ├───├─── index.js #export all configurations
│   ├─── pages # project pages
│   ├───├─── page-folder # page folder
│   ├───├───├─── page-name.jsx # page component
│   ├───├───├─── index.jsx # export default page
│   ├───├─── index.jsx # export all pages
│   ├─── state # project state managment files 
- .eslintrc.json # eslint config file
- .prettierrc.js # prettier config file
- App.jsx # react app
- package.json # dependency manager configurations
```

### Deployment

We have a helper script which helps us in deployment.

Simply run this command to get deplyoment ready files in the  ``` public ```  folder:

```sh
npm run build
```
