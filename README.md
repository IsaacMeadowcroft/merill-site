# Art Store
This is the frontend code for a working progress online art store. The art store sells shop items which are pulled from a MongoDB Atlas database. The backend is hosted on Heroku and the frontend is hosted on GitHub Pages.

<p align="center">
<img width="546" alt="Screen Shot 2021-12-26 at 9 43 29 PM" src="https://user-images.githubusercontent.com/54515271/147429695-1ccf213b-fdfd-465a-939e-703f27db3a5b.png">
</p>

## Architecture
<p align="center">
<img width="531" alt="Screen Shot 2021-12-26 at 9 43 45 PM" src="https://user-images.githubusercontent.com/54515271/147429810-1698ce88-03e7-4fe0-88e9-9a03cf470350.png">
</p>

## Backend
The backend API for the site was built with ExpressJS and is hosted on Heroku. It allows the frontend to get the current list of shop items from the backend MongoDB Atlas database. A simple GET request for the current shop items can be accessed at: https://merillbackend.herokuapp.com/getShopItems

## Frontend
The frontend for the site was built with NodeJS, React, TypeScript, and Bootstrap. It is hosted on GitHub Pages and can be accessed at: https://isaacmeadowcroft.github.io/merill-site/

## More Info
This site was the focus of my COMP 400 Honors Computer Science research project at McGill. You can read the final report for the project here:
[Art Store Project.pdf](https://github.com/IsaacMeadowcroft/merill-site/files/7778037/Art.Store.Project.pdf)
