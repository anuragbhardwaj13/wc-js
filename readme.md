# wc – word, line, character, and byte count.

This is a Node.js script designed to provide various statistics about a text file, such as the number of lines, words, characters, and the file size in bytes. It offers a simple CLI (Command-Line Interface) to input commands and flags to specify what statistics to retrieve.

## Features

- Count the number of lines in a file.
- Count the number of words in a file.
- Calculate the file size in bytes.
- Count the number of characters in a file.

## Prerequisites

Before you run this utility, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Usage

To use this utility, navigate to the directory containing the script and run it using the `node` command followed by the script name and the necessary arguments.

```
node index.js [options] <filename>
```

### Arguments

- `filename`: The name of the file for which statistics are to be generated. This is a required argument.

### Options

- `-c`: Display the file size in bytes.
- `-l`: Display the number of lines in the file.
- `-m`: Display the number of characters in the file.
- `-w`: Display the number of words in the file.

### Examples

1. To get the number of lines, words, and the size of `example.txt`:

   ```
   node index.js example.txt
   ```

2. To get the size of `example.txt` in bytes:

   ```
   node index.js -c example.txt
   ```

3. To get the number of lines in `example.txt`:

   ```
   node index.js -l example.txt
   ```

4. To get the number of characters in `example.txt`:

   ```
   node index.js -m example.txt
   ```

5. To get the number of words in `example.txt`:

   ```
   node index.js -w example.txt
   ```

## Implementation Details

The script uses Node.js's `fs` module to read files and process their content to compute the requested statistics. It provides a flexible command-line interface to specify different statistics through flags. The implementation involves defining functions for each statistic, streamlining file processing and error handling.


### Problem Statement Reference
This is a solution to this coding challenge : [Build Your Own wc Tool](https://codingchallenges.fyi/challenges/challenge-wc)