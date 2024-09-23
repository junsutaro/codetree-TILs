[x, y] = map(int ,input().split());

ans = 0
for i in range(x, y+1):

    digits = list(map(int, str(i)))
    digit_count = [0] * 10

    for elem in digits:
        digit_count[elem] += 1

    non_zero_counts = [cnt for cnt in digit_count if cnt > 0]

    if len(non_zero_counts) == 2: 
        
        if sorted(non_zero_counts) == [1, len(digits) - 1]:
            ans += 1

    

print(ans)