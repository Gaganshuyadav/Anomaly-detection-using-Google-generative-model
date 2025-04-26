

export default function Info(){

    return(
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg p-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h1>
          <p className="text-gray-700 mb-4">
            This project is a state-of-the-art anomaly detection system designed to analyze textual data using advanced deep learning techniques. It provides an intuitive and interactive platform for users to input data, analyze anomalies, and gain insights through real-time visualizations and feedback.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Input multiple text samples for anomaly detection with ease.</li>
            <li>Utilizes BERT-based deep learning models for accurate text classification.</li>
            <li>Highlights anomalous data points and provides detailed explanations for better understanding.</li>
            <li>Interactive UI with real-time feedback, making it user-friendly and efficient.</li>
            <li>Seamless integration with Google Generative AI for advanced text analysis and insights.</li>
            <li>Customizable test cases to evaluate and refine the anomaly detection process.</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Technology Stack:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Frontend:</strong> React, TypeScript, TailwindCSS, Material-UI for a modern and responsive UI.</li>
            <li><strong>Backend:</strong> Node.js (Express) for API handling and Python (Transformers, PyTorch) for machine learning.</li>
            <li><strong>Machine Learning:</strong> BERT for sequence classification and anomaly detection.</li>
            <li><strong>Visualization:</strong> Recharts for dynamic and interactive anomaly score graphs.</li>
            <li><strong>State Management:</strong> Redux for efficient state handling across the application.</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Detecting anomalies in textual data for academic research or business applications.</li>
            <li>Analyzing customer feedback to identify outliers or unusual patterns.</li>
            <li>Monitoring social media content for anomalies in sentiment or behavior.</li>
            <li>Enhancing data quality by identifying and addressing anomalous entries.</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Future Enhancements:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Adding support for multilingual text analysis.</li>
            <li>Incorporating additional machine learning models for improved accuracy.</li>
            <li>Expanding visualization options for deeper insights.</li>
            <li>Enabling export of analysis results in various formats (e.g., CSV, PDF).</li>
          </ul>
        </div>
    )
}