## How to setup tailwind css

Step 1: Run the following commands
```npm install -D tailwindcss @tailwindcss/cli```

Step 2: Create input.css and output.css in src folder and include this in input.css

```@import "tailwindcss";```

Step 3: Include src/output.css to your html

Step 4: Run the following command

```npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch```