# ICT Skills 2 Assignment - Single Page app.

Name:  Bernard Thompson
<br />Student Number: 20020038

## Overview.

For this assignment I decided to create a react app on Points of Interest's (POI) within Waterford City and County. A user can view the home page which will redner some info of each point of interest. If the user wishes to view more information on said POI, then they can click to see more information such as, full description, latitude, longitude, admission fee and a map displaying its location.
<br /><br />
User's themselves should be able to add a POI which would render on the homepage. In order to prevent user abuse (i.e making up a POI and putting in inappropriate lanuage) an admin should be able to login and edit or delete a POI.
<br /><br />
User's should also have the ability to love a POI by selecting a love heart where the highest amount of loved POI's would be the first to view on the home page, most loved first, least loved last.
<br /><br />
As well as this user's should also be able to add a rating and review on the POI, ratings from 1-5, with one meaning they would not recommoned and five meaning they would highly recommend. They should also be able to write a description about why the gave their rating score. Other users may like a user review with the highest amount of likes on a review being displayed first.
<br /><br />
User's should also be able to filter POI's based on their category (mountains, historic, outdoor activity, food etc...)

### List of user features

- Render all Points of Interests (Working)
- Add a point of interest (Working)
- Filter POI's (Name seacrh working, attraction Type not working)
- Full informaiton on POI (working)
- Add a love to a POI (Working)
- Admin login, authentication (Working)
- Delete POI (Working, working on homepage but not on adminPanel)
- Edit POI (Not working, UI and protected Route available to admin component)
- Add comments (Working)
- Lile comments (Working)
- JSON Server (Working)
- Component on storybook (Working)
- e2e testing (working)
- use of storybook when developing components (working)
- Register users (not working, did not start this feature)

## Setup.

#### Prerequisites
Clone the project

- Open a terminal window and create a new folder `mkdir <foldername>`
- Navigate into the newly created folder `cd <foldername>`
- Clone the project `git clone https://github.com/bonjo7/react_poi.git`
- The project folder `react_poi` should now be availble, run command `ls` to be sure.
- Naviagte into the react_poi folder by running command `cd react_poi`
- You are now ready to complete the following steps in order to start the application successfully.

#### Step 1
Running the auth server

- Once in the folder `react_poi`
- Navigate to the `mock-auth-backend` folder `cd mock-auth-backend`
- Install dependencies `npm install`
- Run the mock sever `node index.js`
- The server should now be running on `port 8005`
  - If you wish to change the port please edit the `mock-auth-backend>config>default.json` port value
- Do not close the terminal

#### Step 2
Running the JSON server

- Open a new terminal window within the folder `react_poi`
- Start the json server `json-server --watch poiAPI.json --port 3001`
  - The json server should now be running on `port 3001`
  - If you wish to change the port please edit the last option with in the above command `--port 3001`
- Do not close the terminal

#### Step 3
Run the application

- Open a new terminal window within the folder `react_poi`
- install dependencies `npm install`
- Navigate to the src folder `react-poi>src` by using the command `cd src`
  - Create a file called `env.json` by using `nano env.json` or an editor of your choice
  - Within this `env.json` file add the following

  ```
  {
    "REACT_APP_GOOGLE_API": "<Enter your goolge maps api>"
  }
  ```

  This is required in oder to successfully work google maps, if not complete the application will not start as the reference within the application to the `env.json` file will fail to exist
- Before completing the next step ensure your are back in the `react_poi` folder `cd ..`
- Once dependenices are installed and your google api has been added to the newly create `env.json` file run the application
`npm start`
  - The application should now be running on at the followinfgaddress `localhost:3000`
-Do not close the terminal

#### Step 4
Run story book

- Open a new terminal window within the folder `react_poi` 
- Run `npx start-storybook -p 9001 -c .storybook/`

## Data Model Design.

Test data which is used in the JSON server, from the file `poiAPI.json`

```
  "pois": [  
     {  
        "id":1,
        "attractionType":"Historic",
        "image":"https://i.ibb.co/F59XY5Q/historic-Reg-Tower.jpg",
        "name":"Reginalds Tower",
        "author":"Bernard Thompson",
        "description":"Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.",
        "latitude": 52.260498,
        "longitude": -7.1076092,
        "admission":"Yes",
        "reviews":[  
           {  
              "id":1,
              "title":"Great attraction",
              "rating":3,
              "author":"Chloe Thompson",
              "review":"Good day out, brought the kids and they enjoyed it, we had a ball",
              "upvotes":10
           }
        ],
        "upvotes":15
     }
}
```

## UI Design.

. . . . . Screenshots of app's views with brief statements of their use. . . . . . .

![][header]

>> The header is the navigational panel of the page. Clicking ` Waterford POI ` will return the user to the homepage. As the application is responsive, in full web version a button to login as admin is available and in responsive view this appears as a drop down menu. More about the login feature later. Underneath the nav I have included a carousel which slides between three images of Waterford

![][Accordian]

>> I have placed adding and filtering POI's in the bootstrap component `accordian` this allows the feature to be hiiden bar the title and when the user clicks the title of each accordian the menu to add or filter a poi will drop down. CLicking the title on each will close the drop down and if a new POI is added the submit button will close the accoridan dropdown. 

![][accordianExpand]

>> Displaying the accordian's once they have been selected, opening in a drop down formant. 


