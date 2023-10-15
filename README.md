<h1 align="center"> 
GET YOUTUBE SUBSCRIBERS
</h1>
<p align="center">This is a frontend capston project given by the Almabetter which is Flashcard Generator.</p>


<h2 align='center'>
<a href='' target="_blank">DEMO</a>
</h2>

## Table of Contents

- [Introduction ](#introduction)
- [Features ](#features)
- [Tech Stack ](#tech-stack)
- [Prerequisites ](#prerequisites)
- [Installation & Run](#installation-and-run)
- [API Reference ](#api-reference)
- [Contribute ](#contribute)
- [Contributors ](#contributors)
- [License ](#license)
- [Contact ](#contact)
- [Acknowledgments ](#acknowledgments)


## Introduction
A flashcard or flash card (also known as an index card) is a card bearing information on both sides, which is intended to be used as an aid in memorization. Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates, formulae or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual (part of a flashcard software), or physical.

![Get YT SUB](https://github.com/Abhi1o/GET-YOUTUBE-SUBSCRIBERS/assets/87490161/7e4f4776-cd79-4577-bb26-2ef06b30fa0a)

## Features
Some features of this application :
- Add More Input Box (Button)
- Delete button (Button)
- Edit Input box (Button)
- View cards (Button)
- Upload Image (Button)
- Share (Copy Clipboard button)
- Social Media Butoon's ( Working )
- See all (Button)
- Back Button
- close button for closing share page

## Tech Stack
GET-Youtube-Subscriber is build using the following technologies:

- **Node.js:** A runtime environment that execute javaScript code on the server-side.
- **Express.js:** A node.js framework for building web application and RESTful API.
- **MongoDB:** Is NoSQL Database system that stores and manage data in JSON-like format.

## Prerequisites

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Run
1. Clone the repository from GitHub:
    ```
     git clone https://github.com/Abhi1o/GET-YOUTUBE-SUBSCRIBERS
    ```
2. Redirect to the project folder:
    ```
     cd GET-YOUTUBE-SUBSCRIBERS
    ```
3. Install the required dependencies:
    ```
     npm install
    ```
4. Configure the application:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
      ```
       PORT=3000                             # The port on which the application will run
       DATABASE_URI= <your_uri_here>         # The MongoDB connection string
      ```
5. Create Database:
    - Inserting subscribers data into MongoDB.
        ```
         npm run createDB
        ```
6. Start server:
    ```
     npm start
    ```
    > [!NOTE]
    > Access the  application in your web browser at `http://localhost:3000` (base URL)


## API Reference
Following API endpoints for retrieving subscribers information using the GET method. For more refer to the [API-Documentation](./API-Documentation.md).

- `/subscribers`: Retrieve a list of all subscribers with their ID, name, subscribed channel and date.
- `/subscribers/names`: Obtain subscribers name along with the channel they are subscribed to.
- `/subscribers/id`: Access subscriber information based on their ID.

## Contribute
Contributions are welcome! If you'd like to contribute, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Contributors
- Abhishek Kumar [GitHub](https://github.com/abhi1o) | [LinkedIn](https://linkedin.com/in/abhi--) | [YouTube](https://www.youtube.com/watch?v=1SHSj539rQg)
- Aman Giri [GitHub](https://github.com/amangiri7) | [LinkedIn](https://www.linkedin.com/in/aman-giri-6b3a3b284/) | [YouTube](https://www.youtube.com/watch?v=Ur-M8QxRqQ8)
- Damini Gadpal [GitHub](https://github.com/Daminigadpal) | [LinkedIn](https://www.linkedin.com/in/damini-gadpal-01996716b) | [YouTube](https://youtu.be/tzykJmtIHvg)

## License
This project is Distributed under the ISC License. See [LICENSE](./LICENSE) for more information.

## Contact
If you have any questions or suggestions, feel free to reach out to us at [Gmail](https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPhhCThjSQBxqqKCTksFHbgmPZGmrTXlskrtrXBgHxRqbmdRdzJJlNBtvTWsTLmjdVLbb).

## Acknowledgment
We'd like to thank the open-source community and the creators of Node.js, Express, and MongoDB for their valuable contributions.

We would also like to thank the contributors to this project for their valuable contributions.




## Happy Learning

<p align="center">
<a href="https://github.com/Abhi1o/get_youtube_subscribers" title="GET youtube subscriber projects">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
    
</a>
</p>







