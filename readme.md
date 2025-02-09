# Academic website

## Updating publications
* go to orcid 
* export all works to works.bib
* ./utils/update_publications.py < works.bib > ./components/data/publications.json
* npm run dev - view locally
* npm run build - prepare for deploy
* in ../firebase: firebase deploy --only hosting - push live

Other stuff:
* ./components/data

still need to update...
* prizes ?? e.g. 

## Customize your info
- in components/data/personalInfo.json
- in components/data/publications.json
- in components/data/projects.json
- in components/data/teaching.json
- in .env
- in public/cv.pdf

add a new section in Header.tsx and pages/index.jsx
---

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Development

```bash
# Install dependencies
$ npm install

# Run in development mode
$ npm run dev

# Build for production
$ npm run build

# If you deploy on Vercel
# preview
$ vercel
# production
$ vercel --prod
```

## Acknowledgments

- Inspired by [https://kepinski.ch/](https://github.com/xxczaki/site)

### License

Code released under [WTFPL](http://www.wtfpl.net/)