![][pois]

>> Displaying all POI's which are rendered from the JSON sever. I have included four POI's in my JSON server. This displays the attraction type, name, image, first four lines of the description, while allowing a user to love a poi, view poi reviews, edit and delete a poi 
(Edit feature required login, to login user, 
```
username: admin@waterfordpoi.ie
password: secret
```
)


![][fullPOI]

>> After clicking either `see more...` or the comment icon a user will be brought to the full POI page, displaying poi attraction type, name, description, location, admissonFee and goole map displaying the POI's location 


![][addReview]

>> The add review component has been wrapped in a accordian again and when clicked the full add review form is available, once a review is added it is displayed under the full POI component, it allows the user to enter their name, title of review, rating, and review description

![][reviews]

>> List of reviews which are added by the JSON server and can also be added by the add review component. The review with the most likes appears first and each review can be upvoted by clicking the thumbs up icon. 

![][login]

>> In order to edit/delete a POI an admin must login. Clicking admin login in the nav or seletcing the edit icon on the POI card a user would be routed to the login component, providing the username `admin@waterfordpoi.ie` and password `secret` the admin would be granted access.

![][adminPanel]

>> Once admin access has been granted then the admin has access to the admin panel where an admin can edit or delete a POI (which is currently not fully working, a POI can be deleted from the full list of POI's on the homepage but I have yet to get the edit/delete working properly in the admin panel)

## Routing.

- / (public)- displays the app component which includes the following component's header, carosual, addpoi, filterPOI, list all POI's.
- /pois/:poi_id (public) - detail view of a POI, displaying the category, name, descrition, location, admission fee and google map.
- /login (public) displays the login component, only the admin username and password will grant access
- /admin/:poi_id (private) displays the admin panel which allows for editing anf deleting a POI

## Storybook.

Below is a list of stories which I created in storybook before using within the application

![][stories]

I opted to use all my stories within the application and the screenshots can be viewed below. Some components which I did not include in storybook exist within the application as I become very comfortable in using bootstrap components and opted to view the results when rendering the application

![][storyAddReview]
![][storyCarousel]
![][storyCreatePOI]
![][storyFilterPOI]
![][storyHeader]
![][storyListPOIs]
![][storyListReviews]
![][storyLogin]
![][storyReview]
![][storySinglePOI]

## Backend.

I used a simple JSON server as my API. This involved creating a `stubAPI` which would enable CRUD support for the Points of Interest. Below is an example of the date from my `poiAPI.json` file. I opted against my POI API as that would have involved some refactoring to achieve what I wnated to achieve.

```
{  
  "pois": [  
     {  
        "id":1,
        "attractionType":"Historic",
        "image":"https://i.ibb.co/F59XY5Q/historic-Reg-Tower.jpg",
        "name":"Reginalds Tower",
        "author":"Bernard Thompson",
        "description":"Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.",
        "latitude": 52.260498,
        "longitude": -7.1076092,
        "admission":"Yes",
        "reviews":[  
           {  
              "id":1,
              "title":"Great attraction",
              "rating":3,
              "author":"Chloe Thompson",
              "review":"Good day out, brought the kids and they enjoyed it, we had a ball",
              "upvotes":10
           }
        ],
        "upvotes":15
     }
}
```

## Authentication.

Authentication is used by Mock Auth, detailed steps on how to run this server are explained in the Setup. Login details are as follows

```
username: admin@waterfordpoi.ie
password: secret
```

## Independent learning.

I spent most of my independent learning on the front end as front end is an area that I really enjoy. I explored [Ant Design](https://ant.design/docs/react/introduce "Ant Design Components"), this is a very feature rich component library. I like the option to open components in `codepen` allowing to try refactor the code to apply any chnages that you may require while having a live view of the component. I also explored [Bootstrap React](https://react-bootstrap.github.io/components/alerts "Bootstrap Components") which I finally settled on, the reason why, to display ant design in storybook, there were a bit more work involved where as react bootstrap worked straight out of the box. 

## Known Bugs
- When POI is created and you navigate away from POI page and return to list POI's the newly created POI is removed.
- When logged in as admin, edit/delete is not working. If adming tries to login after being logged out without being on the homepage, the poi will not be rendered due to an issue with obtaining the POI id
- Refreshing the page on a POI will render with an error, due to getting reviews from a POI


[stories]: ./images/stories.png
[header]: ./images/header.png
[Accordian]: ./images/Accordian.png
[accordianExpand]: ./images/accordianexpand.png
[addReview]: ./images/addReview.png
[adminPanel]: ./images/adminPanel.png
[fullPOI]: ./images/fullPOI.png
[login]: ./images/login.png
[pois]: ./images/pois.png
[reviews]: ./images/reviews.png
[storyAddReview]: ./images/storyAddReview.png
[storyCarousel]: ./images/storyCarousel.png
[storyCreatePOI]: ./images/storyCreatePOI.png
[storyFilterPOI]: ./images/story/storyFilterPOI.png
[storyHeader]: ./images/storyHeader.png
[storyListPOIs]: ./images/sortyListPOIs.png
[storyListReviews]: ./images/storyListReviews.png
[storyLogin]: ./images/storyLogin.png
[storyReview]: ./images/storyReview.png
[storySinglePOI]: ./images/storySInglePOI.png
