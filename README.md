# IP Address Tracker

This simple web application allows users to enter an IP address and receive detailed information about its location, ISP, and other relevant data. This project uses HTML, CSS with Tailwind, and JavaScript to create a responsive and interactive user interface.

## Features

- **Search Functionality:** Users can enter any IP address in the search bar to find its details.
- **Mock API:** A simulated API response provides information based on the entered IP address, mimicking real-world geolocation services.
- **Responsive Design:** Built with Tailwind CSS for a modern, responsive layout that works across various devices.
- **User Interface:** Clean and intuitive UI with loading indicators, error messages, and information display in a grid layout.
- **Initial Load:** Upon loading, the app fetches and displays information for a default IP address (8.8.8.8).

## Project Structure

```
/ip-address-tracker
├── index.html
├── styles.css
└── script.js
```

## Getting Started

### Prerequisites

- Basic understanding of HTML, CSS, and JavaScript.
- A modern web browser to run the application.
- (Optional) A local server for development (e.g., `python -m http.server` or Node.js with `http-server`).

### Setup

1. **Clone or Download the Repository:**
   - If you're using Git, clone this repository to your local machine:
     ```bash
     git clone [repository-url]
     ```
   - Alternatively, download the zip file and extract it.

2. **Open the Project:**
   - Navigate to the directory where you've cloned or extracted the project.

3. **Running the Application:**
   - Simply open `index.html` in your web browser. For a better development experience, you might want to use a local server to avoid CORS issues or to simulate a server environment.

### Using Tailwind CSS

This project utilizes Tailwind CSS for styling. If you're developing this project further or wish to see live changes:

- **Using CDN**: The project currently includes Tailwind CSS via a CDN link in `index.html`. This is the simplest way to get started.
- **Local Tailwind Setup**: For local development, you might want to set up Tailwind CSS in your project. Follow Tailwind's [installation guide](https://tailwindcss.com/docs/installation) for more detailed instructions.

## Usage

- **Search for an IP Address:** Enter an IP address in the search input and click the "Search" button or press Enter.
- **View Results:** Results will be displayed in a grid format below the search bar, including details like IP type, country, region, city, etc.
- **Error Handling:** If the IP address is invalid or no data is found, an error message will be shown.

## Development Notes

- **Mock API**: The `mockFetchIpData` function in `script.js` simulates an API call. For a production app, you would replace this with actual API calls to services like IPInfo or IP-API.
- **Enhancements**: For future development, consider adding:
  - Real-time map integration using services like Google Maps or Leaflet.
  - Error logging.
  - User input validation for IP addresses.

## Contributing

Feel free to fork this project, make improvements, or add features. If you have any suggestions or find bugs, please open an issue or submit a pull request.

## License

This project is open-sourced under the [MIT license](LICENSE).

---

Enjoy tracking IP addresses with this simple yet effective tool! If you have any questions or need support, don't hesitate to reach out.
