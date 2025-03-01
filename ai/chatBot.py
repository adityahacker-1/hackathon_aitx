from llama_stack.distribution.library_client import LlamaStackAsLibraryClient
import os

# Ensure API Key is set
os.environ["TOGETHER_API_KEY"] = "92760053459023b911f16abcad212847fd3e4099dd8f1297a36557e262b0140a"

# Initialize LLaMA Stack Client
client = LlamaStackAsLibraryClient("together")
_ = client.initialize()

# List available models
print("Available models:")
for m in client.models.list():
    print(f"{m.identifier} (provider's alias: {m.provider_resource_id}) ")

print("----")
print("Available shields (safety models):")
for s in client.shields.list():
    print(s.identifier)

print("----")

# Select model (Change if needed)
model_id = "meta-llama/Llama-3.3-70B-Instruct"

# Take user input for the prompt
user_prompt = input("Enter your prompt: ")

# Generate response
response = client.inference.chat_completion(
    model_id=model_id,
    messages=[
        {"role": "system", "content": "You are a friendly assistant."},
        {"role": "user", "content": user_prompt},
    ],
)

# Print response
print("\n🦙 LLaMA Model Response:")
print(response.completion_message.content)