# Invoicer
A toy invoice creator using [`Snowpack`](https://www.snowpack.dev/#snowpack) 🧾

## What does it do?
It builds an invoice using HTML, [`Tailwind`](https://tailwindcss.com/) and a config object (currently hardcoded). Use `Ctrl/Cmd+P` to print it :)

## Why did I build it?
I needed to create an invoice and I thought this would be a good opportunity to use Snowpack (linked above) which is a no bundler solution for modern application development. This project uses React, Tailwind, PurgeCSS and TypeScript and deploys to GitHub pages!

## Screenshot
![Screen Shot 2020-04-24 at 6 23 55 PM](https://user-images.githubusercontent.com/18077531/80258098-cc3cc480-8658-11ea-8291-16b747ea565b.png)

## Development
### Setup
#### Install the Dependencies
You first need to install the dependencies and run snowpack (look in the snowpack docs for more info about the `snowpack` command).
```
npm i && npx snowpack --source pika
```

#### Build Tailwind
Next, you'll need to build the `tailwind.`css file!
```
# you need to run this command every time you change index.css (which shouldn't be often) :)
npx tailwind build src/index.css -o lib/tailwind.css
```

### Running the Dev Server
Just run the `babel` in one tab and `servor` in another!!

```
# Run this in one tab
npx babel src/ --out-dir lib --watch --extensions ".ts,.tsx"

# And also run this in parallel in another tab
npx servor --reload
```

Now, once you change a `.ts` or `.tsx` files, `babel` will immeditely recompile your modified file and `servor` will refresh your browser 🎉

## Deployment
Run the following script, commit your changes and then push to GitHub :)
```
./build.sh
```
