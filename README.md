Project Overview
This project is a full-stack web application that allows users to manage a product catalog using a Ruby on Rails backend, React and HTML clients, and PostgreSQL as the database. The system supports product creation, retrieval, updating, and deletion (CRUD operations), and is deployed to the cloud using Render and Netlify.

Design Pattern
Architecture
Modular Structure: Backend, React frontend, and HTML client are separated into distinct components, making the system maintainable and scalable.

Service-Oriented Design: The frontend interacts with the backend using RESTful APIs.

Client Interfaces:

React SPA for interactive use.

Plain HTML/CSS/JavaScript interface for lightweight access.

Components
Ruby on Rails Backend:

API-only application.

Model: Product with fields name, description, price, and available.

Controllers: CRUD operations via RESTful routes.

React Frontend:

ProductList, ProductForm, and related components.

Uses Axios for API calls and Bootstrap for styling.

HTML Client:

Basic form-based UI using Fetch API for backend interactions.

Mobile-friendly layout.

Functionality
Functional Requirements
Add Product: Create a new product with name, description, price, and availability.

View Products: Display a list of all products with filter by availability.

Update Product: Edit existing product data.

Delete Product: Remove a product from the catalog.

Responsive Design: Both clients are usable on desktop and mobile.

Non-Functional Requirements
Performance: Page loads in under 2 seconds.

Availability: 24/7 uptime with public access.

Portability: Compatible with Docker and cloud environments.

Maintainability: Follows best practices and clean code principles.

Automation: CI/CD enabled via Netlify and Render.

Cloud-Based Deployment
Backend (Ruby on Rails):

Deployed on Render at:
https://cloud-project-matej-saravanja.onrender.com/products

React Frontend:

Deployed on Netlify at:
[https://resplendent-hamster-5b5a6a.netlify.app/]

HTML Client:

Also deployed on Netlify at:
[https://calm-bubblegum-2937ad.netlify.app/]

Test Cases
Unit Tests
Rails (RSpec):

Validates model data (e.g., presence, price numericality).

Controller specs for CRUD operations.

React (Jest + Testing Library):

ProductList.test.js: Tests rendering, API interaction, and filters.

ProductForm.test.js: Tests input, form submission, and validation.

HTML Client (Jest):

Tests for DOM interaction, input validation, and Fetch-based API calls.

Integration Tests
End-to-end flow from adding a product to deleting it tested via browser and API.

Full-stack integration checks between frontend, backend, and database.

Documentation
GitHub Repository:

Contains structured code with clearly named folders.

Includes README.md files for each section.

Code Comments:

Inline comments in JavaScript and Ruby code for logic explanation.

Deployment Logs:

Netlify and Render provide logs and dashboards for debugging.