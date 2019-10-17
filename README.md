#### Requirements
This project uses `npx` to invoke the TypeScript transpiler.
If you are using `npm` version `5.2` or greater (check with `npm --version`), you are good to go.
If you have any version before that, you can fix this by running `npm install -g npx`.
If the command fails with `EACCES` error code and a message that says something like
`Permission denied`, then see the following [tutorial](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) (this mostly refers
to Linux and macOS users).

#### Transpiling and running the scripts
1. Install dependencies using `npm ci`. If this command is not available, use `npm install`.
2. Compile the code using `npm run compile`. To run the compilation in watch mode, use `npm run compile:w`
3. Run the first server using `npm run dev:1`
4. Run the first server using `npm run dev:2`
5. Run the client script using `npm run client`
