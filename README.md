![Logo](https://redberry.international/wp-content/uploads/2022/01/redberrylogo.svg)

# Redberry Covid Questionnaire
 
A covid questionnaire for Redberry.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)

## Prerequisites

* <img src="./readme/assets/img/nodejs.png" height="15px" style='padding-right: 5px'> *Node JS @16.14.2*
* <img src="./readme/assets/img/npm.png" height="15px" style='padding-right: 5px'/> *npm 8.5.0*

## Tech Stack

* <img src="./readme/assets/img/react.png" height="15"  style='padding-right: 5px'> [React @18.0.0](https://reactjs.org) - front-end framework
* <img src="./readme/assets/img/react-router.png" height="15"  style='padding-right: 5px'> [React Router @6.3.0](https://reactrouter.com/) - routing library
* <img src="./readme/assets/img/react-hook-form.png" height="15"  style='padding-right: 5px'> [React Hook Form @7.30.0](https://react-hook-form.com/) - form validation library
* <img src="./readme/assets/img/gsap.png" height="15"  style='padding-right: 5px'> [GSAP @3.10.4](https://greensock.com/gsap/) - animation library
* <img src="./readme/assets/img/framer-motion.png" height="15"  style='padding-right: 5px'> [Framer Motion @6.3.3](https://www.framer.com/motion/) - animation library

## Getting Started

1\. First of all clone the repository from github:
```sh
git clone https://github.com/RedberryInternship/covid19-Domianidze
```

2\. Then install all the dependencies:
```sh
npm install
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
│   ├───├───├─── nested-pages # [OPTIONAL] nested pages folder
│   ├───├───├───├─── nested-page-folder # nested page folder
│   ├───├───├───├───├───  nested-page.jsx # nested page
│   ├───├───├───├───├───  index.js # export default nested page
│   ├───├───├───├─── index.jsx # export all nested pages
│   ├───├───├─── page-name.jsx # page component
│   ├───├───├─── index.jsx # export default page
│   ├───├─── index.jsx # export all pages
│   ├─── state # project state managment files 
- .eslintrc.json # eslint config file
- .prettierrc.js # prettier config file
- App.jsx # react app
- package.json # dependency manager configurations
```
