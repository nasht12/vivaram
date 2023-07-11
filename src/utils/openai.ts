import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-17wq5OynZ94mgq6qioZbDa87",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
