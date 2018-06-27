# Nuxt & Contentful Demo

Integration of [Nuxt](https://nuxtjs.org/) and the [Contentful Javascript SDK](https://github.com/contentful/contentful.js) based on the [Nuxt community starter template](https://github.com/nuxt-community/starter-template).

## Installation

`yarn install` (or npm if that's your thing).

## Getting Started

Duplicate the `.env.example` file, naming it `.env` and add your Contentful Space ID and Access Token.

This simple demo gets data from a Contentful Content Type with an API identifier of **blogPost** and the following four fields assigned to it:

1. **Text** (Short text) with the name of **Title** and the field ID of **title**
2. **Text** (Short text) with the name of **Slug** and the field ID of **slug**
3. **Text** (Short text) with the name of **Description** and the field ID of **description**
4. **Text** (Long text) with the name of **Content** and the field ID of **content**
