// Listen for DOM content loaded event to handle initial navigation based on URL hash
document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.hash);
});
// Listen for changes in the URL hash to navigate to the corresponding page
window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});
// Function to navigate to different pages based on the hash in the URL
function navigateTo(hash) {
    switch (hash) {
        case "#/signup":
            loadSignupPage();
            break;
        case "#/login":
            loadLoginPage();
            break;
        case "#/search":
            loadSearchPage();
            break;
        case "#/profile":
            loadProfilePage();
            break;
        case "#/forum":
            loadForumPage();
            break;
        case "#/2001":
            load2001();
            break;
        case "#/apocalypsenow":
            loadApocalypseNow();
            break;
        case "#/pulpfiction":
            loadPulpFiction();
            break;
        default:
            loadHomePage();
            break;
    }
}

// Load page content dynamically into the "app" div
function loadPageContent(content) {
    const app = document.getElementById("app");
    app.innerHTML = content;
}
// Define functions for loading specific pages. Each function sets up the HTML content for that page.
function load2001() {
    const _2001Content = `
    <body>
    <div class="topnav" id="mainNav">
        <a href="#/signup">Sign Up</a>
        <a href="#/login">Log In</a>
        <a href="#/">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/search">Search</a>
        <a href="#/forum">Forum</a>
    </div>

    <div class = "intro"><h1 class = "logo-header">CineConnect</h1></div>

    <div class="image-grid">
    <div class="image-container">
        <a href="#/2001" target="_blank">
        <img src="../images/2001.png" alt="Image 1">
    	</a>
    </div>
    <div class="image-container">
        <div class = "text">
        <h1>2001: A Space Odyssey (1968)</h1>
        <p1>Humanity discovers a mystifying, artificial object buried underneath the lunar surface. With the assistance of HAL 9000, an intelligent computer, mankind embarks on an interesting quest.</p1>
        <br>
        <br>
        <p1>Director: Stanley Kubrick<br>Writers: Stanley Kubrick, Arthur C. Clarke<br>Stars: Keir Dullea, Gary Lockwood, William Sylvester</p1>
        </div>
    </div>
	</div>
    <h1>Reviews</h1>
    <center><button class="comment-btn" onclick="openCommentDialog()">Leave a Review</button></center>
    <!-- The Comment Modal -->
    <div id="commentModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="close" onclick="closeCommentDialog()">&times;</span>
        <h2>Post Your Review</h2>
        <textarea id="commentText" placeholder="Your review title"></textarea>
        <textarea id="commentText" placeholder="Your review"></textarea>
        <button onclick="submitComment()">Submit Review</button>
    </div>
    </div>
    <div class="reviews-container">
            <h2 class="text-center">2001: A Space Odyssey is a masterpiece!</h2>
            <h3 class="text-center">JohnDoe</h3>
            <p1>Bluntly, 2001 is one of the best science-fiction films made to date, if not the very best. Stanley Kubrick was a genius of a film maker and this is one of his very best works.</p1>
    </div>
    </body>
    `;
    loadPageContent(_2001Content);
}

function loadApocalypseNow() {
    const apContent = `
    <body>
    <div class="topnav" id="mainNav">
        <a href="#/signup">Sign Up</a>
        <a href="#/login">Log In</a>
        <a href="#/">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/search">Search</a>
        <a href="#/forum">Forum</a>
    </div>

    <div class = "intro"><h1 class = "logo-header">CineConnect</h1></div>

    <div class="image-grid">
    <div class="image-container">
        <a href="#/apocalypsenow" target="_blank">
        <img src="../images/apn.jpg" alt="Image 1">
    	</a>
    </div>
    <div class="image-container">
        <div class = "text">
        <h1>Apocalypse Now (1979)</h1>
        <p1>A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.</p1>
        <br>
        <br>
        <p1>Director: Francis Ford Coppola<br>Writers:John Milius, Francis Ford Coppola, Michael Herr<br>Stars: Martin Sheen, Marlon Brando, Robert Duvall</p1>
        </div>
    </div>
	</div>
    <h1>Reviews</h1>
    <center><button class="comment-btn" onclick="openCommentDialog()">Leave a Review</button></center>
    <!-- The Comment Modal -->
    <div id="commentModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="close" onclick="closeCommentDialog()">&times;</span>
        <h2>Post Your Review</h2>
        <textarea id="commentText" placeholder="Your review title"></textarea>
        <textarea id="commentText" placeholder="Your review"></textarea>
        <button onclick="submitComment()">Submit Review</button>
    </div>
    </div>
    <div class="reviews-container">
        <h2 class="text-center">Apocalypse Now is an interesting film</h2>
        <h3 class="text-center">JaneDoe</h3>
        <p1>Apocalypse Now is an interesting film, not because it is supposedly an anti-war film, but because it is surreal and shows an interesting journey into madness.</p1>
    </div>
    </body>
    `;
    loadPageContent(apContent);
}

function loadPulpFiction() {
    const pfContent = `
    <body>
    <div class="topnav" id="mainNav">
        <a href="#/signup">Sign Up</a>
        <a href="#/login">Log In</a>
        <a href="#/">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/search">Search</a>
        <a href="#/forum">Forum</a>
    </div>

    <div class = "intro"><h1 class = "logo-header">CineConnect</h1></div>

    <div class="image-grid">
    <div class="image-container">
        <a href="#/pulpfiction" target="_blank">
        <img src="../images/pf.jpg" alt="Image 1">
    	</a>
    </div>
    <div class="image-container">
        <div class = "text">
        <h1>Pulp Fiction (1994)</h1>
        <p1>The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.</p1>
        <br>
        <br>
        <p1>Director: Quentin Tarantino<br>Writers: Quentin Tarantino, Roger Avary<br>Stars: John Travolta, Uma Thurman, Samuel L. Jackson</p1>
        </div>
    </div>
	</div>
    <h1>Reviews</h1>
    <center><button class="comment-btn" onclick="openCommentDialog()">Leave a Review</button></center>
    <!-- The Comment Modal -->
    <div id="commentModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="close" onclick="closeCommentDialog()">&times;</span>
        <h2>Post Your Review</h2>
        <textarea id="commentText" placeholder="Your review title"></textarea>
        <textarea id="commentText" placeholder="Your review"></textarea>
        <button onclick="submitComment()">Submit Review</button>
    </div>
    </div>
    <div class="reviews-container">
        <h2 class="text-center">Pulp Fiction is the most rewatchable movie of all time</h2>
        <h3 class="text-center">JackDoe</h3>
        <p1>Possibly the most influential movie made in history since the first movie ever made .Even after 25 years and a countless number of copy cats this movie absolutely holds up and feels fresh.</p1>
    </div>
    </body>
    `;
    loadPageContent(pfContent);
}

function loadHomePage() {
    const homeContent = `
    <body>
    <div class="topnav" id="mainNav">
        <a href="#/signup">Sign Up</a>
        <a href="#/login">Log In</a>
        <a class="active" href="#/">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/search">Search</a>
        <a href="#/forum">Forum</a>
    </div>

    <div class = "intro"><h1 class = "logo-header">CineConnect</h1></div>

    <div class="image-grid">
    <div class="image-container">
        <a href="#/2001" target="_blank">
        <img src="../images/2001.png" alt="Image 1">
    	</a>
    </div>
    <div class="image-container">
        <a href="#/apocalypsenow" target="_blank">
        <img src="../images/apn.jpg" alt="Image 2">
        </a>
    </div>
    <div class="image-container">
        <a href="#/pulpfiction" target="_blank">
        <img src="../images/pf.jpg" alt="Image 3">
        </a>
    </div>
	</div>
    </body>
    `;
    loadPageContent(homeContent);
}

