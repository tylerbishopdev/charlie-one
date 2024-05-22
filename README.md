# Google Entity-Related Visualization by $hibaKing

I named this project *Charlie-One* after the Charlie Day meme with the conspiracy theory board, this project is a web application that takes in a user's text input and visualizes the entities and their relationships using React Flow. The backend is a FastAPI server that uses the OpenAI API to generate visualizations for Google keyword entities and relationships.

Core technologies used in this project:
- [<a href="https://twitter.com/shadcn">Shadcn</a>](https://twitter.com/shadcn) 
- [<a href="https://reactflow.dev/">React Flow</a>](https://reactflow.dev/)
-  [<a href="https://fastapi.tiangolo.com/">FastAPI</a>](https://fastapi.tiangolo.com/)
-  [<a href="https://openai.com/">OpenAI</a>](https://openai.com/)
-  [<a href="https://nextjs.org/">Nextjs</a>](https://nextjs.org/)

You'll want to use *yarn*, **not npm** for this project.


## It's Perfect :) But If You Must Modify... ð ï¸

1. Clone the repository
```bash
git clone https://github.com/waseemhnyc/instagraph-nextjs-fastapi.git
```
2. Ensure you can use the `yarn` command in your terminal. If not, install yarn:
```bash
npm install -g yarn
```
3. Move into the `web` directory
```bash
cd ./charlie-one
```
4. Install packages
```bash
yarn install
```
ENV variables set in Vercel so you don't need to worry about them. If you want to run the project locally, you'll need to create a `.env.local` file in the `web` directory and add your OpenAI API key to it. 

Or if you have Vercel CLI:
```bash
vercel link
vercel pull
vercel env pull
```
To run Charlie-One locally
```bash
yarn run dev
```

Now that the frontend is working, it's time to get the backend up and running.

Move into the `api` directory, create a virutalenv and source the environment

```bash
cd api/
python3 -m venv venv
source venv/bin/activate
```

Install libraries

```bash
pip install -r requirements.txt
```

Create a .env file and input your OpenAI API Key in the file

```bash
cp .env.example .env
```

Run local server
```bash
uvicorn main:app --host 0.0.0.0
```

## Local Port

Frontend: http://localhost:3000/




