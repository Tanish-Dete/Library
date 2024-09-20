document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.getElementById('addBookBtn');
    const publishBookBtn = document.getElementById('publishBookBtn');
    const addBookModal = document.getElementById('addBookModal');
    const publishBookModal = document.getElementById('publishBookModal');
    const closeAddBook = document.getElementById('closeAddBook');
    const closePublishBook = document.getElementById('closePublishBook');
    const saveBook = document.getElementById('saveBook');
    const publishBook = document.getElementById('publishBook');
    const bookList = document.getElementById('bookItems');
    const publishedBooksList = document.getElementById('publishedBooksList');

    const loadBooks = () => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const publishedBooks = JSON.parse(localStorage.getItem('publishedBooks')) || [];

        bookList.innerHTML = books.map(book => `<li><a href="${book.link}" target="_blank">${book.name}</a></li>`).join('');
        publishedBooksList.innerHTML = publishedBooks.map(book => `<li><a href="${book.link}" target="_blank">${book.name} by ${book.author} (Published on ${book.date})</a></li>`).join('');
    };

    const saveBookToLocalStorage = (book) => {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };

    const savePublishedBookToLocalStorage = (book) => {
        const publishedBooks = JSON.parse(localStorage.getItem('publishedBooks')) || [];
        publishedBooks.push(book);
        localStorage.setItem('publishedBooks', JSON.stringify(publishedBooks));
    };

    addBookBtn.onclick = () => {
        addBookModal.style.display = 'block';
    };

    publishBookBtn.onclick = () => {
        publishBookModal.style.display = 'block';
    };

    closeAddBook.onclick = () => {
        addBookModal.style.display = 'none';
    };

    closePublishBook.onclick = () => {
        publishBookModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === addBookModal) {
            addBookModal.style.display = 'none';
        }
        if (event.target === publishBookModal) {
            publishBookModal.style.display = 'none';
        }
    };

    saveBook.onclick = () => {
        const bookName = document.getElementById('bookName').value;
        const googleDriveLink = document.getElementById('googleDriveLink').value;
        if (bookName && googleDriveLink) {
            const book = { name: bookName, link: googleDriveLink };
            saveBookToLocalStorage(book);
            addBookModal.style.display = 'none';
            loadBooks();
        } else {
            alert('Please fill in both fields');
        }
    };

    publishBook.onclick = () => {
        const bookName = document.getElementById('publishBookName').value;
        const authorName = document.getElementById('publishAuthorName').value;
        const publishDate = document.getElementById('publishDate').value;
        const googleDriveLink = document.getElementById('publishGoogleDriveLink').value;
        if (bookName && authorName && publishDate && googleDriveLink) {
            const book = { name: bookName, author: authorName, date: publishDate, link: googleDriveLink };
            savePublishedBookToLocalStorage(book);
            publishBookModal.style.display = 'none';
            loadBooks();
        } else {
            alert('Please fill in all fields');
        }
    };

    loadBooks();
});





// register
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('register-form');

    // Function to save user details to localStorage and log them
    function saveUserDetails(user) {
        // Convert the user object to a JSON string and save it to localStorage
        localStorage.setItem('userDetails', JSON.stringify(user));

        // Log the user details to the console
        console.log("User Registered:", user);
    }

    // Function to check if user details exist in localStorage and log them
    function loadUserDetails() {
        // Get user details from localStorage
        const storedUser = localStorage.getItem('userDetails');

        if (storedUser) {
            // If user details exist, parse them back into an object and log them
            const user = JSON.parse(storedUser);
            console.log("Saved User Details:", user);
        } else {
            console.log("No user details found in localStorage.");
        }
    }

    // Load any previously saved user details when the page loads
    loadUserDetails();

    // Add an event listener for form submission
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Collect user details from the form
        const userName = document.getElementById('name').value.trim();
        const userEmail = document.getElementById('email').value.trim();
        const userPassword = document.getElementById('password').value.trim();

        // Create a user object with the details
        const user = {
            name: userName,
            email: userEmail,
            password: userPassword
        };

        // Save the user details and log them to the console
        saveUserDetails(user);

        // Clear the form after submission
        registerForm.reset();
    });
});

