# Site developed using Nuxt and Strapi

## Production

Install Docker and Docker Compose on your system if you haven't already.
```
https://www.docker.com/get-started/
```

Check is Docker is installed correctly by running:

```bash
docker --version
```

Clone this repository to your local machine:

```bash
git clone https://github.com/EnverMT/metalservismarkazi.git
```

Navigate to the project directory:

```bash
cd metalservismarkazi
```

To build and run the production Docker containers for the frontend and backend services, use the following commands:

```bash
docker compose up --build -d
```
or
```bash
podman compose up --build -d
```

Site is avalilable at `http://localhost:3000`.

## Transfer data from remote database to local database

- Prerequisites:
  - You have a remote Strapi instance running (source)
  - You have a local Strapi instance running (destination)
  - You have access to both instances with appropriate permissions

- Set up your local Strapi instance (destination):
  - Ensure your local Strapi instance is running and accessible at `http://localhost:1337/admin`
  - Generate a transfer token with push permission in your local Strapi instance by navigating to `Settings` > `Transfer Tokens` > `Create new Transfer Token`. Save this token for later use.

- Set variables in `.env` file:

```
STRAPI_TRANSFER_URL=http://localhost:1337/admin
STRAPI_TRANSFER_TOKEN=<your_local_transfer_token>
```

- Run the command to start the transfer process

```cmd
npm run strapi transfer -- --from https://api.msm24.uz/admin
```

- Enter token for source with pull permission. This token you can get from the administrator of remote Strapi instance
- Confirm the override of local database: `Yes`