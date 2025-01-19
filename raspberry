import speech_recognition as sr

def recognize_speech_from_mic():
    # Initialize recognizer
    recognizer = sr.Recognizer()

    # Use the microphone as source for input
    with sr.Microphone() as source:
        print("Please speak something...")
        # Adjust the recognizer sensitivity to ambient noise
        recognizer.adjust_for_ambient_noise(source)
        # Listen for the first phrase and extract it into audio data
        audio_data = recognizer.listen(source)
        print("Recognizing...")

        try:
            # Recognize speech using Google Web Speech API
            text = recognizer.recognize_google(audio_data)
            print("You said: " + text)
            return text
        except sr.UnknownValueError:
            print("Google Web Speech API could not understand audio")
            return None
        except sr.RequestError as e:
            print("Could not request results from Google Web Speech API; {0}".format(e))
            return None

if __name__ == "__main__":
    recognize_speech_from_mic()