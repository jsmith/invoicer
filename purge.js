/**
 * IDK why I can't use the command line to do this but it just doesn't seem to work.
 */

const { PurgeCSS } = require("purgecss");
const path = require("path");
const fs = require("fs");

const purge = async () => {
  const result = await new PurgeCSS().purge({
    content: ["docs/index.html", "docs/lib/*.js"],
    css: ["docs/lib/*.css"],
    extractors: [
      {
        extractor: (content) => {
          // The print: queries do not work without modifying the extractor
          return content.match(/[\w-/:]+(?<!:)/g) || [];
        },
        extensions: ["js"],
      },
    ],
  });

  result.map((value) => {
    if (value.rejected) {
      console.error(`Error processing ${value}: ${value.rejected}`);
      return;
    }

    const filePath = path.join(__dirname, "docs/lib", path.basename(value.file));
    fs.writeFileSync(filePath, value.css);
  });
};

purge();
