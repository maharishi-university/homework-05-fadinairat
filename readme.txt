1- npm init    # initialize the node project
2- npm i -g typescript   #install the latest typescript 
3- tsc --version   #check the version of typescript
4- tsc --init --sourceMap --rootDir src --outDir dist    #initialize the tsconfig.json with some configs
5- create "src" and "dist" directories
6- go to debug icon and click to "custom launchjson file"
7- tsc   # to compile the typescript file
8- go to ./vscode/launch.json and replace this line ("program": "${workspaceFolder}\\src\\index.ts",) by this ("program": "${workspaceFolder}\\dist\\index.js",)
9- Now run the app.... it's finally working