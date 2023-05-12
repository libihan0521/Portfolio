// Convert the circled-shaped cover of each project in the portfolio section into a JSON file, so I could  paste the new SVG code to change the cover, and don't need to be bothered to export the new SVG from Figma and save it in the folder every time when I want to change the cover)

const svgs = [
    //BunnyMood
    '<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" r="200" fill="#E9C300"/></svg>',
    //FashionGame
    '<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" r="200" fill="#E9635C"/></svg>',
    //
    '<svg>...</svg>'
  ];

  const json = JSON.stringify(svgs);