function loadSignupPage() {
            const signupContent = `<body>
            <div class="topnav" id="mainNav">
                <a class="active" href="#/signup">Sign Up</a>
                <a href="#/login">Log In</a>
                <a  href="#/">Home</a>
                <a href="#/profile">Profile</a>
                <a href="#/search">Search</a>
                <a href="#/forum">Forum</a>
            </div>
            <!-- Signup form container -->
            <div class="signup-form">
                <!-- Heading and subheading for the signup form -->
                <center><h1>Welcome to CineConnect!</h1></center>
                <center><h3><u>Sign Up Now!</u></h3></center>
                <!-- Form for user signup with action attribute to redirect to the home page -->
                <form action="#/">
                    <h2>Enter your username:</h2>
                    <input type="text" id="username" placeholder="Username" required><br>

                    <h2>Enter your email:</h2>
                    <input type="email" id="email" placeholder="Email" required><br>

                    <h2>Enter your location:</h2>
                    <input type="text" id="location" placeholder="Location" required><br>

                    <h2>Enter your id:</h2>
                    <input type="tel" id="id" placeholder="ID" required><br>

                    <h2>Enter your password:</h2>
                    <input type="password"  id="password" placeholder="Password" required><br>

                    <input type="submit" value="Sign Up">
                    <center><p>Already have an account?<br><a href="#/login">Log in here</a></p></center>
                </form>
            </div>
        </body>`;
    loadPageContent(signupContent);
}

function loadLoginPage() {
    const loginContent = `
    <body>
    <div class="topnav" id="mainNav">
        <a href="#/signup">Sign Up</a>
        <a class="active" href="#/login">Log In</a>
        <a  href="#/">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/search">Search</a>
        <a href="#/forum">Forum</a>
    </div>
    <!-- login form container -->
    <div class="login-form">
        <!-- Heading and subheading for the login form -->
        <center><h1>Welcome to CineConnect!</h1></center>
        <center><h3><u>Login Now!</u></h3></center>
        <!-- Form for user login with action attribute to redirect to the index.html page -->
        <form action="#">
            <h2>Enter your username:</h2>
            <input type="text" placeholder="Username" required><br>
            <h2>Enter your password:</h2>
            <input type="password" placeholder="Password" required><br>
            <input type="submit" value="Login">
            <center><p>Not registered yet?<br><a href="#/signup">Click here</a></p></center>
        </form>
    </div>
    </body>
    `;
    loadPageContent(loginContent);
}


function loadProfilePage() {
    const profileContent = `<body>
                                <div class="topnav" id="mainNav">
                                    <a href="#/signup">Sign Up</a>
                                    <a href="#/login">Log In</a>
                                    <a  href="#/">Home</a>
                                    <a class="active" href="#/profile">Profile</a>
                                    <a href="#/search">Search</a>
                                    <a href="#/forum">Forum</a>
                                </div>

                                <div class="profile-container">
                                    <h2>User Profile</h2>
                                    <div class="bio">
                                        <center><h3>Jane Doe</h3></center>
                                        <p><strong>About Me:</strong> My favorite movies are 2001: A Space Odyssey (1968), Apocalypse Now (1979) and Pulp Fiction (1994). My favorite director is Stanley Kubrick. </p>
                                    </div>
                                </div>

                            </body>`;
    loadPageContent(profileContent);
}

function loadSearchPage() {
    const searchContent = `<body>
                            <div class="topnav" id="mainNav">
                                <a href="#/signup">Sign Up</a>
                                <a href="#/login">Log In</a>
                                <a href="#/">Home</a>
                                <a href="#/profile">Profile</a>
                                <a class="active" href="#/search">Search</a>
                                <a href="#/forum">Forum</a>
                            </div>
                            <div class="search">
                            <center><input type="text" id="searchInput" placeholder="Search...">
                            <button onclick="performSearch()">Search</button></center>
                            </div>
                            </body>`;
    loadPageContent(searchContent);
}

function loadForumPage() {
    const forumContent = `<body>
                            <div class="topnav" id="mainNav">
                                <a href="#/signup">Sign Up</a>
                                <a href="#/login">Log In</a>
                                <a href="#/">Home</a>
                                <a href="#/profile">Profile</a>
                                <a href="#/search">Search</a>
                                <a class="active" href="#/forum">Forum</a>
                            </div>
                            <center><button class="new-thread-btn" onclick="openThreadDialog()">New Discussion Thread</button></center>
                            <div class="forum-container">
                            <h2 class="forum-title">General Discussion Thread</h2>
                            <div class="thread">
                                <div class="post">
                                    <h3>User1</h3>
                                    <p>This is the first comment in the discussion thread!</p>
                                    <button class="comment-btn" onclick="openCommentDialog()">Comment</button>
                                </div>
                                <div class="post">
                                    <h3>User2</h3>
                                    <p>I totally agree with you!</p>
                                    <button class="comment-btn" onclick="openCommentDialog()">Comment</button>
                                </div>
                                <div class="post">
                                    <h3>User3</h3>
                                    <p>Interesting point, but I have a different opinion.</p>
                                    <button class="comment-btn" onclick="openCommentDialog()">Comment</button>
                                </div>
                                <!-- Add more posts as needed -->
                            </div>
                        </div>
                        <!-- The New Thread Modal -->
                        <div id="newThreadModal" class="modal">
                            <div class="modal-content">
                                <span class="close" onclick="closeThreadDialog()">&times;</span>
                                <h2>Create New Thread</h2>
                                <input type="text" id="threadTitle" placeholder="Thread Title" required>
                                <textarea id="threadContent" placeholder="Your message"></textarea>
                                <button onclick="submitNewThread()">Create Thread</button>
                            </div>
                        </div>
                        <!-- The Comment Modal -->
                        <div id="commentModal" class="modal">
                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close" onclick="closeCommentDialog()">&times;</span>
                            <h2>Post Your Comment</h2>
                            <textarea id="commentText" placeholder="Your comment"></textarea>
                            <button onclick="submitComment()">Submit Comment</button>
                        </div>
                        </div>
                            </body>`;
    loadPageContent(forumContent);
}
// Function to display the comment modal
function openCommentDialog() {
    document.getElementById("commentModal").style.display = "block";
}
// Function to close the comment modal
function closeCommentDialog() {
    document.getElementById("commentModal").style.display = "none";
}

function submitComment() {
    // Handle the submission of the comment.
    const commentText = document.getElementById("commentText").value;
    console.log("Comment Submitted:", commentText); // For demonstration
    closeCommentDialog();
    // Reset the textarea
    document.getElementById("commentText").value = '';
}
// Handle form submission for the signup page
document.getElementById('signupForm').onsubmit = async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
        studentId: document.getElementById('id').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('http://localhost:8080/M00919790/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log('Success:', data);
        // Handle success response, e.g., redirect or show a success message
    } catch (error) {
        console.error('Error:', error);
        // Handle error response
    }
};
// Function to display the new thread dialog
function openThreadDialog() {
    document.getElementById('newThreadModal').style.display = 'block';
}
// Function to close the new thread dialog
function closeThreadDialog() {
    document.getElementById('newThreadModal').style.display = 'none';
}

function submitNewThread() {
    // Example: Collecting input values
    const title = document.getElementById('threadTitle').value;
    const content = document.getElementById('threadContent').value;
    
    // TODO: Implement the logic to create a new thread
    console.log('Creating new thread:', title, content);

    // Close the dialog after submission
    closeThreadDialog();

    // Optionally, clear the input fields
    document.getElementById('threadTitle').value = '';
    document.getElementById('threadContent').value = '';

    // Refresh the forum threads or add the new thread to the DOM directly
}