import React from 'react';
import './Resume.css';

// Resume page: displays resume preview with download button
export default function ResumePage() {
  // Handle resume download - now links to actual PDF
  const handleDownload = () => {
    // Create a link to download the actual PDF file
    const link = document.createElement('a');
    link.href = '/files/Caleb_Pham_Sophmore_Resume.pdf';
    link.download = 'Caleb_Pham_Sophmore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <button className="download-button" onClick={handleDownload}>
            Download Resume
          </button>
        </div>
        
        <div className="resume-preview">
          <div className="resume-content">
            {/* PDF Preview */}
            <iframe
              src="/files/Caleb_Pham_Sophmore_Resume.pdf"
              className="pdf-preview"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 