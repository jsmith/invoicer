# Invoicer
A toy invoice creator using [`Snowpack`](https://www.snowpack.dev/#snowpack)!

![Screen Shot 2020-04-24 at 6 23 55 PM](https://user-images.githubusercontent.com/18077531/80258098-cc3cc480-8658-11ea-8291-16b747ea565b.png)

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
Run the following script, commit your changes and then push to GitHub :)
```
./build.sh
```
