from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from llama_index.core import StorageContext, load_index_from_storage
import requests
from llama_index.core.chat_engine import CondenseQuestionChatEngine
from llama_index.core import Prompt
import json

app = Flask(__name__)
CORS(app)

# Define the URLs of your website pages
PAGE_URLS = {
    'home': 'http://localhost:3000/',
    'about': 'http://localhost:3000/about',
    'service': 'http://localhost:3000/services',
    'contact': 'http://localhost:3000/contact',
}

def extract_page_content(url):
    # Function to extract relevant content from a webpage
    # You may need to customize this function based on your website's structure
    # Example: extract text from specific elements on the page
    # Here, I'm just returning the whole page content for simplicity
    response = requests.get(url)
    return response.text

def get_custom_prompt():
    # Function to create a custom prompt for querying the index
    try:
        return Prompt("""\
Rephrase the conversation and subsequent message into 
a self-contained question while including all relevant details. 
Conclude the question with: Only refer to this document.

<Chat History> 
{chat_history}

<Follow Up Message>
{question}

<Standalone question>
""")
    except Exception as e:
        return jsonify({'error':  f"An error occurred: {e}"})

def query_index(prompt, chat_history):
    # Function to query the llama index and generate a response
    try:
        storage_context = StorageContext.from_defaults(persist_dir="index")
        index = load_index_from_storage(storage_context)
        query_engine = index.as_query_engine()
        chat_engine = CondenseQuestionChatEngine.from_defaults(
            query_engine=query_engine,
            condense_question_prompt=get_custom_prompt(),
            chat_history=chat_history,
            verbose=True
        )

        response_node = chat_engine.chat(prompt)  # chat here
        return response_node.response
    except Exception as e:
        return jsonify({'error':  f"An error occurred: {e}"})

@app.route('/')
def hello_world():
    return jsonify({'result': "Hello world"})

@app.route('/ask_asmae', methods=['POST'])
def query_endpoint():
    try:
        data = request.get_json()
        prompt = data.get('prompt')
        chat_history = data.get('chatHistory', [])
        response = query_index(prompt, chat_history)
        return jsonify({'result': response})
    except Exception as e:
        return jsonify({'error':  f"An error occurred: {e}"})

if __name__ == '__main__':
    app.run()
