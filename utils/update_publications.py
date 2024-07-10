#!/usr/bin/env python

import json
import sys
import logging

from collections import OrderedDict

import bibtexparser
#from bibtexparser.bparser import BibTexParser
#from bibtexparser import customization as bib_custom

# @article{Walker_2023,
#        doi = {10.1101/2023.09.26.23295173},
#        url = {https://doi.org/10.1101%2F2023.09.26.23295173},
#        year = 2023,
#        month = {sep},
#        publisher = {Cold Spring Harbor Laboratory},
#        author = {Romy Walker and Khalid Mahmood and Julia Como and Mark Clendenning and Jihoon E. Joo and Peter Georgeson and Sharelle Joseland and Susan G. Preston and Bernard J. Pope and James M. Chan and Rachel Austin and Jasmina Bojadzieva and Ainsley Campbell and Emma Edwards and Margaret Gleeson and Annabel Goodwin and Marion T. Harris and Emilia Ip and Judy Kirk and Julia Mansour and Helen Marfan and Cassandra Nichols and Nicholas Pachter and Abiramy Ragunathan and Allan Spigelman and Rachel Susman and Michael Christie and Mark A. Jenkins and Rish K. Pai and Christophe Rosty and Finlay A. Macrae and Ingrid M. Winship and Daniel D. Buchanan and},
#        title = {{DNA} mismatch repair gene variant classification: evaluating the utility of somatic mutations and mismatch repair deficient colonic crypts and endometrial glands}
#},

FIX = [
  ("{\\'{o}}", "ó"),
  ("{\\textquotesingle}", "'"),
  ("{\\'{e}}", "é"),
  ("{\\&}amp$\\mathsemicolon$", " and "),
  ("{\\'{u}}", "ú"),
  ("$\\less$i$\\greater$", ""),
  ("$\\less$/i$\\greater$", ""),
]

def main(ifh, ofh):
  rs = bibtexparser.loads(ifh.read())
  items = []
  titles = set()
  for r in rs.entries:
    #items.append({'title': r['title']})
    r['author'] = r['author'].replace(' and ', ', ')
    for f in FIX:
      r['author'] = r['author'].replace(f[0], f[1])
      r['title'] = r['title'].replace(f[0], f[1])

    r['title'] = r['title'].replace('{', '').replace('}', '')
    r['journal'] = r.get('journal', '').replace('{', '').replace('}', '')
    #items.append(r)
    if r['title'].startswith('Data from') or r['title'].startswith('Supplemental') or r['title'] in titles:
      continue

    titles.add(r['title'])
    items.append({'title': r['title'], 'author': r['author'], 'year': r['year'], 'url': r['url'], 'doi': r['doi'], 'journal': r.get('journal', '')})
  ofh.write(json.dumps(items, indent=4))

if __name__ == '__main__':
  main(sys.stdin, sys.stdout)
