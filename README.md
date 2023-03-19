# Outsourced Sales
Outsourced sales is the website of [outsourcedselling.com](https://outsourcedselling.com)


### Built With

Major frameworks/libraries used to bootstrap project.

* [Hugo](https://gohugo.io)
* [Tailwind.css](https://tailwindcss.com)
* [Glightbox.js](https://github.com/biati-digital/glightbox/blob/master/README.md)




<!-- GETTING STARTED -->
## Getting Started

You will first need to install the tools used to build the project namely
* Hugo - the static site generator
* NPM - the tool used to manage node module dependencies

### Prerequisites

To install Hugo and NPM, on a mac you can use brew
* npm
  ```sh
  brew install node
  ```
* Hugo 
  ```sh
  brew install hugo
  ```

**Clone Repository and open in VSCode**  
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

