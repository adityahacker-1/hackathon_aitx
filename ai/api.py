# # from flask import Flask, request, jsonify
# # from flask_cors import CORS 
# # from llama_stack.distribution.library_client import LlamaStackAsLibraryClient
# # import os

# # app = Flask(__name__)
# # CORS(app, resources={r"/*": {"origins": "*"}})  # ❗ Allows any website (use carefully)


# # # ✅ Set the API Key for Together AI (Replace with your key)
# # os.environ["TOGETHER_API_KEY"] = "92760053459023b911f16abcad212847fd3e4099dd8f1297a36557e262b0140a"

# # # ✅ Initialize LLaMA Stack Client
# # client = LlamaStackAsLibraryClient("together")
# # _ = client.initialize()

# # # ✅ Select LLaMA model
# # model_id = "meta-llama/Llama-3.3-70B-Instruct"

# # @app.route('/')
# # def home():
# #     return jsonify({"message": "Chatbot API is running!"})

# # @app.route('/chat', methods=['POST'])
# # def chat():
# #     """
# #     Sends user query directly to LLaMA (LLM model) and returns the chatbot's response.
# #     """
# #     data = request.get_json()
# #     user_message = data.get("message", "")

# #     # ✅ Call the LLaMA Model (Together AI API)
# #     response = client.inference.chat_completion(
# #         model_id=model_id,
# #         messages=[
# #             {"role": "system", "content": "You are a friendly AI assistant."},
# #             {"role": "user", "content": user_message},
# #         ],
# #         sampling_params={"max_tokens":8000}
# #     )

# #     chatbot_response = response.completion_message.content
# #     print(len(chatbot_response))
# #     return jsonify({"response": chatbot_response})

# # if __name__ == '__main__':
# #     app.run(host="0.0.0.0", port=5001, debug=True)
# from flask import Flask, request, jsonify, Response
# from flask_cors import CORS
# from llama_stack.distribution.library_client import LlamaStackAsLibraryClient
# import os

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})  # ✅ Allow frontend

# # ✅ Set API Key
# os.environ["TOGETHER_API_KEY"] = "92760053459023b911f16abcad212847fd3e4099dd8f1297a36557e262b0140a"

# # ✅ Initialize LLaMA Stack Client
# client = LlamaStackAsLibraryClient("together")
# _ = client.initialize()

# # ✅ Select LLaMA model
# model_id = "meta-llama/Llama-3.3-70B-Instruct"

# @app.route('/')
# def home():
#     return jsonify({"message": "Chatbot API is running!"})

# @app.route('/chat', methods=['POST'])
# def chat():
#     """
#     Streams user query to Together AI and sends response as a stream.
#     """
#     try:
#         data = request.get_json()
#         user_message = data.get("message", "").strip()

#         if not user_message:
#             return jsonify({"response": "Please enter a message."}), 400

#         def generate_response():
#             response = client.inference.chat_completion(
#                 model_id=model_id,
#                 messages=[
#                     {"role": "system", "content": "You are a helpful AI assistant."},
#                     {"role": "user", "content": user_message},
#                 ],
#                 sampling_params={"max_tokens":8000}
#             )

#             for word in response.completion_message.content.split():
#                 yield word + " "  # ✅ Send word by word
#                 import time
#                 time.sleep(0.05)  # ✅ Small delay for better streaming effect

#         return Response(generate_response(), content_type='text/plain')

#     except Exception as e:
#         return jsonify({"response": f"Error: {str(e)}"}), 500

# if __name__ == '__main__':
#     app.run(host="0.0.0.0", port=5000, debug=True)


from flask import Flask, request, jsonify, Response
from flask_cors import CORS 
from llama_stack.distribution.library_client import LlamaStackAsLibraryClient
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # ❗ Allows any website (use carefully)

# ✅ Set the API Key for Together AI (Replace with your key)
os.environ["TOGETHER_API_KEY"] = "92760053459023b911f16abcad212847fd3e4099dd8f1297a36557e262b0140a"

# ✅ Initialize LLaMA Stack Client
client = LlamaStackAsLibraryClient("together")
_ = client.initialize()

# ✅ Select LLaMA model
model_id = "meta-llama/Llama-3.3-70B-Instruct"

@app.route('/')
def home():
    return jsonify({"message": "Chatbot API is running!"})

@app.route('/chat', methods=['POST'])
def chat():
    """
    Sends user query directly to LLaMA (LLM model) and streams the chatbot's response.
    """
    data = request.get_json()
    user_message = data.get("message", "")

    def generate_response():
        response = client.inference.chat_completion(
            model_id=model_id,
            messages=[
                {"role": "system", "content": "You are a friendly AI assistant."},
                {"role": "user", "content": user_message},
            ],
            sampling_params={"max_tokens": 8000}
        )

        chatbot_response = response.completion_message.content

        for word in chatbot_response.split():
            yield word + " "
    
    return Response(generate_response(), content_type='text/plain')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
