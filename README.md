# Simple Website Vue

Welcome to my very first Vue project! 😎
Yes, you heard it right—this is my first tango with Vue.js. Coming from an Angular background, I decided to dip my toes into the Vue world. It's been a ride, and I've learned a lot. This project is essentially the same as my Angular one, but the structure might look a bit different because, well, I was figuring things out as I went along!

## Project Overview

This is a simple, responsive web application that displays a gallery of images fetched from an external API. The goal was to make it work on all devices, with a little Vue magic sprinkled on top.

## Features

1. **Responsive Design**: Because everyone deserves to see nice images, no matter what device they're using.
2. **Image Gallery**: Fetches images from an external API and displays them beautifully (or at least, that was the plan).
3. **Popup Navigation**: Users can click on an image to view it in a popup and navigate between images.

## Project Structure

The project structure might seem a bit, um, "experimental," but here's what we're working with:

```plaintext
src/
│
├── assets/          # Static assets like images and styles
├── components/      # Vue components (think of them like Angular components, but, you know, Vue-ified)
├── services/        # Services for API calls (axios is my friend here)
├── ui/              # UI elements like buttons, inputs, etc.
├── utils/           # Utility functions for things like date formatting
│
├── App.vue          # The root Vue component
├── main.ts          # The entry point for the application
├── style.css        # Some global CSS styling (yep, still figuring out SCSS)
├── style.scss       # Experimenting with SCSS here
└── vite-env.d.ts    # Vite and TypeScript environment settings
```

## Installation and Setup

You know the drill. Clone the repo, install the dependencies, and run the app:

1. Clone the repo:
   ```bash
   git clone https://github.com/RocketLewko/simple-website-vue.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-website-vue
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build the app for production:
   ```bash
   npm run build
   ```

## Key Packages

- **Vue**: `^3.4.37`
- **Vue Router**: `^4.4.3`
- **Axios**: `^1.7.5`
- **Date-fns**: `^3.6.0`
- **Vite**: `^5.4.1`
- **TypeScript**: `^5.5.3`

## API Integration

Just like in my Angular project, I'm using the following API to fetch images:

- **Picsum Photos**: `https://picsum.photos/v2/list?limit=10`

## Usage

Click on an image, and it’ll pop up in a fancy modal. Then, you can navigate through other images. Simple, yet effective.

## Conclusion

This project has been a fun experiment in Vue. Coming from Angular, I found Vue to be quite different, but in a good way! The structure might look a bit
