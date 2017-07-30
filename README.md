## Inspiration

We wanted to create a web app to improve mobility for unique situations. Our first thought was to use image analysis in order to create wheelchair friendly paths in Austin. After learning about the data provided through the HERE API, we decided to first focus on creating routes for large vehicles based on available data for road size.

## What it does

The app takes data about a vehicle (e.g. height, width, terrain possibilities) and maps a route that the vehicle will be able to use. Roads that are too small, for example, will be eliminated from route possibilities, leaving the driver with the fastest possible route.

## How we built it

We used javascript to pull road information from the HERE API and optimize the route selection. The resulting routes are displayed in a custom web interface.

## Challenges we ran into

Learning how to access the HERE road database was a learning curve. We had to re-scope our project in order to create a working prototype.

## Accomplishments that we're proud of

1. Creating a prototype of TAC NAV with a diverse team having different skillsets.  

2. Creating a *simple*, attractive webpage for users to efficiently find the fastest route.  

3. Understanding more about mobility and different military applications.


## What we learned

Background on GIS systems and how to use the HERE API. The architecture of our web-app and how to work on the application collaboratively.

## What's next for TAC NAV

Next steps would be to optimize our program by adding more vehicle component possibilities (i.e. users could specify the terrain over which the vehicle can run). We would like to add image analysis capabilities in order to have more available data. We could use image analysis to understand where wheelchair ramps exist for wheelchair users. We could analyze terrain in underdeveloped countries to understand where vehicles can travel off-road.
