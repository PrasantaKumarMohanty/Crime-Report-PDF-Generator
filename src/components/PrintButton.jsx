// src/PrintButton.js
import React from 'react';
import html2pdf from 'html2pdf.js';

const PrintButton = () => {
    const handleClick = () => {
        const input = document.getElementById('root');
        const clonedInput = input.cloneNode(true);
        const printButton = clonedInput.querySelector('#print-button');
        if (printButton) {
            printButton.remove();
        }

        html2pdf(clonedInput);
    }

    return (
        <div id="print-button" className="w-full flex justify-center items-center flex-col">
            <div className="text-lg font-bold mt-4">
                Click on this print button, you will get this report below with PDF.
            </div>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-28 py-2 flex justify-center items-center rounded-full my-6">
                Print
            </button>
        </div>
    )

}

export default PrintButton;
