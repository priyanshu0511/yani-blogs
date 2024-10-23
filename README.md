# Yani Blogs

### Overview
Yani Blogs is a platform that allows users to share and explore various blog posts. The project uses Firebase for user authentication, ensuring that only registered users can create, and delete their blogs. Each blog post is associated with the user who created it, and their user ID is stored for future reference.

The journey of integrating Firebase Authentication was both challenging and rewarding. Initially, I wanted to allow users to post anonymously, but I decided to implement authentication to maintain content quality and avoid spam. After integrating registration and login features, I was able to fine-tune database permissions to allow only authenticated users to post blogs. In the future, I plan to enhance the UI, add categories for better blog organization, and implement a search feature.

### Key Learnings:
Lazy loading blog content for smoother user experience

Leveraging Firebase Authentication for user management

Uploading and displaying user-generated content via Firebase

### Built With
React: For building the user interface and handling dynamic components.

TailwindCSS: For styling the platform with a responsive design.

JavaScript: Handling logic and asynchronous operations.

Firebase: Database and authentication service.

### Features
Built from scratch with create-react-app

Firebase Authentication allows user registration, login, and secure blog posting.

Blog posts are stored in Firebase with a connection to the posting user’s ID.

Fully responsive design for mobile, tablet, and desktop.

Blog posts are dynamically loaded using React hooks like useEffect().

Users can edit or delete only their own blogs.
