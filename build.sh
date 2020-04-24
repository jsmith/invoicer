set -x

# build snowpack first
npx snowpack --optimize --source pika --dest docs/web_modules

# build tailwind
npx tailwind build src/index.css -o docs/lib/tailwind.css

# build the code :)
npx babel src/ --out-dir docs/lib --extensions ".ts,.tsx"

# purge the CSS!!
node purge.js

# finally copy index.html to docs/
cp index.html docs/
