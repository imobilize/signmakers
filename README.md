# Outsourced Sales
Outsourced sales is the website of [outsourcedsales.com](https://outsourcedsales.com)

**Install to VS Code with:**  
`git clone git@github.com:imobilize/outsourcedselling`

##### Install with NPM 
`npm install`
##### Install with Yarn
`yarn`

**To start developing:**
##### Develop with NPM 
`npm run start`
##### Develop with Yarn
`yarn start`

**To generate the site HTML:**
##### Build with NPM 
`npm run build`
##### Build with Yarn
`yarn build`

**npm run start** will run two commands parallel:  
`npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch`

Has paginated Categories and Tags. Markdown files will automatically convert images put into `/assets` folder to .webp images. 

## Image shortcodes for webp as well.
{{< imgh src="img-name.jpg" alt="Place alt text here." >}}

## Credits
4044ever - Original Theme
https://github.com/4044ever/Hugo-Tailwind-3.0.git

