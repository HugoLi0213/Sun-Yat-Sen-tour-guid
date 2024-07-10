

# Sun Yat-Sen Tour Guide

Welcome to the Sun Yat-Sen Tour Guide project! This website offers a comprehensive guide to the historical sites related to Sun Yat-Sen, a prominent Chinese revolutionary and political leader.



## Table of Contents

- [Features](#features)
- [Framework](#framework)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Map**: Explore various historical sites connected to Sun Yat-Sen.
- **Detailed Information**: Access historical details, images, and other relevant information about each site.
- **Audio Guides**: Listen to audio tracks providing more insights into each location.
- **Responsive Design**: Optimized for viewing on both desktop and mobile devices.

## Framework

This project is built using **Bootstrap 5** for responsive design and layout. Bootstrap is a popular front-end framework that helps in designing responsive and mobile-first web pages easily.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/sun-yat-sen-tour-guide.git
   ```
2. Navigate to the project directory:
   ```sh
   cd sun-yat-sen-tour-guide
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

To run the project locally, use the following command:
```sh
npm start
```

Open your browser and visit `http://localhost:3000` to view the site.

### Deployment

This project is hosted on Netlify. To deploy your own version, follow these steps:

1. Create an account on [Netlify](https://www.netlify.com/).
2. Connect your GitHub repository to Netlify.
3. Follow the instructions to deploy the site.

## Files

### `index_zh.html`

This is the main HTML file for the project. It includes the structure of the webpage and links to the necessary stylesheets and scripts.

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>孫中山導覽</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="text-end my-2">
            <button class="btn btn-outline-primary" onclick="switchLanguage('en')">英文</button>
        </div>
        <h1 class="text-center my-4">孫中山導覽</h1>
        <!-- Page Content -->
        <!-- ... -->
    </div>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
```

### `styles.css`

This file contains the CSS styles for the project, ensuring a consistent and appealing design.

```css
body {
    background-color: #f8f9fa;
    color: #333;
}

h1 {
    color: #343a40;
}

#textContent {
    background-color: #fff;
}

.accordion-button {
    background-color: #343a40;
    color: #fff;
}

.accordion-button:not(.collapsed) {
    background-color: #495057;
}

.accordion-body {
    background-color: #fff;
}

button {
    width: 100px;
}
```

### `scripts.js`

This JavaScript file handles the functionality of the webpage, such as playing audio and displaying text.

```javascript
function playAudio(audioId, mapId) {
    var audio = document.getElementById(audioId);
    var audios = document.querySelectorAll('audio');
    
    audios.forEach(function(a) {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    updateMap(mapId);
}

function showText(track) {
    console.log("Showing text for track:", track);
    var textContent = document.getElementById('textContent');
    var language = document.documentElement.lang;

    if (language === 'en') {
        switch(track) {
            case 1:
                textContent.textContent = "English text for track 1";
                break;
            case 2:
                textContent.textContent = "English text for track 2";
                break;
            // More cases...
        }
    } else {
        switch(track) {
            case 1:
                textContent.textContent = "Chinese text for track 1";
                break;
            case 2:
                textContent.textContent = "Chinese text for track 2";
                break;
            // More cases...
        }
    }
}

function updateMap(mapId) {
    // Function to update map view
}
```

## Contributing

We welcome contributions to the Sun Yat-Sen Tour Guide project! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.



