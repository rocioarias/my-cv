# MyCV

This project is an oportunity to show in a practical way my knwoledge and capacities.

## Inspiration

I had alot of inspiration in the retro webpages, the vaporwave stetic. Used open and free sources from [CodePen](https://codepen.io/) and different graphic resourses from [FreePik](https://www.freepik.es/).

## Files

All of the files provides:

* **Dynamic Content** : The content of the component changes based on the `lng` prop. For example, the headline, subhead, and introduction text are all dynamic and change based on the current language setting. Supports two languages, Spanish (`es`) and English (`en`). 
* **Responsive Design**: The HTML structure of the application is designed to be responsive. This ensures that the application's layout and functionality work well on a variety of devices and window or screen sizes.
* **Descriptive Variables**: The application incorporates descriptive variables that enhance its adaptability and customization. This feature contributes to a more personalized and aesthetically pleasing user experience.

### `App.js`

Is the main file of the application, which brings together different components to form the complete application. It uses Bootstrap to create a responsive HTML layout.

The file is structured into three main sections: Header, Body, and Footer.

1. **Header** : This section contains a welcome message and an option to change the language. The language can be toggled between English and Spanish using a switch.
2. **Body** : This section is the main content area of the page. It is structured like a Windows XP computer screen. It contains two main components: `MusicReproduction` and `SocialMedia`. The `MusicReproduction` component is responsible for music playback, while the `SocialMedia` component handles social media interactions. The language prop (`lng`) is passed to these components to ensure consistent language settings across the application. The `WorkingExperience` component is also included in this section, which presumably displays the user's work experience. A `Pokemon` component is also present, but its functionality is not clear from the provided code.
3. **Footer** : ...

The `useState` hook is used to manage the state of the language setting (`lng`). The initial state is set to 'en' (English), and it can be toggled between 'en' and 'es' (Spanish) using the switch in the header.

### `socialMedia.js`

In this file i tried to show my capacities to work with events inside of the page.

* Buttons that redirects you into a differents links depends which one do you select. Are concurrent with their names  and he links that gives you.
* The "DJ" is a `<img>` with an event in the browser if you make click on him.

### `resumeMySelf.js`

This file is part of a larger project and is designed to work in conjunction with other files to provide a complete personal profile and resume.

The component includes a section where the user explains why they chose Computer Science as their field of study. 


### `music.js`

Provides functionality for music reproduction. It is designed to be used in a web environment and is built using React.

The module exports a single React component, `MusicReproduction`, which renders a music player interface. This interface includes a video player, a volume control, and a play/pause button.

Key features of the `MusicReproduction` component:

* **Video Player** : The video player is controlled by the `playing` state variable. When `playing` is `true`, the video plays; when `false`, the video is paused. The video is not muted by default.
* **Volume Control** : The volume control is an input of type `range` that allows the user to adjust the volume of the music. The range of the volume control is from 0 to 1, with a step of 0.02. The current volume level is stored in the `volume` state variable.
* **Play/Pause Button** : The play/pause button's appearance changes based on the `playing` state variable. When the music is playing, the button shows a pause icon; when the music is paused, it shows a play icon. The button's functionality is handled by the `handlePlay` function.

This module is a part of a larger project and is designed to work in conjunction with other modules to provide a complete music playing experience.

### `resumeMySelf`
