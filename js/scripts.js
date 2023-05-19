/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

projects = [
    {
        title: "My Finance",
        description: "My Finance is a user-friendly that provides a comprehensive platform where users can conveniently access financial news and stay updated on the latest developments in the stock market.",
        image: "../assets/my-finance-img.jpg",
        liveLink:"https://devjames-myfinance.netlify.app",
        githubLink: "https://github.com/James-Suresh/my-finance-frontend"
    },

    {
        title: "Chess app",
        description: "Chess app is hackathon project that utilizes lichess' api to recreate puzzles on site. The app also features OpenAI integrated jokes when selecting the play a friend option ",
        image: "../assets/chess-img.jpg",
        liveLink:"https://devjames-chess-app.netlify.app/",
        githubLink: "https://github.com/James-Suresh/chess-app"
        
    }

]

projects.map((project,index)=>{

    var cardContainer = document.createElement("div");
    cardContainer.className = "card animate__animated animate__fadeInUp animate__delay-" + index + "s  overflow-hidden shadow rounded-2 border-0 mb-5";
    
    // Create the card body
    var cardBody = document.createElement("div");
    cardBody.className = "card-body p-0";
    
    // Create the inner container for flex alignment
    var innerContainer = document.createElement("div");
    innerContainer.className = "d-flex  align-items-top";
    
    // Create the left content container
    var leftContainer = document.createElement("div");
    leftContainer.className = "p-5 d-none  d-md-block col-md-8 ";
    
    // Create the project name heading
    var projectName = document.createElement("h2");
    projectName.className = "fw-bolder text-primary";
    projectName.textContent = project.title;
    
    // Create the project description paragraph
    var projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    
    // Append the project name and description to the left container
    leftContainer.appendChild(projectName);
    leftContainer.appendChild(projectDescription);
    
    // Create the button container for live link and GitHub link
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "mt-4";
    
    // Create the live link button
    var liveLinkButton = document.createElement("a");
    liveLinkButton.className = "btn btn-primary me-2";
    liveLinkButton.href = project.liveLink;
    liveLinkButton.textContent = "Live Link";
    
    // Create the GitHub link button
      var githubLinkButton = document.createElement("a");
    githubLinkButton.className = "btn btn-outline-dark";
    githubLinkButton.href = project.githubLink;
    githubLinkButton.textContent = "GitHub";
    
    // Append the buttons to the button container
    buttonContainer.appendChild(liveLinkButton);
    buttonContainer.appendChild(githubLinkButton);
    
    // Append the button container to the left container
    leftContainer.appendChild(buttonContainer);
    
    var rightContainer = document.createElement("div");
    rightContainer.className = "col-md-4  overflow-hidden";
    
    // Create the image element
    var image = document.createElement("img");
    image.className = "w-100 h-100 object-fit-cover";
    image.src = project.image;
    image.alt = "...";
    
    // Append the left container and image to the inner container
    innerContainer.appendChild(leftContainer);
    rightContainer.appendChild(image);
    innerContainer.appendChild(rightContainer);
    
    // Append the inner container to the card body
    cardBody.appendChild(innerContainer);
    
    // Append the card body to the card container
    cardContainer.appendChild(cardBody);
    
    const card_list = document.getElementById("card-list");
    card_list.appendChild(cardContainer);
    

})


