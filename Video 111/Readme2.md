1. you have to use an API and display the data in the form of a card under a container. All the data points written by the APi should be converted to a card
2. Use this API: https://jsonplaceholder.typicode.com/posts

Hint:
Create a state for the data which will be fetched using the Json Placeholder API
Inside useEffect, use fetch to populate that state and then use map to render the cards from that state