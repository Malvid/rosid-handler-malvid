# rosid-handler-malvid

[![Travis Build Status](https://travis-ci.org/comwrap/rosid-handler-malvid.svg?branch=master)](https://travis-ci.org/comwrap/rosid-handler-malvid) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/6fxwnrdhoh7xw9n1?svg=true)](https://ci.appveyor.com/project/electerious/rosid-handler-malvid) [![Coverage Status](https://coveralls.io/repos/github/comwrap/rosid-handler-malvid/badge.svg?branch=master)](https://coveralls.io/github/comwrap/rosid-handler-malvid?branch=master)  [![Dependencies](https://david-dm.org/comwrap/rosid-handler-malvid.svg)](https://david-dm.org/comwrap/rosid-handler-malvid#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/Malvid/rosid-handler-malvid.svg)](https://greenkeeper.io/)

UI to help you build and document web components.

## Install

```
npm install rosid-handler-malvid
```

## Usage

### API

```js
const handler = require('rosid-handler-malvid')

handler('.html').then(console.log) // Returns HTML of the UI
handler('.json').then(console.log) // Returns JSON for the UI
```

### Rosid

Add the following object to your `rosidfile.json`, `rosidfile.js` or [routes array](https://github.com/electerious/Rosid/blob/master/docs/Routes.md). `rosid-handler-malvid` will return the HTML of the UI or the JSON for the UI depending on the path.

```json
{
  "name"    : "Malvid",
  "path"    : "ui/index.{html,html.json}",
  "handler" : "rosid-handler-malvid"
}
```

Disable automatic page reloads for the UI to get realtime updates when developing components. You can do so by using the `--static` or `-s` option in the CLI or by using the `static` option.

```sh
rosid serve src/ dist/ -s '/ui/index.html'
```

```js
Rosid.serve('src/', { static: '/ui/index.html' }, (err) => {})
```

## Parameters

- `filePath` `{?*}` Fictive path that ends with `.html` or `.json`
- `opts` `{?Object}` Options.

## Returns

- `{Promise<String|Buffer>}` HTML or JSON of the UI.
