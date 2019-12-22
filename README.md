# nodejs-test

Create a simple API to return tennis player stats using Node.Js

## Tasks

For completing the following tasks, use the following dataset:
- https://alivebyacadomia.github.io/headtohead.json

### Task 1

Create a GET /players endpoint returning all the players (by requiring the headtohead.json listed
above). The list must be sorted by player id.

### Task 2

Create a GET /players/<id> endpoint to return a single player matching id <id>. Return a 404 if no
player is matching.

### Task 3

As the players data changes from time to time, change your code so that the players are fetched
from the following end point for every API call:
- https://alivebyacadomia.github.io/headtohead.json

## Installation
``` bash
> yarn
```

## Launch tests
``` bash
> yarn test test
```

## Start server
``` bash
> yarn start
```
