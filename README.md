# NHL Stats

## Overview
This project was built to interact with two API endpoints provided from [https://statsapi.web.nhl.com/](https://statsapi.web.nhl.com/api/v1/teams).

## Goals
The goal of this task was to create a simple, responsive User Interface which leveraged data from two API endpoints. The data needed to be represented to the user in some meaningful way.

My personal goal was to work on my React skills along with API calls. I also wanted to try adding sort buttons for the data.

## Tech Used
This is built using React.js with Bootstrap 4 and Reactstrap for responsive design and styling.

## Challenges & Learning
Sort Buttons: I have never tried this, so it seemed like a good challenge and appropriate to this task. I watched a video on how to alphabetize arrays of objects. It was a really interesting and much simpler solution than I expected!

Async functions vs State Initialization: I made a careless mistake while working on my TeamModal component. My app was crashing whenever I tried to render data from my state after an fetch request. I tried to debug it using console logs, and saw that my setState function was last of all to complete it's lifecycle. I spent a considerable amount of time reading more into React Component lifecycles and asynchronous functions. Thankfully, I was able to see that the biggest problem, was that I had not properly initialized my state in a way that my data would properly fit. I fixed that, and everything worked.

Data Set: I made a careless mistake in the beginning by returning the entire dataset from the endpoint to the app's state, rather than using setState for only the properties I wished to retain for use in my app. I did solve this in another area of the program, specifically when an API call is made to get more data on a specific team.

Some other things I learned or sharpened up on were passing props with destructuing and forcing spaces in JSX before and after element tags.

## Further Development
The most important thing I want to fix is structuring my App state from the API call. It's the most weighty and heavy-handed aspect of the app, and it should be economized.

I'd also like to integrate with an API which can display the team's logos. 
[SportRadar.com](https://developer.sportradar.com/docs/read/images/Images_v3#images-api-overview) seems to be a good spot to start.

I'd also like to add animations.