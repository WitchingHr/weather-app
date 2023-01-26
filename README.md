# Weather App


## Abstract
Weather App created for The Odin Project curriculum. 

App features the ability search a city by name and get its current weather, date and time.

This is the first project that I built that is comprised of **loosely-coupled modules**. After I ran into some issues with scalability on my last project, [to-do-list](https://github.com/WitchingHr/to-do-list), by having too many tightly-coupled modules and many imports/exports, I realized that I needed to find a better way to send data across different modules. I did some research and came across the **PubSub Pattern**, which ended up being the perfect solution.

Additionally, this my first project that makes calls to an API to retrieve data. This was accomplished by using a combination of the  **Fetch API** and **Async** functions.  

A loading screen was implemented to let the user know that the Fetch request was sent off and awaiting a response. 

Error handling for the Fetch call was defined by checking the *response.ok* property. If the response comes back ok, the weather will populate. If the response comes back not ok, an error page is shown. 

Response data was handled with a "sorter" function that takes in the *response.json* and returns a new *weather* object that includes all the weather info that is needed. The *weather* object is passed to the PubSub.publish method and is sent to the subscribed Populate module where its then distributed through respective conversion functions to be populated to the DOM.

The beautiful thing about the PubSub pattern is that the only import/export needed for the whole project is the PubSub itself, which is great because it keeps the code looking clean and you don't have a long lists of imports at the top of each module. 

## Lessons learned

 - Loosely-coupled code!
 - PubSub Pattern
 - Making API Calls
 - Using Fetch API
 - Error handing with Fetch
 - Async/Await
 - Importing SVG's with Webpack

## Asset sources
All weather icons were designed by myself using Figma