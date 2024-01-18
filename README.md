# Mentor Me (client)

## Table of Contents

- [Description](#description)
- [BackEnd](#backend)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [APIs](#apis)
- [Contributing](#contributing)

## Description

Mentor Me is a full stack application that connects curious learners with mentors to learn a variety of different subjects. Mentor Me utilizes a ThreeJS interactive 3D globe to display users general locations and illustrate connecting people across the world.

## BackEnd 
- https://github.com/jon-slva/mentor-me-server

## Features

- Interactive globe visualization.
- Markers for specific locations.
- GeoApify integration for translating addresses to map coordinates.
- User Authentication for Mentors and Mentees.
- Chat interface.

## Technologies Used

- React
- Axios
- Sass
- ThreeJS

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jon-slva/mentor-me-client
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database configurations in a `.env` file:

- REACT_APP_API_URL=http://localhost:8080

4. Run the application:
```bash
npm start
```

## APIs
- API calls are handled in the backend only on signup to retrieve the coordinates for a given user.

## Contributing

Contributions to this project are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.
