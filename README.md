This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone the app

First, clone from git repository:

```bash
git clone https://github.com/ibb4u2006/blob-store.git
```

Go to the project directory:

```bash
cd blob-store
```

Copy and insert the environment variables:

```bash
cp .env.local.example .env.local
```

## Getting Started

Install the project:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start entering value to the input fields. Click on `Update` button to update the local and remote options json file with the form data.

The `Reset` button will initialise the form data to a static predefined values, you can find the values in the project at `data/initialState.ts`

The `Download` button will download the updated form data to your local device

`options.json` location:

- You can find the Local json file in the project at `data/options.json`
- You can find the remote json file at [https://frontendrecruitment.blob.core.windows.net/ibrahim/assets/options.json](https://frontendrecruitment.blob.core.windows.net/ibrahim/assets/options.json)

## Learn More

To learn more about this app, take a look at the following resources:

- Options API Route - [http://localhost:3000/api/options](http://localhost:3000/api/options)

Tech Stack :

- Next.Js: To perform some server-side functionality, like writing to and reading from file system, create api routes etc
- React.Js: Frontend Javascript Library
- React Bootstrap and Bootstrap: CSS Library
- Styled Components: For CSS in Javascript/Typescript functionality
- Typescript: For static typing support
