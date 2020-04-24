# Invoicer
A toy invoice creator using [`Snowpack`](https://www.snowpack.dev/#snowpack)!

![Screen Shot 2020-04-24 at 6 22 25 PM](https://user-images.githubusercontent.com/18077531/80258013-97307200-8658-11ea-9d33-b0fab2ea5015.png)

## Development
#### Setup
```
npm i
npx snowpack --source pika
npx tailwind build src/index.css -o lib/tailwind.css
```

#### Running the Dev Server
Just run the babel in one tab and servor in another :)

```
# Run this in one tab
# You will get a warning saying "could not resolve "/web_modules/vue/dist/vue.esm-browser.js" in file XXX"
# which you can ignore!
npx babel src/ --out-dir lib --watch --extensions ".ts,.tsx"

# And also run this in parallel in another tab
npx servor --reload
```

## Deployment
Run the following commands, commit your changes and then push to GitHub :)
```
# build snowpack first
npx snowpack --optimize --source pika --dest docs/web_modules

# build tailwind
npx tailwind build src/index.css -o docs/lib/tailwind.css

# build the code :)
npx babel src/ --out-dir docs/lib --extensions ".ts,.tsx"

# finally copy index.html to docs/
cp index.html docs/
```
