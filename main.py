import re
import csv
import numpy as np
import random
import matplotlib.pyplot as plt 

bingo_phrases = []
with open("input2.txt", "r") as file:
    for line in file:

        stripped_line = re.sub(r"\d+\.", "", line).strip()[:-1]
        bingo_phrases.append(stripped_line)
    

print(bingo_phrases)

# remove 5 randomly
while(len(bingo_phrases) > 25):
    to_remove = random.choice(bingo_phrases)
    bingo_phrases.remove(to_remove)

bingo_phrases[12] = 'FREE SPACE'

# convert to 5x5 array
arr = np.array(bingo_phrases)
arr_reshape = arr.reshape(5,5)
data = arr_reshape.tolist()

#define figure and axes
fig, ax = plt.subplots()
# Add a table at the bottom of the axes 
table = plt.table(cellText=data,
                      loc='center') 
#modify table
table.set_fontsize(50)
table.scale(1,4)
ax.axis('off')

#display table
plt.show()

