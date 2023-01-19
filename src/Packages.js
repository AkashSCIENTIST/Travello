import Package from "./Package";

function Packages() {
    return <>
    <Package 
        isAlternateColor = {false} 
        heading="US East Coast"
        src="usa.jpg"
        cost={"45000"}
        content="The East Coast of the United States, also known as the Eastern Seaboard, the Atlantic Coast, and the Atlantic Seaboard, is the coastline along which the Eastern United States meets the North Atlantic Ocean. The eastern seaboard contains the coastal states and areas east of the Appalachian Mountains that have shoreline on the Atlantic Ocean, namely, Maine, New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia, and Florida." 
    /> 
    <Package 
        isAlternateColor = {true}
        heading="Incredible India"
        src="india.jpg"
        cost = {15000}
        content="One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity." 
    />
    <Package 
        isAlternateColor = {false}
        heading="Utopian Europe"
        src="europe.jpg"
        cost = {30000}
        content="The second smallest continent in the world, Europe covers 2% of the Earth’s surface and 6.7% of the Earth’s land. With 47 countries and a population of 742.5 million (2013 census), it is the third most populated continent in the world. Bordered by the Atlantic Ocean on the west, Arctic Ocean on the north, Ural mountains in the east, and the Mediterranean Sea to the South, a visit to the European continent is visually magnificent and historically significant. Having to its credit, the tag of being the largest economy in the world, Europe is also home to one of the seven wonders of the world, The Colosseum in Italy." 
    />
    </>
}

export default Packages;