n = int(input())
blocks = [int(input()) for _ in range(n)]

end_index = n


def delete_block(s, e):
    global end_index

    temp_arr = []

    for i in range(end_index):
        if i < s or i > e:
            temp_arr.append(blocks[i])
        
        end_index = len(temp_arr)

        for i in range(end_index):
            blocks[i] = temp_arr[i]


for _ in range(2):
    s, e = map(int, input().split()) 
    s -= 1
    e -= 1
    delete_block(s, e)

print(end_index)
for i in range(end_index):
    print(blocks[i])