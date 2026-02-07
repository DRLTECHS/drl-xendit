# DRL-Xendit Project Setup and Build Guide

## Introduction
Welcome to the DRL-Xendit project! This guide will take you through the steps needed to set up and build the project.

## Prerequisites
- **Git**: Make sure you have Git installed. You can download it from [git-scm.com](https://git-scm.com/).
- **Node.js**: Ensure you have Node.js installed (version 14 or higher). You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm comes with Node.js, but ensure it's updated to the latest version.

## Cloning the Repository
1. Open your terminal.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/DRLTECHS/drl-xendit.git
   ```
3. Navigate into the cloned directory:
   ```bash
   cd drl-xendit
   ```

## Installing Dependencies
To install the required packages:
```bash
npm install
```

## Environment Configuration
1. Duplicate the `.env.example` file and rename it to `.env`.
2. Edit the `.env` file to configure your environment variables as needed.

## Building the Project
To build the project, run:
```bash
npm run build
```

## Running the Project
To start the project, use the following command:
```bash
npm start
```

## Testing
To run tests, execute:
```bash
npm test
```

## Troubleshooting
- If you encounter issues during installation or building, double-check your Node.js and npm versions.
- Ensure that all environment variables are correctly set in the `.env` file.

## Conclusion
You should now have the DRL-Xendit project set up and running. If you have any questions or need further assistance, feel free to reach out to the maintainers.