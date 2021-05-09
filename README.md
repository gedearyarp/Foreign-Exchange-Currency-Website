# foreign-exchange-currency-2021

Run `docker build -t sample:dev  .`

After that, run `docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev`.
