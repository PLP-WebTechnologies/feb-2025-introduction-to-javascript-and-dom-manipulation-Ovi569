
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM Manipulation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .highlight {
            color: white;
            background-color: blue;
            padding: 5px;
        }
        #dynamic-text {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Introduction to JavaScript and DOM Manipulation</h1>
    </header>
    <main>
        <section>
            <p id="dynamic-text">This text will change dynamically.</p>
            <button id="change-text-btn">Change Text</button>
        </section>
        <section>
            <button id="toggle-style-btn">Toggle Highlight</button>
        </section>
        <section>
            <button id="add-element-btn">Add Element</button>
            <button id="remove-element-btn">Remove Element</button>
            <div id="element-container"></div>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 JavaScript DOM Manipulation</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>