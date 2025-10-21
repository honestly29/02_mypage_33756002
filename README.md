# MyPage

A very small Node.js web application. This is a simple personal webpage built with HTML and CSS, served using a custom Node.js HTTP server. This project currently demonstrates how to serve static files without using external frameworks like Express, however, we will be using this in the upcoming weeks.

## Technologies Used

- **HTML/CSS** – for structuring and styling the webpage (`public/index.html`)
- **Node.js** – to run a lightweight server (`index.js`)
- **Built-in Node modules:**
  - `http` – to create the server
  - `fs` – to read and serve files
  - `path` – to resolve file paths safely

## How to Install and Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/honestly29/02_mypage_33756002.git
cd 02_mypage_33756002
```

### 2. Install Node.js (if not already installed)

Download and install from [nodejs.org](https://nodejs.org)

### 3. Run the server

```bash
node index.js
```

### 4. Open your browser

Visit: [http://localhost:8000](http://localhost:8000)  
You should see my personal webpage rendered with styles applied.
