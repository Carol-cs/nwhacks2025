import speech_recognition as sr
import pyttsx3
from transformers import pipeline
import time

# Initialize the text-to-speech engine
engine = pyttsx3.init()

# Initialize the model using Hugging Face's pipeline
generator = pipeline('text-generation', model='EleutherAI/gpt-neo-1.3B')
print("Model loaded successfully!")

# Function to listen to microphone input
def listen_for_audio():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for your command...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        
    try:
        print("Recognizing speech...")
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")
        return text
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand the audio.")
        return None
    except sr.RequestError:
        print("Could not request results from Google Speech Recognition service.")
        return None

# Function to get a response from GPT-Neo
def get_response_from_llm(text):
    try:
        # Generate a response using GPT-Neo
        response = generator(text, max_length=150, num_return_sequences=1)
        return response[0]['generated_text']
    except Exception as e:
        print(f"Error with the model generation: {e}")
        return "Sorry, I couldn't generate a response."

# Function to output text using Text-to-Speech
def speak_out_loud(text):
    engine.say(text)
    engine.runAndWait()

def main():
    while True:
        # Listen for speech input
        user_input = listen_for_audio()
        
        if user_input:
            # Get response from LLM
            response = get_response_from_llm(user_input)
            # Speak out the response
            speak_out_loud(response)
        time.sleep(1)  # Add a small delay to avoid overwhelming the system

if __name__ == "__main__":
    main()
