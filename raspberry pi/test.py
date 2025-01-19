import RPi.GPIO as GPIO
import time

LED_PIN = 17  # GPIO 17
GPIO.setmode(GPIO.BCM)  # Use BCM numbering
GPIO.setup(LED_PIN, GPIO.OUT)  # Set LED_PIN as an output pin

try:
    print("Turning on the LED...")
    GPIO.output(LED_PIN, GPIO.HIGH)  # Turn on the LED
    time.sleep(5)  # Keep the LED on for 5 seconds
    print("Turning off the LED...")
    GPIO.output(LED_PIN, GPIO.LOW)  # Turn off the LED
except KeyboardInterrupt:
    print("Exiting...")
finally:
    GPIO.cleanup()  # Clean up GPIO settings