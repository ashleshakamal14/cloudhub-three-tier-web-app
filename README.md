# ☁️ CloudHub — AWS Three-Tier Web Application

A full-stack web application demonstrating a **three-tier architecture** using React.js, Node.js, Express and MySQL.

The project is based on the AWS Three-Tier Web Architecture Workshop and has been customized with a modern dashboard-style frontend for local development and demonstration.

> **Note:** This project is currently configured for local development. No AWS infrastructure has been deployed.

---

## 📌 Project Overview

CloudHub demonstrates how a web application can be separated into three independent layers:

```text
                    ┌──────────────────────┐
                    │        USER          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      WEB TIER        │
                    │      React.js        │
                    │   Presentation Layer │
                    └──────────┬───────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   APPLICATION TIER   │
                    │   Node.js + Express  │
                    │    Business Logic    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     DATABASE TIER    │
                    │        MySQL         │
                    │    Data Persistence  │      
                    └──────────────────────┘
✨ Features
Modern responsive dashboard
Three-tier architecture visualization
React.js frontend
Node.js and Express.js REST API
MySQL database integration
Transaction management
Backend health-check endpoint
Responsive sidebar navigation
Architecture overview page
Project information page
REST API communication
Local development environment
Cloud-ready architecture design
🏗️ Three-Tier Architecture
1️⃣ Web Tier

The Web Tier is responsible for the presentation layer and user interaction.

Technologies
React.js
React Router
Styled Components
CSS
Responsibilities
Display the user interface
Handle user interactions
Navigate between application pages
Communicate with backend APIs
Display application data
2️⃣ Application Tier

The Application Tier contains the backend API and application logic.

Technologies
Node.js
Express.js
REST API
CORS
Body Parser
Responsibilities
Handle HTTP requests
Process application logic
Manage transactions
Communicate with the database
Provide API endpoints
Provide application health monitoring

The backend runs locally on:

http://localhost:4000
3️⃣ Database Tier

The Database Tier provides persistent storage for application data.

Technology
MySQL
Responsibilities
Store transaction records
Retrieve application data
Delete transaction records
Support database operations through the application layer
🛠️ Tech Stack
Category	Technology
Frontend	React.js
Backend	Node.js
API Framework	Express.js
Database	MySQL
Routing	React Router
Styling	CSS / Styled Components
Version Control	Git
Repository	GitHub
Cloud Architecture	AWS Three-Tier Architecture
🔌 REST API

The backend API runs on:

http://localhost:4000
Health Check
Request
GET /health
Example Response
"This is the health check"
Get All Transactions
Request
GET /transaction

Returns the available transaction records.

Add Transaction
Request
POST /transaction
Example Request
{
  "amount": 500,
  "desc": "Sample transaction"
}
Delete All Transactions
Request
DELETE /transaction

Deletes all transaction records.

Delete Transaction
Request
DELETE /transaction/id

Deletes a transaction using its ID.

Get Transaction by ID
Request
GET /transaction/id

Retrieves a transaction using its ID.

💻 Local Setup
Prerequisites

Install the following software:

Git
Node.js
npm
MySQL

Check the installations:

git --version
node --version
npm --version
🚀 Installation
1. Clone the Repository
git clone https://github.com/aws-samples/aws-three-tier-web-architecture-workshop.git

Navigate into the project:

cd aws-three-tier-web-architecture-workshop
2. Backend Setup

Navigate to the application tier:

cd application-code\app-tier

Install dependencies:

npm install

Start the backend:

node index.js

The backend should display:

AB3 backend app listening at http://localhost:4000

Keep this terminal running.

3. Test the Backend

Open another PowerShell terminal.

Run:

Invoke-WebRequest http://localhost:4000/health -UseBasicParsing

Expected response:

StatusCode : 200
Content    : "This is the health check"
4. Frontend Setup

Open another terminal and navigate to:

cd application-code\web-tier

Install dependencies:

npm install

Start the React application:

$env:PORT=3001
npm start

Open the application in your browser:

http://localhost:3001
📂 Project Structure
aws-three-tier-web-architecture-workshop/
│
├── application-code/
│   │
│   ├── app-tier/
│   │   ├── DbConfig.js
│   │   ├── index.js
│   │   ├── TransactionService.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   └── web-tier/
│       ├── public/
│       │
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   │   ├── About/
│       │   │   ├── Architecture/
│       │   │   ├── Burger/
│       │   │   ├── DatabaseDemo/
│       │   │   ├── Home/
│       │   │   └── Menu/
│       │   │
│       │   ├── App.js
│       │   ├── App.css
│       │   ├── global.js
│       │   ├── hooks.js
│       │   ├── index.css
│       │   └── index.js
│       │
│       ├── package.json
│       └── package-lock.json
│
├── screenshots/
│
├── README.md
├── LICENSE
└── CONTRIBUTING.md


Screenshots of the application are available in the screenshots directory.

Dashboard

The dashboard provides an overview of the application architecture, technology stack and system status.

Architecture

The architecture page demonstrates the separation of the Web, Application and Database tiers.

Transactions

The Transactions page demonstrates the application's transaction functionality and backend API integration.

About Project

The About page provides information about the technologies and concepts used in the project.

☁️ AWS Architecture

The application follows the design principles of an AWS three-tier architecture.

A potential production deployment could be structured as:

                         INTERNET
                            │
                            ▼
                 ┌────────────────────┐
                 │ Application Load   │
                 │     Balancer       │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │      WEB TIER      │
                 │    EC2 / ECS       │
                 │     Frontend       │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │  APPLICATION TIER  │
                 │    EC2 / ECS       │
                 │ Node.js + Express  │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │    DATABASE TIER   │
                 │        RDS         │
                 │       MySQL        │
                 └────────────────────┘
Potential AWS Services
Amazon VPC
Application Load Balancer
Amazon EC2
Amazon RDS
Amazon S3
AWS IAM
Amazon CloudWatch

The AWS architecture above represents a potential production deployment. The current project is being developed and tested locally.

🔐 Security Considerations

For a production AWS deployment, the architecture can be enhanced with:

Private subnets for application and database tiers
Security groups with restricted inbound traffic
IAM least-privilege access
HTTPS/TLS
Secure database credentials
Encryption at rest and in transit
CloudWatch monitoring and logging
Network isolation
Database access restricted to the application tier
📈 Scalability

One of the main advantages of a three-tier architecture is the ability to scale each layer independently.

For example:

                    WEB TIER
                       │
                ┌──────┴──────┐
                │             │
             Server 1      Server 2
                │             │
                └──────┬──────┘
                       │
                       ▼
                APPLICATION TIER
                       │
                ┌──────┴──────┐
                │             │
             Server 1      Server 2
                │             │
                └──────┬──────┘
                       │
                       ▼
                 DATABASE TIER

This allows additional application or web servers to be introduced without redesigning the entire system.

🧪 Testing

The backend health endpoint can be tested using PowerShell:

Invoke-WebRequest http://localhost:4000/health -UseBasicParsing

Expected:

StatusCode : 200
Content    : "This is the health check"

The frontend can be tested by opening:

http://localhost:3001
📚 Learning Outcomes

This project provides practical experience with:

Full-stack web development
React.js
Node.js
Express.js
REST API development
API communication
MySQL database integration
Three-tier application architecture
Cloud architecture concepts
Git and GitHub
Local application testing
Responsive UI development
🔮 Future Improvements

The following features can be added in future versions:

User authentication and authorization
Improved transaction validation
API error handling
Unit and integration tests
Docker containerization
GitHub Actions CI/CD
AWS deployment
Amazon RDS integration
Application Load Balancer
CloudWatch monitoring
HTTPS using AWS Certificate Manager
Infrastructure as Code using AWS CloudFormation or Terraform

📄 License

This project follows the license included in the original repository.



### After saving


Run these commands from your project root:


```powershell
cd C:\Users\ASHLESHA\Desktop\aws-three-tier-web-architecture-workshop

Then check:

git status

You should see your modified README.md and, once you've created them, the screenshot files.

Your final GitHub structure should look like
📁 aws-three-tier-web-architecture-workshop
│
├── 📁 application-code
│   ├── 📁 app-tier
│   └── 📁 web-tier
│
├── 📁 screenshots
│   ├── dashboard.png
│   ├── architecture.png
│   ├── transactions.png
│   └── about.png
│
├── 📄 README.md
├── 📄 LICENSE
└── 📄 CONTRIBUTING.md

