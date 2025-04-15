# test 1
def create_number_file(filename, num_lines):
    """Creates a text file with numbers from 1 to num_lines, each on a new line.

    Args:
        filename (str): The name of the file to create.
        num_lines (int): The number of lines (and numbers) to write to the file.
    """
    with open(filename, 'w') as file:
        for i in range(1, num_lines + 1):
            file.write(str(i) + '\n')

# Example usage:
filename = "tests/numbers.txt"
num_lines = 25
create_number_file(filename, num_lines)
