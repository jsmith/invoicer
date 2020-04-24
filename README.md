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
./build.sh
```