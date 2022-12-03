# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Conor Gleeson

## Overview.


### New Pages.

+ List of Top Rated Movies
+ List of TV Shows
+ TV Show Details
+ Favouite TV Shows
+ Login page with firebase authentiction

### New Features.

+ Authentication (using Firebase)
+ View and Favourite TV Shows
+ Pagination through discover movies page

## Setup requirements.

npm install

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.

+ /movies/toprated"- Top rated movies
+ /tv/toprated - List of TV Shows
+ /tv/{tv_id} - TV Show details


## App Design.

### Component catalogue.

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](/images/login.png)

>Simple login page to allow users to login and create accounts

![ ](/images/logedin.png)

>Page after succesfull login with rest of the pages now avalible at the top

![ ](/images/tvshows.png)

>shows a list of tv shows

![ ](/images/showdetails.png)

>shows details of a specific movie 

![ ](/images/favouriteshows.png)

>a list of user favourited shows

### Routing.

+ /actors - displays a list of popular actors.
+ /actors/:id - shows details about a particular actor.
+ /actors/:id/movies (protected) - an actor's movie credits.
+ etc.

[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).
