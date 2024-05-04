# Numerical to Roman Converter

This project is a simple JavaScript application that converts numerical values to Roman numerals.

## How it Works

The converter takes a numerical input and generates the corresponding Roman numeral representation. It follows the rules of Roman numeral conversion, with special consideration for numbers up to 3999.

## Implementation

The main logic of the converter is implemented in JavaScript. Here's an overview of the key components:

- **printRomanNumber**: Function to generate repeated instances of a Roman numeral symbol.
- **finalResult**: Function to determine the Roman numeral representation for individual digits based on their position (ones, tens, hundreds, etc.).
- **lastResult**: Function to assemble the complete Roman numeral representation for the input number.
- **Event Listener**: Listens for a button click to trigger the conversion process.

## Usage

1. Enter a numerical value in the input field.
2. Click the "Convert" button to generate the corresponding Roman numeral.
3. The converted Roman numeral will be displayed below the input field.

## Limitations

- The converter supports numerical values up to 3999. Numbers beyond this range are not supported.

## Technologies Used

- HTML
- CSS
- JavaScript

## Author

Mehedi Nayeem
