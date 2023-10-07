<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li
      </ul>
    </li>
    <li>
      <a href="#PostMan">PostMan</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>


### About-the-project
<!-- ABOUT THE PROJECT -->
### Built With
<p>
  <a href="https://angular.io" target="_blank" rel="noreferrer"> 
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/>
  </a>
  <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> 
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="40" height="40"/> 
  </a>
  <a href="https://spring.io/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" 
  height="40"/> </a>
  <a href="https://www.java.com" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> 
  </a> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
  alt="javascript" width="40" height="40"/> 
  </a
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>      
  </a>
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>   
  </a>
</p>



<!-- GETTING STARTED -->
## Getting Started

This is how to start the project:

<!-- Prerequisites -->
### Prerequisites

* Data base
  ```sh
    CREATE DATABASE IF NOT EXISTS db_books;

    USE db_books;
    
    CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL
    );
   ```
This is what you need to install:


* npm
  ```sh
  npm install -g @angular/cli
  ```

* Node.js
  [https://nodejs.org/es](https://nodejs.org/es)


<!-- Installation -->
### Installation

Project installation


1. Clone the repository
 ```sh
 git clone https://github.com/AdrianArmasRincon_/IonicSpringBooks.git
 ```
2. Install NPM packages
  ```sh
  npm install -g @angular/cli
  ```
3. Ionic start
  ```sh
  ionic start frontend blank --capacitor --type=angular
  ```
4. Start serve
  ```sh
  ionic serve
  ```
5. Create new page
  ```sh
  ionic generate page page-name
  ``` 


<!-- PostMan -->
### PostMan

Project Url - [https://documenter.getpostman.com/view/29846283/2s9YJgSKz7](https://documenter.getpostman.com/view/29846283/2s9YJgSKz7)

<!-- CONTACT -->
## Contact

Adrian Armas -  adrianyaredarmasdelanuez@alumno.ieselrincon.es

Project Link: [https://github.com/AdrianArmasRincon/IonicSpringBooks.git](https://github.com/AdrianArmasRincon/IonicSpringBooks.git)


[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/


