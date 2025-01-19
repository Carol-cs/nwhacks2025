import time
import max30100

def getHeartrate():
    # Initialize MAX30100
    mx30 = max30100.MAX30100()

    # Enable SpO2 mode
    mx30.enable_spo2()
    print("SpO2 mode enabled")

    # Wait for the sensor to stabilize
    time.sleep(1)

    # Switch to Heart Rate mode after enabling SpO2 mode
    mx30.set_mode(max30100.MODE_HR)
    print("Heart Rate mode enabled")

    print("Reading MAX30100 sensor data...")

    try:
        while True:
            # Read multiple samples
            samples = 10
            heart_rate_data = []
            spo2_data = []

            for _ in range(samples):
                # Read data from the sensor
                mx30.read_sensor()

                # Collect IR (heart rate) and RED (SpO2) data
                heart_rate_data.append(mx30.ir)
                spo2_data.append(mx30.red)

                # Wait a short time before next reading
                time.sleep(0.1)

            # Calculate the average heart rate and SpO2 from the samples
            avg_heart_rate = sum(heart_rate_data) / len(heart_rate_data)
            avg_spo2 = sum(spo2_data) / len(spo2_data)

            print(f"Heart Rate (IR): {avg_heart_rate}, SpO2 (RED): {avg_spo2}")

            # Return the average heart rate and SpO2
            return avg_heart_rate, avg_spo2

    except KeyboardInterrupt:
        print("Exiting...")
    finally:
        mx30.reset()  # Reset the sensor

# Example usage of the function
heart_rate, spo2 = getHeartrate()
print(f"Final Heart Rate: {heart_rate}, Final SpO2: {spo2}")
